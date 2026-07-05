---
layout: home

hero:
  name: "The Ligare Programming Language"
  text: ""
  tagline: Wellcome to the Ligare Programming Language
  actions:
    - theme: brand
      text: Begin
      link: /docs/start
    - theme: alt
      text: See on github
      link: https://github.com/ligare-lang/ligare

features:
  - title: Everything is a constraint.
    details: Types, proofs, and contracts are one thing.
  - title: Dependent types with zero cost.
    details: Refinements and invariants compile to nothing.
  - title: Proofs you don't have to write.
    details: The compiler does the obvious ones. You stay in control.
  - title: C where you need it.
    details: Direct FFI, custom allocators, no runtime. Build anything from kernels to compilers.

---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
