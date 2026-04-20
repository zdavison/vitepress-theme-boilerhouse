# vitepress-theme-boilerhouse

A dark VitePress theme that mirrors the Boilerhouse dashboard — same palette, same typography, same rounded-md panels.

## Install

```sh
npm install vitepress vitepress-theme-boilerhouse
```

## Use

`.vitepress/theme/index.ts`:

```ts
import Theme from 'vitepress-theme-boilerhouse'
export default Theme
```

`.vitepress/config.ts`:

```ts
import { defineConfig } from 'vitepress'
import { markdown } from 'vitepress-theme-boilerhouse'

export default defineConfig({
  title: 'boilerhouse',
  appearance: 'force-dark',
  markdown,
})
```

## What you get

- **Dark-only surfaces** — `#0D0B14` → `#2A2738` (same tokens as `apps/dashboard`).
- **Teal accent** — `#2EAF8F` for brand, `#3DD9B2` for links/active states.
- **Inter + Inter Tight + JetBrains Mono** — body, display headings, and code.
- **Rounded-md** (0.375rem) corners on every card, button, code block, and callout.
- **Status-colored callouts** — tip/info/warning/danger match the dashboard's status palette.
- **Appearance toggle hidden** — the dashboard has no light mode, and neither does this.

## Develop

```sh
npm install
npm run dev        # runs the demo at /demo
npm run build      # builds dist/
```

## License

MIT
