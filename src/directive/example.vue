<template>
  <div class="container">
    <div class="form-group">
      <label for="exampleInputEmail1">Ma SP</label>
      <input
        type="text"
        class="form-control"
        id="maSP"
        placeholder="Enter Ma SP"
        ref="maSP"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Ten SP</label>
      <input
        type="text"
        class="form-control"
        id="tenSP"
        placeholder="Enter Ten SP"
        ref="tenSP"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Gia SP</label>
      <input
        type="text"
        class="form-control"
        id="giaSP"
        placeholder="Enter Gia SP"
        ref="giaSP"
      />
    </div>
    <button
      class="btn btn-primary"
      @click="
        addProduct($refs.maSP.value, $refs.tenSP.value, $refs.giaSP.value)
      "
    >
      Them SP
    </button>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Ma SP</th>
          <th scope="col">Ten SP</th>
          <th scope="col">Gia SP</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="listProduct && listProduct.length">
          <tr v-for="(product, index) in listProduct" :key="index" :class="{'bgColor': index%2 === 0}">
            <th scope="row">{{ index++ }}</th>
            <td>{{ product.maSP }}</td>
            <td>{{ product.tenSP }}</td>
            <td>{{ product.giaSP }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listProduct: [],
    };
  },
  methods: {
    addProduct(maSP, tenSP, giaSP) {
      console.log(maSP, tenSP, giaSP);
      this.listProduct.push({ maSP, tenSP, giaSP });
    },
  },
};
</script>

<style>
.bgColor {
  background-color: chartreuse;
}
</style>
