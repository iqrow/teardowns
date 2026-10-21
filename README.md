# Teardowns

This repository holds community teardowns made with the [teardown skill](https://github.com/iqrow/skills/tree/main/skills/learning/teardown). Each teardown lives in `teardowns/<slug>/`, where `<slug>` is a lowercase kebab-case slug.

The site owner reviews pull requests here. A merged teardown may later be published on [teardownatlas.com](https://teardownatlas.com/) at `https://teardownatlas.com/<slug>/`, with credit to the pull request author. Merging here does not publish a teardown automatically.

## Contribute

1. Install the skills from [iqrow/skills](https://github.com/iqrow/skills). For another agent, run:

   ```sh
   npx skills@latest add iqrow/skills
   ```

2. Run the `teardown` skill on a subject. Build and verify the teardown before you share it.
3. Run `teardown-upload` to prepare a pull request here, or open the pull request by hand. Put the teardown in `teardowns/<slug>/` and leave out `raw/`.

The pull request should include the teardown slug, the prompt that made the teardown, the build result, the verify result, and any open items in `log.md`.

## Review

The owner checks that:

- build and verify pass;
- citations support the claims they cite;
- the teardown contains no offensive or unsafe material;
- the teardown contains no personal details or details from a private project; and
- the pull request contains no `raw/` folder.

The automated check also enforces the teardown layout, slug format, file types, and file size limit, and runs the kit's build check and citation verify.

## Licence

Teardowns in this repository are licensed under [CC BY 4.0](LICENSE). The licence covers the authors' own writing. Quoted and cited source text stays with its owners. See the [full legal code](LICENSE).

## Report a teardown

Report a problem through the [teardown report form](https://github.com/iqrow/teardowns/issues/new?template=report.yml). Include the teardown, a node id or URL, and the reason for the report.
