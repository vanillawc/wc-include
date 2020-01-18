[![GitHub Releases](https://img.shields.io/github/v/release/vanillawc/wc-include.svg)](https://github.com/vanillawc/wc-include/releases)
[![NPM Release](https://badgen.net/npm/v/@vanillawc/wc-include)](https://www.npmjs.com/package/@vanillawc/wc-include)
[![Downloads](https://badgen.net/npm/dt/@vanillawc/wc-include)](https://www.npmjs.com/package/@vanillawc/wc-include)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/vanillawc/wc-include/master/LICENSE)
[![Published on WebComponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/vanillawc/wc-include)
[![Latest Status](https://github.com/vanillawc/wc-include/workflows/Latest/badge.svg)](https://github.com/vanillawc/wc-include/actions)
[![Release Status](https://github.com/vanillawc/wc-include/workflows/Release/badge.svg)](https://github.com/vanillawc/wc-include/actions)

A Vanilla Web Component for including external media, like an iFrame but better

 <!-- TODO: Add video graphic here -->

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
