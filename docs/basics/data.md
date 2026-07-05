# Data and Functions

## Basic Data Contraints
There are many builtin data types in std.

### Numbers
Here is a table of the builtin numeric types:

| Type | Description |
|------|-------------|
| `int` | Integer type |
| `Nat` | Natural number type, based on inductive types |
| `i8` | Signed 8-bit integer type |
| `i16` | Signed 16-bit integer type |
| `i32` | Signed 32-bit integer type |
| `i64` | Signed 64-bit integer type |
| `u8` | Unsigned 8-bit integer type |
| `u16` | Unsigned 16-bit integer type |
| `u32` | Unsigned 32-bit integer type |
| `u64` | Unsigned 64-bit integer type |

Note that Nat is based on inductive types, so you can write Succ n to represent n + 1. \
You will learn more details about inductive types later.

### String

Here is a table of the builtin string types:

| Type | Description |
|------|-------------|
| `str` | String type |

`str` is automatically managed by the standard library. \
Usually, when you write something like `"hello"`, the compiler will allocate it on the stack by compiling
it into a local variable in C functions.
But when you concat two dynamic strings, the compiler will allocate the result on the heap.

## Functions

Ligare supports lambda expressions. \
Here is an example of a lambda expression:

```ligare
fun (a b : int) => a + b
```

Note that lambda expressions like `\x. x` is equivalent to `fun x => x`, and it is
deperated. For newer Ligare users, use the `fun` grammar instead.

You can also define functions using the `def` keyword.
``` ligare
def add (a b : int) := a + b
```
This defines a function `add` and inserts it into the global namespace.

Note that the constraint of the return value can depend on the parameters, like this below:
```ligare
def increase (a : int) : int where (x => x >= a) := a + 1
```

Currying is deeply supported by Ligare, so you can write something like this:
```ligare
def add (a b : int) := a + b
def increase := add 1
```

### Implicit Arguments

Implicit arguments are not to be passed explicitly to the function, but are inferred from the context. \
You will learn about detailed usage of implicit arguments later.
