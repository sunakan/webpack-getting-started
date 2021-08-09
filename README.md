# WebpackのGetting Started

Babelは無し!!

[Getting Started](https://webpack.js.org/guides/getting-started/)

## バンドル!!(`rails assets:precompile` 的な)

```
$ npx webpack --mode=development --config ./webpack.config.js
$ open ./dist/index.html
```

## メモ

> Note that webpack will not alter any code other than import and export statements. 

Webpackはimport/export構文しかコードを変更しない

> If you are using other ES2015 features, make sure to use a transpiler such as Babel or Bublé via webpack's loader system.


他のES2015以降コードをトランスパイルしたい場合、webpackのローダーシステムを通して、babel等のトランスパイラを使う必要がある

#### トランスパイラを使ったローダー例

[https://webpack.js.org/loaders/#transpiling](https://webpack.js.org/loaders/#transpiling)

#### webpackのローダーとは

[https://webpack.js.org/concepts/loaders/](https://webpack.js.org/concepts/loaders/)

> Loaders can transform files from a different language (like TypeScript) to JavaScript or load inline images as data URLs.
> Loaders even allow you to do things like import CSS files directly from your JavaScript modules!


ローダは異なる言語(TypeScriptやElm)のファイルをJSにトランスパイルしたり、jsのモジュールから直接CSSファイルを読み込むことも可能
