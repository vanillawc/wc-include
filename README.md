[![GitHub Releases](https://badgen.net/github/tag/vanillawc/wc-include)](https://github.com/vanillawc/wc-include/releases)
[![NPM Release](https://badgen.net/npm/v/@vanillawc/wc-include)](https://www.npmjs.com/package/@vanillawc/wc-include)
[![Bundlephobia](https://badgen.net/bundlephobia/minzip/@vanillawc/wc-include)](https://bundlephobia.com/result?p=@vanillawc/wc-include)
[![MIT License](https://badgen.net/github/license/vanillawc/wc-include)](https://raw.githubusercontent.com/vanillawc/wc-include/master/LICENSE)
[![Published on WebComponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/vanillawc/wc-include)
[![Latest Status](https://github.com/vanillawc/wc-include/workflows/Latest/badge.svg)](https://github.com/vanillawc/wc-include/actions)
[![Release Status](https://github.com/vanillawc/wc-include/workflows/Release/badge.svg)](https://github.com/vanillawc/wc-include/actions)

A Vanilla Web Component for including external media, like an iFrame but better

-----

## Installation

```sh
npm i @vanillawc/wc-include
```

Then import the `index.js` file at the root of the package.

-----

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

-----

## Demo

### [WC-Include-Demo - WebComponents.dev](https://webcomponents.dev/edit/zNPKE4KD6k8Lz8wVfHne?sv=1&pm=1)
