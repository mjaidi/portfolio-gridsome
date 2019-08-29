import Vue from "vue";
import Vuetify from "vuetify";
import "../stylus/main.styl";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

Vue.use(Vuetify, {
  icons: {
    iconfont: "mdi" // default - only for display purposes
  },
  theme: {
    primary: "#20939B",
    success: "#41962e",
    warning: "#F4863D",
    danger: "#E53522",
    yellow: "#E5BE24"
  }
});
