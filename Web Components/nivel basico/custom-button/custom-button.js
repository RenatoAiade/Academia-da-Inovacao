//Criação da Classe para Button
class ButtonComponent extends HTMLElement {
    constructor() {
        super();

        //criação do shadow DOM
        const shadow = this.attachShadow({mode: 'open'}); 
        
        //Criação do botão
        const button = document.createElement('button') ;
        button.classList.add('button');
        button.textContent = this.textContent;

        //Definindo o texto do botão com base no atributo label
        button.textContent = this.getAttribute('label') || 'Clique aqui';

        //Criação do estilo
        const styleButton = document.createElement('style');
            styleButton.textContent = `
                .button {
                    background-color: red;
                    color: white;
                    border-radius: 5px;
                    border: none;
                    padding: 5px 5px;
                    cursor: pointer;

                }
            `

        button.addEventListener('click', () => {
            console.log('Desafio 2 do nível básico concluído!');
        })

        //Adicionando elementos ao shadow DOM
        shadow.appendChild(button);
        shadow.appendChild(styleButton);
    }
}

//Definição do novo elemento
customElements.define('custom-button', ButtonComponent);