class CustomBadge extends HTMLElement {
 
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const badge = document.createElement('div')
        badge.innerText = this.getAttribute('valor')

        const tipo = this.getAttribute('badge')

        if(tipo == 'primary'){
            badge.setAttribute('class', 'badge primary')
        }
        else if(tipo == 'secondary'){
            badge.setAttribute('class', 'badge secondary')
        }
        else if(tipo == 'success'){
            badge.setAttribute('class', 'badge success')
        }
        else if(tipo == 'danger'){
            badge.setAttribute('class', 'badge danger')
        }
        else if(tipo == 'warning'){
            badge.setAttribute('class', 'badge warning')
        }
        else{
            badge.setAttribute('class', 'badge light')
        }
        
        shadow.appendChild(badge)

        const style = document.createElement('style')

        style.textContent = `

        .badge{
            border-radius: 4px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 14px;
            display: inline-block;
            text-align: center; 
            width: auto;                   
        }
      
        .primary{
            background: #4D88A9;
            color: #FFFFFF;
            padding: 3px;
        }

        .secondary{
            background: #254D64;
            color: #FFFFFF;
            padding: 3px;
        }

        .success{
            background: #45AF76;
            color: #FFFFFF;
            padding: 3px;
        }

        .danger{
            background: #C22437;
            color: #FFFFFF;
            padding: 3px;
        }

        .warning{
            background: #FBB751;
            color: #254D64;
            padding: 3px;
        }

        .light{
            background: #E8E8E8;
            color: #254D64;
            padding: 3px;
        }
            
    `

        shadow.appendChild(style)
       

    }
}
customElements.define('custom-badge', CustomBadge);