import { Bank } from "./bank.js";
export class Login {
    cpf;
    password;
    loginSucessfaly;
    constructor(cpf, password) {
        this.cpf = cpf;
        this.password = password;
        this.loginSucessfaly = false;
    }
    ;
    loginEffect() {
        if (this.cpf === undefined || this.password === undefined)
            return;
        if (new Bank().accounts().length === 0)
            return;
        const accounts = new Bank().accounts().find((account) => account.cpf === this.cpf && account.password === this.password);
        if (!accounts)
            return console.error(`Credenciais inválidas.`);
        this.loginSucessfaly = true;
        alert(`Login realizado com sucesso!`);
        console.warn(`OLÁ, ${accounts.name.toUpperCase()}!`);
    }
    ;
    loginFind() {
        if (!this.loginSucessfaly)
            return false;
        const accounts = new Bank().accounts().find((account) => account.cpf === this.cpf);
        if (!accounts)
            return false;
        return accounts;
    }
    ;
}
;
