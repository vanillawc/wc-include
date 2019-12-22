/* eslint no-undef: 0 */
export class WCInclude extends HTMLElement {
  static get observedAttributes () {
    return ['src'];
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (!this.__initialized) { return; }
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
  }

  get src () { return this.getAttribute('src'); }
  set src (value) {
    this.setAttribute('src', value);
    this.setSrc();
  }

  constructor () {
    super();
    this.__initialized = false;
  }

  async connectedCallback () {
    if (this.hasAttribute('src')) {
      this.setSrc();
    }
    this.__initialized = true;
  }

  async setSrc () {
    const src = this.getAttribute('src');
    const contents = await this.fetchSrc(src);
    this.innerHTML = contents;
  }

  async fetchSrc (src) {
    const response = await fetch(src);
    return response.text();
  }
}

customElements.define('wc-include', WCInclude);
