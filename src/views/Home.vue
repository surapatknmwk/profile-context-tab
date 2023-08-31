

<template>
  <div class="container mt-5">
    <ul
      class="nav nav-tabs"
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
      <li class="nav-item" role="presentation">
        <button
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
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
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
        </button>
      </li>
    </ul>

    <div class="tab-content" id="myTabContent">
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
        class=" card-custom tab-pane fade shadow-lg "
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
      btn2: "text-secondary  nav-link",
      btn3: "text-secondary  nav-link",
      btnActive: "fw-bold text-dark nav-link active",
      btnNotActive: "text-secondary nav-link",
      text_header_brand: "LOGO WIT UP TOGETHER",
      text_tab_1: "Infomation",
      text_tab_2: "Additional",
      text_tab_3: "Calendar",
    };
  },
};
</script>

<style>
.card-custom {
  border-bottom: 1px solid rgb(228, 228, 228);
  border-left: 1px solid rgb(228, 228, 228);
  border-right: 1px solid rgb(228, 228, 228);
  border-top: 1px solid rgb(228, 228, 228);
}
</style>
  


  