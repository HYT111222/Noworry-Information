//登录参数
export class LoginReq{
    email?: string;
    phone?: string;
    psw: string;

    constructor(psw:string,email?:string,phone?:string) {
        this.email = email
        this.phone = phone
        this.psw = psw
    }

}