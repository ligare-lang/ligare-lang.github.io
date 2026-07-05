# Terms and Constraints

## Terms

In Ligare, terms are everything.
- `1` is a term.
- `"hello"` is a term.
- `fun x => x + 1` is a term.
- `int` is a term.
- `x >= 0` is a term.
- Proofs are terms.

There are no types and values, no logic and calculations. There are only terms.

## Universes

In Ligare, every term belongs to a universe.
- `1` belongs to the `data` universe.
- `x >= 0` belongs to the `prop` universe.
- `by auto` belongs to the `proof` universe.

Apart from theses, there is the `theorem` universe. 
Terms representing propositions in this universe are ensured to be true.

Every term carries a universe level.
- `1` has level 0.
- `x + 1` has level 1.
- `fun x => x + 1` has level 2.

Levels are used to avoid Russell's paradox.

## Constraints
A term can be constrained by another term.
- `1 : int` means that 1 is a int.
- `1 : int where (x => x >= 0)` means that 1 is a int such that `1 >= 0`.

Contraints replace types in traditional type systems. 
But it is also a term, which can also be constrained by another term.
- `int : prop` means that `int` is a proposition.
- `data : prop` means that `data` is a proposition.
