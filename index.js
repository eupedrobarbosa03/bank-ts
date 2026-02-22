import { Bank } from "./controller/bank.js";
import { objectToJson } from "./controller/storage.js";
import { Operations } from "./controller/operations.js";
import { Login } from "./controller/login.js";
export const bank = new Bank();
export const login = new Login();
login.loginEffect();
const operations = new Operations();
objectToJson(login.loginFind());
objectToJson(bank.accounts());
/*
    MODOS DE USO
    bank.accountCreate(name, cpf, password, email, telephone)
    bank.accountDelete(cpf, password)
    bank.accountUpdate(cpf, password, email ou telefone ou password, newData)

    Para fazer login na conta, acesse o arquivo "operations.ts" e insira os dados em "login";
    Para fazer qualquer operação bancárica é só usar operations. que aparecerá os métodos.

*/ 
