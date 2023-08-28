//登录参数
export class LoginReq{
    email?: string;
    psw: string;
    phone?:string;

    constructor(psw:string,email?:string,phone?:string) {
        this.email = email
        this.psw = psw
        this.phone = phone
    }
}