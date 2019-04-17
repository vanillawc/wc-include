export class WCInclude extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  static get observedAttributes() {
    return ['src'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
  }

  get src() { return this.getAttribute('src'); }
  set src(value) {
    fetch(value)
      .then((response) => response.text())
      .then((contents) => this.shadowRoot.innerHTML = contents);
  }

}

customElements.define('wc-include', WCInclude);
