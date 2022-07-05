export default class dragAndDrop{

    constructor(containers, moveItem){ 
        this.containers = document.querySelectorAll(containers);
        this.moveItem = document.querySelectorAll(moveItem);
    }
    addEvent(){       
        
        this.containers.forEach(item=> {   
            
            item.addEventListener("drop", ()=>{
                this.drop(event)
            })
            item.addEventListener("dragover", ()=>{
                this.allowDrop(event)
            })
            item.addEventListener("dragleave", ()=>{
                this.OutContent(event)
            })
        })
        
        this.moveItem.forEach(item => {         
            item.setAttribute("draggable", true)
            item.setAttribute("id", this.geraString(6))

            item.addEventListener("dragstart",()=>{
                this.dragStart(event)
            })
        })
    }
    drop(event){
        event.preventDefault()   
        var t = event.dataTransfer.getData("Text")    
        if(t){
            console.log("ja tem")
        }  else{
            console.log("Não tem")
        }
     
       
            event.target.classList.remove("bord");     
            var data = event.dataTransfer.getData("Text");           
            event.target.appendChild(document.getElementById(data));            
        // }else{
        //     console.log("Fora")
        // }

    }
    allowDrop(event) {
        event.preventDefault();
        event.target.classList.add("bord");
    }

    dragStart(event){   
        
        event.dataTransfer.setData("Text", event.target.id);
    }
     geraString(tamanho){
        var StringAleatoria = "";
        var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for(var i=0; i<tamanho; i++){
            StringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return StringAleatoria           
    }
    OutContent(event){
        event.target.classList.remove("bord");   
    }
    init(){       
        this.addEvent();
    }
}

