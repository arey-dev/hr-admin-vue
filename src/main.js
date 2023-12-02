import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

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
  faRightFromBracket
} from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faEnvelope, faPhone, faChartSimple, faLock, faEye, faUsers, faRightFromBracket)

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
