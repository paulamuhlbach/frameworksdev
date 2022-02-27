class linkAcao extends HTMLElement {
 
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const icon = document.createElement('div')
        
    
        shadow.appendChild(icon);

        const tipo = this.getAttribute('icon')
        
        if(tipo == "share"){
            icon.setAttribute('class', 'share-icon')
        }
        else if(tipo == "download"){
            icon.setAttribute('class', 'download-icon')
        }
        else if(tipo == "print"){
            icon.setAttribute('class', 'print-icon')
        }
        else{
            icon.setAttribute('class', 'ausente')
        }

        const style = document.createElement('style');

        style.textContent = `

        .share-icon{
            background-image: url(imgs/share.svg);
            height: 18px;
            background-repeat: no-repeat;
        }
        
        .download-icon{
            background-image: url(imgs/download.svg);
            height: 18px;
            background-repeat: no-repeat;
        }
        
        .print-icon{
            background-image: url(imgs/print.svg);
            height: 18px;
            background-repeat: no-repeat;
        }
        .ausente{
            display:hidden;
        }

      
    `       
        shadow.appendChild(style);
       

    }
}
customElements.define('link-acao', linkAcao);