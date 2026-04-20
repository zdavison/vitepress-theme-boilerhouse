# Components

A visual smoke test of every built-in VitePress component with the Boilerhouse skin applied.

## Callouts

::: info
An **info** callout — note-blue left border.
:::

::: tip
A **tip** callout — teal accent left border.
:::

::: warning
A **warning** callout — yellow left border.
:::

::: danger
A **danger** callout — red left border.
:::

::: details
A **details** dropdown sits on a surface-1 panel.
:::

## Code

Inline `const x = 1` inside a paragraph, and a block:

```ts
import Theme from 'vitepress-theme-boilerhouse'

export default Theme
```

Grouped:

::: code-group

```ts [theme.ts]
import Theme from 'vitepress-theme-boilerhouse'
export default Theme
```

```sh [install.sh]
npm install vitepress-theme-boilerhouse
```

:::

## Table

| Status | Symbol | Color |
| --- | --- | --- |
| Running | `●` | green |
| Pending | `◔` | yellow |
| Failed | `✕` | red |
| Unknown | `◑` | orange |

## Blockquote

> Multi-tenant container orchestration for AI agents and SaaS products.

## Buttons (via markdown links in a home hero)

Hero buttons live on the landing page — head back to [home](/) to see them.
