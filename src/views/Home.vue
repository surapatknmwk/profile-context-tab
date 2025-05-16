<template>
  <div class="bg-bk ">
    <div class="container mt-4 font-custom ">
      <div class="row mt-5"></div>
      <div class="row mt-5"></div>
      <div class="row mt-5" style="">
        <div class="col-md-6 mt-5">
          <div class="row">
            <h1 class="fw-bold typewriter" style="font-family: Arial, Helvetica, sans-serif; color: #31a7a7;">
              <span v-for="(char, index) in letters" :key="index" class="letter"
                :style="{ animationDelay: `${index * 0.1}s` }">
                {{ char === ' ' ? '\u00A0' : char }}
              </span>
            </h1>
          </div>
          <div class="row mt-4">
            <h3>สอนพิเศษออนไลน์ วิชาวิทยาศาสตร์</h3>
          </div>
          <div class="row">
            <h6>ประสบการณ์สอนมากว่า 5 ปี </h6>
            <h6>สอนเข้าใจง่าย ฝึกวิเคราะห์ ใช้เวลาว่างให้เกิดประโยชน์</h6>
          </div>
          <div class="row mt-3">
            <div class="col-md-3 d-grid gap-2">
              <button type="button" class="btn-1">ติดต่อ</button>
            </div>
            <div class="col-md-3 d-grid gap-2">
              <button type="button" class="btn-2">รายละเอียด</button>
            </div>
          </div>
        </div>
        <div class="col-md-6 text-center">
          <img style="border-radius: 5px" src="../components/img-page1/person-1.gif" alt="" width="450" height="500"
            class="d-inline-block align-text-top" />
        </div>
      </div>

    </div>
  </div>

  <div class="container font-custom" style="margin-top: 100px;">
    <div class="row justify-content-center">
      <div class="col-md-5 text-center">
        <img style="border-radius: 5px" src="../components/img-page1/person-1.gif" alt="" width="250" height="280"
          class="d-inline-block align-text-top" />
      </div>
      <div class="col-md-7 text-start mt-4">
        <div><span>
            <h3><strong>สาขาวิทยาศาสตร์ทั่วไป (วิชาเอก)</strong></h3>
          </span></div>
        <div><span>ชีวะ เคมี ไฟฟ้า</span></div>
        <div><span>- สอนผ่านโปรแกรม Zoom / Google Meet</span></div>
        <div><span>- ผู้เรียนสามารถเลือกเนื้อหาที่ต้องการสอนได้</span></div>
        <div><span>- ผู้เรียนจำเป็นที่จะต้องมีเครื่องมือช่วยในการเรียนรู้ เช่น Notebook, Computer, Ipad, Tablet,
            โทรศัพท์มือถือ ฯ</span></div>

        <div class="mt-4"><span>
            <h3><strong>คอร์สเรียน</strong></h3>
          </span></div>
        <div><span>- เนื้อหาวิทยาศาสตร์ ระดับประถมศึกษาปีที่ 1-6</span></div>
        <div><span>- เนื้อหาวิทยาศาสตร์ ระดับมัธยมศึกษาปีที่ 1-3</span></div>
        <div><span>- ติวสอบกลางภาค/ปลายภาค</span></div>
        <div><span>- ทบทวนเนื้อหาวิชาวิทยาศาสตร์</span></div>
        <div><span>- ปรับพื้นฐานวิชาวิทยาศาสตร์ ป.1-ม.3</span></div>
        <div><span>- ต้องการเพิ่มคะแนนในการเรียน</span></div>
        <div><span>- เตรียมสอบเข้า ม.1,ม.3</span></div>
        <div><span>- เตรียมสอบ O-Net ป.6, ม.3</span></div>
        <div><span>- สอนการบ้าน</span></div>
      </div>
    </div>

  </div>


  <div class="container font-custom mt-4">
    <div class="row justify-content-start">
      <div class="col-md-4 text-start ">
        <div><span>
            <h3><strong>สิ่งที่ผู้เรียนจะได้รับ</strong></h3>
          </span></div>
        <div><span>- เทคนิคการฝึกจำ เน้นสอนให้นักเรียนเข้าใจ</span></div>
        <div><span>- ฝึกวิเคราะห์โจทย์ เอกสารในการเรียน</span></div>
        <div><span>- ลดเวลาเกมเพิ่มเวลารู้</span></div>

      </div>
      <div class="col-md-4 text-center mt-5">
        <img style="border-radius: 5px" src="../components/img-page1/person-1.gif" alt="" width="250" height="280"
          class="d-inline-block align-text-top" />
      </div>
      <div class="col-md-4 text-start mt-5">
        <div><span>
            <h3><strong>ประวัติผู้สอน</strong></h3>
          </span></div>
        <div><span>- จบการศึกษาระดับปริญญาตรี มหาวิทยาลัยราชภัฏสกลนคร (เกียตรินยมอันดับ 1)</span></div>
        <div><span>- คณะครุศาสตร์ สาขาวิชาวิทยาศาสตร์ทั่วไป</span></div>
        <div><span>- สำเร็จปีการศึกษา 2566</span></div>
        <div><span>- ผ่านการสอบคัดเลือกบรรจุครูผู้ช่วย</span></div>
        <div><span>- ประสบการณ์สอนมากกว่า 4 ปี</span></div>
        <div><span>- มีใบอนุญาตประกอบวิชาชีพครู</span></div>
        <div><span>- เรียนจิตวิทยาเกี่ยวกับกับสอนเด็ก</span></div>
      </div>
    </div>

  </div>

  <div class="container font-custom" style="margin-top: 100px;">
    <div><span>
        <h3><strong>บรรยากาศการสอน</strong></h3>
      </span></div>
    <img style="border-radius: 5px; margin: 10px;" src="../components/img-page1/p1.jpg" alt="" width="250" height="300"
      class="d-inline-block align-text-top" />
    <img style="border-radius: 5px; margin: 10px;" src="../components/img-page1/p2.jpg" alt="" width="250" height="300"
      class="d-inline-block align-text-top" />
    <img style="border-radius: 5px; margin: 10px;" src="../components/img-page1/p3.jpg" alt="" width="250" height="300"
      class="d-inline-block align-text-top" />
    <img style="border-radius: 5px; margin: 10px;" src="../components/img-page1/p4.jpg" alt="" width="250" height="300"
      class="d-inline-block align-text-top" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const text = "WIT UP TOGETHER"
const letters = ref(text.split(''))
</script>

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
.bg-bk {
  background-color: rgb(234, 248, 255);
  background: linear-gradient(to bottom, #ffffff 0%, #cdf5ff 100%);
}

.letter {
  opacity: 0;
  display: inline-block;
  animation: showLetter 0.5s forwards;
}

@keyframes showLetter {
  to {
    opacity: 1;
  }
}

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
  color: #3f3f3f;
}

.nav-link-cs {
  background-color: rgb(237 237 237 / 44%);
  padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
  font-size: 15px;
  font-weight: var(--bs-nav-link-font-weight);
  color: var(--bs-nav-link-color);
  text-decoration: none;
  border: 0;
  margin-top: 8px;
  padding-bottom: 3px;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out;
  border: var(--bs-nav-tabs-border-width) solid transparent;
  border-top-left-radius: var(--bs-nav-tabs-border-radius);
  border-top-right-radius: var(--bs-nav-tabs-border-radius);
}

.btn-1 {
  background-color: #31a7a7;
  color: white;
  border-radius: 0px;
  border: #31a7a7;
  padding: 10px;
  /* margin: 5px; */
}

.btn-1:hover {
  background-color: #2c9797;
}

.btn-2 {
  background-color: #31a7a700;
  color: #31a7a7;
  padding: 10px;
  border-style: solid;
  border-color: #31a7a7;
}

.btn-2:hover {
  background-color: #31a7a7;
  color: #ffffff;
}

strong {
  color: #31a7a7;
}
</style>