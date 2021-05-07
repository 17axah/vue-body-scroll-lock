<template>
  <div style="padding: 20px">
    <button v-scroll-lock="lock" @click="lock = !lock" class="button">
      {{ lock ? 'unlock' : 'lock' }}
    </button>
    <div v-for="(item, index) in 50" :key="index">
      <strong style="font-size: 20px">{{ index }}</strong>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Esse ad adipisci, quidem ut possimus expedita placeat sit dolore qui dolores.
      Ad dignissimos nisi vel beatae maiores optio consequuntur! Amet, ad.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lock: false,
    };
  },
};
</script>

<style>
body {
  margin: 0
}

.button {
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px 20px;
}
</style>
