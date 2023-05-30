<template>
  <img alt="Vue logo" src="./assets/product.png" />
  <h1>List of products:</h1>
  <ul>
    <li v-for="(product, i) in products" :key="i">
      <p @click="removeProduct(i)">{{ product }}</p>
    </li>
  </ul>
  <br><br>
  <h2>Now you have {{products.length}} products in your shopping cart</h2>
  <br>
  <h3 v-if="products.length === 0">Your shopping cart is empty. Please add products</h3>
  <label for="">Type your product:</label> <br>
  <input type="text"  v-model="newProduct">
  <p>{{newProduct}}</p>
  <button  @click="addProduct()">ADD</button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      products: ["milk", "sugar", "pasta", "orange", "ice-cream", "apple", "banana", "grechka"],
      newProduct: "",
    };
  },
  methods: {
    removeProduct(i) {
      this.products.splice(i, 1);
    },
    addProduct() {
      this.products.push(this.newProduct)
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  align-items: center;
}
button {
  width: 100px;
  height: 50px;
  background-color: green;
  color: #000;
  font-weight: bold;
  border-radius: 15px;
}
</style>
