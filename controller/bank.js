import { Account, regExp } from "./account.js";
import { storagePush, getStorage, deleteAccountStorage, uptadeAccountStogare } from "./storage.js";
export class Bank {
    constructor() { }
    ;
    accounts() {
        return getStorage("bankAccounts") || [];
    }
    ;
    accountCreate(name, cpf, password, email, telephone) {
        const newAccount = new Account(name, cpf, password, email, telephone);
        if (!newAccount.create())
            return;
        const existingAccount = this.accounts().find((account) => account.cpf === cpf || account.email === email || account.telephone === telephone);
        if (existingAccount)
            return console.error(`Erro ao criar uma conta. CPF, e-mail ou número de telefone indisponível.`);
        const account = {
            name: name,
            cpf: cpf,
            password: password,
            email: email,
            telephone: telephone,
            bank: {
                balance: 0,
                limit: 300, //Ao criar uma conta, o cliente receve R$ 300,00 de limite.
                tranferKeys: { cpf: cpf, email: email, telephone: telephone },
                notifications: [`Seja bem-vindo(a), ${name}! Essa é sua conta digital.`]
            }
        };
        storagePush(account);
    }
    ;
    accountUpdate(cpf, password, data, newData) {
        const findAccount = this.accounts().find((account) => account.cpf === cpf && account.password === password);
        if (!findAccount)
            return console.error(`Credenciais inválidas.`);
        function setterRegExp(setNewData, regExp) {
            if (!setNewData.match(regExp))
                return false;
            return true;
        }
        ;
        const othersAccountsData = this.accounts().find((otherAccount) => (data === "email" && newData === otherAccount.email) ||
            (data === "telephone" && newData === otherAccount.telephone));
        if (othersAccountsData)
            return console.error(`E-mail e/ou telefone em uso.`);
        switch (data) {
            case "email":
                if (!setterRegExp(newData, regExp.email) || newData === findAccount.email)
                    return console.error(`Email inválido. O e-mail deve conter caracteres antes do @ e/ou deve conter @. Você não pode definir o mesmo e-mail.`);
                findAccount.bank.notifications.push(`Seu e-mail foi alterado com sucesso. E-mail antigo: ${findAccount.email} | E-mail novo: ${newData}`);
                findAccount.email = newData;
                findAccount.bank.tranferKeys.email = newData;
                break;
            case "password":
                if (!setterRegExp(newData, regExp.password) || newData === password)
                    return console.error(`Senha inválida. A senha deve conter no mínimo 5 caracteres e no máximo 20 caracteres. Você não pode definir a mesma senha.`);
                findAccount.bank.notifications.push(`Sua senha foi alterada com sucesso.`);
                findAccount.password = newData;
                break;
            case "telephone":
                if (!setterRegExp(newData, regExp.telephone) || newData === findAccount.telephone)
                    return console.error(`Telefone inváldo. O telefone deve conter 11 dígitos ou estar formato exemplo: 11 11111-1111. Você não pode definir o mesmo telefone.`);
                findAccount.bank.notifications.push(`Seu número de telefone foi alterado com sucesso.`);
                findAccount.telephone = newData;
                findAccount.bank.tranferKeys.telephone = newData;
                break;
            default:
                console.error(`Error: default.`);
                break;
        }
        ;
        uptadeAccountStogare("bankAccounts", findAccount);
    }
    ;
    accountDelete(cpf, password) {
        for (let i = 0; this.accounts().length; i++) {
            if (this.accounts()[i]?.cpf === cpf && this.accounts()[i]?.password === password) {
                deleteAccountStorage("bankAccounts", i);
                break;
            }
        }
        ;
    }
    ;
}
;
