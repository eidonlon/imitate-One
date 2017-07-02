var express = require("express");
var http = require("http");
var router = express.Router();
var cheerio = require("cheerio");


router.get("/homeData",function(req,res){
	var datas = {},
		_html;
	http.get("http://m.wufazhuce.com/",function(response){
		response.on("data",function(chunk){
			_html += chunk;
		});
		response.on("end",function(){
			console.log("爬取结束");
			$ = cheerio.load(_html);
			datas.day = $(".day").text();
			datas.month = $(".month").text();
			datas.textShort = $(".text-content-short").text();
			datas.href = $(".link-div a").attr("href");
			datas.bgImg = $(".home-img").attr("style");
			res.send({"datas":datas});
		});
	}).on("error",function(err){
		console.log(err)
	})
});

module.exports = router;