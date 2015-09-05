var newsFeed = require('./news-feed.js');
//console.log( newsFeed );

//例) はてなブックマーク テクノロジー
var rss_url = "http://feeds.feedburner.com/hatena/b/hotentry";

//コールバック
var fnc = function( feeds ){
	var meta = feeds.meta;
	var item;
	while (item = feeds.read()) {
		console.log("---");
		//日付を取得
		var d = new Date(item['dc:date']['#']);
		var yymmdd = d.getFullYear()+"年" + (d.getMonth()+1)+"月"+d.getDate()+"日";
		console.log( yymmdd );
		console.log( item.title );
		/*
		//TODO ここで日付とタイトルだけBOCCOに送信
		var msg = yymmdd+" "+item.title;
		bocco.postMessageText(msg,function(json){
		
		});
		*/
	}
};

newsFeed.getFeed(rss_url,fnc);
