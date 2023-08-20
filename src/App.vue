<template>
  
  <router-view />

  <!-- <div class="header"> -->
    <!--nav：导航超链接，常用于导航菜单索引等-->
    <!-- <nav>
      <div>
        <router-link to="/" class="website-title">首页</router-link>
      </div>
      <div class="nav-list">
        <router-link to="/">{{ $t("homeNav.visa") }}</router-link>
        <router-link to="/chart">{{ $t("homeNav.consult") }}</router-link>
        <router-link to="/activity">{{ $t("homeNav.activity") }}</router-link>
        <router-link to="/">{{ $t("homeNav.about") }}</router-link>
      </div>
      <div>
        <router-link to="/" class="get-start">SIGN IN</router-link>
      </div>
    </nav>
  </div>
  <div class="container">
    <router-view />
  </div>

  <div class="footer"> -->
    <!--水平分割线-->
    <!-- <hr />
    <div class="copyright">© 2023 Noworry, all rights reserved</div>
    <div class="list-menu">
      <div>Cookie Notice</div>
      <div>Privacy Notice</div>
      <div>Contact</div>
    </div>
  </div> -->
</template>

<script setup lang="ts">
import * as config from "@/doc/frontend";

</script>

<style>
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: Segoe UI, Segoe UI Light;
  /* -webkit为前缀，是chrome和safari的私有属性，-font-smoothing表示让字体显示得平滑清晰*/
  -webkit-font-smoothing: antialiased;
  /**-moz是Firefox的私有属性，osx针对ios系统 */
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #ffffff;
}

.header {
  width: 100%;
  background-color: #ffffff;
  display: flex;
  /**在每行上均匀分配弹性元素。相邻元素间距离相同。
  每行第一个元素到行首的距离和每行最后一个元素到行尾的距离将会是相邻元素之间距离的一半。 */
  justify-content: space-around;
}


@media screen and (min-width: 650px) {
  nav {
    width: 85vw;
    display: flex;
    padding: 40px 0;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
  }

  nav div {
    width: 33.33%;
    display: flex;
    align-items: center;
  }

  nav div:nth-child(1) {
    justify-content: flex-start;
  }

  nav div:nth-child(2) {
    justify-content: justify-content;
  }

  nav div:nth-child(3) {
    justify-content: flex-end;
  }

  nav .website-title,
  nav .get-start {
    color: #ffffff;
    font-weight: 900;
    padding: 15px 30px;
    border-radius: 10px;
    background-color: #1a1b1f;
    text-decoration: none;
  }

  nav .menu-botton {
    display: none;
  }

  nav .nav-list {
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav .nav-list a {
    font-family: Microsoft YaHei;
    font-weight: 600;
    color: #7a7a7a;
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 28px;
    text-decoration: none;
  }

  .container {
    width: 100%;
  }

  .footer {
    color: #1a1b1f;
    font-size: 22px;
    display: flex;
    margin: 5%;
    padding-top: 1%;
    border-top: 1px solid #7a7a7a;
  }

  .footer .list-menu {
    display: flex;
    width: 50%;
    justify-content: space-around;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 14px;
  }

  .footer .copyright {
    font-family: Montserrat;
    width: 50%;
    text-align: left;
    font-weight: 600;
    font-size: 14px;
  }
}

@media screen and (max-width: 650px) {
  nav {
    width: 100%;
    display: flex;
    padding: 40px 10px;
    justify-content: space-between;
    align-items: center;
  }

  nav .website-title {
    padding-left: 10px;
  }

  nav .website-title img {
    width: 175px;
  }

  nav .nav-list {
    display: none;
  }

  nav .menu-botton {
    padding-right: 10px;
  }

  nav .menu-botton img {
    height: 20px;
    width: 20px;
  }

  .footer {
    color: #1a1b1f;
    font-size: 22px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding-top: 1%;
    border-top: 1px solid #7a7a7a;
    margin: 3%;
  }

  .footer .list-menu {
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 6px;
  }

  .footer .copyright {
    padding-top: 3%;
    font-family: Montserrat;
    text-align: left;
    font-weight: 600;
    font-size: 6px;
  }
}
</style>
