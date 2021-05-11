var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// src/wc-include.js
__markAsModule(exports);
__export(exports, {
  WCInclude: () => WCInclude
});
var WCInclude = class extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.__initialized) {
      return;
    }
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
  }
  get src() {
    return this.getAttribute("src");
  }
  set src(value) {
    this.setAttribute("src", value);
    this.setSrc();
  }
  constructor() {
    super();
    this.__initialized = false;
    this.__element = null;
    const shadow = this.hasAttribute("shadow");
    if (shadow) {
      this.attachShadow({mode: "open"});
    }
    this.__element = shadow ? this.shadowRoot : this;
  }
  async connectedCallback() {
    if (this.hasAttribute("src")) {
      this.setSrc();
    }
    this.__initialized = true;
  }
  async setSrc() {
    const src = this.getAttribute("src");
    const contents = await this.fetchSrc(src);
    this.__element.innerHTML = contents;
  }
  async fetchSrc(src) {
    const response = await fetch(src);
    return response.text();
  }
};
customElements.define("wc-include", WCInclude);
