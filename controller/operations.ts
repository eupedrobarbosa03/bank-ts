import { bank } from "../index.js";
import { uptadeAccountStogare } from "./storage.js";
import { login } from "../index.js";

export class Operations {
    constructor() {};

    sake(value: number): void {
        const account = login.loginFind();
        if (!account) return;
        if (value <= 0) return;
        if (value > account.bank.balance)
            return console.error(`${account.name}, você não tem saldo suficiente!`);
        account.bank.balance -= value;
        account.bank.notifications.push(
            `Você realizou um saque no valor de ${value}.`
        );
        uptadeAccountStogare("bankAccounts", account);
    };

    lending(value: number, installMentsQuantity = 4): void {
        const account = login.loginFind();
        if (!account) return;
        if (value <= 0) return;
        const limitLending = 3000;
        const valueInstallMents = value / installMentsQuantity;
        if (value > limitLending) 
            return console.error(`${account.name}, você não pode solicitar um empréstimo neste valor. No máximo ${limitLending}.`)
        account.bank.balance += value;
        account.bank.notifications.push(
            `Você realizou um empréstimo de ${value}. Você dividiu em ${installMentsQuantity}x. Você pagará cada parcela no valor de ${valueInstallMents}.`
        );
        uptadeAccountStogare("bankAccounts", account);
    };

    deposit(value: number): void {
        const account = login.loginFind();
        if (!account) return;
        if (value <= 0) return;
        const minimunValueForDeposit = 20;
        if (value < minimunValueForDeposit)
            return console.error(`${account.name}, só é possivel depositar no mínimo ${minimunValueForDeposit}.`);;
        account.bank.balance += value;
        account.bank.notifications.push(
            `Você realizou um depósito de ${value}.`
        );
        uptadeAccountStogare("bankAccounts", account);
    };

    transfer(value: number, key: string): void {
        const account = login.loginFind();
        if (!account) return;
        if (value <= 0) return;
        const sameAccount = Object.values(
            account.bank.tranferKeys).find((transferKey) => key === transferKey
        );

        if (sameAccount) return console.error(`Não é possível transferir para si mesmo.`);
        const getAccounts = bank.accounts();
        const foundAccountDestination = getAccounts.find((destinationAccount) => Object.values(destinationAccount.bank.tranferKeys).find((transferKey) => transferKey === key));
        if (!foundAccountDestination) return console.error(`Chave pix não encontrada.`);

        if (value > account.bank.balance)
            return console.error(`Você não possui saldo suficiente.`);

        account.bank.balance -= value;
        foundAccountDestination.bank.balance += value;

        account.bank.notifications.push(
            `Você realizou uma transferência no valor de ${value} para ${foundAccountDestination.name}.`
        );
        foundAccountDestination.bank.notifications.push(
            `Você recebeu uma transferência no valor de ${value} de ${account.name}`
        );

        uptadeAccountStogare("bankAccounts", account)
        uptadeAccountStogare("bankAccounts", foundAccountDestination);
    }

    buyWithCredit(value: number): void {
        const account = login.loginFind();
        if (!account) return;
        if (value <= 0) return;
        if (value > account.bank.limit) {
            account.bank.notifications.push (`Compra negada no cartão de crédito. Saldo insuficiente.`);
            return;
        } 
        account.bank.notifications.push(`Compra realizada no valor de ${value} no crédito.`);
        account.bank.limit -= value;   
        uptadeAccountStogare("bankAccounts", account)          
    };

    buyWithDebit(value: number): void {
        const account = login.loginFind();
        if (!account) return;
        if (value <= 0) return;
        if (value > account.bank.balance) {
            account.bank.notifications.push (`Compra negada no cartão de débito. Saldo insuficiente.`);
            return;
        } 
        account.bank.notifications.push(`Compra realizada no valor de ${value} no débito.`);
        account.bank.balance -= value;   
        uptadeAccountStogare("bankAccounts", account)     
    };

    seeLimit(): void {
        const account = login.loginFind();
        if (account) console.log(`${account.name}, seu limite: ${account.bank.limit}.`)
    };

    seeBalance(): void {
        const account = login.loginFind();
        if (account) console.log(`${account.name}, seu saldo: ${account.bank.balance}.`)        
    };

};