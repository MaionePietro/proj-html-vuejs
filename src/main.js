import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faClock, faPhone, faEnvelope, faUserGroup, faChartPie, faGaugeHigh, faQuoteRight, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

library.add( faClock, faPhone, faEnvelope, faFacebookF, faTwitter, faUser, faUserGroup, faChartPie, faGaugeHigh, faQuoteRight, faLocationDot)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')