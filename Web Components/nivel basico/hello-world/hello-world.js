//Criação da classe para Hello Word
class FirstComponent extends HTMLElement{  //classe com a extensão
    constructor() {
        super();

        //criação do shadow DOM
        const shadow = this.attachShadow({mode: 'open'}); 

        //Criação da mensagem
        const message = document.createElement('message');
        message.setAttribute('class', 'message');
        message.textContent = 'Olá, Mundo! Eu sou um Web Component.'

        //Criação do estilo
        const style = document.createElement('style');
        style.textContent = `
            .message {
                color: blue;
                font-family: Arial;
                font-size: 1.5rem;
            }
        `

        //Adicionando elementos ao shadow DOM
        shadow.appendChild(message);
        shadow.appendChild(style);
    }
}

//Definição do novo elemento
customElements.define('hello-world', FirstComponent);