<p align="center">
	<img src="logo-team-21.png" width="40%"/>
</p>

# GUIAS DE USO DE WEBPACK

## INICIO DE REPOSITORIO

<!-- Acciones -->

### Acciones

- Creamos y accedemos a carpeta WebPack
- Creamos Estructura de Carpetas
- Inicializamos Git
- Inicializamos Npm
- Configuramos Package.json
- Creamos y adaptamos .gitignore

- Commit

<!-- Acciones -->

<!-- Command -->

### Command

```
mkdir WebPack && cd WebPack
git init
npm init -y

git add .
git commit -m "Inicio de Repositorio"
```

<!-- Command -->

---

## INSTALACION DE WEBPACK

<!-- Acciones -->

### Acciones

- Instalamos Webpack

<!-- Acciones -->

<!-- Command -->

### Command

```
npm i -D webpack@latest
_npm i -D -E webpack_
_npm install --save-dev --save-exact webpack_
npm i -D webpack-cli@latest
npm i -D webpack-dev-server


_npx webpack --entry ./index.js --output ./bundle.js --mode development_

git add .
git commit -m "Instalacion de WebPack"

```

<!-- Command -->

---

## LOADER PLUGINS

<!-- Acciones -->

### Acciones

- Instalamos Babel

- Instalamos Sass
- Instalamos Css
- Instalamos Stylus

- Instalamos Bootstrap
- Instalamos @Fontawesome free

- Instalamos plugins anexos

**_Core_**

- @babel/core
- node-sass

**_Loader_**

- babel-loader _reconoce e interpreta archivos de babel_
- html-loader _reconoce e interpreta html_
- Css-loader _reconoce e interpreta css_
- Style-loader _injecta css dentro de html_
- sass-loader _reconoce e interpreta sass_

**_Instalamos Plugin_**

- @babel/polyfill
- @babel/preset-env
- mini-css-extract-plugin _injecta css dentro de html_
- html-webpack-plugin _injecta el vinculo a css dentro de html_

<!-- Acciones -->

<!-- Command -->

### Command

```
npm i -D @babel/core
npm i -D babel-loader
npm i -D html-loader
npm i -D @babel/polyfill
npm i -D @babel/preset-env
*npm i -D @babel/core babel-loader html-loader @babel/polyfill @babel/preset-env*

npm i -D css-loader
npm i -D sass-loader
npm i -D node-sass
npm i -D style-loader
*npm i -D css-loader sass-loader node-sass style-loader*

npm i -D html-webpack-plugin
npm i -D bootstrap@latest
npm i -D @fortawesome/fontawesome-free
*npm i -D html-webpack-plugin bootstrap@latest @fortawesome/fontawesome-free*

npm i -D mini-css-extract-plugin
npm i -D file-loader
npm i -D babel-minify-webpack-plugin
npm i -D copy-webpack-plugin
npm i -D optimize-css-assets-webpack-plugin
npm i -D clean-webpack-plugin
*npm i -D mini-css-extract-plugin file-loader babel-minify-webpack-plugin copy-webpack-plugin optimize-css-assets-webpack-plugin clean-webpack-plugin*

*npm i -D @babel/core babel-loader html-loader @babel/polyfill @babel/preset-env html-webpack-plugin bootstrap@latest @fortawesome/fontawesome-free mini-css-extract-plugin @fortawesome/fontawesome-free file-loader babel-minify-webpack-plugin copy-webpack-plugin optimize-css-assets-webpack-plugin clean-webpack-plugin*

git add .
git commit -m "Loader Plugins"

```

<!-- Command -->

---
