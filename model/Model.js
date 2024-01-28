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
        let diaCheck = this.#diagonalVictory();

        if (horCheck.indexOf("OOO") > -1 || verCheck.indexOf("OOO") > -1 || diaCheck.indexOf("OOO") > -1) {
            return "O nyert";
        } else if (horCheck.indexOf("XXX") > -1 || verCheck.indexOf("XXX") > -1 || diaCheck.indexOf("XXX") > -1) {
            return "X nyert";
        } else if (this.#moves === 9) {
            return "Döntetlen!";
        }
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
        check += "@";
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
            check += "@";
        }
        console.log(check.indexOf("XXX"), check.indexOf("OOO"));
        return check;
    }

    #diagonalVictory() {
        let check1 = "";
        let check2 = "";

        for (let i = 0; i < 9; i += 4) {
            check1 += this.#list[i];
            if (i !== 8) {
                check1 += "@";
            }
        }

        for (let i = 2; i < 7; i += 2) {
            check2 += this.#list[i];
            if (i !== 6) {
                check2 += "@";
            }
        }

        console.log(check1.indexOf("XXX"), check1.indexOf("OOO"));
        console.log(check2.indexOf("XXX"), check2.indexOf("OOO"));
    }


}

export default Model;
