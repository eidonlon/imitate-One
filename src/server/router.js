var express = require("express");
var http = require("http");
var router = express.Router();
var cheerio = require("cheerio");
var fs = require("fs");

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
			homeArticle.artShortImg = $(".article .one-img-container img").attr("src");

			homeQuestion.quesTitle = $(".question .text-title").text();
			homeQuestion.quesShort = $(".question .text-content-short").text();
			res.send({"homeDesc":homeDesc,"homeArticle":homeArticle,"homeQuestion":homeQuestion});
		});
	}).on("error",function(err){
		console.log(err)
	});
});

router.get("/readDetail",function(req,res){
	var aId = req.query.aId;
	var detail = {};
	var _html;
	detail.editor = [];
	http.get("http://m.wufazhuce.com/article/"+aId,function(response){
		response.on("data",function(chunk){
			_html += chunk;
		});
		response.on("end",function(){
			console.log("爬取结束");
			$ = cheerio.load(_html,{decodeEntities: false});
			detail.title = $(".text-title").text();
			detail.author = $(".text-author").text();
			detail.article = $(".text-content").html();
			detail.title = $(".text-title").text();

			$(".text-editor").each(function(){
				detail.editor.push($(this).text());
			})

			res.charset = 'utf-8';
			console.log(detail.article)
			res.send({"detail":detail})
		},"utf-8");
	}).on("error",function(err){
		console.log(err)
	})

});
module.exports = router;