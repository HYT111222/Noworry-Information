<template>
   <div class="home">
      <div class="container inner-center self-center">
         <!-- 添加动画效果的过渡元素 -->
         <transition name="fade-slide">
         <div class="card inner-center self-center card-radius" v-if="showLoginContainer" key="login-container" @click="animateLoginContainer">
            <div class="login-container inner-center" >
               <img src="@/assets/icon\home/164-指纹.png" class="login-img">
               <div class="login-button">
                  登录
               </div>
            </div>
            </div>
         </transition>
         <transition name="fade-in-slide">
            <div class="card inner-center self-center card-radius new-login" v-if="showLoginContainerInner" key="new-login">
               <div class="header">登录</div>
                 <p class="lable">账户：<input required type="text" v-model="loginInfo.name" placeholder="用户名" class="input-item"></p>
                  <p class="lable">密码：<input required type="password" v-model="loginInfo.password" placeholder="密码" class="input-item"></p>
                  <div><div class="btn-enter" @click="login">确定<img src="@/assets/icon\home/登录.png" class="login-icon"></div></div>
            </div>
        </transition>
         </div>
      </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';
import {reactive } from "vue";

const loginInfo = reactive({
  name: "",
  password:""
});
const showLoginContainer = ref(true);
const showLoginContainerInner = ref(false);

function animateLoginContainer() {
  showLoginContainer.value = false;
  // 等待动画结束后切换到登录框
  setTimeout(() => {
   showLoginContainerInner.value = true;
  }, 500);
}
//登录：先校验输入再发送请求（不用element不太会校验）
function login() {
   router.push("/menu");
}
</script>

<style>
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
  }
  .lable {
   font-size: 18px;
   font-family: Montserrat;
   color: rgb(42, 26, 42);
   font-weight: 400;
   margin-bottom: 10px;
  }
  .input-item {
   height: 30px;
   width: 200px;
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
  .login-icon {
   width: 20px;
   height: 20px;
   margin-left: 2px;
  }
   /* 动画效果的过渡———出 */
  .fade-slide-leave-active {
    transition: opacity 0.5s, transform 0.5s;
  }
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }
  /* 动画效果的过渡———入 */
  .fade-in-slide-enter-from{
   opacity: 0;
   transform: translateX(100%);
  }

  .fade-in-slide-enter-active {
   transition: opacity 0.7s, transform 0.7s;
   }

   .fade-in-slide-enter-to{
   opacity: 1;
   transform: translateX(0);
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
  }
  .lable {
   font-size: 16px;
   font-family: Montserrat;
   color: rgb(42, 26, 42);
   font-weight: 400;
   margin-bottom: 6px;
  }
  .input-item {
   height: 28px;
   width: 180px;
   border-radius: 7px;
   border-color: rgb(52, 31, 50);
  }
  .btn-enter {
   margin-top: 8px;
   width: 60px;
   padding: 6px;
   border-radius: 7px;
   display: flex;
   color: #fafbfc;
   align-items: center;
   justify-content: center;
   background-color: rgb(178, 110, 177);
   float: right;
  }
  .login-icon {
   width: 18px;
   height: 18px;
   margin-left: 2px;
  }
   /* 动画效果的过渡———出 */
  .fade-slide-leave-active {
    transition: opacity 0.5s, transform 0.5s;
  }
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }
  /* 动画效果的过渡———入 */
  .fade-in-slide-enter-from{
   opacity: 0;
   transform: translateX(100%);
  }

  .fade-in-slide-enter-active {
   transition: opacity 0.7s, transform 0.7s;
   }

   .fade-in-slide-enter-to{
   opacity: 1;
   transform: translateX(0);
   }
}
</style>
