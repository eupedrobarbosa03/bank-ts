export const regExp = {
    name: /[a-z]{5,}/gi,
    cpf: /(\d{3}\.\d{3}\.\d{3}-\d{2})|([\d]{11})/g,
    password: /[a-zA-Z0-9]{5,20}/g,
    email: /^[a-zA-Z0-9]+@[a-z]{2,5}\.[a-z]+$/g,
    telephone: /(61 ?\d{9})|(61 ?\d{5}-\d{4})/g
};
export class Account {
    name;
    cpf;
    password;
    email;
    telephone;
    constructor(name, cpf, password, email, telephone) {
        this.name = name;
        this.cpf = cpf;
        this.password = password;
        this.email = email;
        this.telephone = telephone;
        this.name = name;
        this.cpf = cpf;
        this.password = password;
        this.email = email;
        this.telephone = telephone;
    }
    ;
    create() {
        if (!this.name.match(regExp.name))
            return console.error(`Nome inválido. O nome deve conter no mínimo 5 caracteres`);
        if (!this.cpf.match(regExp.cpf))
            return console.error(`CPF inválido. O CPF conter 11 dígitos ou estar no formato: XXX.XXX.XXX-XX`);
        if (!this.password.match(regExp.password))
            return console.error(`Senha inválida. A senha deve conter no mínimo 5 caracteres e no máximo 20 caracteres.`);
        if (!this.email.match(regExp.email))
            return console.error(`Email inválido. O e-mail deve conter caracteres antes do @ e/ou deve conter @.`);
        if (!this.telephone.match(regExp.telephone))
            return console.error(`Telefone inváldo. O telefone deve conter 11 dígitos ou estar formato exemplo: 11 11111-1111`);
        return true;
    }
    ;
}
;
