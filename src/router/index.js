import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

var home = require("../pages/home.vue")
var today = require("../pages/today.vue")
var picture = require("../pages/picture.vue")
var reads = require("../pages/reads.vue")
var music = require("../pages/music.vue")
var movie = require("../pages/movie.vue")
var about = require("../pages/about.vue")


var routes = [
	{path:"/",component:home},
	{path:"/tody",component:today},
	{path:"/picture",component:picture},
	{path:"/reads",component:reads},
	{path:"/music",component:music},
	{path:"/movie",component:movie},
	{path:"/about",component:about}
];

Vue.use(Router)
Vue.use(VueResource);

export default new Router({
  routes
})
