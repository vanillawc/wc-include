/* eslint no-undef: 0 */
export class WCInclude extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback () {
    if (this.hasAttribute('src')) {
      const src = this.getAttribute('src');
      this.load(src);
    } else {
      throw Error('WCInclude: \'src\' attribute not set');
    }
  }

  load (src) {
    fetch(src)
      .then((response) => response.text())
      .then((contents) => { this.shadowRoot.innerHTML = contents; });
  }
}

customElements.define('wc-include', WCInclude);
