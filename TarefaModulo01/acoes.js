class linkAcao extends HTMLElement {
 
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const icon = document.createElement('div')
        
        const share = document.createElement('img');
        share.src = 'imgs/share.svg';
        share.height = '18';
        share.alt = "Compartilhar";
        share.title = "Compartilhar";
    
        const download = document.createElement('img');
        download.src = 'imgs/download.svg';
        download.height = '18';
        download.alt = "Download";
        download.title = "Download";

        const print = document.createElement('img');
        print.src = 'imgs/print.svg';
        print.height = '18';
        print.alt = "Imprimir";
        print.title = "Imprimir";

        const tipo = this.getAttribute('icon');
        
        if(tipo == "share"){
            icon.appendChild(share);
            icon.setAttribute('class', 'icon');
        }
        else if(tipo == "download"){
            icon.appendChild(download);
            icon.setAttribute('class', 'icon');
        }
        else if(tipo == "print"){
            icon.appendChild(print);
            icon.setAttribute('class', 'icon');
        }
        else{
            icon.setAttribute('class', 'ausente');
        }

        const style = document.createElement('style');
        style.textContent = `

        .icon{
            margin-left: 5px;
            margin-right: 5px;
        }
        .ausente{
            display:hidden;
            
        }
   
    `
        shadow.appendChild(style)
        shadow.appendChild(icon);

    }
}
customElements.define('link-acao', linkAcao);