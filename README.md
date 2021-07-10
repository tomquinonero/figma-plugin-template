# Figma Plugin Template

This is a Figma plugin template using rollup and svelte. TS and SCSS support included 🤙

If you are new to Figma plugins, [read my guide about this template](https://tomquinonero.com/blog/write-a-figma-plugin-using-svelte/). It explains how Figma plugin works, and will get you a better understanding of the whole thing.

## Instalation

Clone this repository and remove the `remote` to make it your repository:

```bash
# Clone the repository
git clone git@github.com:tomquinonero/figma-plugin-template.git

# Remove the remote
cd figma-plugin-template
git remote rm origin
```

Or you can just fork it!

## Usage

Launch the development server:

```shell
# yarn
yarn dev

#npm
npm run dev
```

The root component `src/main.svelte` contain an example on how to send messages to `code.ts`.

All the interactions with Figma needs to be in `src/code.ts`.

- [Create your first Figma plugin with Svelte](https://tomquinonero.com/blog/write-a-figma-plugin-using-svelte/)
- [Learn more about svelte](https://svelte.dev/docs)
- [Learn more about Figma plugins](https://www.figma.com/plugin-docs/intro/)

Thank you for passing by ✌
