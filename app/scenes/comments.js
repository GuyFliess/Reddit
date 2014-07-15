alert('Scenecomments.js loaded');

//Globals
cur_comment = 0;



current_comment_count = 0;

var commentsScroll;


//Constants
COMMENTS_IN_PAGE = 50;
DEFUALT_SCROLL_OFFSET = 20;



function Scenecomments() {

};

Scenecomments.prototype.initialize = function () {
	alert("Scenecomments.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	setTimeout(fadeSplash, SPLASH_FADE_TIME);
};

Scenecomments.prototype.handleShow = function (data) {
	alert("Scenecomments.handleShow()");
	alert(data.Url);
	articleName = data.Url;
	//$('#subredditsList').sfList({data:subredditsList.displaynames, index:0});
	
	alert(data.Url + ".json");
	$.getJSON(data.Url + ".json", parse_comments);
	// this function will be called when the scene manager show this scene
};

Scenecomments.prototype.handleHide = function () {
	alert("Scenecomments.handleHide()");
	// this function will be called when the scene manager hide this scene
};

Scenecomments.prototype.handleFocus = function () {
	alert("Scenecomments.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

Scenecomments.prototype.handleBlur = function () {
	alert("Scenecomments.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

Scenecomments.prototype.handleKeyDown = function (keyCode) {
	alert("Scenecomments.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
	case sf.key.LEFT: // PREV PAGE
//    	if (page_number > 0) {
//    		page_number--;
//    		if (page_number == 0) { 
//    			$.getJSON("http://www.reddit.com"+subreddit+"/.json", {limit: ARTICLES_IN_PAGE}, parse_reddit);
//    		}
//    		else {
//    			$.getJSON("http://www.reddit.com"+subreddit+"/.json", {count:page_number*ARTICLES_IN_PAGE, before:before, limit: ARTICLES_IN_PAGE}, parse_reddit);
//    		}
//    	}
    	break;
	
	case sf.key.RIGHT: // NEXT PAGE
//    	page_number++;
//    	$.getJSON("http://www.reddit.com"+subreddit+"/.json", {count:page_number*ARTICLES_IN_PAGE, after:after, limit: ARTICLES_IN_PAGE}, parse_reddit);
    	break;
    
	case sf.key.UP: // SELECT PREVIOUS
        if (cur_comment > 0) {
        	unmarkCommentSelector($('#comment'+cur_comment));
            cur_comment--;
            markCommentSelector($('#comment'+cur_comment));
            Scenecomments.prototype.Scroll(DEFUALT_SCROLL_OFFSET);
            
        }
        break;
        
	case sf.key.DOWN: // SELECT NEXT
        if (cur_comment < COMMENTS_IN_PAGE - 1) {
        	unmarkCommentSelector($('#comment'+cur_comment));
        	cur_comment++;
            markCommentSelector($('#comment'+cur_comment));
            Scenecomments.prototype.Scroll(-DEFUALT_SCROLL_OFFSET);            
        }
        break;
    
	case sf.key.ENTER: // GOTO LINK
//	    article_title = $('#article'+ cur_article + " a.title");
//	    //alert(article_title.attr("href"));
//	    //window.location = article_title.attr("href");
//	    $("#iframeId").attr("src",article_title.attr("href"));
//	    $('#loadingId').sfLoading('show');
	    break;
	    
	case sf.key.RETURN: // BACK TO Articles

		alert("back to articles");
		sf.scene.hide('comments');
		sf.scene.show('Scene1');
		sf.scene.focus('Scene1');
	    break;
    
	
    
	case sf.key.VOL_UP: 
		Scenecomments.prototype.Scroll(DEFUALT_SCROLL_OFFSET);
		break;
    
	case sf.key.VOL_DOWN:

		Scenecomments.prototype.Scroll(-DEFUALT_SCROLL_OFFSET);
		break;
		
	case sf.key.RED:
	
		break;
		
	case sf.key.GREEN: 
        // TODO
		
	
    	break;
    	
	case sf.key.TOOLS: // OPEN MENU
	    // TODO
	    break;
    	
	default:
		alert("handle default key event, key code(" + keyCode + ")");
		break;
} // END SWITCH
	
};

function parse_comments(data, textStatus, jqXHR) {
    // Init some globals
	cur_comment = 0;
    
    // Handle the user-specified amount of articles
//    before = data.data.before;
//    after = data.data.after;

    $("#siteTable").text("");
    $("#wrapper").text("");
    
    current_comment_count = 0;
    
    comment_id = "siteTable_"+ data[0].data.children[0].data.name;
     
    var head = $('<div id="'+ comment_id + '" class="sitetable nestedlisting"></div>');
     $("#wrapper").append(head);
           
   //  handle_title_comment(data[0].data.children[0], current_comment_count++, head); //set siteTable to hold the original post
    var current_list = $("#"+comment_id );
    //handle each comment
    var i = 0;
    while (current_comment_count < COMMENTS_IN_PAGE - 1)
    {
        handle_comment( data[1].data.children[i], 1, current_list);
        i++;
    }
        
    
  

    commentsScroll = new IScroll('#wrapper', { mouseWheel: true, scrollbars: true });


    // Mark first comment and update page
    markCommentSelector($('#comment0'));
        
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
}

function handle_comment( article, level, curret_list_node ) {
    var info = article.data;
    if (info === undefined) return false;
    var arr;
        
    // Create new comment
    var commentClass = 'thing id-'+ info.name;    
    curret_list_node.append(
             '<div class="'+ commentClass + ' comment" id="comment' + current_comment_count + '"></div>');
    var comment = $('#comment' + current_comment_count );
    current_comment_count++;
    comment.append('<p class="parent"><a name="'+ info.id + '"></a></p>');
    // Add the rank
 //   article.append('<span class="rank">' + (page_number*ARTICLES_IN_PAGE + index+1) + '</span>');
    
    // Add the score + voting buttons
    arr = [];
    arr.push('<div class="midcol unvoted">');
    arr.push('<div class="arrow up"></div>');
   // arr.push('<div class="score dislikes">' + (info.score-1) + '</div>');
   // arr.push('<div class="score unvoted">' + info.score + '</div>');
    //arr.push('<div class="score likes">' + (info.score+1) + '</div>');
    arr.push('<div class="arrow down"></div>');
    arr.push('</div>');
    comment.append(arr.join(''));
    
    
    
    // Add the entry
    arr = [];
    arr.push('<div class="entry">');
       
    // 	Add tagline
    	arr.push('<p class="tagline">');
            arr.push('<a class="author may-blank"> ' + info.author + '</a>');            
          //  arr.push('<span class="score dislikes">' + (info.ups - info.downs - 1) + '</span>');
            arr.push('<span class="score unvoted">' + (info.ups - info.downs) + ' points</span>');
          //  arr.push('<span class="score likes">' + (info.ups - info.downs + 1) + '</span>');           
            var date = new Date(info.created);//TODO foramt to "3 hours ago"
        arr.push('</p>');

	    //comment body
	    arr.push('<div class="usertext-body may-blank-within">');
	        arr.push('<div class="md">');
	            arr.push('<p>'+ info.body +'</p>');
	        arr.push('</div>');   
	    arr.push('</div>');   
        
    //close tagline
    arr.push('</div>');   
        
    // End the entry
        arr.push('<div class="clearleft"></div>');
    arr.push('</div>');
    comment.append(arr.join(''));
    
    //add child comments
    arr = [];
    arr.push('<div class="child" style="display: block;">');
        comment_id = "siteTable_" + info.name;
        arr.push('<div id="'+ comment_id +'" class="sitetable listing">');
        
        arr.push('</div>');
    arr.push('</div>');
    comment.append(arr.join(''));
    var child_list = $("#" + comment_id);
    alert("replies "+ typeof info.replies);
    alert("replies.data "+ typeof info.replies + " " + info.replies);  
    try 
    {
    alert("replies.data.childern "+ typeof info.replies.data["children"] + " " + info.replies.data["children"]);
    if (typeof info.replies !== undefined && typeof info.replies.data !==  undefined && typeof  info.replies.data["children"] !== undefined)
    if (current_comment_count < COMMENTS_IN_PAGE ){    	

    		var j = 0;
    		while (info.replies !== "" && info.replies.data.children[j] !== undefined && current_comment_count < COMMENTS_IN_PAGE){    		
                     if (info.replies.data.children[j].kind === "t1")
                    {
    			handle_comment( info.replies.data.children[j], level + 1, child_list); // handle brothers
                    }
    			j++;
    		}
    	}
    }
    catch (err) {}
      
    return true;
    
}

function handle_title_comment(article_data, index, head)
{
	alert("handle title comment");
	info = article_data.data;
    var arr;
        
    // Create new article
    var article = $('<div id="comment'+index+'" class="thing link" uid="'+info.id+'"></div>');
    head.append(article);

           
    // Add the score + voting buttons
    arr = [];
    arr.push('<div class="midcol unvoted">');
    arr.push('<div class="arrow up"></div>');
    arr.push('<div class="score dislikes">' + (info.score-1) + '</div>');
    arr.push('<div class="score unvoted">' + info.score + '</div>');
    arr.push('<div class="score likes">' + (info.score+1) + '</div>');
    arr.push('<div class="arrow down"></div>');
    arr.push('</div>');
    article.append(arr.join(''));
    
    // Add the thumbnail
    if (startsWith(info.thumbnail, "http://")) { // URL-based
        article.append('<a class="thumbnail" href="' + info.url + '"><img alt="" src="' + info.thumbnail + '"></a>');
    }
    else if (info.thumbnail !== "") { // Sprite-based (add class)
        article.append('<a class="thumbnail ' + info.thumbnail + '" ></a>');
    }
    else { // Missing - use default
        article.append('<a class="thumbnail default"></a>');
    }
    
    // Add the entry
    arr = [];
    arr.push('<div class="entry">');
        
        // Add title
        arr.push('<p class="title"> <a class="title" href="' + info.url + '"> ' + info.title + '</a></p>');   
    
        // Add tagline
        arr.push('<p class="tagline"> submitted by ' + info.author + ', ' + info.num_comments + ' comments</p>');
        
    // End the entry
    arr.push('<div class="clearleft"></div>');
    arr.push('</div>');
    article.append(arr.join(''));
     //$("#wrapper").append('<div class="clearleft"></div>');
    return article;
    
}


function markCommentSelector(x) {
	x = x.children(".entry");
    x.css("background-color", "#FFFF99");
    x.css("border-color", "#FF6666");
//    x.find(".usertext-body").children().each(function (i) {
//        $(this).css('font-size','40px');  
//        });
//    
       
   //commentsScroll.scrollToElement(x);
} 


function unmarkCommentSelector(x) {
	
	x = x.children(".entry");
    if (null != x) {
        x.css("background-color", "");
        x.css("border-color", "");
//        x.find(".usertext-body").children().each(function (i) {
//            $(this).css('font-size','30px');  
//            });
    }
}

Scenecomments.prototype.Scroll = function (offset) {
	alert("y coordinates: " + commentsScroll.y);
 	if (commentsScroll.y + offset <= 0)  // scrolling is negative, i.e we scroll down to negative y coord
 		{
 			commentsScroll.scrollBy(0, offset);
 		}
	
}

//function iframeloaded() {
//	$('#loadingId').sfLoading('hide');
//    if ($("#iframeId").attr("src")) $("#iframeId").css("display","inline");
//}
;

//TODO unite shared code base
