# Nuxt 3 "redirect in plugin" reproduction demo

## What problem does this demo show?

After all plugins finised their work, nuxt forcefully [navigates](https://github.com/nuxt/nuxt/blob/eac0734a3b064e2e68b32ec54f1ec3a5b7185583/packages/nuxt/src/pages/runtime/plugins/router.ts#L260) user to the page where the app was started, regardingless whether any plugins performed some navigation. Sometimes it is desired to perform navigation during initialization process before all other plugins, e. g. in case of authoring some external module, so it is impossible to  move navigation into some middleware.

## How is it possible to observe the issue?

Launch nuxt dev server, open DevTools console in your browser and go tho the root page.

You will remain on the root page, even though there was a navigation to another page in a plugin.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```
