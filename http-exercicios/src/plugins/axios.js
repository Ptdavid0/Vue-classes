import Vue from "vue";
import axios from "axios";

// Com Apenas uma API utilizada

// axios.defaults.baseURL = "https://vue-project-c978c.firebaseio.com/";

// axios.defaults.headers.common['authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'aplication/json'

// Vue.use({
//   install(Vue) {
//     Vue.prototype.$http = axios;
//   }
// });

// Mais de uma API utilizada -------------------------------------

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: "https://vue-project-c978c.firebaseio.com/",
      headers: {
        get: {
          //Pode ser usado para todos,so tirar o encapsulamento do Get
          Authorization: "abc123"
        }
      }
    });
  }
});

//Manipulando a Req(post,put)

Vue.prototype.$http.interceptors.request.use(
  config => {
    // eslint-disable-next-line no-console
    console.log(config.method);

    return config;
  },
  error => Promise.reject(error)
);

//Manipulando a Res(get)

Vue.prototype.$http.interceptors.response.use(
  res => {
    // const arr = [];
    // for (let chave in res.data) {
    //   arr.push({ id: chave, ...res.data[chave] });
    // }
    // res.data = arr;
    return res;
  },
  error => Promise.reject(error)
);
