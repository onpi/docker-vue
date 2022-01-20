<template>
  <div class="a">
    <div class="header">
      <button>昨日</button>
      <span class="date">9月21日</span>
      <button>明日</button>
    </div>
    <h1 class="title">今日の筋トレ記録</h1>
    <div class="menu_list" v-for="training in trainings" :key="training.menuName">
      <h2 class="menu_title">{{ training.menuName }}</h2>
      <p class="menu_count">{{ training.menuList.length }}セット</p>
    </div>
    <router-link :to="{ name: 'AAdd' }" class="btn">筋トレメニューを追加</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // training: null,
    }
  },
  computed: {
    trainings() {
      return this.$store.state.training;
    }
  },
  created() {
  }
}
</script>

<style>
.a {
  background-color: #F6F8F9;
}
.header {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.title {
  font-size: 22px;
}
.btn {
  border: 1px solid  #62C2C8;
  border-radius: 8px;
  color: #62C2C8;
  display: block;
  font-size: 16px;
  line-height: 1;
  max-width: 280px;
  margin: auto;
  padding: 16px 0;
  text-align: center;
  width: 90%;
}
.menu_list {
  background-color: #fff;
  margin: 0 auto 10px;
  width: 95%;
}
</style>
