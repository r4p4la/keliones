//Shop
import Vue from 'vue'
import UserProfile from './components/user/ProfileComponent' // User profile component
import RatingsComponent from './components/user/RatingsComponent' // User profile component
import Login from './components/auth/LoginComponent' // Login component
import Register from './components/auth/RegisterComponent' //Registration component
import Search from './components/shop/SearchComponent' //Searchbar
import Payment from './components/shop/PaymentComponent' //Payment
import OrderPdf from './components/shop/OrderPdfComponent' // Orderio pdf generavimas saskaita
//Admin
import OfferImages from './components/admin/OfferImagesComponent' // Image uploado component
import Scrapper from './components/admin/ScrapperComponent' // Scrapperio komponentas
import OffersTableComponent from './components/admin/OffersTableComponent' // Offerio lenteles
import OrdersTableComponent from './components/admin/OrdersTableComponent' // Orderio lenteles
import CategoryTableComponent from './components/admin/CategoryTableComponent' // Kategoriju lenteles
import UsersTableComponent from './components/admin/UsersTableComponent' // Vartotoju lenteles
import ImportsComponent from './components/admin/ImportsComponent' // Importu komponentas
//Global
import AnalyticsDashboardComponent from './components/admin/AnalyticsDashboardComponent' // Analytics dashboardas
import VueNotification from "@kugatsu/vuenotification";
Vue.use(VueNotification, {
  timer: 20
});

import VueFileAgent from 'vue-file-agent';
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css';
Vue.use(VueFileAgent);

import VueCardFormat from 'vue-credit-card-validation';
Vue.use(VueCardFormat);

import VueModalTor from "vue-modaltor";
Vue.use(VueModalTor);

require('./helpers/lazyload');

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
});

let app = new Vue({
    components : { 'app-search' : Search,
    UserProfile, 
    'app-login':Login, 
    'app-registraion':Register,
    'app-images' : OfferImages,
    'app-scrapper' : Scrapper,
    'app-ratings' : RatingsComponent,
    'app-offers-table' : OffersTableComponent,
    'app-orders-table' : OrdersTableComponent,
    'app-categories-table' : CategoryTableComponent,
    'app-users-table' : UsersTableComponent,
    'app-dashboard' : AnalyticsDashboardComponent,
    'app-imports' : ImportsComponent,
    'app-order-pdf' : OrderPdf,
    'app-payment' : Payment
  }
}).$mount('#app')
