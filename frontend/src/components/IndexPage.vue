<template>
  <form v-on:submit="submitForm"> <!-- 메서드 생성 -->
    <div class="menu">
      <a v-for="i in menu" :key="i">{{i}}</a>
    </div>
    <div>
      <h4>ZEP 광고집행</h4>
      <p>ZEP에 광고를 집행합니다. <br>
        부적절하다 판단되는 광고는 중단될 수 있으면 Pt.는 반환되지 않습니다. <br>
        지속적으로 부적절하다 판단되는 광고를 집행하실 경우 차단조치 될 수 있습니다. <br> </p>
    </div>
    <div>
      <button>{{buttons[0]}}</button> <button>{{buttons[1]}}</button> <button>{{buttons[2]}}</button>
    </div>
    <div>
      <h4>연결할 주소</h4>
      <p>{{url}}</p>
      <h4>광고집행수</h4>
      <p>{{ad_num}}</p>
      <h4>광고집행 기간</h4>
      <p>{{ad_dur}}</p>
      <h4>광고집행 Pt.</h4>
      <p>10000.PT</p>
    </div>
    <div>
      <button>광고집행</button> 
    </div>

    <div class="login">
      <div>
        <label for="username">id: </label>
        <input id="username" type="text" v-model="username">
      </div>
      <div>
        <label for="password">password: </label>
        <input id="password" type="password" v-model="password">
      </div>
      <button type="submit">login</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  data: function() {
    return {
      menu: ["Home", "Developer", "User"],
      url: "sada.gbshs.kr",
      ad_num: 2,
      ad_dur: 3,
      username: '꼴전사',
      password: 'minjun.jang',
      buttons: ['텍스트 광고', '이미지 광고', '특수 광고']
    }
  },
  methods: { // 메서드 구현
    submitForm: function() {
      console.log(this.username, this.password);
      var url = 'https://nickname.hwanmoo.kr/?format=json&count=1&max_length=6&whitespace=_';
      //이 url로 데이터를 보내고 받을 수 있음
      var data = {
        username: this.username,
        password: this.password
      }
      axios.get(url, data)
        .then(function(response){
          console.log(response);
        })
        .catch(function(error){
          console.log(error);
        })
    }
  }
}
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
.menu{
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a{
  color: white;
  padding: 10px;
  
  }

.login{
  text-align: right;
}
</style>
