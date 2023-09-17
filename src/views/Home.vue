

<template>
  <div class="container mt-5 font-custom ">
    <ul
      class="nav nav-tabs ms-4"
      style="border-bottom: none"
      id="myTab"
      role="tablist"
    >
      <li class="nav-item" role="presentation">
        <button
          :class="btn1"
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#home"
          type="button"
          role="tab"
          aria-controls="home"
          aria-selected="true"
          @click="
              activeStep = 'Page1';
              btn1 = btnActive;
              btn2 = btnNotActive;
              btn3 = btnNotActive;
            "
        >
          {{ text_tab_1 }}
        </button>
      </li>
      <li class="nav-item" role="presentation" >
        <button style="margin-left: 2px;"
          :class="btn3"
          id="contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#contact"
          type="button"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
          @click="
              activeStep = 'Page3';
              btn1 = btnNotActive;
              btn2 = btnNotActive;
              btn3 = btnActive;
            "
        >
        {{ text_tab_3 }} 
        <!-- <font-awesome-icon :icon="['fas', 'calendar-days']" style="color: #474747;" /> -->
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button style="margin-left: 2px;"
          :class="btn2"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
          @click="
              activeStep = 'Page2';
              btn1 = btnNotActive;
              btn2 = btnActive;
              btn3 = btnNotActive;
            "
        >
          {{ text_tab_2 }}
          <!-- <font-awesome-icon :icon="['fas', 'puzzle-piece']" style="color: #474747;" /> -->
        </button>
      </li>
    </ul>

    <div class="tab-content " id="myTabContent">
      <div
        class=" card-custom tab-pane fade show active shadow-lg p-5"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <Page1 v-if="activeStep === 'Page1'" />
      </div>
      <div
        class="card-custom tab-pane fade shadow-lg "
        
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <Page2 v-if="activeStep === 'Page2'" />
      </div>
      <div
        class="card-custom tab-pane fade shadow-lg mb-5 pt-5 p-3"
        id="contact"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <Page3 v-if="activeStep === 'Page3'" />
      </div>
    </div>
  </div>
  
</template>

<script>
import Page1 from "@/components/Page1.vue";
import Page2 from "@/components/Page2.vue";
import Page3 from "@/components/Page3.vue";

export default {
  components: {
    Page1,
    Page2,
    Page3,
  },
  data() {
    return {
      activeStep: "Page1",
      btn1: "fw-bold text-dark nav-link active",
      btn2: "text-dark  nav-link-cs",
      btn3: "text-dark  nav-link-cs",
      btnActive: "fw-bold text-dark nav-link active",
      btnNotActive: "text-dark nav-link-cs",
      text_header_brand: "LOGO WIT UP TOGETHER",
      text_tab_1: "ข้อมูลผู้สอน",
      text_tab_2: "สื่อ",
      text_tab_3: "ปฏิทิน",
    };
  },
};
</script>

<style>
.card-custom {
  background: white;
  border-bottom: 1px solid rgb(228, 228, 228);
  border-left: 1px solid rgb(228, 228, 228);
  border-right: 1px solid rgb(228, 228, 228);
  border-top: 1px solid rgb(228, 228, 228);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.font-custom {
  font-family: "IBMPlexSansThaiLooped";
  font-size: 18px;
}

.nav-link-cs {
  background-color: rgb(237 237 237 / 44%);
  /* display: block; */
    padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
    font-size: 15px;
    font-weight: var(--bs-nav-link-font-weight);
    color: var(--bs-nav-link-color);
    text-decoration: none;
    border: 0;
    margin-top: 8px;
    padding-bottom: 3px;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
    border: var(--bs-nav-tabs-border-width) solid transparent;
    border-top-left-radius: var(--bs-nav-tabs-border-radius);
    border-top-right-radius: var(--bs-nav-tabs-border-radius);
    

}
</style>
  


  