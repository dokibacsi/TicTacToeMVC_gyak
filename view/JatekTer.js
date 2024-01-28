class JatekTer {
    #parentElement;
    #index;
    constructor(parentElement, index) {
        this.#parentElement = parentElement //ParentElement == szülőelem
        this.#index = index
        this.clicked = true; //kattintható
        this.#oneCube(this.#index);
        this.oneElement = $("div:last-child");
        this.pTag = this.oneElement.children("p:last-child");

        this.pTag.on("click", () => {
            if (this.clicked) {
                this.#myCustomEvent("kockaraKattint") //Saját Esemény
            }   
            this.clicked = false; //Nem kattintható
        });
    }

    #myCustomEvent(eventName) {
        const myEvent = new CustomEvent(eventName, { detail: this })
        window.dispatchEvent(myEvent)
    }

    setValue(sign) {
        this.pTag.html(sign);
    }

    #oneCube(index) {
        let txt = `<div class = "element" id = "${index}"><p>&nbsp;</p></div>`;
        this.#parentElement.append(txt);
    }

    getIndex() {
        return this.#index;
    }

}

export default JatekTer