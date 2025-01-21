// Criando classe para Contador Interativo
class CounterComponent extends HTMLElement {
    constructor() {
        super();

        // Criação do shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Estilização opcional para melhorar a aparência
        const style = document.createElement('style');
        style.textContent = `
            .number {
                font-size: 20px;
                margin: 10px;
            }
            .button {
                padding: 5px 10px;
                margin: 5px;
                cursor: pointer;
            }
        `;

        // Número inicial com valor 0
        let numberValue = 0; // Valor controlado por essa variável
        const number = document.createElement('div');
        number.classList.add('number');
        number.textContent = numberValue;

        // Botão incrementar
        const increase = document.createElement('button');
        increase.classList.add('button');
        increase.textContent = this.getAttribute('label-increase') || 'Incrementar';

        // Evento do botão incrementar
        increase.addEventListener('click', () => {
            numberValue++;
            number.textContent = numberValue;
        });

        // Botão decrementar
        const decrement = document.createElement('button');
        decrement.classList.add('button');
        decrement.textContent = this.getAttribute('label-decrease') || 'Decrementar';

        // Evento do botão decrementar
        decrement.addEventListener('click', () => {
            numberValue--;
            number.textContent = numberValue;
        });

        // Adicionando elementos ao shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(number);
        shadow.appendChild(increase);
        shadow.appendChild(decrement);
    }
}

// Definição do novo elemento
customElements.define('custom-counter', CounterComponent);
