if (!localStorage.getItem("bankAccounts")) 
    localStorage.setItem("bankAccounts", JSON.stringify([]));

interface ModelStorage {
    name: string;
    cpf: string;
    password: string;
    email: string;
    telephone: string;
    bank: {
        balance: number;
        limit: number;
        tranferKeys: { cpf: string, email: string, telephone: string };
        notifications: string[];
    };
};

export function storagePush(account: ModelStorage): void {
    const getBankStorage = localStorage.getItem("bankAccounts");
    let bankStorage;
    if (getBankStorage) {
        bankStorage = JSON.parse(getBankStorage);
        bankStorage.push(account);
        localStorage.setItem("bankAccounts", JSON.stringify(bankStorage));
    }  
};

export function getStorage<T>(key: string): T | null {
    const getBankStorage = localStorage.getItem(key);
    return getBankStorage ? JSON.parse(getBankStorage) : null;
};

export function deleteAccountStorage(key: string, index: number) {
    const getBankStorage = localStorage.getItem(key);
    let deleteAccount;
    if (getBankStorage) {
        deleteAccount = JSON.parse(getBankStorage);
        deleteAccount.splice(index, 1);
        localStorage.setItem(key, JSON.stringify(deleteAccount));
    };
};

export function uptadeAccountStogare<T extends {cpf: string}>(key: string, accountUpdate: T){
    const storage = localStorage.getItem(key);
    if (!storage) return;
    const accounts: T[] = JSON.parse(storage);
    const accountDataUpdate = accounts.map((account) =>
        account.cpf === accountUpdate.cpf ? accountUpdate : account);
    localStorage.setItem(key, JSON.stringify(accountDataUpdate));
};

export function objectToJson<T>(object: T) {
    console.log(JSON.stringify(object, null, 2));
};
