<h1 align="center">&lt;wc-include&gt; Include HTML from an External Source</h1>

<div align="center">
  <a href="https://github.com/vanillawc/wc-include/releases"><img src="https://badgen.net/github/tag/vanillawc/wc-include" alt="GitHub Releases"></a>
  <a href="https://www.npmjs.com/package/@vanillawc/wc-include"><img src="https://badgen.net/npm/v/@vanillawc/wc-include" alt="NPM Releases"></a>
  <a href="https://bundlephobia.com/result?p=@vanillawc/wc-include"><img src="https://badgen.net/bundlephobia/minzip/@vanillawc/wc-include" alt="Bundlephobia"></a>
  <a href="https://github.com/vanillawc/wc-include/actions"><img src="https://github.com/vanillawc/wc-include/workflows/Latest/badge.svg" alt="Latest Status"></a>
  <a href="https://github.com/vanillawc/wc-include/actions"><img src="https://github.com/vanillawc/wc-include/workflows/Release/badge.svg" alt="Release Status"></a>

  <a href="https://discord.gg/8ur9M5"><img alt="Discord" src="https://img.shields.io/discord/723296249121603604?color=%23738ADB"></a>
  <a href="https://www.webcomponents.org/element/vanillawc/wc-include"><img src="https://img.shields.io/badge/webcomponents.org-published-blue.svg" alt="Published on WebComponents.org"></a>
</div>

## Installation

*Installation*
```sh
npm i @vanillawc/wc-include
```

*Import from NPM*
```html
<script type="module" src="node_modules/@vanillawc/wc-include/index.js"></script>
```

*Import from CDN*
```html
<script type="module" src="https://cdn.jsdelivr.net/gh/vanillawc/wc-include@1/index.js"></script>
```

## Demo

Try it on [WebComponents.dev](https://webcomponents.dev/edit/zNPKE4KD6k8Lz8wVfHne?sv=1&pm=1)

## Usage

**Attributes**

- shadow - if present the contents are contained in a shadowDOM

### Basic Usage

The `src` attribute imports the contents of the file into the lightDOM.

```html
<wc-include src="./sample.html"></wc-include>
```

### 'shadow' Attribute Usage

When the `shadow` attribute is specified, the imported contents will be encapsulated in a shadowDOM.

```html
<wc-include src="./sample.html" shadow></wc-include>
```

## Contributing

See [CONTRIBUTING.md](https://github.com/vanillawc/vanillawc/blob/main/CONTRIBUTING.md)
