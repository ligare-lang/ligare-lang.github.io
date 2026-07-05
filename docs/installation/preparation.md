# Preparation

## Install the compiler
Currently, you need to compile the compiler from source.

### Prerequisites
- The Rust toolchain

### Compilation
Run the following command to compile the compiler.
``` shell
cargo build --release
```
Then compile the language server.
``` shell
cargo build --release --bin ligls
```

## Install a C compiler
You need to install a C compiler to use Ligare's C backend.
Any compiler that supports the C99 standard is supported.
