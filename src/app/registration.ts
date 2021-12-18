// import * as internal from "stream";

export class Registration {
    title:string;
    firstName:string;
    lastName:string;
    mail:string;
    pass:string;
    confermPass:string;
    // dob:Date;
    phoneNumber:number;
    constructor(title:string,firstName:string, lastName:string,mail:string,pass:string,confermPass:string,phoneNumber:number){
        this.title=title;
        this.firstName=firstName;
        this.lastName=lastName;
        this.mail=mail;
        this.pass=pass;
        this.confermPass=confermPass;
        // this.dob=dob;
        this.phoneNumber=phoneNumber;
    }

}
