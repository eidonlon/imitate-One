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
			var homeLink = ($(".link-div a").attr("href")).split("/");
			homeDesc.id = homeLink[homeLink.length -1];
			homeDesc.day = $(".day").text();
			homeDesc.month = $(".month").text();
			homeDesc.textShort = $(".text-content-short").text();
			homeDesc.href = $(".link-div a").attr("href");
			homeDesc.bgImg = $(".home-img").attr("style");


			var articleLink = ($(".text-more a").attr("href")).split("/");
			homeArticle.id = articleLink[articleLink.length -1];
			homeArticle.artTitle = $(".article .text-title").text();
			homeArticle.artAuthor = $(".article .text-author").text();
			homeArticle.artShort = $(".article .text-content-short").text();
			homeArticle.artShortImg = $(".article .one-img-container img").attr("src");

			var questionLink = ($(".question .text-more a").attr("href")).split("/");
			homeQuestion.id = questionLink[questionLink.length -1];
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
			res.send({"detail":detail})
		});
	}).on("error",function(err){
		console.log(err)
	})
});

router.get("/musicDetail",function(req,res){
	var aId = req.query.aId;
	var detail = {};
	var _html;
	detail.editor = [];
	http.get("http://m.wufazhuce.com/music/"+aId,function(response){
		response.on("data",function(chunk){
			_html += chunk;
		});
		response.on("end",function(){
			console.log("爬取结束");
			$ = cheerio.load(_html,{decodeEntities: false});
			detail.img = $(".text-detail").html();
			detail.musicInfo = $(".text-music-info").html();
			detail.title = $(".text-title").text();
			detail.author = $(".text-simple-author").text();
			detail.article = $(".text-content").html();
			detail.title = $(".text-title").text();

			$(".text-editor").each(function(){
				detail.editor.push($(this).text());
			})
			res.charset = 'utf-8';
			res.send({"detail":detail})
		},"utf-8");
	}).on("error",function(err){
		console.log(err)
	})
});

router.get("/pictureDetail",function(req,res){
	var aId = req.query.aId;
	console.log(aId)
	var detail = {};
	var _html;
	http.get("http://m.wufazhuce.com/one/"+aId,function(response){
		response.on("data",function(chunk){
			_html += chunk;
		});
		response.on("end",function(){
			console.log("爬取结束");
			$ = cheerio.load(_html,{decodeEntities: false});
			detail.img = $(".item-picture-img").attr("src");
			detail.author = $(".text-author").html();
			detail.day = $(".day").text();
			detail.month = $(".month").text();
			detail.article = $(".text-content").text();

			res.charset = 'utf-8';
			res.send({"detail":detail})
		},"utf-8");
	}).on("error",function(err){
		console.log(err)
	})
});

router.get("/questionDetail",function(req,res){
	var aId = req.query.aId;
	console.log(aId)
	var detail = {};
	var _html;
	http.get("http://m.wufazhuce.com/question/"+aId,function(response){
		response.on("data",function(chunk){
			_html += chunk;
		});
		response.on("end",function(){
			console.log("爬取结束");
			$ = cheerio.load(_html,{decodeEntities: true});
			detail.title = $(".text-title").text();
			detail.author = $(".text-askers").text();
			detail.qContent = $(".text-content p").text();
			detail.answers = $(".text-answers").text();
			detail.article = $(".text-answers").next(".text-content").html();
			detail.editor = $(".text-editor").text();

			res.charset = 'utf-8';
			res.send({"detail":detail})
		},"utf-8");
	}).on("error",function(err){
		console.log(err)
	})
});

router.get("/search",function(req,res){
	var searchString = req.query.searchString,
		_html= '',
		_list = [],
		result = {};

		console.log(searchString)
	http.get("http://m.wufazhuce.com/search?fromUrl=http%3A%2F%2Fm.wufazhuce.com%2F&searchString="+searchString,function(response){
		response.on("data",function(chunk){
			_html += chunk;
		});
		response.on("end",function(){
			// console.log(_html)
			// var $ = cheerio.load(_html),
			// 	dateList = $(".search_result .date").text(),
			// 	authoreList = $(".search_result .text-author").text(),
			// 	contentShortList = $(".search_result .text-content-short").text(),
			// 	linkList = $(".search_result").toArray();
			res.send({result:"ok"})
		});
	}).on("error",function(error){
		console.log(err);
	});

})
module.exports = router;