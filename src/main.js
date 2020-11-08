import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import axios from 'axios'


Vue.config.productionTip = false


//引入配置文件
axios.get('config.json')
    .then(response => {
      Vue.prototype.baseConfig = response.data;
      new Vue({
        render: h => h(App),
      }).$mount('#app')
    })
    .catch((error) => {
      console.error(error)
    });

//使app端可适应不同分辨率大小
let html = document.documentElement,
    windowWidth = html.clientWidth;
html.style.fontSize = windowWidth / 120 + 'px';


