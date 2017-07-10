import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

var home = require("../components/home.vue")
var picture = require("../pages/picture.vue")
var reads = require("../pages/reads.vue")
var music = require("../pages/music.vue")
var movie = require("../pages/movie.vue")
var about = require("../pages/about.vue")
var readDetials = require("../components/readDetials.vue")
var musicDetail = require("../components/musicDetail.vue")
var pictureDetail = require("../components/pictureDetail.vue")
var questionDetail = require("../components/questionDetail.vue")

var routes = [
	{path:"/",component:home},
	{path:"/picture",component:picture},
	{path:"/reads",component:reads},
	{path:"/music",component:music},
	{path:"/movie",component:movie},
	{path:"/about",component:about},
	{path:"/readDetials",component:readDetials},
	{path:"/musicDetail",component:musicDetail},
	{path:"/pictureDetail",component:pictureDetail},
	{path:"/questionDetail",component:questionDetail}
];

Vue.use(Router)
Vue.use(VueResource);

export default new Router({
  routes
})