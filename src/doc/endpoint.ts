//这里配置默认路径和参数的文档文件，原则上不允许在runtime更改
//服务端客户端共用，请勿存放敏感信息

const ROOT_PATH = "/api";

//请求nest服务器

//contact页面相关路由
const CONTACT_ROUTE = ROOT_PATH + "/contact"
const SEND_EMAIL_TO_HOST = CONTACT_ROUTE + "/sendemail"

//登录注册相关路由
const LOGIN_URL = ROOT_PATH + '/sys-user/login'
const REGISTER_URL = ROOT_PATH + '/sys-user'
export default {
    CONTACT_ROUTE,
    SEND_EMAIL_TO_HOST,
    LOGIN_URL,
    REGISTER_URL
}
