class Model {
    #list = []
    #id
    #status
    #moves
    constructor() {
        this.#list = [".", ".", ".", ".", ".", ".", ".", ".", "."];
        this.#moves = 0;
        this.#status = "O";
    }

    setStatus(id) {
        if (this.#status === "X") {
            this.#status = "O";
        } else {
            this.#status = "X";
        }
        this.#list[id] = this.#status
        this.#moves++;
    }

    getStatus() {
        if (this.#status === "O")
            return "X";
        else
            return "O";
    }

    getValue() {
        return this.#status
    }

    getCheckTheEnd() {
        let horCheck = this.#horizontalVictory();
        let verCheck = this.#verticalVictory();

        if (horCheck.indexOf("OOO") > -1 || verCheck.indexOf("OOO") > -1) {
            return "O nyert";
        } else if (horCheck.indexOf("XXX") > -1 || verCheck.indexOf("XXX") > -1) {
            return "X nyert";
        } else if (this.#moves === 9) {
            return "Döntetlen!";
        }
        console.log(this.#list)
        return "Tovább";
    }

    #horizontalVictory() {
        let check = ""
        for (let i = 0; i < 9; i++) {
            check += this.#list[i];
            if (i % 2 == 0) {
                check += "@";
            }
        }
        
        
        console.log(check.indexOf("XXX"), check.indexOf("OOO"));
        return check;

    }

    #verticalVictory() {
        let check = "";
        for (let i = 0; i < 3; i++) {
            for (let j = i; j < 9; j += 3) {
                check += this.#list[j];
                if (j !== 8) {
                    check += "@";
                }
            }
        }
        console.log(check)
        console.log(check.indexOf("XXX"), check.indexOf("OOO"));
        return check;
    }
}

export default Model;
