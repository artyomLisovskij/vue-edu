<template>
  <div class="home">
    <div class="list">
      <ul>
        <li v-for="(item, index) in $store.state.spisok_pokupok" v-bind:key="index">
          <input type="checkbox" :checked="$store.getters.getStatusByName(item.name)"  @click="changeCheck(item.name)"> {{item.name}}
        </li>
      </ul>
      <br />
      {{ $store.state.spisok_pokupok }}
    </div>
  </div>
</template>

<script>
// v-show, v-if, v-else, v-else-if
// v-for
// v-bind => :
// v-on => @
export default {
  name: 'Home',
  data: function() {
    return {
    }
  },

  methods: {
    changeCheck: function(name) {
      this.$store.dispatch('changeItemByName', name);
    },
    
    onClick: function() {
      let result;
      for (let item in this.spisok_pokupok) {
        if (this.spisok_pokupok[item].name === 'гречка') {
          result = this.spisok_pokupok[item].status;
        }
      }
      if (result === true) {
        alert("гречка куплена!");
      } else {
        alert("гречка не куплена");
      }
      
    }
  }
}
</script>

<style scoped>
.list{
  width: 180px;
  margin: 0 auto;
  text-align: left;
}
li{
  list-style: none;
}
</style>