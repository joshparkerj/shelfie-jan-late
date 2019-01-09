<template>
  <div class="product">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    msg: String
  },
}
</script>

<style>
.product {
  background-color: yellow;
  margin: 2%;
  padding: 2%;
  border: 1px solid;
  border-radius: 2%;
}
</style>
