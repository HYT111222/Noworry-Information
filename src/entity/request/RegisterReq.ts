export class RegisterReq {
    email?: string;
    phone?: string;
    psw: string;
    userName: string;

    constructor(psw: string,userName: string,email?: string,phone?: string){
        this.psw = psw;
        this.userName = userName;
        this.email = email;
        this.phone = phone;
    }
}