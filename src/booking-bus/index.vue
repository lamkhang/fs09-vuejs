<template>
  <div class="container m-5">
    <div class="row ml-5">
      <div class="col-sm-6">
        <template v-for="(seat, index) in listSeat"  >
          <Seat ref="seat" :seat="seat" :unSeatSelect="unSeatSelect" @bookedSeat="handleBookSeat" :key="`s-${index}`" />
          <br :key="index" v-if="(index+1)%4 === 0"> 
        </template>
        
      </div>
      <div class="col-sm-6">
        <h3>Danh sach dat ghe</h3>
        <div v-for="(seat, index) in listSeatBooked" :key="index">Ghe: {{seat.SoGhe}} {{seat.Gia}}$ <span style="color: red; cursor: pointer" @click="handleCancelSeat(index, seat)">[Huy]</span></div>
        <div>Tong: {{total}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Seat from "./seat";
import data from "./data.json"
export default {
  components: {
    Seat
  },
  data() {
    return {
      listSeat: data,
      listSeatBooked: [],
      unSeatSelect: null
    };
  },
  methods: {
    handleBookSeat(seat) {
      let index = this.listSeatBooked.findIndex(item => {
        return item.SoGhe === seat.SoGhe
      })
      if(index === -1) {
        this.listSeatBooked.push(seat)
      }
      else{
        this.listSeatBooked.splice(index, 1)
      }
      
    },
    handleCancelSeat(index, seat) {
      this.listSeatBooked.splice(index, 1);
      // Cach 1 -- DOM component
      // this.$refs.seat.forEach(item => {
      //   if(item.seat.SoGhe === seat.SoGhe) {
      //     item.isBooked = false
      //   }
      // })
      this.unSeatSelect = seat;
    }
  },
  computed: {
    total() {
      return this.listSeatBooked.reduce((a, b) => {
        return (a += b.Gia)
      }, 0)
    }
  }
};
</script>

<style></style>
