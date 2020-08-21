<template>
  <div>
    <h3 class="title">Directive</h3>
    <div v-if="status">Cybersoft</div>
    <div v-else>Cybersoft 2</div>
    <button class="btn btn-success" @click="status = !status">Toggle</button>
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>D</div>
    <div v-show="show">Demo v-show</div>
    <ul v-if="persons && persons.length > 0">
      <li v-for="(person, index) in persons" :key="index">
        {{ person.name }} - {{ person.age }} - {{ person.color }}
      </li>
    </ul>
    <template v-if="people">
      <div v-for="(value, key) in people" :key="key">
        {{ key }} -- {{ value }}
      </div>
    </template>
    <div class="demo" :class="divClass" @click="statusClass = !statusClass">
      Cybersoft
    </div>
    <div
      class="demo"
      :class="[activeClass, errClass]"
      @click="statusClass = !statusClass"
    >
      Cybersoft
    </div>

    <div class="demo" :style="{'background-color': color}"></div>
    <div class="demo" :style="myStyle">mystyle</div>
    <div class="demo" :style="[myStyle, {'height': '5px'}]">mystyleArray</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: false,
      type: "e",
      show: false,
      persons: [
        { name: "Khang", age: 18, color: "blue" },
        { name: "Hieu", age: 20, color: "orange" },
        { name: "Trang", age: 19, color: "prink" },
      ],
      people: { name: "Khang", age: 18, color: "blue" },
      statusClass: true,
      activeClass: "active",
      errClass: "text-danger",
      color: "blue",
      width: 200,
    };
  },
  computed: {
    divClass() {
      return {
        red: this.statusClass,
        text: this.statusClass,
      };
    },
    myStyle() {
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      }
    }
  },
};
</script>

<style>
.demo {
  width: 100px;
  height: 100px;
  background-color: gray;
  margin: 10px;
}
.red {
  background-color: red;
}
.text {
  color: white;
  text-align: center;
  line-height: 100px;
}
.active {
  background-color: yellowgreen;
}
.text-danger {
  color: red;
}
</style>
