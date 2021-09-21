# fp-ts-style

[![Test](http:///actions/workflows/build.yml/badge.svg)](http:///actions/workflows/build.yml)

[API Docs](http://)

---

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->

- [Install](#install)
- [Example](#example)

<!-- AUTO-GENERATED-CONTENT:END -->

## Install

Uses `fp-ts` as a peer dependency.

```bash
yarn add fp-ts fp-ts-style
```

or

```bash
npm install fp-ts fp-ts-style
```

## Example

```ts
import { createStyle, rem } from 'fp-ts-style'
const { beginStyle, padding, gap } = createStyle() // Configure here.

// { gap: '0.5rem', paddingBottom:  '1rem'}
pipe(beginStyle, padding('bottom')(rem(1)), gap(rem(0.5)))
```
