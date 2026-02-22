if (!localStorage.getItem("bankAccounts"))
    localStorage.setItem("bankAccounts", JSON.stringify([]));
;
export function storagePush(account) {
    const getBankStorage = localStorage.getItem("bankAccounts");
    let bankStorage;
    if (getBankStorage) {
        bankStorage = JSON.parse(getBankStorage);
        bankStorage.push(account);
        localStorage.setItem("bankAccounts", JSON.stringify(bankStorage));
    }
}
;
export function getStorage(key) {
    const getBankStorage = localStorage.getItem(key);
    return getBankStorage ? JSON.parse(getBankStorage) : null;
}
;
export function deleteAccountStorage(key, index) {
    const getBankStorage = localStorage.getItem(key);
    let deleteAccount;
    if (getBankStorage) {
        deleteAccount = JSON.parse(getBankStorage);
        deleteAccount.splice(index, 1);
        localStorage.setItem(key, JSON.stringify(deleteAccount));
    }
    ;
}
;
export function uptadeAccountStogare(key, accountUpdate) {
    const storage = localStorage.getItem(key);
    if (!storage)
        return;
    const accounts = JSON.parse(storage);
    const accountDataUpdate = accounts.map((account) => account.cpf === accountUpdate.cpf ? accountUpdate : account);
    localStorage.setItem(key, JSON.stringify(accountDataUpdate));
}
;
export function objectToJson(object) {
    console.log(JSON.stringify(object, null, 2));
}
;
