import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './axios'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* icons */
import {
  faUser,
  faEnvelope,
  faPhone,
  faChartSimple,
  faLock,
  faEye,
  faUsers,
  faRightFromBracket,
  faChevronDown,
  faPersonWalkingArrowRight,
  faSearch,
  faClipboardList,
  faSort,
  faArrowRight,
  faArrowLeft,
  faCircleXmark,
  faAdd,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faUser,
  faEnvelope,
  faPhone,
  faChartSimple,
  faLock,
  faEye,
  faUsers,
  faRightFromBracket,
  faChevronDown,
  faPersonWalkingArrowRight,
  faClipboardList,
  faSearch,
  faSort,
  faArrowRight,
  faArrowLeft,
  faCircleXmark,
  faAdd
)

const pinia = createPinia()

const app = createApp(App)

app.use(router)

app.use(pinia)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
