---
layout: post
title: "Syntax Highlighting Test"
date: 2026-04-05 23:30:00 +0530
categories: [build-log, testing]
---

This post is a quick check for fenced-code syntax highlighting using Rust.

Inline code should look like this: `let retries = 3;`.

```rust
use std::collections::HashMap;

#[derive(Debug, Clone)]
struct Player {
    id: u64,
    chips: u64,
}
//Hi

fn settle_round(pot: u64, winners: &[u64], balances: &mut HashMap<u64, u64>) {
    if winners.is_empty() {
        return;
    }

    let share = pot / winners.len() as u64;
    for winner in winners {
        let entry = balances.entry(*winner).or_insert(0);
        *entry += share;
    }
}

fn main() {
    let mut balances = HashMap::from([(1, 100_u64), (2, 150_u64), (3, 80_u64)]);
    settle_round(90, &[2, 3], &mut balances);
    println!("{:?}", balances);
}
```

Expected: keywords, types, strings, macros, and comments are colorized.
