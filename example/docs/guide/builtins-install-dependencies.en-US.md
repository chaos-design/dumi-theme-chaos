---
group: Builtins Components
title: InstallDependencies
order: 3
---

The dependent installation component is used to display script installation information. There are three built-in package managers `npm`, `yarn` and `pnpm`. The installation script statements are passed through different prop parameters:

- npm: Show `npm` package manager installation information
- yarn: show `yarn` package manager installation information
- pnpm: show `pnpm` package manager installation information

```md
<InstallDependencies
npm='$ npm install dumi-theme-chaos '
yarn='$ yarn add dumi-theme-chaos'
pnpm='$ pnpm install dumi-theme-chaos '

> </InstallDependencies>
```

You can set the `defaultActiveKey` value to specify the key to initialize the selected panel.

<InstallDependencies 
  npm='$ npm install dumi-theme-chaos ' 
  yarn='$ yarn add dumi-theme-chaos' 
  pnpm='$ pnpm install dumi-theme-chaos ' 
/>
</InstallDependencies>

Only some package managers are shown:

```md
<InstallDependencies 
  npm='$ npm install' 
  yarn='$ yarn'
/>
</InstallDependencies>
```

<InstallDependencies 
  npm='$ npm install' 
  yarn='$ yarn'
/>
</InstallDependencies>
