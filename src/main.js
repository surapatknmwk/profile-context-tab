import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faUser, faFlag, faSquareEnvelope, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLine } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone, faUser, faFlag, faFacebook, faLine, faSquareEnvelope, faCircleUser);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).mount('#app')
