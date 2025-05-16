

<template>
  <div class="">
      <nav class="navbar navbar-expand-sm navbar-dark  fixed-top bg-navbar">
      <div class="container-fluid">
        <a class="navbar-brand ms-2 d-flex" href="#">
          <img src="./img-page1/logo.png" alt="" width="40" height="40" class="d-inline-block align-text-top">
          <strong><h5 class="mt-2 ms-1" style="color: black;"> Wit Up Together</h5></strong>
          <!-- <strong><h3 class="mt-1 ms-2"> Wit up together</h3></strong> -->
        </a>
        <!-- <div><strong><h3>Wit Up Together</h3></strong></div> -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="mynavbar">
          <div class="navbar-nav me-auto"></div>
          <form class="d-flex">
            <div class="me-3">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item ">
                  <a class="nav-link" href="#"><img src="./img-page1/line.png" alt="" width="30" height="30" class="d-inline-block align-text-top"></a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="#"><img src="./img-page1/facebook.png" alt="" width="30" height="30" class="d-inline-block align-text-top"></a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="#"><img src="./img-page1/telephone.png" alt="" width="30" height="30" class="d-inline-block align-text-top"></a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="#"><img src="./img-page1/gmail.png" alt="" width="30" height="30" class="d-inline-block align-text-top"></a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="#"><img src="./img-page1/map-pin.png" alt="" width="30" height="30" class="d-inline-block align-text-top"></a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </nav>
  </div>


  <!-- <div class="section-navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTop"
          aria-controls="navbarTop"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTop">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form class="d-flex">
            <button class="btn btn-secondary" type="submit">
              เข้าระบบ
            </button>
          </form>
        </div>
      </div>
    </nav>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom justify-content-center">
      <div class="">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <button class="btn btn-outline-warning" type="submit" >
                <a class="nav-link" href="/">หน้าหลัก</a>
            </button>
            <button class="btn btn-outline-warning" type="submit">
                <a class="nav-link" href="/rooms">ห้อง</a>
            </button>
            <button class="btn btn-outline-warning" type="submit">
                <a class="nav-link" href="/summaryRooms">สรุปค่าห้อง</a>
            </button>
            <button class="btn btn-outline-warning" type="submit">
                <a class="nav-link" href="/history">ประวัติหอพัก</a>
            </button>
         
        </div>
      </div>
    </nav>
  </div> -->
  
</template>
<style scoped>
.font-custom {
  font-family: "IBMPlexSansThaiLooped";
  font-size: 30px;
}
.bg-navbar{
  background-color: rgb(255, 255, 255);
}
</style>


