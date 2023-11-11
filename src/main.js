import { createApp } from 'vue'
import App from './App.vue'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '../node_modules/vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import router from './router'
import '@mdi/font/css/materialdesignicons.css'


const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'dark'
    }
  })

createApp(App)
    .use(router)
    .use(vuetify).mount('#app')
