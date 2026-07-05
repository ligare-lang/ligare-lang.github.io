# Structures

## Basic Usage

Product types are defined using the `struct` keyword.

``` ligare
def Person := struct
  name: str
  age: int
```

This produces a `Person` type with `name` and `age` fields.

You can make a `Person` value like this:
``` ligare
def person := Person.mk "Alice" 30
```

You can access the fields of a `Person` value like this:
``` ligare
def name := person.name
def age := person.age
```

## Struct Methods

All methods with the first EXPLICIT argument are considered struct methods.
``` ligare
def greet(person: Person) := "Hello, " + person.name
def greet_msg : str := (Person.mk "Alice" 30).greet
```

Thanks to currying, you can write something like this:
``` ligare
def greet (person: Person) (age : int) := "Hello, " + person.name
def greet_alice : int -> str := (Person.mk "Alice" 30).greet
def greet_alice_age : str := greet_alice 30
```
