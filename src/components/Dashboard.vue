<template>
  <div class="dashboard">
    <h1>{{ msg }}</h1>
    <Product msg="Welcome to Product"/>
  </div>
</template>

<script>
import Product from './Product';

export default {
  name: 'dash-board',
  props: {
    msg: String
  },
  components: {
    Product
  }
}
</script>

<style>
.dashboard {
  background-color: chartreuse;
  margin: 10%;
  padding: 10%;
  border: 1px solid;
}
</style>
