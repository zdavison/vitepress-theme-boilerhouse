/**
 * Recommended VitePress markdown config. Uses a dark shiki theme that pairs
 * with the Boilerhouse dashboard's #0D0B14 surface and #2EAF8F accent.
 *
 * This file is kept separate from index.ts so consumers can import it from
 * their `.vitepress/config.ts` without dragging in Vue/CSS assets (which
 * break Node's config loader).
 */
export const markdown = {
  theme: 'one-dark-pro',
} as const
