<template>
  <div class="table-responsive-md mb-4 ">
    <div><strong>คาบเรียนเด็ก ๆ ในแต่ละสัปดาห์คะ 🥰</strong></div>
    <div>***ปกติแล้ว ยึดคาบเรียน วัน-เวลา ดังตารางที่แสดงคะ แต่ในกรณีที่ต้องการเปลี่ยน วัน-เวลาการสอน อาจจะรบกวนแจ้งให้ทราบด้วยนะคะ 👌😉</div>
    <table class="table table-bordered table-responsive">
      <thead >
        <tr class="table-light" >
          <th>เวลา/วัน</th>
          <th style="background: rgb(229 63 0 / 55%)">จ.</th>
          <th style="background: rgb(229 63 0 / 55%)">อ.</th>
          <th style="background: rgb(229 63 0 / 55%)">พ.</th>
          <th style="background: rgb(229 63 0 / 55%)">พฤ.</th>
          <th style="background: rgb(229 63 0 / 55%)">ศ.</th>
          <th style="background: rgb(229 63 0 / 55%)">ส.</th>
          <th style="background: rgb(229 63 0 / 55%)">อท.</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="time in objs.times" :key="time">
          <td class="table-light" style="font-size: 15px; background: #009be58c;">{{ time.time }}</td>

          <td v-for="weekDay in objs.day" :key="weekDay">
            <div v-for="day in objs.datas" :key="day">
              <span style="font-size: 15px" v-if="checkData(
                day.week,
                weekDay.key,
                day.time,
                time.key,
                day.personal
              )
                ">
                <font-awesome-icon :class="day.color"  v-if="checkData(
                  day.week,
                  weekDay.key,
                  day.time,
                  time.key,
                  day.personal
                )
                  " :icon="['fas', 'user']" />
                {{ day.personal }}
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  components: {},
  mounted() {
    const removeDuplct = this.objs.datas.filter((obj, index) => {return index === this.objs.datas.findIndex(o => obj.personal === o.personal);});

    const lists = [];
    let count = 0;
    removeDuplct.forEach((item) => {
            item.color = this.objs.color_per[count].class;
            count++;
            lists.push(item);
    });

    this.objs.datas.forEach((item) => {
      let index = lists.find((obj) => obj.personal === item.personal);
      item.color = index.color;
    });
  },
  data: function () {
    return {
      objs: {
        times: [
          { time: "09.00 น.", key: "09" },
          { time: "10.00 น.", key: "10" },
          { time: "11.00 น.", key: "11" },
          { time: "12.00 น.", key: "12" },
          { time: "13.00 น.", key: "13" },
          { time: "14.00 น.", key: "14" },
          { time: "15.00 น.", key: "15" },
          { time: "16.00 น.", key: "16" },
          { time: "17.00 น.", key: "17" },
          { time: "18.00 น.", key: "18" },
          { time: "19.00 น.", key: "19" },
          { time: "20.00 น.", key: "20" },
        ],
        day: [
          { key: "mo" },
          { key: "tu" },
          { key: "we" },
          { key: "th" },
          { key: "fr" },
          { key: "sa" },
          { key: "su" },
        ],
        datas: [
          {
            day: "1",
            week: "mo",
            moth: "8",
            time: "19",
            personal: "N'สองขวัญ",
            color: "",
          },
          {
            day: "2",
            week: "tu",
            moth: "8",
            time: "17",
            personal: "N'sony",
            color: "",
          },
          {
            day: "2",
            week: "tu",
            moth: "8",
            time: "19",
            personal: "N'auto",
            color: "",
          },
          {
            day: "3",
            week: "we",
            moth: "8",
            time: "19",
            personal: "N'ปุ๊ปปั๊ป",
            color: "",
          },
          {
            day: "4",
            week: "th",
            moth: "8",
            time: "17",
            personal: "N'sony",
            color: "",
          },
          {
            day: "4",
            week: "th",
            moth: "8",
            time: "19",
            personal: "N'auto",
            color: "",
          },
          {
            day: "5",
            week: "fr",
            moth: "8",
            time: "18",
            personal: "N'ปาล์ม",
            color: "",
          },
          {
            day: "5",
            week: "fr",
            moth: "8",
            time: "17",
            personal: "N'อชิ",
            color: "",
          },
          {
            day: "5",
            week: "fr",
            moth: "8",
            time: "19",
            personal: "N'auto",
            color: "",
          },
          {
            day: "6",
            week: "sa",
            moth: "8",
            time: "10",
            personal: "N'pj",
            color: "",
          },
          {
            day: "6",
            week: "sa",
            moth: "8",
            time: "11",
            personal: "N'อชิ",
            color: "",
          },
          {
            day: "6",
            week: "sa",
            moth: "8",
            time: "15",
            personal: "N'โจชิ",
            color: "",
          },
          {
            day: "7",
            week: "su",
            moth: "8",
            time: "10",
            personal: "N'pj",
            color: "",
          },
          {
            day: "7",
            week: "su",
            moth: "8",
            time: "14",
            personal: "N'pun",
            color: "",
          },
          {
            day: "7",
            week: "su",
            moth: "8",
            time: "15",
            personal: "N'auto",
            color: "",
          },
        ],
        color_per:[
        {class:"color-user-1"}, 
        {class:"color-user-2"}, 
        {class:"color-user-3"}, 
        {class:"color-user-4"}, 
        {class:"color-user-5"}, 
        {class:"color-user-6"}, 
        {class:"color-user-7"}, 
        {class:"color-user-8"}, 
        {class:"color-user-9"}],
      },
    };
  },

  methods: {
    checkData(dataWeek, tbWeek, dataTime, tbTime, dataPer) {
      const result = false;
      if (dataWeek == tbWeek && dataTime == tbTime) {
        return true;
      }
      return result;
    },
  },
};
</script>
<style>
.color-user-1 {
  color: rgb(255, 0, 64);
}
.color-user-2 {
  color: rgb(255, 0, 170);
}
.color-user-3 {
  color: rgb(4, 0, 255);
}
.color-user-4 {
  color: rgb(0, 238, 255);
}
.color-user-5 {
  color: rgb(0, 255, 42);
}
.color-user-6 {
  color: rgb(229, 255, 0);
}
.color-user-7 {
  color: rgb(255, 123, 0);
}
.color-user-8 {
  color: rgb(85, 87, 255);
}
.color-user-9 {
  color: rgb(0, 131, 87);
}
</style>