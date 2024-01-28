import Model from "../model/Model.js";
import JatekTer from "../view/JatekTer.js";


class Controller{
    constructor(){
        this.parentElement = $(".jatekter");
        this.gameModel = new Model()
        
        for (let index = 0; index < 9; index++) {
            this.gameSpace = new JatekTer(this.parentElement, index)
        }

        $(window).on("kockaraKattint", (event)=>{
            if(this.gameModel.getCheckTheEnd() === "Tovább"){
                console.log(this.gameModel.getCheckTheEnd())
                this.gameModel.setStatus(event.detail.getIndex())
                event.detail.setValue(this.gameModel.getValue())
            }
        })
    }
}

export default Controller