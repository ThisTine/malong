# JPC website 🎉

design -> [TBA]

staging -> [https://malong.thistine.com](https://malong.thistine.com)

prod -> [https://malonghack.com](https://malonghack.com)

## Development

### Prerequisites 🥹

- If you're using `VScode` 👀
  - Please install the recommend extensions (if you're using vscode you can click `install All` when you first open the project)
    ![Install All](https://i.stack.imgur.com/DrPIB.png)
- If you're using others IDE 🤖, please find alternative extensions of
  - 1. vscode-eslint
  - 2. vscode-tailwindcss
  - 3. esbenp.prettier-vscode
- Install `pnpm` on your local machine

### Development ✍️

- Installing package `pnpm install`
- run project `pnpm dev`

### Project structure 🧱

- All soruce files are localted in `/src` folder
- There is **1 page**
  - `/src/routes/+page.svelte`
- `/src/components` contains all the components
- `/src/lib/translation` contains all the translation files (please add your translation of each module in en,th folder)

### Deployment

We're using `main` as our staging and prod build. so you can merge to main directly and it will build to staging site automatically. for prod, you may need to trigger the build by yourself.
