<template>
    <div>
    <table class="table table-bordered ">
      <thead>
        <tr class="table-light">
          <th>เวลา/ชม.</th>
          <th>จ.</th>
          <th>อ.</th>
          <th>พ.</th>
          <th>พฤ.</th>
          <th>ศ.</th>
          <th>ส.</th>
          <th>อท.</th>
        </tr>
      </thead>
      <tbody>
      <!-- <tr v-for="item in items" :key='item'>
        <th class="table-light">{{ item.time }}</th>
        <td><font-awesome-icon v-if="item.mo!='-'" :icon="['fas', 'user']"/>{{ item.mo }}</td>
        <td><font-awesome-icon v-if="item.tu!='-'" :icon="['fas', 'user']"/>{{ item.tu }}</td>
        <td><font-awesome-icon v-if="item.we!='-'" :icon="['fas', 'user']"/>{{ item.we }}</td>
        <td><font-awesome-icon v-if="item.th!='-'" :icon="['fas', 'user']"/>{{ item.th }}</td>
        <td><font-awesome-icon v-if="item.fr!='-'" :icon="['fas', 'user']"/>{{ item.fr }}</td>
        <td><font-awesome-icon v-if="item.sa!='-'" :icon="['fas', 'user']"/>{{ item.sa }}</td>
        <td><font-awesome-icon v-if="item.su!='-'" :icon="['fas', 'user']"/>{{ item.su }}</td>
      </tr> -->
      <tr v-for="time in objs.times" :key="time">
        <td class="table-light">{{ time.time }}</td>
        <td  v-for="day in objs.datas" :key="day">
          <span v-if="day.week=='mo' && day.time==time.key"><font-awesome-icon v-if="day.week=='mo' && day.time==time.key" :icon="['fas', 'user']"/>{{ day.personal }}</span>
          <span v-if="day.week=='tu' && day.time==time.key"><font-awesome-icon v-if="day.week=='tu' && day.time==time.key" :icon="['fas', 'user']"/>{{ day.personal }}</span>
          <span v-if="day.week=='we' && day.time==time.key"><font-awesome-icon v-if="day.week=='we' && day.time==time.key" :icon="['fas', 'user']"/>{{ day.personal }}</span>
          <span v-if="day.week=='th' && day.time==time.key"><font-awesome-icon v-if="day.week=='th' && day.time==time.key" :icon="['fas', 'user']"/>{{ day.personal }}</span>
          <span v-if="day.week=='fr' && day.time==time.key"><font-awesome-icon v-if="day.week=='fr' && day.time==time.key" :icon="['fas', 'user']"/>{{ day.personal }}</span>
          <span v-if="day.week=='sa' && day.time==time.key"><font-awesome-icon v-if="day.week=='sa' && day.time==time.key" :icon="['fas', 'user']"/>{{ day.personal }}</span>
          <span v-if="day.week=='su' && day.time==time.key"><font-awesome-icon v-if="day.week=='su' && day.time==time.key" :icon="['fas', 'user']"/>{{ day.personal }}</span>
        </td> 
      </tr>
  </tbody>
    </table>
  </div>
</template>

<script>


export default {
  components: {
    
  },
  data: function() {
    return {
      items: [
          {  time: "09.00 น.",mo: "-", tu: '-', we: '-', th: '-', fr: '-', sa: "N'b", su: "N'a"  },
          {  time: "10.00 น.",mo: "-", tu: '-', we: '-', th: '-', fr: '-', sa: "N'b", su: "N'a"  },
          {  time: "11.00 น.",mo: "-", tu: '-', we: '-', th: '-', fr: '-', sa: "N'b", su: "N'a"  },
          {  time: "12.00 น.",mo: "-", tu: '-', we: '-', th: '-', fr: '-', sa: "-", su: "-"  },
          {  time: "13.00 น.",mo: "-", tu: '-', we: '-', th: '-', fr: '-', sa: "-", su: "-"  },
          {  time: "14.00 น.",mo: "-", tu: '-', we: '-', th: '-', fr: '-', sa: "-", su: "-"  },
          {  time: "15.00 น.",mo: "-", tu: '-', we: '-', th: '-', fr: '-', sa: "-", su: "-"  },
          {  time: "16.00 น.",mo: "-", tu: '-', we: '-', th: '-', fr: '-', sa: "-", su: "-"  },
          {  time: "17.00 น.",mo: "-", tu: "-", we: "-", th: "N'c", fr: "N'a", sa: "-", su: "-"  },
          {  time: "18.00 น.",mo: "N'a", tu: "N'c", we: "N'c", th: "N'c", fr: "N'a", sa: "-", su: "-"  },
          {  time: "19.00 น.",mo: "-", tu: '-', we: '-', th: '-', fr: "-", sa: "-", su: "-"  },
          {  time: "20.00 น.",mo: "-", tu: '-', we: '-', th: '-', fr: "-", sa: "-", su: "-"  },
        ],
        objs:{
          times:[
            {time: "09.00 น.",key:"09"},
            {time: "10.00 น.",key:"10"},
            {time: "11.00 น.",key:"11"},
            {time: "12.00 น.",key:"12"},
            {time: "13.00 น.",key:"13"},
            {time: "14.00 น.",key:"14"},
            {time: "15.00 น.",key:"15"},
            {time: "16.00 น.",key:"16"},
            {time: "17.00 น.",key:"17"},
            {time: "18.00 น.",key:"18"},
            {time: "19.00 น.",key:"19"},
            {time: "20.00 น.",key:"20"}
          ],
          datas:[
            {day:"1",week:"mo",moth:"8",time:"11",personal:"N'o"},
            {day:"2",week:"tu",moth:"8",time:"13",personal:"N'p"},
            {day:"3",week:"we",moth:"8",time:"11",personal:"N'u"},
            {day:"4",week:"th",moth:"8",time:"11",personal:"N'u"},
            {day:"5",week:"fr",moth:"8",time:"11",personal:"N'u"},
            {day:"6",week:"sa",moth:"8",time:"16",personal:"N'u"},
            {day:"7",week:"su",moth:"8",time:"17",personal:"N'u"}
            // {day:"8",week:"mo",moth:"8",time:"11",personal:"N'u"},
            // {day:"9",week:"tu",moth:"8",time:"11",personal:"N'u"},
            // {day:"10",week:"we",moth:"8",time:"11",personal:"N'u"}
          ]
        }
        
    }
  },
  
  methods: {
    
  }

}

</script>