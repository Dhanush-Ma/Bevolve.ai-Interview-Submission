# Unflatten a map

Build a map that contains nested maps from a flatten map.
The keys for each nested map key will be extracted from the flatten map keys delimited with underscore.

Examples:

```json
Input:
{
  "X_a_one": 10,
  "X_a_two": 20,
  "X_b_one": 10,
  "X_b_two": 20,
  "Y_a_one": 10,
  "Y_a_two": 20,
  "Y_b_one": 10,
  "Y_b_two": 20
}

Output:
{
  "X": {
    "a": {
      "one" : 10,
      "two" : 20
    },
    "b": {
      "one" : 10,
      "two" : 20
    }
  },
  {
    "Y": {
      "a": {
        "one" : 10,
        "two" : 20
      },
      "b": {
        "one" : 10,
        "two" : 20
      }
    }
  }
}


Input:
{
  "X_a_one_foo": 10
  "X_a_two_bar": 20
  "X_b_one_foo": 10
  "X_b_two_baz": 20
  "Y_a_one_bar": 10
  "Y_a_two_foo": 20
  "Y_b_one_bar": 10
  "Y_b_two_foo": 20
}

Output:
{
  "X": {
    "a": {
      "one": {
        "foo" : 10
      },
      "two": {
        "bar" : 20
      },
    },
    "b": {
      "one": {
        "foo" : 10
      },
      "two": {
        "baz" : 20
      }
    },
  },
  "Y": {
    "a": {
      "one": {
        "bar" : 10
      },
      "two": {
        "foo" : 20
      },
    },
    "b": {
      "one": {
        "bar" : 10
      },
      "two": {
        "foo" : 20
      }
    }
  }
}
```

Feel free to test your code with more examples and edge cases
