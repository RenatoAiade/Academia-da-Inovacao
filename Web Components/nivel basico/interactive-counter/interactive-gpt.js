class CounterComponent extends HTMLElement {
    constructor() {
        super();
        
        // Criando o Shadow DOM
        this.attachShadow({ mode: 'open' });

        // Estado inicial do contador
        this.counter = 0;

        // Template com dois botões e contador
        this.shadowRoot.innerHTML = `
            <style>
                button {
                    padding: 10px;
                    font-size: 16px;
                    margin: 5px;
                    cursor: pointer;
                }
                p {
                    font-size: 20px;
                    font-weight: bold;
                }
            </style>
            <p>Contador: <span id="contador">0</span></p>
            <button id="addButton">Adicionar</button>
            <button id="subtractButton">Subtrair</button>
        `;

        // Selecionando os elementos no Shadow DOM
        this.contadorElement = this.shadowRoot.getElementById('contador');
        this.addButton = this.shadowRoot.getElementById('addButton');
        this.subtractButton = this.shadowRoot.getElementById('subtractButton');

        // Adicionando eventos de clique para os botões
        this.addButton.addEventListener('click', () => this.updateCounter(1));
        this.subtractButton.addEventListener('click', () => this.updateCounter(-1));
    }

    // Método para atualizar o contador
    updateCounter(valor) {
        this.counter += valor;
        this.contadorElement.textContent = this.counter;
    }
}

// Definindo o elemento customizado
customElements.define('counter-component', CounterComponent);