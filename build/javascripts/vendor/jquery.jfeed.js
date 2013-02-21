/* jFeed : jQuery feed parser plugin
 * Copyright (C) 2007 Jean-François Hovinne - http://www.hovinne.com/
 * Dual licensed under the MIT (MIT-license.txt)
 * and GPL (GPL-license.txt) licenses.
 */
function JFeed(e){e&&this.parse(e)}function JFeedItem(){}function JAtom(e){this._parse(e)}function JRss(e){this._parse(e)}jQuery.getFeed=function(e){e=jQuery.extend({url:null,data:null,cache:!0,success:null,failure:null,error:null,global:!0},e);if(e.url)return jQuery.isFunction(e.failure)&&jQuery.type(e.error)==="null"?e.error=function(t,n,r){e.failure(n,r)}:jQuery.type(e.failure)===jQuery.type(e.error)==="null"&&(e.error=function(e,t,n){window.console&&console.log("getFeed failed to load feed",e,t,n)}),$.ajax({type:"GET",url:e.url,data:e.data,cache:e.cache,dataType:"text",success:function(t){var n=new JFeed(t);jQuery.isFunction(e.success)&&e.success(n)},error:e.error,global:e.global})},JFeed.prototype={type:"",version:"",title:"",link:"",description:"",parse:function(e){if(jQuery.browser.msie){var t=new ActiveXObject("Microsoft.XMLDOM");t.loadXML(e),e=t}if(jQuery("channel",e).length==1){this.type="rss";var n=new JRss(e)}else if(jQuery("feed",e).length==1){this.type="atom";var n=new JAtom(e)}n&&jQuery.extend(this,n)}},JFeedItem.prototype={title:"",link:"",description:"",updated:"",id:""},JAtom.prototype={_parse:function(e){var t=jQuery("feed",e).eq(0);this.version="1.0",this.title=jQuery(t).find("title:first").text(),this.link=jQuery(t).find("link:first").attr("href"),this.description=jQuery(t).find("subtitle:first").text(),this.language=jQuery(t).attr("xml:lang"),this.updated=jQuery(t).find("updated:first").text(),this.items=new Array;var n=this;jQuery("entry",e).each(function(){var e=new JFeedItem;e.title=jQuery(this).find("title").eq(0).text(),e.link=jQuery(this).find("link").eq(0).attr("href"),e.description=jQuery(this).find("content").eq(0).text(),e.updated=jQuery(this).find("updated").eq(0).text(),e.id=jQuery(this).find("id").eq(0).text(),n.items.push(e)})}},JRss.prototype={_parse:function(e){jQuery("rss",e).length==0?this.version="1.0":this.version=jQuery("rss",e).eq(0).attr("version");var t=jQuery("channel",e).eq(0);this.title=jQuery(t).find("title:first").text(),this.link=jQuery(t).find("link:first").text(),this.description=jQuery(t).find("description:first").text(),this.language=jQuery(t).find("language:first").text(),this.updated=jQuery(t).find("lastBuildDate:first").text(),this.items=new Array;var n=this;jQuery("item",e).each(function(){var e=new JFeedItem;e.title=jQuery(this).find("title").eq(0).text(),e.link=jQuery(this).find("link").eq(0).text(),e.description=jQuery(this).find("description").eq(0).text(),e.updated=jQuery(this).find("pubDate").eq(0).text(),e.id=jQuery(this).find("guid").eq(0).text(),n.items.push(e)})}};