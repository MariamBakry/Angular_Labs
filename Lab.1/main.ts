class Account{

    constructor(public acc_no=0, public balance=0){};

    get Acc_no(){
        return this.acc_no;
    }
    set Acc_no(val){
        this.acc_no = val;
    }

    get Balance(){
        return this.balance;
    }
    set Balance(val){
        this.balance = val;
    }

    GetBalance(){
        return this.balance;
    }

    debitAmount(){}
    creditAmount(){}

}


interface IAccount{
    Date_of_opening:Date;

    addCustomer();
    removeCustomer();
}

class Saving_Account extends Account implements IAccount{
    
    Min_Balance:number;

    //----------IAccount implementing---------
    Date_of_opening: Date;
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
    
}

class Current_Account extends Account implements IAccount{
    
    Interest_rate:number;

    //-------IAccount implementing--------
    Date_of_opening: Date;
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
    
}


//------------------main----------------
var acc1 = new Account();
var acc2 = new Account(20,30);

var save_acc1 = new Saving_Account();
var save_acc2 = new Saving_Account(50,60);

var current_acc1 = new Current_Account();
var current_acc2 = new Current_Account(80,90);
