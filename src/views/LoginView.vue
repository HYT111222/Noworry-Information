<template>
   <div class="home">
      <div class="container inner-center self-center">
         <!-- 添加动画效果的过渡元素 -->
         <transition name="fade-slide">
         <div class="card inner-center self-center card-radius" v-if="showLoginContainer" @click="animateLoginContainer">
            <div class="login-container inner-center" >
               <img src="@/assets/icon\home/164-指纹.png" class="login-img">
               <div class="login-button">
                  登录
               </div>
            </div>
            </div>
         </transition>
         <transition name="fade-in-slide">
            <div class="card inner-center self-center card-radius new-login" v-if="showLoginContainerInner" key ="login">
               <div class="header">Login</div>
               <div style="align-items: flex-end;display: flex;flex-direction: column;">
                 <p class="lable">账号：<input required type="text" autocomplete="on" v-model="loginInfo.name" placeholder="邮箱/手机号，必填" class="input-item" ></p>
                 <p class="error">{{ login_isError ? '请输入正确的邮箱或手机号' : '' }}</p>
                  <p class="lable">密码：<input required type="password" v-model="loginInfo.password"  placeholder="必须包含数字和英文，必填" class="input-item"></p>
                  <p class="error">{{ login_isError_psw ? '长度6~30,必须包含数字和英文字母' : '' }}</p>
                </div>
                  <div>
                    <div class="btn-register" @click="animateRegisterContainer">没有账号？去注册</div>
                    <div class="btn-enter" @click="login">确定<img src="@/assets/icon\home/登录.png" class="login-icon"></div>
                  </div>
            </div>
          <div class="card inner-center self-center card-radius new-login" v-else-if = "showRegisterContainer" key = "register">
            <div class="header">Register</div>
              <div style="align-items: flex-end;display: flex;flex-direction: column;">
                 <p class="lable">姓名：<input required type="text" v-model="registerInfo.name" placeholder="管理员名称" class="input-item" ></p>
                  <p class="error" >{{ register_isError_name ? '长度在1~3个字符' : '' }}</p>
                  <p class="lable">密码：<input required type="password" v-model="registerInfo.password" placeholder="6~30位，必须包含数字和英文" class="input-item"></p>
                   <p class="error">{{ register_isError_psw ? '长度6~30,必须包含数字和英文字母' : '' }}</p>
                  <p class="lable">确认密码：<input required type="password" v-model="registerInfo.confirmPassword" placeholder="6~30位，必须包含数字和英文" class="input-item"></p>
                   <p class="error">{{ register_isError_pswCom ? '与以上输入的密码不一致' : '' }}</p>
                  <p class="lable">邮箱：<input type="email"  v-model="registerInfo.email" placeholder="请输入邮箱,可选" class="input-item"></p>
                  <p class="error">{{ register_isError_email ? '请输入正确的邮箱' : '' }}</p>
                  <p class="lable">手机号：<input  type="text"  v-model="registerInfo.phone" placeholder="请输入手机号,可选" class="input-item"></p>
                  <p class="error">{{ register_isError_phone ? '请输入正确的手机号' : '' }}</p>
              </div>
              <div>
                <div class="btn-register" @click="animateLoginContainer">已有账号？去登录</div>
                <div class="btn-enter" @click="register">注册<img src="@/assets/icon\home/登录.png" class="login-icon"></div>
              </div>
            </div>
        </transition>
         </div>
      </div>
</template>

<script setup lang="ts">
import endpoint from "@/doc/endpoint";
import { LoginReq } from "@/entity/request/loginReq"
import { RegisterReq } from "@/entity/request/RegisterReq"
import router from '@/router';
import request from '@/router/interceptors'
import { computed, ref } from 'vue';
import {reactive } from "vue";


const loginInfo = reactive({
  name: "",
  password:""
});
const registerInfo = reactive({
  name:"",
  password:"",
  confirmPassword:"",
  email:"",
  phone:""
})
const showLoginContainer = ref(true);
const showLoginContainerInner = ref(false);
const showRegisterContainer = ref(false);
//表单校验
const login_isError = computed(() =>{//false:校验通过
  return loginInfo.name !== '' && !loginInfo.name.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/) && !loginInfo.name.match(/^1\d{10}$/)
})
const login_isError_psw = computed(() =>{
  return loginInfo.password !== '' && !loginInfo.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!#$%^&*_@()]{6,30}$/)
})
const register_isError_name = computed(() =>{
  return registerInfo.name!== '' && registerInfo.name.length <1 || registerInfo.name.length>=30
})
const register_isError_email = computed(() => {
  return registerInfo.email!== '' && !registerInfo.email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/)
})
const register_isError_phone = computed(() => {
  return registerInfo.phone !=='' && !registerInfo.phone.match(/^1\d{10}$/)
})
const register_isError_psw = computed(() =>{
  return registerInfo.password !== '' && !registerInfo.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!#$%^&*_@()]{6,30}$/)
})
const register_isError_pswCom = computed(() =>{
  return registerInfo.confirmPassword !== '' && !registerInfo.confirmPassword.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!#$%^&*_@()]{6,30}$/)
})

/**动画效果 */
function animateLoginContainer() {
  showRegisterContainer.value = false;
  showLoginContainer.value = false;
  setTimeout(() => {
   showLoginContainerInner.value = true;
  }, 500);
}
function animateRegisterContainer() {
  showLoginContainerInner.value = false;
  setTimeout(() => {
    showRegisterContainer.value = true;
  }, 500);
}
//登录：先校验输入再发送请求
function login() {
  if (!login_isError.value && !login_isError_psw.value && loginInfo.name!= '' && loginInfo.password!=''){
    let loginData;
    if (loginInfo.name.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/)) {//邮箱登录
      loginData = new LoginReq(loginInfo.password,loginInfo.name);
    } else {
      loginData = new LoginReq(loginInfo.password, undefined, loginInfo.name)
    }
    request({
            url: `${endpoint.LOGIN_URL}`,
            method: "POST",
            data: loginData,
          }).then(response => {
            // 处理响应
            alert(response)
            console.log(response)
            router.push("/menu");
          })
    
  }else {
    alert("请正确填写信息")
  }
  
}
//注册：先校验输入再发送请求
function register() {
  if (!register_isError_name.value && !register_isError_email.value && !register_isError_phone.value && !register_isError_psw.value && !register_isError_pswCom.value && registerInfo.name!= '' && registerInfo.password!='' && registerInfo.confirmPassword!='' && (registerInfo.email!='' || registerInfo.phone!='')){
    let registerData = new RegisterReq(registerInfo.password,registerInfo.name,registerInfo.email==''?undefined:registerInfo.email,registerInfo.phone==''?undefined:registerInfo.phone);
    request({
      url:`${endpoint.REGISTER_URL}`,
      method:"POST",
      data:registerData
    }).then(response =>{
      // 处理响应
      alert(response)
      console.log(response)
    })
  }else {
    alert("请填写完整")
  }
}
</script>

<style>
/* 动画效果的过渡———出 */
.fade-slide-leave-active,
.fade-in-slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade-slide-leave-to,
.fade-in-slide-leave-to {
  opacity: 0;
  transform: translateX(-70%);
}
/* 动画效果的过渡———入 */
.fade-in-slide-enter-from{
opacity: 0;
transform: translateX(70%);
}

.fade-in-slide-enter-active {
transition: opacity 0.7s, transform 0.7s;
}

.fade-in-slide-enter-to{
opacity: 1;
transform: translateX(0);
}
/**输入校验提示 */
.error {
  color: #913a8e;
  font-size: 5px;
  margin: 3px;
  height: 16px;
  text-align: justify;
}
/**当宽大于等于650px时 */
@media screen and (min-width: 650px) {
  .home {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ebecee;
  }
  .container {
   background-color: #ffffff;
   height: 80%;
   width: 75%;
   border-radius: 0.5%;
  }
  .inner-center {
    display: flex;
    flex-direction: column;
  }
  .self-center {
   margin: auto;
  }
  .card-radius {
   border-radius: 7px;
  }
  .login-container {
   width: 250px;
   height: 250px; 
  }
  
  .login-img {
   width: 150px;
   height: 150px;
   margin: 25px auto 10px;
  }
  .login-button {
   background:transparent;
   border: 0;
   margin-top: 0;
   margin: 0px auto;
   font-size: 20px;
   font-family: Montserrat;
   font-weight: 600;
   color: rgb(42, 26, 42);
  }
  /**登录框 */
  .new-login {
   padding: 20px;
  }
  .header {
   font-size: 20px;
   font-weight: 600;
   font-family: Montserrat;
   color: rgb(42, 26, 42);
   margin-bottom: 15px;
  }
  .lable {
   font-size: 18px;
   font-family: Montserrat;
   color: rgb(42, 26, 42);
   font-weight: 400;
   margin: 0px;

  }
  .input-item {
   margin: 0px;
   height: 30px;
   width: 260px;
   border-radius: 10px;
   border-color: rgb(52, 31, 50);
  }
  .btn-enter {
   margin-top: 10px;
   width: 60px;
   padding: 6px;
   border-radius: 10px;
   display: flex;
   color: #fafbfc;
   align-items: center;
   justify-content: center;
   background-color: rgb(178, 110, 177);
   float: right;
  }
  .btn-enter:hover {
    background-color:rgb(218, 159, 217);
  }
  .btn-register {
    margin-top: 20px;
    width: auto;
    padding-left: 0px;
    font-size: 10px;
    display: flex;
    color: #36293b;
    align-items: center;
    justify-content: center;
    background:transparent;
    float: left;
  }
  .btn-register:hover {
    color:#9b52b9;
  }
  .login-icon {
   width: 20px;
   height: 20px;
   margin-left: 2px;
  }

}

@media screen and (max-width: 650px) {
  .home {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ebecee;
  }
  .container {
   background-color: #ffffff;
   height: 85%;
   width: 80%;
   border-radius: 0.5%;
  }
  .inner-center {
    display: flex;
    flex-direction: column;
  }
  .self-center {
   margin: auto;
  }
  .card-radius {
   border-radius: 7px;
  }
  .login-container {
   width: 200px;
   height: 200px; 
  }
  
  .login-img {
   width: 130px;
   height: 130px;
   margin: 20px auto 6px;
  }
  .login-button {
   background:transparent;
   border: 0;
   margin-top: 0;
   margin: 0px auto;
   font-size: 20px;
   font-family: Montserrat;
   font-weight: 600;
   color: rgb(42, 26, 42);
  }

  /**登录框 */
  .new-login {
   padding: 18px;
  }
  .header {
   font-size: 18px;
   font-weight: 600;
   font-family: Montserrat;
   color: rgb(42, 26, 42);
   margin-bottom: 15px;
  }
  .lable {
   font-size: 14px;
   font-family: Montserrat;
   color: rgb(42, 26, 42);
   font-weight: 400;
   margin-bottom: 0px;
   margin-top: 0px;
  }
  .input-item {
   height: 26px;
   width: 180px;
   margin-top: 0px;
   border-radius: 7px;
   border-color: rgb(52, 31, 50);
  }
  input::-webkit-input-placeholder{
    font-size: 10px;
  }
  .btn-enter {
   margin-top: 8px;
   width: 60px;
   padding: 6px;
   border-radius: 7px;
   font-size: 13px;
   display: flex;
   color: #fafbfc;
   align-items: center;
   justify-content: center;
   background-color: rgb(178, 110, 177);
   float: right;
  }
  .btn-enter:hover {
    background-color:rgb(218, 159, 217);
  }
  .btn-register {
    margin-top: 15px;
    width: auto;
    padding-left: 0px;
    font-size: 5px;
    display: flex;
    color: #36293b;
    align-items: center;
    justify-content: center;
    background:transparent;
    float: left;
  }
  .btn-register:hover {
    color:#9b52b9;
  }
  .login-icon {
   width: 18px;
   height: 18px;
   margin-left: 2px;
  }
}
</style>
