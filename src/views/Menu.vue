<template>
<div class="home">
    <div class="container self-center inner-center ">
        <div class="menu-container self-center">
            <div class="card card-container inner-center"><img src="@/assets/icon\home/商品.png" class="menu-img"><div class="menu-text">商品管理</div></div>
            <div class="card card-container inner-center"><img src="@/assets/icon\home/订单.png" class="menu-img"><div class="menu-text">订单管理</div></div>
            <div class="card card-container inner-center"><img src="@/assets/icon\home/爬虫.png" class="menu-img"><div class="menu-text">爬虫列表</div></div>
            <div class="card card-container inner-center"><img src="@/assets/icon\home/设置.png" class="menu-img"><div class="menu-text">账号设置</div></div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">

</script>

<style>
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
  .menu-container {
    display: grid;
    grid-column-gap: 60px;
    grid-template-columns: auto auto;
    grid-row-gap:50px;
  }
  .card-container {
    width: 200px;
    height: 200px;
    padding: 10px;
    border-radius: 10px;
  } 
  .menu-img {
   width: 150px;
   height: 150px;
   margin:auto;
   margin-bottom: 0px;
  }
  .menu-text {
   background:transparent;
   border: 0;
   margin-top: 0;
   margin:auto;
   margin-top: 0px;
   font-size: 20px;
   font-family: Montserrat;
   font-weight: 600;
   color: rgb(42, 26, 42);
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
  .menu-container {
    display: grid;
    grid-column-gap: 25px;
    grid-template-columns: auto auto;
    grid-row-gap:25px;
  }
  .card-container {
    width: 130px;
    height: 130px;
    padding: auto;
    border-radius: 7px;
  } 
  .menu-img {
   width: 80px;
   height: 80px;
   margin: auto;
   margin-bottom: 0px;
  }
  .menu-text {
   background:transparent;
   border: 0;
   margin-top: 0;
   margin:auto;
   margin-top: 0px;
   font-size: 16px;
   font-family: Montserrat;
   font-weight: 600;
   color: rgb(42, 26, 42);
  }
}
</style>