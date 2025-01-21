class ModalDialog extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});

        const buttonElement = document.createElement('button');
        buttonElement.classList.add('buttonElement-modal');
        buttonElement.textContent = this.textContent;
        buttonElement.textContent = this.getAttribute('label') || 'Modal';

        const styleButton = document.createElement('style');
        styleButton.textContent = `
            .buttonElement-modal {
                cursor: pointer;
                background-color: green;
            }
        `;

        buttonElement.addEventListener('click', () => {
            alert('hi');
        });
        
        this.shadowRoot.append(styleButton, buttonElement);
    }
}
customElements.define('custom-modal', ModalDialog);