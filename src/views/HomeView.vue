<template>
  <div class="home">
    <div class="show_unit banner-1">
      <div class="title">Travel with Noworry</div>
      <div class="subtitle">{{ subtitle }}</div>
      <div class="learn-botton">LEARN MORE</div>
    </div>
    <div class="center-banner">
      <div class="title">WE KNOW THE MARKET</div>
      <div class="describe">
        Noworry具有丰富的签证办理经验，能实时获取签证官网的最新动态，为每一位客户提供优质服务
      </div>
    </div>
    <div class="show_unit banner-2">
      <div class="left">
        <div class="slogan">经验丰富</div>
        <div class="describe">
          我们的团队拥有一手的签证信息，能给每一个客户提供最新的申请材料。同时我们还提供全程保姆级的代办服务,让您递签更省心。对于有特殊情况的客户，我们也有加急预约系统，尽可能就近解决问题。
        </div>
        <div class="publicize">
          目前已经成功帮助5000多名客户顺利拿到签证，通过率达到99%！
        </div>
      </div>
      <div class="right">
        <div class="slogan">优质服务</div>
        <div class="describe">
          我们采用行业领先的刷签系统，同时服务价格透明，保证无任何隐形消费。我们的客服和售后小助理实时跟踪订单，全程公开化透明流程，让您不再担心售后无保障。而您的信息则将得到高度保密，无需担心隐私泄露问题。
        </div>
        <div class="publicize">
          后台团队全天候在线维护，系统无故障运行时领先行业平均水平。
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
const subtitle = ref("关")
onMounted(() => {
  const arr = "于签证解决方案的最佳选择".split("");
  arr.forEach((w, i) => { //产生一个动画效果
    setTimeout(() => subtitle.value = subtitle.value + w, i * 85)
  })
})
</script>

<style>
@media screen and (min-width: 650px) {
  .home {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home .show_unit {
    min-height: 600px;
    width: 100%;
  }

  .home .banner-1 {
    /* background: url("@/assets/icon/home/团队-15.png"); */
    background-repeat: no-repeat;
    background-position: 50% -30px;
    background-size: 200% 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 200px;
  }

  .home .banner-1 .title {
    font-family: Montserrat;
    font-size: 68px;
    font-weight: 400;
    line-height: 90px;
    letter-spacing: 4px;
  }

  .home .banner-1 .subtitle {
    font-family: Montserrat;
    margin: 20px 0;
    font-size: 26px;
    font-weight: 400;
    color: #7a7a7a;
    letter-spacing: 2px;
    line-height: 34px;
  }

  .home .banner-1 .learn-botton {
    margin-top: 45px;
    padding: 15px 45px;
    border-radius: 10px;
    letter-spacing: 3px;
    font-weight: 600;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s;
  }

  .home .banner-1 .learn-botton:hover {
    background-color: gainsboro;
  }

  .center-banner {
    width: 75%;
    padding-bottom: 5%;
    margin-bottom: 5%;
    border-bottom: 1px solid #eeeeee;
  }

  .center-banner .title {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 14px;
    color: #7a7a7a;
    letter-spacing: 1px;
  }

  .center-banner .describe {
    font-family: Montserrat;
    margin-bottom: 15px;
    outline-style: none;
    outline-width: 3px;
    color: #1a1b1f;
    font-size: 40px;
    margin: 3% auto;
    line-height: 50px;
    font-weight: 200;
    letter-spacing: 2px;
  }

  .home .banner-2 {
    background-size: 100%;
    color: #fffffe;
    display: flex;
  }

  .home .banner-2 .left {
    background: linear-gradient(90deg, #9011a3 0%, #394caf);
    width: 50%;
    padding: 5%;
    display: flex;
    flex-direction: column;
  }

  .home .banner-2 .right {
    background: linear-gradient(135deg, #e9465f 31%, #9c2fbf 100%);
    width: 50%;
    padding: 5%;
    display: flex;
    flex-direction: column;
  }

  .home .banner-2 .left div, .home .banner-2 .right div {
    height: 50%;
    display: flex;
    text-align: left;
  }

  .home .banner-2 .left .slogan, .home .banner-2 .right .slogan {
    font-size: 40px;
    font-family: Montserrat;
    font-weight: 700;
  }

  .home .banner-2 .left .describe, .home .banner-2 .right .describe {
    font-size: 20px;
    font-family: Montserrat;
    line-height: 32px;
    font-weight: 600;
  }

  .home .banner-2 .left .publicize, .home .banner-2 .right .publicize {
    font-size: 40px;
    font-family: Montserrat;
    font-weight: 500;
  }
}

@media screen and (max-width: 650px) {
  .home {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home .show_unit {
    min-height: 400px;
    width: 100%;
  }

  .home .banner-1 {
    /* background: url("@/assets/icon/home/bc_price_moving.svg"); */
    background-repeat: no-repeat;
    background-position: 50% -100px;
    background-size: 200% 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
  }

  .home .banner-1 .title {
    font-family: Montserrat;
    font-size: 70px;
    font-weight: 400;
    font-size: 36px;
    letter-spacing: 4px;
  }

  .home .banner-1 .subtitle {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    opacity: 0.6;
    letter-spacing: 1px;
    line-height: 34px;
  }

  .home .banner-1 .learn-botton {
    margin-top: 45px;
    padding: 15px 45px;
    border-radius: 10px;
    letter-spacing: 3px;
    font-weight: 600;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s;
    background-color: gainsboro;
  }

  .center-banner {
    width: 87%;
    padding-bottom: 5%;
    margin-bottom: 5%;
    border-bottom: 1px solid #eeeeee;

  }

  .center-banner .title {
    font-size: 6px;
    font-family: Montserrat;
    font-weight: 600;
    color: #7a7a7a;
  }

  .center-banner .describe {
    font-family: Montserrat;
    margin-bottom: 15px;
    outline-style: none;
    outline-width: 3px;
    color: #1a1b1f;
    font-size: 30px;
    margin: 3% auto;
    line-height: 50px;
    font-weight: 300;
    letter-spacing: 2px;
  }

  .home .banner-2 {
    background-size: 100%;
    color: #fffffe;
    display: flex;
    flex-direction: column;
  }

  .home .banner-2 .left {
    background: linear-gradient(90deg, #9011a3 0%, #394caf);
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .home .banner-2 .right {
    background: linear-gradient(135deg, #e9465f 31%, #9c2fbf 100%);
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .home .banner-2 .left div, .home .banner-2 .right div {
    height: 150px;
    display: flex;
    padding: 0 5%;
    align-items: center;
    text-align: left;
  }

  .home .banner-2 .left .slogan, .home .banner-2 .right .slogan {
    font-size: 32px;
    font-family: Montserrat;
    font-weight: 700;
  }

  .home .banner-2 .left .describe, .home .banner-2 .right .describe {
    font-size: 18px;
    font-family: Montserrat;
    font-weight: 600;
  }

  .home .banner-2 .left .publicize, .home .banner-2 .right .publicize {
    font-size: 28px;
    font-family: Montserrat;
    font-weight: 500;
  }
}
</style>
