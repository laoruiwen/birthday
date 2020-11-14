import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import axios from 'axios'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

Vue.use(VueI18n)

//引入配置文件
axios.get('config.json')
    .then(response => {
        Vue.prototype.baseConfig = response.data;

        //设置请求基本路径
        axios.defaults.baseURL= response.data.projectName;
        Vue.prototype.$axios = axios;

        // 通过选项创建 VueI18n 实例
        const i18n = new VueI18n(response.data.languages)
        new Vue({
            render: h => h(App),
            i18n
        }).$mount('#app')
    })
    .catch((error) => {
        console.error(error)
    });

//使app端可适应不同分辨率大小
let html = document.documentElement,
    windowWidth = html.clientWidth;
html.style.fontSize = windowWidth / 120 + 'px';


