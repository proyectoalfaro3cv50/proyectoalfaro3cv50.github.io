class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Alfar Flores Luis Fernando.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
