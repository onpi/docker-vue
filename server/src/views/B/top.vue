<template>
  <div class="a">
    <div class="header">
      <button>昨日</button>
      <span class="date">9月21日</span>
      <button>明日</button>
    </div>
    <h1 class="title">今日の筋トレ記録</h1>
    <div class="menu_list" v-for="trainin in trainings" :key="trainin.title">
      <h2 class="menu_title">{{ trainin.title }}</h2>
      <p class="menu_count">{{ trainin.menuList.length }}セット</p>
    </div>

    <div class="menu_list" v-for="(addItem, i) in add" :key="addItem.title">
      <h2 class="menu_title">{{ addItem.title }}</h2>
      <div class="set" v-for="(val, n) in addItem.menuList" :key="n">
        <table>
          <thead>
            <tr>
              <th>セット数</th>
              <th>前回</th>
              <th>重さ</th>
              <th>回数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ n + 1 }}</td>
              <td class="before">20kg × 10回</td>
              <td><input type="text" v-model="val.weight"> kg</td>
              <td><input type="text" v-model="val.rep"> 回</td>
            </tr>
          </tbody>
        </table>
        <input class="memo" type="text" v-model="val.memo">
      </div>
      <div class="btn_wrap">
        <button class="save" @click="save(i)">保存</button>
        <button class="add" @click="addSet(i)">セットを追加</button>
      </div>
    </div>
    <button type="button" name="button" class="btn" @click="openMenuList()">筋トレメニューを追加</button>

    <div class="modal" v-show="modal">
      <div class="modal_title">メニューを追加<button @click="closeMenuList()">×</button></div>
      <div class="modal_menu_list" v-for="list in menu" :key="list.menuTitle">
        <h5 class="list_title">{{ list.menuTitle }}</h5>
        <p class="list_content" v-for="val in list.menuList" :key="val" @click="addMenu(val)">{{ val }}</p>
      </div>
    </div>
    <div class="bg" v-show="modal" @click="closeMenuList()"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
      add: [],
      // training: {
      //   menuName: '',
      //   menuList: [],
      // },
      menu: [
        {
          menuTitle: '胸',
          menuList: [
            'ベンツプレス',
            'チェストプレス',
            'ダンベルフライ'
          ]
        },
        {
          menuTitle: '脚',
          menuList: [
            'スクワット',
            'レッグプレス',
            'レッグエクステンション'
          ]
        },
        {
          menuTitle: '足',
          menuList: [
            'スクワット',
            'レッグプレス',
            'レッグエクステンション'
          ]
        },
      ]
      // training: null,
    }
  },
  methods: {
    save(n) {
      this.$store.dispatch('setTraining', this.add[n]);
      this.add.splice(n, 1);
    },
    addSet(n) {
      this.add[n].menuList.push({
        weight: 0,
        rep: 0,
        memo: '',
      });
    },
    openMenuList() {
      this.modal = true;
    },
    closeMenuList() {
      this.modal = false;
    },
    addMenu(menuTitle) {
      this.add.title = menuTitle;
      this.add.push({
        title: menuTitle,
        menuList: [{
          weight: 0,
          rep: 0,
          memo: '',
        }]
      })
      this.closeMenuList();
    },
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
.set {
  margin-bottom: 10px;
}
.btn_wrap {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}
table {
  table-layout: fixed;
  width: 100%;
}
th {
  width: 25%;
}
td {
  width: 25%;
}
td input {
  width: 70%;
}
.before {
  font-size: 13px;
}
.memo {
  margin-top: 5px;
  padding: 10px;
  width: 100%;
}
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
  margin: 20px auto 0;
  padding: 16px 0;
  text-align: center;
  width: 90%;
}
.menu_list {
  background-color: #fff;
  margin: 0 auto 10px;
  padding: 10px;
  width: 95%;
}
.modal {
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 80%;
  width: 80%;
  padding: 10px;
  z-index: 10;
}
.bg {
  content: '';
  background-color: rgba(0,0,0,.6);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
}
.modal_title {
  display: flex;
  justify-content: space-between;
}
</style>
