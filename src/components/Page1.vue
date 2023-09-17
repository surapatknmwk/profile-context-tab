

<template>
  <div class="row mt-3 font-custom">
    <!-- รูป -->
    <div class="col-md-3 text-start profile-panel" style="border-radius: 5px">
      <div class="text-center">
        <img
          style="border-radius: 5px"
          src="./img-page1/profile1.jpg"
          alt=""
          width="200"
          height="250"
          class="d-inline-block align-text-top"
        />
      </div>
      <div class="mb-4">
        <div style="background: #aa99ff33; border-radius: 5px">
          <div class="row mt-4 text-center">
            <strong class="mt-2">ครูมาเฟียร์</strong>
          </div>
          <div class="row text-center">
            <div class="mb-2">
              <strong>ชื่อ : นางสาววลัยรัตน์ ศรีเมือง</strong>
            </div>
          </div>
        </div>

        <div style="background: #aa99ff33; border-radius: 5px">
          <div class="row mt-3 text-start">
            <div class="m-3 mb-0" href="#">
              <img
                src="./img-page1/telephone.png"
                alt=""
                width="30"
                height="30"
                class="d-inline-block align-text-center me-2"
              /><span>083-7765052</span>
            </div>
          </div>
          <div class="row mt-2 text-start">
            <div class="m-3 mt-0 mb-0" href="#">
              <img
                src="./img-page1/line.png"
                alt=""
                width="30"
                height="30"
                class="d-inline-block align-text-center me-2"
              /><span>Fearya3024</span>
            </div>
          </div>
          <div class="row mt-2">
            <div
              class="m-3 mt-0"
              href="https://www.facebook.com/profile.php?id=100079197422880"
            >
              <img
                src="./img-page1/facebook.png"
                alt=""
                width="30"
                height="30"
                class="d-inline-block align-text-center me-2"
              /><span
                ><a
                  href="https://www.facebook.com/profile.php?id=100079197422880"
                  target="_blank"
                  >วิทย์อัพทูเก็ตเตอร์ติวเตอร์</a
                ></span
              >
            </div>
          </div>
        </div>
        <div style="background: #aa99ff33; border-radius: 5px">
          <div class="row mt-3 p-2" >
          <div >
            จำนวนนักเรียนปัจจุบัน
            <span
              class="badge rounded-pill text-dark"
              style="background-color: #aa99ff"
              >9</span
            >
            คน
          </div>
        </div>
        </div>
        
        <div class="row mt-3">
          <div class="d-grid mx-auto">
            <button type="button" class="btn-custom" @click="btnClick">
              สนใจ
              <font-awesome-icon
                class="mt-1"
                :icon="['fas', 'bookmark']"
                beat-fade
                style="color: #ffc800"
              />
            </button>
          </div>
        </div>

       
      </div>
    </div>
    <!-- ติดต่อ -->
    <div class="col-md-4 mb-4">
      <div class=" mb-4">
          <span class="topic-cs-text"
            ><strong>สาขาวิทยาศาสตร์ทั่วไป (วิชาเอก)</strong></span
          >
          <hr class="hr" />
          <p class="mt-2">
            <span class="badge rounded-pill bg-primary me-2"> ชีวะ </span>
            <span class="badge rounded-pill bg-warning text-dark me-2">
              เคมี
            </span>
            <span class="badge rounded-pill bg-info text-dark me-2">
              ไฟฟ้า
            </span>
          </p>
        </div>
      <div class="text-start">
        <div>
          <div class="topic-cs"></div>
          <span class="topic-cs-text" style="z-index: 1; position: relative"
            ><strong>ลักษณะการเรียน</strong></span
          >
          <hr class="hr" />
          <div class="mb-3">
            <div>
              ราคา :
              <span class="badge text-dark" style="background-color: #beffe4"
                >120.0</span
              >
              ต่อ / 1 ชม.
            </div>
            <div>
              ราคา :
              <span class="badge text-dark" style="background-color: #beffe4"
                >950.0</span
              >
              ต่อ / 10 ชม.
            </div>
          </div>
          <div><span>- สอนผ่านโปรแกรม Zoom / Google Meet </span></div>
          <div><span>- ผู้เรียนสามารถเลือกเนื้อหาที่ต้องการสอนได้</span></div>
          <div>
            <span
              >- ผู้เรียนจำเป็นที่จะต้องมีเครื่องมือช่วยในการเรียนรู้ เช่น
              Notebook, Computer, Ipad,</span
            >
          </div>
          <div><span> Tablet, โทรศัพท์มือถือ ฯ</span></div>
        </div>

        <div class="mt-4">
          <div class="topic-cs"></div>
          <span class="topic-cs-text" style="z-index: 1; position: relative"
            ><strong>คอร์สเรียน</strong></span
          >
          <hr class="hr" />
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
    <!-- ประวัติ -->
    <div class="col-md-5">
      <div class="text-start">
        <div class="topic-cs"></div>
        <span class="topic-cs-text" style="z-index: 1; position: relative"
          ><strong>ประวัติผู้สอน</strong></span
        >
        <hr class="hr" />
        <div>
          <span>- จบการศึกษาระดับปริญญาตรี มหาวิทยาลัยราชภัฏสกลนคร </span
          ><span
            class="badge rounded-pill text-dark"
            style="background-color: #fff7ad"
          >
            (เกียตรินยมอันดับ 1)</span
          >
        </div>
        <div>
          <span>- คณะครุศาสตร์ </span><span> สาขาวิชาวิทยาศาสตร์ทั่วไป</span>
        </div>
        <div><span>- สำเร็จปีการศึกษา </span><span> 2566</span></div>
        <div>
          <span
            >-
            <span
              class="badge rounded-pill text-dark"
              style="background-color: #fff7ad"
              >ผ่านการสอบคัดเลือกบรรจุครูผู้ช่วย</span
            > </span
          ><span> สพป.ขอนแก่น</span><span> เขต</span><span> 1 </span
          ><span> ปี </span><span> 2566 </span>
        </div>
        <div><span>- ประสบการณ์สอนมากกว่า 4 ปี</span></div>
        <div>
          <span
            >-
            <span
              class="badge rounded-pill text-dark"
              style="background-color: #fff7ad"
              >มีใบอนุญาตประกอบวิชาชีพครู</span
            ></span
          >
        </div>
        <div>
          <span
            >-
            <span
              class="badge rounded-pill text-dark"
              style="background-color: #fff7ad"
              >เรียนจิตวิทยาเกี่ยวกับกับสอนเด็ก</span
            ></span
          >
        </div>
        <div><span>- ภูมิลำเนาอยู่ที่ จ.สกลนคร</span></div>
      </div>

      <div class="mt-4">
        <div class="topic-cs"></div>
        <span class="topic-cs-text" style="z-index: 1; position: relative"
          ><strong>สิ่งที่ผู้เรียนจะได้รับ</strong></span
        >
        <hr class="hr" />
        <div>
          <span
            >-
            <span
              class="badge rounded-pill text-dark"
              style="background-color: #fff7ad"
              >เทคนิคการฝึกจำ</span
            ></span
          >
        </div>
        <div>
          <span
            >-
            <span
              class="badge rounded-pill text-dark"
              style="background-color: #fff7ad"
              >เน้นสอนให้นักเรียนเข้าใจ</span
            ></span
          >
        </div>
        <div><span>- ฝึกวิเคราะห์โจทย์</span></div>
        <div><span>- เอกสารในการเรียน</span></div>
        <div><span>- ลดเวลาเกมเพิ่มเวลารู้</span></div>
        <div><span>- ใช้เวลาว่างให้เกิดประโยชน์</span></div>
      </div>
    </div>
  </div>

  <div class="row text-start mt-3">
    <div class="col-md-12">
      <div class="topic-cs-1"></div>
      <span class="topic-cs-text" style="z-index: 1; position: relative"
        ><strong>บรรยากาศการสอน</strong></span
      >
      <hr class="hr-1" />
    </div>
  </div>

  <div class="row mt-3">
    <div class="col-md-4 text-center">
      <img
        style="border-radius: 10px; border: solid #c9a0ff 3px"
        src="./img-page1/p1.jpg"
        alt=""
        width="300"
        height="400"
        class="d-inline-block align-text-center me-2 img-cs"
      />
    </div>
    <div class="col-md-4 text-center">
      <img
        style="border-radius: 10px; border: solid #c9a0ff 3px"
        src="./img-page1/p4.jpg"
        alt=""
        width="300"
        height="400"
        class="d-inline-block align-text-center me-2 img-cs"
      />
    </div>
    <div class="col-md-4 text-center">
      <img
        style="border-radius: 10px; border: solid #c9a0ff 3px"
        src="./img-page1/p3.jpg"
        alt=""
        width="300"
        height="400"
        class="d-inline-block align-text-center me-2 img-cs"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      objs: {
        contect: [
          { name: "ครูมาเฟียร์" },
          { fullName: "นางสาววลัยรัตน์ ศรีเมือง" },
          { tel: "083-7765052" },
          { line: "Fearya3024น." },
          { facebook: "วิทย์อัพทูเก็ตเตอร์ติวเตอร์" },
          { major_main: "สาขาวิทยาศาสตร์ทั่วไป" },
          { major_sub_1: "ชีวะ" },
          { major_sub_2: "เคมี" },
          { major_sub_3: "ไฟฟ้า" },
          { num_person: "9" },
          { btn_follow: "สนใจ" },
        ],
        topic_1: [
          { topic: "ลักษณะการเรียน" },
          { price_hrs: "120.0" },
          { price_cost: "950.0" },
          { text_1: "สอนผ่านโปรแกรม Zoom / Google Meet" },
          { text_2: "ผู้เรียนสามารถเลือกเนื้อหาที่ต้องการสอนได้" },
          {
            text_3:
              "ผู้เรียนจำเป็นที่จะต้องมีเครื่องมือช่วยในการเรียนรู้ เช่น Notebook, Computer,Ipad,Tablet,โทรศัพท์มือถือ ฯ",
          },
        ],
        topic_2: [
          { topic: "คอร์สเรียน" },
          { text_1: "เนื้อหาวิทยาศาสตร์ ระดับประถมศึกษาปีที่ 1-6" },
          { text_2: "เนื้อหาวิทยาศาสตร์ ระดับมัธยมศึกษาปีที่ 1-3" },
          { text_3: "ติวสอบกลางภาค/ปลายภาค" },
          { text_4: "ทบทวนเนื้อหาวิชาวิทยาศาสตร์" },
          { text_5: "ปรับพื้นฐานวิชาวิทยาศาสตร์ ป.1-ม.3" },
          { text_6: "ต้องการเพิ่มคะแนนในการเรียน" },
          { text_7: "เตรียมสอบเข้า ม.1,ม.3" },
          { text_8: "เตรียมสอบ O-Net ป.6, ม.3" },
          { text_9: "เตรียมสอบ O-Net ป.6, ม.3" },
        ],
        topic_3: [
          { topic: "ประวัติผู้สอน" },
          { text_1: "จบการศึกษาระดับปริญญาตรี มหาวิทยาลัยราชภัฏสกลนคร" },
          { text_2: "เกียตรินยมอันดับ 1" },
          { text_3: "คณะครุศาสตร์ สาขาวิชาวิทยาศาสตร์ทั่วไป" },
          { text_4: "สำเร็จปีการศึกษา 2566" },
          { text_5: "ผ่านการสอบคัดเลือกบรรจุครูผู้ช่วย" },
          { text_6: "สพป.ขอนแก่น เขต 1 ปี 2566" },
          { text_7: "ประสบการณ์สอนมากกว่า 4 ปี" },
          { text_8: "มีใบอนุญาตประกอบวิชาชีพครู" },
          { text_9: "เรียนจิตวิทยาเกี่ยวกับกับสอนเด็ก" },
          { text_10: "ภูมิลำเนาอยู่ที่ จ.สกลนคร" },
        ],
        topic_4: [
          { topic: "สิ่งที่ผู้เรียนจะได้รับ" },
          { text_1: "เทคนิคการฝึกจำ" },
          { text_2: "เน้นสอนให้นักเรียนเข้าใจ" },
          { text_3: "ฝึกวิเคราะห์โจทย์" },
          { text_4: "เอกสารในการเรียน" },
          { text_5: "ลดเวลาเกมเพิ่มเวลารู้" },
          { text_6: "ใช้เวลาว่างให้เกิดประโยชน์" },
        ],
      },
    };
  },
  methods: {
    btnClick: function (event) {
      window.open("https://www.facebook.com/profile.php?id=100079197422880");
    },
  },
};
</script>

<style>
.profile-panel {
}
.topic-cs-text {
  color: #9e3fbb;
}
.topic-cs {
  border-right: 30px solid transparent;
  position: absolute;
  width: 200px;
  z-index: 0;
}
.topic-cs-1 {
  border-right: 30px solid transparent;
  position: absolute;
  width: 200px;
  z-index: 0;
}
.btn-custom {
  background: #aa99ff;
  border: solid #aa99ff 1px;
  border-radius: 50px;
  padding: 5px;
  transition: 100ms;
  color: #292929;
}

.btn-custom:hover {
  transition: 100ms;
  background: #8572e7;
  border: solid #8572e7 1px;
  border-radius: 2px;
  padding: 5px;
  color: #292929;
  box-shadow: rgba(0, 0, 0, 0.404) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.397) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}

.img-cs {
  box-shadow: rgba(0, 0, 0, 0.479) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.397) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.151) 0px 0px 0px 5px inset;
  margin-bottom: 20px;
}

.hr {
  color: #8427ff;
  border-top: 2px solid;
  margin-bottom: 10px;
  margin-top: 1px;
}
.hr-1 {
  color: #8427ff;
  border-top: 2px solid;
  margin-bottom: 10px;
  margin-top: 1px;
}
</style>