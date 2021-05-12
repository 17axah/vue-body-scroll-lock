<template>
  <div>
    <header class="header" data-scroll-lock-fill-gap>
      <div>header</div>
      <div>header</div>
    </header>
    <div style="padding: 20px">
      <button
        v-scroll-lock:padding="lock"
        @click="lock = !lock"
        class="button"
      >
        {{ lock ? 'unlock' : 'lock' }}
      </button>
      <div v-for="(item, index) in 50" :key="index">
        <strong style="font-size: 20px">{{ index }}</strong>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Esse ad adipisci, quidem ut possimus expedita placeat sit dolore qui dolores.
        Ad dignissimos nisi vel beatae maiores optio consequuntur! Amet, ad.
      </div>
    </div>
    <div class="text" data-scroll-lock-scrollable>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Libero in fugiat hic illo dicta voluptates earum provident esse quisquam a,
      pariatur est, nam placeat nemo tempore repudiandae voluptatum ab repellendus.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Libero in fugiat hic illo dicta voluptates earum provident esse quisquam a,
      pariatur est, nam placeat nemo tempore repudiandae voluptatum ab repellendus.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Libero in fugiat hic illo dicta voluptates earum provident esse quisquam a,
      pariatur est, nam placeat nemo tempore repudiandae voluptatum ab repellendus.
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
* {
  box-sizing: border-box;
}

body {
  margin: 0
}

.button {
  padding: 20px;
  position: fixed;
  top: 100px;
  left: 0;
  padding: 10px 20px;
  z-index: 60;
}

.header {
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 50;
  background-color: #fff;
  border-bottom: 1px solid blue;
}

.text {
  position: fixed;
  bottom: 50%;
  left: 0;
  height: 90px;
  width: 300px;
  overflow: auto;
  background: forestgreen;
}
</style>
