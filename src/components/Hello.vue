<template>
  <div class="hello">
    <button @click="addProperty">Add Property</button>
    <button @click="changeProperty">Change Propety</button>
    <h1>{{gethello}}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    gethello() {
      return this.$store.getters['getHello']
    }
  },
  methods: {
    addProperty() {
      this.$store.commit('addProperty');
    },
    changeProperty() {
      this.$store.commit('changeProperty', 'changed!');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
