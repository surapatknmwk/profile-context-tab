<template>
  <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  
  <div id="app" >
    <div class="bg-image" >
      <NavBar/>
      
      <div class="content">
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

.bg-image {
  /* background-image: url('@/assets/bg1.png'); */
  background-color: rgb(148, 185, 255);
  /* height: 40px;
  width: 40px; */
}

.bg-image { 
} 


</style>

