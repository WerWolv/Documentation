# random
Library to generate random numbers. Supports various different distribution types.


## Types

### `std::random::Distribution`

Represents the type of distribution to use to generate a random number

```rust
enum Distribution : u8 {
    Bernoulli,
    Binomial,
    Cauchy,
    ChiSquared,
    Exponential,
    ExtremeValue,
    FisherF,
    Gamma,
    Geometric,
    LogNormal,
    NegativeBinomial,
    Normal,
    Poisson,
    StudentT,
    Uniform,
    Weibull
};
```


## Functions

### `std::random::set_seed`

Sets the seed of the random number generator
- `seed`: Seed to use


```rust
fn set_seed(u64 seed);
```

### `std::random::generate_using`

Generates a random number using the given distribution with the given parameters.
The random number generator used internally is C++'s std::mt19937_64 Mersenne Twister implementation.

> **Distributions**
> - `Uniform(min, max) -> i128`
> - `Normal(mean, stddev) -> double`
> - `Exponential(lambda) -> double`
> - `Gamma(alpha, beta) -> double`
> - `Weibull(a, b) -> double`
> - `ExtremeValue(a, b) -> double`
> - `ChiSquared(n) -> double`
> - `Cauchy(a, b) -> double`
> - `FisherF(m, n) -> double`
> - `StudentT(n) -> double`
> - `LogNormal(m, s) -> double`
> - `Bernoulli(p) -> bool`
> - `Binomial(t, p) -> i128`
> - `NegativeBinomial(k, p) -> i128`
> - `Geometric(p) -> i128`
> - `Poisson(mean) -> i128`

- `distribution`: Distribution to use
- `[param1]`: This parameter depends on the type of distribution used. Defaults to 0
- `[param2]`: This parameter depends on the type of distribution used. Defaults to 0


```rust
fn generate_using(std::random::Distribution distribution);
fn generate_using(std::random::Distribution distribution, auto param1);
fn generate_using(std::random::Distribution distribution, auto param1, auto param2);
```

### `std::random::generate`

Generates a uniformly distributed random number between `min` and `max`
- `[min]`: Minimum number. Defaults to 0
- `[max]`: Maximum number. Defaults to `u64_max`


```rust
fn generate();
fn generate(u64 min);
fn generate(u64 min, u64 max);
```

