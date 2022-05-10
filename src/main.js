import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {MdTable, MdApp, MdContent, MdToolbar, MdIcon, MdList, MdDrawer, MdCard, MdField, MdMenu, MdButton, MdSnackbar, MdDialogAlert, MdDialog, MdDialogPrompt} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false
Vue.use(MdTable)
Vue.use(MdApp)
Vue.use(MdContent)
Vue.use(MdToolbar)
Vue.use(MdIcon)
Vue.use(MdList)
Vue.use(MdDrawer)
Vue.use(MdCard)
Vue.use(MdField)
Vue.use(MdMenu)
Vue.use(MdButton)
Vue.use(MdSnackbar)
Vue.use(MdDialogAlert)
Vue.use(MdDialog)
Vue.use(MdDialogPrompt)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')