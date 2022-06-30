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
        })
        
        this.moveItem.forEach(item => {         
            item.setAttribute("draggable", true)
            item.setAttribute("id","xuxu")

            item.addEventListener("dragstart",(event)=>{
                this.dragStart(event)
            })
        })
    }
     drop(event){
        event.preventDefault()
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));            
    }
    allowDrop(event) {
        event.preventDefault();
    }

    dragStart(event){
        event.dataTransfer.setData("Text", event.target.id);
    }
    init(){       
        this.addEvent();
     }
}

