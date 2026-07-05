# Quick Start

Ligare is a **dependently-typed systems language** that compiles to zero-cost C.  
Its core philosophy: **everything is a term, everything is a constraint.**

## Design

- **Terms and constraints** — no separate type syntax. Types, propositions, contracts, and proofs are all just terms related by constraints.
- **Four universes** — `data` (runtime), `prop` (erased propositions), `theorem` (proven statements), `proof` (evidence). Only `data` survives compilation.
- **Full-spectrum dependent types** — Pi types, refinement types, indexed inductive types. Encode invariants like `nat = data x & x >= 0` or length-indexed `Vec`.
- **Effects as constraints** — `IO` is just another constraint. No monads, no ceremony. Pure functions are statically enforced.
- **Semi-automated proving** — the compiler handles the trivial proofs. You write the interesting ones, only when you want.
- **Meta-programming with `quote`/`splice`** — write tactics and code generators in Ligare itself, executed at compile time.

## Positioning

Ligare is built for **systems programming** — kernels, drivers, embedded devices, compilers, hardware design.  
It gives you:

- C-level performance with zero runtime overhead
- Direct FFI with no wrappers or conversions
- Custom allocators (`#[global_allocator]`)
- A strong static guarantee that your code is correct
