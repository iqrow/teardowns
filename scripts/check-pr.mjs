#!/usr/bin/env node

import { execFileSync } from 'node:child_process'
import { statSync } from 'node:fs'
import path from 'node:path'

// Usage: check-pr.mjs <base> [--maintainer]. A maintainer's pull request may also change files outside teardowns/.
const base = process.argv[2] || 'main'
const maintainer = process.argv.includes('--maintainer')
const baseRef = base.startsWith('origin/') ? base : `origin/${base}`
const maxBytes = 1024 * 1024
const slugPattern = /^[a-z0-9]+(-[a-z0-9]+)*$/
const topLevelFiles = new Set(['teardown.md', 'survey.md', 'log.md'])
const problems = []

let changedFiles
try {
  const output = execFileSync('git', ['diff', '--name-only', `${baseRef}...HEAD`], {
    encoding: 'utf8',
  })
  changedFiles = output.split(/\r?\n/).filter(Boolean)
} catch {
  console.error(`Unable to list changed files against ${baseRef}.`)
  process.exit(1)
}

if (changedFiles.length === 0) {
  console.error(`No changed files found against ${baseRef}.`)
  process.exit(1)
}

const teardowns = new Set()

function fileSize(file) {
  try {
    return statSync(file).size
  } catch {
    for (const ref of [`HEAD:${file}`, `${baseRef}:${file}`]) {
      try {
        return Number(execFileSync('git', ['cat-file', '-s', ref], { encoding: 'utf8' }))
      } catch {
        // A deleted file may not exist at either side of the comparison.
      }
    }
    return null
  }
}

function knownLayout(parts) {
  if (parts.length === 3) return topLevelFiles.has(parts[2])
  if (parts.length !== 4) return false
  const [directory, file] = parts.slice(2)
  return (directory === 'nodes' && file.endsWith('.md'))
    || (directory === 'looks' && file.endsWith('.json'))
    || (directory === 'works' && file.endsWith('.md'))
}

for (const file of changedFiles) {
  const parts = file.split('/')
  if (parts[0] !== 'teardowns' || !parts[1]) {
    if (!maintainer) problems.push(`${file}: file must be inside teardowns/<slug>/.`)
    continue
  }

  const slug = parts[1]
  teardowns.add(slug)

  if (!slugPattern.test(slug)) {
    problems.push(`${file}: teardown slug "${slug}" must match ^[a-z0-9]+(-[a-z0-9]+)*$.`)
  }
  if (file.includes('/raw/')) {
    problems.push(`${file}: raw/ files are not allowed.`)
  }
  if (!knownLayout(parts)) {
    problems.push(`${file}: path is outside the known teardown layout.`)
  }
  const extension = path.extname(file)
  if (extension !== '.md' && extension !== '.json') {
    problems.push(`${file}: file type must be .md or .json.`)
  }

  const size = fileSize(file)
  if (size !== null && size > maxBytes) {
    problems.push(`${file}: file is larger than 1 MB.`)
  }
}

if (teardowns.size > 1) {
  problems.push(`More than one teardown changed: ${[...teardowns].sort().join(', ')}.`)
}

if (problems.length > 0) {
  for (const problem of [...new Set(problems)]) console.error(problem)
  process.exit(1)
}

console.log(teardowns.size ? `Changed teardown: ${[...teardowns][0]}` : 'No teardown changed.')
