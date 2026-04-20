# Getting started

Install the theme alongside VitePress:

```sh
npm install vitepress vitepress-theme-boilerhouse
```

Wire it up in `.vitepress/theme/index.ts`:

```ts
import Theme from 'vitepress-theme-boilerhouse'

export default Theme
```

And apply the recommended shiki config in `.vitepress/config.ts`:

```ts
import { defineConfig } from 'vitepress'
import { markdown } from 'vitepress-theme-boilerhouse'

export default defineConfig({
  title: 'boilerhouse',
  appearance: 'force-dark',
  markdown,
})
```

::: tip
The theme is dark-only by design — it mirrors the dashboard, which has no light mode. Use `appearance: 'force-dark'` to skip the system-preference check.
:::

## Palette

| Token | Hex | Use |
| --- | --- | --- |
| `surface-0` | `#0D0B14` | page background |
| `surface-1` | `#13111C` | sidebar, code blocks |
| `surface-2` | `#1A1726` | cards, panels |
| `surface-3` | `#221F2E` | hovered / active rows |
| `accent` | `#2EAF8F` | brand / primary actions |
| `accent-bright` | `#3DD9B2` | links, active states |
