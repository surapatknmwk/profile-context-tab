<template>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  
  <div id="app" >
    <div class="bg-image " >
      <NavBar/>
      <div class="content pb-5 pt-5">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script >

import NavBar from "@/components/NavBar";

export default {
  components: {
    NavBar
  }
};
</script>

<style scoped>



@font-face {
  font-family: 'IBMPlexSansThaiLooped';
  src: local("IBMPlexSansThaiLooped"),url('~@/assets/font/IBMPlexSansThaiLooped-Regular.ttf') format('truetype');
  /* font-family: 'thsarabun';
  src: local("thsarabun"),url('~@/assets/font/thsarabun.ttf') format('truetype'); */
}

.bg-image{
  background-image: linear-gradient(88deg, #0d00cc59 0%, #cc005559 100%);
  width: 100%;
  height: auto;
}




</style>

