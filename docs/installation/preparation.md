# Preparation

### Prerequisites
- The Rust toolchain

## Install the compiler
Currently, you can install the compiler and language server
from [github release page](https://github.com/ligare-lang/ligare/releases). \
Or you can build the compiler and the server with the following command
in the root directory of the repository.
```shell
cargo build --release
cargo build -p ligls --release
```
Then you can find the binary files ligls and ligare in target/release.

Note that you need to set LIGARE_STD_PATH as the path of std.
The standard library is already contained in the github releases, 
or you can find it at libs/std in the repository.

## Install a C compiler
You need to install a C compiler to use Ligare's C backend.
Any compiler that supports the C99 standard is supported.

