class Avatar extends HTMLElement {
  connectedCallback() {
    this.user = this.getAttribute('user');
    this.src=this.getAttribute('src');
    if (this.src) {
      this.innerHTML = `<img src=${this.src} style='width: ${this.getAttribute("size")||100}px; border-radius: 50%' alt="${this.user}">`
    } else {
      this.innerHTML = `<div style='width: ${this.getAttribute("size")||100}px;
                                    height: ${this.getAttribute("size")||100}px;
                                    border-radius: 50%;
                                    background-color: ${this.getAttribute("color") || "blue"};
                                    color: white;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    font-size: 40px;
                                    font-family: sans-serif;
                                    font-weight: 700'>${this.user.split(' ').map(elem => elem[0]).join('').toUpperCase()}</div>`
    }   
  }
}

customElements.define('avatar-constructor', Avatar);