//Third Parties
//=require vendor/jquery-1.9.1.min
//=require vendor/jquery-migrate-1.1.1.min
//require vendor/jquery-1.6.4.min
//=require vendor/jquery.mobile-1.1.0.min
//=require plugins
//=require vendor/handlebars
//=require vendor/add2home


//=require RSSFeedContainer

$(document).delegate('.ui-page', 'pageshow', function () {
			linkedin = new RSSFeedContainer("linkedin", $("#linkedin-container"));
			linkedin.fetch();
			twitter = new RSSFeedContainer("twitter", $("#twitter-container"));
			twitter.fetch();

/*	switch(this.id){
		case "linkedin":
			linkedin = new RSSFeedContainer("linkedin", $("#linkedin-container"));
			linkedin.fetch();
			break;
		case "twitter":
			twitter = new RSSFeedContainer("twitter", $("#twitter-container"));
			twitter.fetch();
			break;
	}*/

	
});