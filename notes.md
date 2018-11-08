

The following instructions will build an Electron + React + Typescript + ThreeJS project. Adapted from https://taraksharma.com/setting-up-electron-typescript-react-webpack/

1. `yarn init`
2. `yarn add -D -E electron`
3. `yarn add -D typescript node-sass webpack webpack-cli html-webpack-plugin ts-loader sass-loader css-loader style-loader file-loader rimraf`
4. `touch tsconfig.json`
5. Edit file
5. `yarn add react react-dom`
6. `yarn add -D @types/react @types/react-dom @types/three`
7. `yarn add three`
8. `mkdir -p src/main`
9. `mkdir -p src/renderer`
10. `mkdir -p dist`
11. `touch src/main/main.ts`
12. `touch src/renderer/index.html`
13. `touch src/renderer/renderer.tsx`
14. `touch src/renderer/styles.scss`
15. `touch src/declarations.d.ts`
16. Edit files
17. Edit package.json
18. `yarn run development`
19. `yarn start`
