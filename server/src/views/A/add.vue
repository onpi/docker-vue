<template>
  <div class="a_add">
    <div class="">
      <input type="text" name="menu" value="" class="input" v-model="training.menuName">
      <div class="menu" v-for="(menu, i) in training.menuList" :key="i">
        <h3 class="title">{{ i + 1 }}セット目</h3>
        <div class="list">
          <span class="list_title">重さ</span>
          <div class="label">
            <input type="text" name="weight" value="" v-model="menu.weight"> kg
          </div>
        </div>
        <div class="list">
          <span class="list_title">回数</span>
          <div class="label">
            <input type="text" name="rep" value="" v-model="menu.rep"> 回
          </div>
        </div>
        <div class="list">
          <span class="list_title">メモ</span>
          <div class="label">
            <input type="text" name="memo" value="" v-model="menu.memo">
          </div>
        </div>
      </div>
    </div>
    <button class="add_btn" @click="addMenu()">セットを追加</button>
    <button class="btn" @click="save()">保存</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      training: {
        menuName: '',
        menuList: [
          {
            weight: 0,
            rep: 0,
            memo: '',
          }
        ],
      }

    }
  },
  methods: {
    addMenu() {
      this.training.menuList.push({
        weight: 0,
        rep: 0,
        memo: '',
      });
    },
    save() {
      this.$store.dispatch('setTraining', this.training);
      this.$router.push({ name: 'A' });
    }
  }
}
</script>

<style lang="css" scoped>
input {
  font-size: 16px;
}
.a_add {
  margin-top: 50px;
  padding: 0 10px;
}
.menu {
  margin-top: 15px;
}
.list {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.input {
  border: 1px solid #D8E2E8;
  display: block;

  padding: 12px;
  width: 100%;
}
.add_btn {
  display: block;
  margin-top: 16px;
  margin-left: auto;
  text-align: right;
}

.btn {
  background-color: #62C2C8;
  color: #fff;
  cursor: pointer;
  line-height: 1;
  padding: 10px;
  margin-top: 24px;
}
</style>
