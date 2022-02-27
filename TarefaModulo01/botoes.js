class CustomButton extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const button = document.createElement('button')
        button.innerText = this.getAttribute('valor')

        const tipo = this.getAttribute('button')
        
        const desabilitar = this.getAttribute('disable')

        if(tipo == 'outline'){
            if(desabilitar == 'S'){
                button.setAttribute('class', 'titulo3 disable2')
            }
            else{ 
                button.setAttribute('class', 'titulo2 outline')
            }
           
        }
        
        else{
            if(desabilitar == 'S'){
                button.setAttribute('class', 'titulo3 disable')
            }
            else{
                button.setAttribute('class', 'titulo default')
            }
        }

        shadow.appendChild(button)

        
        const style = document.createElement('style')

        style.textContent = `

        .titulo{
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 18px;
            color: #FFFFFF;
        }
        .disable{
            background: #F5F5F5;
            border: 1px solid #DFDEDE;
            box-sizing: border-box;
            border-radius: 8px;
            padding: 10px 15px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            
            margin: 4px 2px;
            cursor: not-allowed;
        }
      
        .default{
            background: #4D88A9;
            border: 1px solid #4D88A9;
            box-sizing: border-box;
            border-radius: 8px;
            padding: 10px 15px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            
            margin: 4px 2px;
            cursor: pointer;
          }

        .default:hover{
            background: #6FBBE6;
            border: 1px solid #6FBBE5;
           
        }
        .default:active{
            background: #254D64;
            border: 1px solid #254D64;
           
        }
        .titulo2{
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 18px;
            color: #4D88A9;
        }
        .disable2{
            background: #FFFFFF;
            border: 1px solid #DFDEDE;
            box-sizing: border-box;
            border-radius: 8px;
            padding: 10px 15px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            
            margin: 4px 2px;
            cursor: not-allowed;
        }
        .outline{
            background: #FFFFFF;
            border: 1px solid #4D88A9;
            box-sizing: border-box;
            border-radius: 8px;
            padding: 10px 15px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            
            margin: 4px 2px;
            cursor: pointer;
        }
        .outline:hover{
            background: #DAEFFB;
            border: 1px solid #4D88A9;
           
        }
        .outline:active{
            background: #86CAF0;
            border: 1px solid #4D88A9;
           
        }
        .titulo3{
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 18px;
            color: #C8C8C8;
        }      
            
    `

        shadow.appendChild(style)
       

    }
}
customElements.define('custom-button', CustomButton);