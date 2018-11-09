
### Simple Electron + React + Typescript + BabylonJS demo

**To run**

1. `git clone`
2. `cd electron-three`
3. `yarn install`
4. `yarn run development`
5. (new tab) `yarn start`

This is a simple demo that I put together ~~over a couple of hours~~ (over more than a couple of hours). ~~It emits some Typescript errors~~. These errors have now been resolved.

~~I'm not sure why the ThreeJS primitives are so blurry -- whenever I've used Three in the past everything has been crisp.~~ Switched to Babylon JS and resolved this anyway.

This is using React, but the actual Babylon scene is separated, since ~~Three + React components can lead to problems down the road~~. React is best for the 2D UI, it's not suitable for the 3D interface as well.

Design is definitely my weak point -- it's something that I am actively working on improving.

Adapted from https://taraksharma.com/setting-up-electron-typescript-react-webpack/ (the original project config).

**Build steps**

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

--> 

###### Babylon JS support

1. https://dev.to/justinctlam/building-a-3d-application-with-electron-and-babylonjs-using-typescript-2g29
2. `yarn add babylonjs@3.1.1`
