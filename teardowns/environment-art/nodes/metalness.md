---
term: Metalness
aka:
  - metallic
  - dielectric mask
kind: knob
plain: "Metalness selects whether a surface behaves as a conductor or a non-metal dielectric. Pure non-metal surfaces use 0, while pure metals use 1."
does: "Keeps the ground's reflected response neutral and keeps its base colour visible."
ask: "Is this pixel exposed metal, or a non-metal coating over metal?"
range: "Use 0 for non-metals and 1 for metals. Intermediate values belong to material transitions or mixed coverage."
trouble: "Accidental metalness makes a non-metal surface reflect more of its environment and show less base colour."
at: [0.9, 0.3, -0.5]
links:
  - {to: albedo, rel: controls}
  - {to: roughness, rel: see also}
sources:
  - work: epic-games-physically-based-materials
    page: "Metallic"
    quote: "In most cases, you should treat Metallic as a binary property in Unreal Engine. For pure surfaces, such as pure metal, pure stone, pure plastic, and so on, you should set Metallic to either 0 or 1, not anything in between."
  - work: epic-games-physically-based-materials
    page: "Metallic"
    quote: "Paint is a nonmetal, so the Metallic value should be 0 in any regions covered by paint. Anywhere the metal panel is visible, the Metalic value should be 1."
  - work: unity-standard-shader
    url: https://docs.unity3d.com/2022.3/Documentation/Manual/StandardShaderMaterialParameterMetallic.html
    page: "Metallic Property"
    quote: "When a surface is more metallic, it reflects the environment more and its albedo colour becomes less visible."
---
