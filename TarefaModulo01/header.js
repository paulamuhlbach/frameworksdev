class CustomHeader extends HTMLElement {
 
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const containerHeader = document.createElement('div');
        containerHeader.setAttribute('class', 'container-header');

        const logo = document.createElement('img');
        logo.src = 'imgs/unisinos-logo.svg';
        logo.width = 200;
        logo.alt = "Logo da unisinos";

        const disciplina = document.createElement('p');
        disciplina.innerText = this.getAttribute('disciplina');
        disciplina.setAttribute('class', 'txt-disciplina');

        const h1= document.createElement('h1');
        h1.innerText = this.getAttribute('titulo');
        h1.setAttribute('class', 'titulo-pagina');

        const infos = document.createElement('div');
        infos.textContent = '';
        infos.setAttribute('class', 'container-infos');


        const h4= document.createElement('h4');
        h4.innerText = this.getAttribute('aluno');
        h4.setAttribute('class', 'nome-aluno');

        shadow.appendChild(containerHeader);
        containerHeader.appendChild(logo);
        containerHeader.appendChild(h1);
        containerHeader.appendChild(infos);
        infos.appendChild(h4);
        infos.appendChild(disciplina);



        const style = document.createElement('style')

        style.textContent = `

        .container-header{
            max-width: 1284px;
            min-width: 720px;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
        }
        .container-infos{
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .titulo-pagina{
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            color: #4D88A9;
        }
        .nome-aluno{
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            color: #4D88A9;
        }
        .txt-disciplina{
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            line-height: 14px;
            color: #4D88A9;
        }
      
    
            
    `

        shadow.appendChild(style)
       

    }
}
customElements.define('custom-header', CustomHeader);