class Account {
    constructor(acc_no = 0, balance = 0) {
        this.acc_no = acc_no;
        this.balance = balance;
    }
    ;
    get Acc_no() {
        return this.acc_no;
    }
    set Acc_no(val) {
        this.acc_no = val;
    }
    get Balance() {
        return this.balance;
    }
    set Balance(val) {
        this.balance = val;
    }
    GetBalance() {
        return this.balance;
    }
    debitAmount() { }
    creditAmount() { }
}
class Saving_Account extends Account {
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
}
class Current_Account extends Account {
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
}
//------------------main----------------
var acc1 = new Account();
var acc2 = new Account(20, 30);
var save_acc1 = new Saving_Account();
var save_acc2 = new Saving_Account(50, 60);
var current_acc1 = new Current_Account();
var current_acc2 = new Current_Account(80, 90);
