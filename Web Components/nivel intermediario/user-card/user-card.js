class CardComponent extends HTMLElement { //Cria uma nova classe que estende HTMLElement, ou seja, cria um novo tipo de elemento HTML personalizado.

    //Define os atributos que o componente irá observar. Quando esses atributos mudam, o componente reage.
    static get observedAttributes() {   
        return ['name', 'email', 'image'];
    }

    constructor() { //É o método chamado quando um novo elemento é criado
        super(); //Chama o construtor da classe base (HTMLElement) para que o componente herde o comportamento padrão de um elemento HTML-

        this.attachShadow({mode: 'open'}); //Cria o Shadow DOM para encapsular o HTML, CSS e JS deste componente. O mode: 'open' permite acessar this.shadowRoot externamente, facilitando o desenvolvimento.

        //Criação do Container Principal:
        const card = document.createElement('div'); //Cria um div na variável card que será o container principal do cartão.
        card.classList.add('card'); //Adiciona a classe card para permitir estilização no CSS

        //Imagem de Perfil:
        // this.imageElement é uma propriedade da instância da classe
        // uso do this: o elemento precisa ser acessado ou modificado em vários métodos da classe
        this.imageElement = document.createElement('img'); //Cria um elemento img
        this.imageElement.classList.add('profile-pic'); // Adiciona a classe
        card.appendChild(this.imageElement); //diciona a imagem como filha do div principal (card).

        //Nome de Usuário:
        this.nameElement = document.createElement('h2'); //Cria um elemento h2 para exibir o username
        this.nameElement.classList.add('name'); // Adiciona a classe "name" para permitir estilização.
        card.appendChild(this.nameElement); //Adiciona o nome ao container card.

        //Email do Usuário:
        this.emailElement = document.createElement('p');
        this.emailElement.classList.add('email');
        card.appendChild(this.emailElement);

        //Botão e evento do clique
        this.buttonElement = document.createElement('button'); //Cria o botão
        this.buttonElement.textContent = 'Detalhes'; //Define o texto do botão
        this.buttonElement.addEventListener('click', () => {
            console.log(`Nome: ${this.getAttribute('name')}
            Email: ${this.getAttribute('email')}`);
        })

        card.appendChild(this.buttonElement);
        // .addEventListener() é um método do DOM usado para adicionar um ouvinte de eventos.
        // O evento escutado aqui é o "click": será disparado quando o botão for clicado.
        // () => { ... } (Arrow Function): Essa parte é uma função de callback passada como argumento para o evento click. Ela define o que deve acontecer quando o botão for clicado.

        //Esta é uma template string, reconhecida pelas crases `. Permite interpolar valores diretamente dentro da string usando ${}

        // this.getAttribute('name') obtém o valor do atributo name diretamente no componente HTML.
        // Exemplo: Se você tiver o HTML abaixo:
        // <user-card name="João Silva"></user-card>
        // this.getAttribute('name') retornará "João Silva".

        const style = document.createElement('style');
        

        //Adiciona o style e o card (com todos os seus elementos) ao shadowRoot, garantindo o encapsulamento total.
        this.shadowRoot.append(style, card);

        //O método attributeChangedCallback é chamado automaticamente quando um dos atributos listados em observedAttributes muda. Atualiza o conteúdo de acordo com o novo valor (newValue).
        //O retorno de chamada recebe três argumentos: 1. O nome do atributo que foi alterado. 2.O valor antigo do atributo. 3. O novo valor do atributo.
        // atributeChangedCallback(value, oldValue, newValue) {
        //     switch(value) {
        //         case 'name':
        //             this.nameElement.textContent = newValue;
        //             break;
        //         case 'email':
        //             this.emailElement.textContent = newValue;
        //             break;
        //         case 'image':
        //             this.imageElement.src = newValue;
        //             break;
        //     }
        // }

    }
}

customElements.define('user-card', CardComponent);