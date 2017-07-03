var express = require("express");
var http = require("http");
var router = express.Router();
var cheerio = require("cheerio");


router.get("/homeData",function(req,res){
	var homeDesc = {},
		homeArticle = {},
		homeQuestion = {},
		_html;
	http.get("http://m.wufazhuce.com/",function(response){
		response.on("data",function(chunk){
			_html += chunk;
		});
		response.on("end",function(){
			console.log("爬取结束");
			$ = cheerio.load(_html);
			homeDesc.day = $(".day").text();
			homeDesc.month = $(".month").text();
			homeDesc.textShort = $(".text-content-short").text();
			homeDesc.href = $(".link-div a").attr("href");
			homeDesc.bgImg = $(".home-img").attr("style");

			homeArticle.artTitle = $(".article .text-title").text();
			homeArticle.artAuthor = $(".article .text-author").text();
			homeArticle.artShort = $(".article .text-content-short").text();

			homeQuestion.quesTitle = $(".question .text-title").text();
			homeQuestion.quesShort = $(".question .text-content-short").text();

			res.send({"homeDesc":homeDesc,"homeArticle":homeArticle,"homeQuestion":homeQuestion});
		});
	}).on("error",function(err){
		console.log(err)
	})
});

module.exports = router;