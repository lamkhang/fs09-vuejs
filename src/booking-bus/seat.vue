<template>
  <button style="width: 50px; height: 40px" class="mr-3 mt-3" :class="{'btn-success': isBooked, 'btn-danger': seat.TrangThai}" @click="handleBookSeat(seat)" :disabled="seat.TrangThai" >{{seat.SoGhe}}</button>
</template>

<script>
export default {
  props: [ "seat", "unSeatSelect" ],
  data() {
    return {
      isBooked: false,
    }
  },
  methods: {
    handleBookSeat(seat) {
      this.isBooked = !this.isBooked;
      this.$emit("bookedSeat", seat)
    }
  },
  watch: {
    unSeatSelect() {
      if(this.unSeatSelect.SoGhe === this.seat.SoGhe) {
        this.isBooked = false
      }
    }
  }
}
</script>

<style>

</style>