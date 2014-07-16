widgetAPI = new Common.API.Widget();
pluginAPI = new Common.API.Plugin();

/********************************
 * Constants
 *******************************/
ARTICLES_IN_PAGE = 6;
REDDIT_VOTE_URL = "http://www.reddit.com/api/vote";
SPLASH_FADE_TIME = 1000;
COMMENTS_REGEX = /http:\/\/www\.reddit\.com\/r\/[^\/]*\/comments\/.*/i;

// Title char count used to fit text to page
MIN_CHARS_PER_PAGE = 300;
MAX_CHARS_PER_PAGE = 500;

// Top subreddits, sorted by popularity
SUBREDDITS_AUTOCOMPLETE = ["announcements","blog","funny","pics","reddit.com","wtf","science","politics","worldnews","technology","askreddit","programming","gaming","offbeat","entertainment","atheism","comics","business","geek","videos","iama","bestof","music","economics","todayilearned","humor","gadgets","environment","news","wikipedia","linux","sex","movies","scifi","space","doesanybodyelse","cogsci","food","philosophy","marijuana","frugal","fffffffuuuuuuuuuuuu","self","health","books","history","photography","math","worldpolitics","sports","apple","web_design","art","howto","happy","energy","netsec","aww","libertarian","webgames","diy","tldr","lolcats","obama","economy","psychology","conspiracy","canada","xkcd","fitness","design","drugs","python","photos","listentothis","cooking","compsci","sexy","trees","4chan","physics","software","writing","relationship_advice","freethought","skeptic","opensource","hardware","twoxchromosomes","wearethemusicmakers","video","lgbt","mensrights","anarchism","beer","guns","pictures","documentaries","android","bicycling","tfwomen","religion","coding","astronomy","iphone","youshouldknow","bacon","ubuntu","itookapicture","circlejerk","cannabis","craigslist","zombies","webcomics","opendirectories","lectures","woahdude","collapse","lists","javascript","pscarlhprogramming","travel","green","anime","christianity","pic","hackers","google","firefox","australia","lost","government","military","linguistics","zenhabits","tech","japan","rpg","ruby","socialism","starcraft","worstof","shittyadvice","newreddits","somethingimade","robotics","guitar","education","cpp","metal","haskell","moviecritic","seduction","mma","ronpaul","productivity","php","buddhism","nature","feminisms","jokes","computersecurity","unitedkingdom","astro","bad_cop_no_donut","windowshots","reverseengineering","literature","tipofmytongue","browsers","chemistry","pets","lisp","soccer","socialmedia","celebrities","philosophyofscience","architecture","hockey","wallpapers","bestofcraigslist","truereddit","perl","secretsanta","fashion","equality","suicidewatch","conspiracies","redditstories","meetup","torrents","youtube","doctorwho","india","ukpolitics","wow","l33t","xboxisrael","recipes","homebrewing","usa","europe","mac","tedtalks","electronicmusic","dailywtf","law","osx","interestingasfuck","graffiti","biology","autos","evolution","apathy","redditchan","linux4noobs","vegan","lostgeneration","startups","anthropology","nyc","gardening","django","facebookquotes","911truth","java","transhuman","vim","sociology","things","cheap_meals","csbooks","gamedev","blackops","dubstep","idea","microsoft","ilivein","television","uspedrunk","areaindiegaming","machinelearning","starwars","quotes","lol","trippy","ufos","americanpolitics","standupcomedy","selfsufficiency","nonprofit","movieclub","scientology","auto","logo","ideas","scienceamericangovernment","veg","survivalist","zen","engineering","seattle","bash","survival","kde","cheats","electronics","cute","needadvice","cyberlaws","creepy","ted","overpopulation","poker","joel","catpictures","ideasfortheadmins","linux_gaming","erlang","chicago","reddithax","emacs","boston","celebcrack","hacking","malefashionadvice","politicalhumor","learnprogramming","euro","gossip","hardscience","c_programming","academicphilosophy","startrek","hrw","wave","paranormal","love","coffee","dwarffortress","ece","depression","softwaredevelopment","ediscover","austin","worldwidenews","ama","dotnet","tonightsdinner","progressive","windows","tipoftheday","portland","howtodiy","onlinegames","twitter","selfhelp","ladybashing","ohwhataworld","database","islam","scientific","formulabsd","motorcycles","porn","ireland","codeprojects","investing","psychonaut","comicbooks","crime","jobs","poetry","ads","eve","lsd","webdesign","networking","agi","neuro","snobs","liberty","slackerrecipes","palinproblem","toronto","reportthespammers","aviation","mmj","scheme","fakenews","vegetarianism","climateskeptics","conservative","functional","sanfrancisco","spaceflight","fascinating","pcgaming","finance","culture","blogs","iwantout","reddittraveljetblue","commonlaw","independent","gif","typography","pandemic","occult","baseball","freegames","dnb","classicalmusic","mwappengine","fiction","theology","asm","tothemoon","jazz","marketing","wdp","photocritique","parenting","egalitarian","animals","entrepreneur","trance","types","language","wallpaper","musictheory","archlinux","digg","promos","hipstergurlz","bestgamesever","learnjapanese","statistics","chrome","sysor","bikinis","apod","hacks","redditmusicclub","climate","systems","techplore","evopsych","visualization","gnu","clojure","wireless","mashups","radioreddit","cryptogon","photoshop","putinforpresident","bioinformatics","computergraphics","redditdev","c_language","search","baking","idap","alternativehealth","anticonsumption","unix","learnanewlanguage","rugc","semanticweb","rails","scala","magictcg","bugs","intp","geopolitics","animalrights","singularity","sonypslosangeles","taoism","mathbooks","social_bookmarking","freemusic","pch","git","newzealand","tmbr","learnmath","fsm","furry","culturalstudies","webnews","shortfilms","tea","de","mexico","smart","philadelphia","campingandhiking","war","lovecraft","chess","nootropics","webmaster","financialplanning","tattoos","omegle","redditbooks","cplusplus","wackyworld","permaculture","whedon","worldnewsartificial","bayarea","fail","lego","musicians","mspainttoday","ecoreddit","greasemonkey","celebrity","1000words","zombie","hackernews","animation","indierock","seo","freelance","fantasy","guitarlessons","askme","whalebait","england","lastnight","p2p","geospatial","linux_devices","whitemengonewild","wii","longtext","moddit","gamereviews","meta","artcrit","askusers","agile","redditmakesagame","spacefleet","emmawatson","matheducation","mixes","sysadmin","security","haiti","til","apocalypse","meditation","media","nonaustrianeconomics","pittsburgh","internet","vid","charts","itsnotonion","learning","dogs","piracy","nanotech","texas","noveltyaccounts","shortstories","ocaml","eebooks","screenwriting","work","forts","france","dragonage","mycology","organicgardening","yourweek","datasets","trust","designthought","picture","politicalphilosophy","trt","wordplay","podcasts","tips_tricks","americanhistory","algorithms","bookclub","fml","running","xbox360games","darwin","slashdot","libredesign","leaked","plt","statuegropers","medicine","code","cars","dae","latex","ufo","compilers","forhire","gamedeals","giveaways","walls","california","tvcritic","webdev","ajax","archaeology","computers","sewerhorse","shell","football","happybirthday","puzzles","hiphop","steampunk","stocks","cats","blogging","grammar","netfluff","polyamory","wearethefilmmakers","breakfast","atlanta","antiwar","wine","stoners","internetmarketing","povertytips","riaa","worldbuilding","crypto","wordpress","tuxtraining","boardgames","skateboarding","particlephysics","lifestyle","punk","magick","foodporn","lifehacks","jquery","helpoutreddit","gnome","iphoneappstore","sketchcomedy","artistic","redditjobs","sportsvideo","feminism","worldhistory","debian","men","newtotfbadass","cocoa","hipsters","moviereddit","encryption","mitchhedberg","phpfreelancer","spirituality","police","designourshirt","argentina","usability","recommendmovies","stopsmoking","dating","outrage","urbanplanning","audio","jobpostings","topgear","weeaboo","dior_lei","minimalism","conspiratard","musicnews","itnews","pirate","mises","future","tomorrowiwill","winternals","africa","nota","sos","wenyude","debateit","aerospace","china","brisbane","cricket","vids","gunners","vancouver","scotch","newyork","sexpositive","snowboarding","globalistnews","pirateparty","ebooks","transgender","newspeak","help","opened","conan","starcrafthellwarlrod","linkmingle","redditirc","contraptions","muxtape","climbing","drugscience","gifs","maplelinks","xboxlive","tiantiankankan","photoshopchallenge","virtualization","billxia","outdoors","vegas","forgottenbookmarks","new_right","web_infrastructure","es","rubyonrails","republican","exmormon","timetravel","cool","gentoo","web_development","aspnet","death_metal","michigan","hurts_my_eyes","operabrowser","indepthstories","london","rap","audioengineering","avant_garde","inspirational","mccainsgaffeoftheday","stonerrock","melbourne","androidappreviews","askagirl","rit","zh","linuxadmin","stargate","albumcritic","fineart","nfl","dexter","myth","atheismgender","idm","alt_conspiracy","golang","russia","spiritual","xmonad","macprogramming","technologyundead","thebookclub","d_language","freebies","arduino","blackhatseo","subprime","fixedgearbicycle","nin","picswashingtondc","wincustomize","gothic","houston","lolwut","breakglass","cosplay","fallacy","drupal","penpals","capitalism","oregon","psychopharmacology","smalltalk","fr","geography","needafriend","haiku","forumreddit","psp","bashladies","goodoldays","erth","lovereddit","ciencia","weird_science","pwnage","wanderlust","socialskills","stripclubs","testmysite","dissent","latinoamerica","prolog","housing","left4dead","cimigo","nostalgia","racistreddit","liquor","redditorsfor911truth","colorado","deutschland","movie","pokemon","fishing","postrock","photoblog","androiddev","ja","musicfail","pua","fsharp","j2ee","amazingtopaskscience","programminglanguages","cheatatmathhomework","mpbaduk","parent","missingpersons","bass","autism","flash","geology","alphanumeric","csharp","wikidashboard","alphainputs","intelligent","offensive","plasma","cannabiscultivation","linuxquestions","homeworkhelp","spoilers","treasuremaster","checkthisout","yardsale","gameswap","objectivism","floss","mentors","mobile","reallygrindsmygears","bodybuilding","droid","cheatingthesystem","insomnia","monterrey","animatedgifs","asia","lua","venturebros","yro","dallas","graphic_design","greenproducts","cycling","massageparlors","scene","trailertrash","yahooanswers","bestof_conspiracy","quebec","ferrets","technologyblogs","alcohol","strongatheism","theistvsatheist","dada","xtrumanx","drums","haskell_proposals","legalizeit","stories","djs","flickr","montreal","knives","nihilisms","resisttyranny","songwriters","twincitiessocial","homebrew","fantasticcontraption","technews","unhappy","truehorrorstories","etab","integral","sec","aragon","offmychest","futurama","knitting","physicsbooks","norge","sydney","freebooks","iran","luciddreaming","sailing","amateurradio","relax","techsupport","bluesmusic","fosshelpwanted","sfstories","functionallang","ui_programming","uppercanada","d_programming","dreams","etymology","genetics","karmaparty","sportscars","catholicism","germany","tattoosofgirlschildfree","reddit","bipolarreddit","canucks","redditanswers","selforganization","wisconsin","horror","activism","italy","nphotoweek","drunkenpigs","iphoneapps","triangle","tvclub","cnbeta","propaganda","contra","economicsneopagan","amazon","unicode","vegetarian","dandd","mspaint","ekklesia","css","hip_hop","bullshit","humanresources","reddiquette","retrogames","bjj","craft","pandorastations","socialscience","brasil","cocoadev","foodblog","obvious","omegletextadventure","celtic","disapproval","simpleliving","spotify","aws","facebook","futurism","teamfortressottawa","surreal","bargainbin","forum","macroeconomics","iamaf","censorship","opengl","cyberpunk","digitaladvertising","mediareddit","origami","memetics","redsox","joos","malkovich","linuxtutorials","wouldliketomeet","chineselanguage","magic","iphonedev","spontaneousmeetup","woodworking","ada","crazy_on_tap","nottheonion","it","motorsport","sandiego","xss","games","minnesota","zeropunctuation","invest","yoga","anarcho_capitalism","beekeeping","cheese","game","lanl_german","yahoo","dietandhealth","hunting","eeepc","herddit","religionseriously","spamrss","tf2au","techculture","libertarianleft","portugal","socialnews","quickquestions","rockclimbing","yodawg","blender","fedora","pakistan","potussoapier","thoriumreactor","folk","hot","academiceconomics","actuallesbians","bitch","comedy","webtools","iowa","marxism","newworldorder","reddit_fact_check","stupid","unpopular","h4ckers","hypatia","switzerland","cannotunsee","eyes","film","getfreakinfit","holeyhands","personalarmy","cthulhu","german","kinov","mmorpg","puns","arresteddevelopment","borderlands","pt","radiohead","awesomereddit","fantasyfootball","goodcops","highstrangeness","hotcosplaygirls","trading_ai","catswithbacon","mandrivafr","otl","wedding","chileremix","ebay","lojban","sfmagazines","aptliving","bsg","wwtt","busey","intellectualreddit","quantumcomputing","selfimprovement","cartoon","conspiracyhub","gangsandstuff","made","norml","onlycode","puppieswhofightbears","racism","womenofreddit","wsid","loldogs","tellreddit","tips","francophone","piano","rant","reddittrolls","saddestof","urbanexploring","blogger","sociologyforall","100wordstories","democrats","genetic_algorithms","marketpicks","painting","promote","prowrestling","singapore","sportsblogs","gaijin","teleco","nanotechnology","numerical","phish","app","kucinich","vacation","solaris","steak","transformers","gtd","lanl_latin","worldwidepolitics","geekmusic","nintendo","cookmesomething","longboarding","octopustomfoolery","art_int","shortentertainment","weather","anxietypanic","appearanceadvice","management","skiing","stlouis","voluntarism","birdpics","madscientist","mememuseum","sustainability","whine","breakcore","darkstep","french","gerald","modhelp","cherejimonica","gays","criticalwwwigr","answerreddit","archiyantram","corruption","latin","botany","cappuccino","pie","burningman","metaphysics","modded","righttodie","tolkienfans","reggae","acidstories","djmixes","frenchally","idontunderstand","newmusic","redditectives","redditia","sexywomen","teknoloji","demoscene","epicthread","image","knots","xfce","agnosticism","apologists","poll","chemlab","mustard","tasers","entomology","firefoxextensions","gothicandhorror","imadethis","psychedelic","dosugporuskij","justwow","kids","organic","baltimore","bccresearch","cakewin","onlinebooks","survivalguide","warcraft","compling","groovy","idareyou","impoliteconversation","kebek","photoshopcontest","archery","infos","nba","oneswarm","piercing","reviews","riddle","voteupif","bestestof","gay","grilledcheese","homeschool","mec","mybags","mydreamwebapp","gundem","pleasedtomeetyou","appleapps","firefly","liberalarts","timetravellers","window","controllablewebcams","cookbook","noads","pantsless","couchdb","gifts","transit","libraries","norulesmma","nuclear","pandora","rva","sinema","tefl","dickoftheyear","footballcentral","peterschiff","battlestations","blogtech","nihilism","reddituniversity","synthesizers","intj","religioninamerica","man","multisubs","scotland","buddha","quran","sql","beauty","cultcinema","disability","newagereligion","sinfest","vaporware","asblackculture","callgirls","datacompression","mertblog","schneier","vmware","antibacon","common_lisp","healthjudaism","realestate","freeideas","ninjas","redditizeme","otaku","virginia","geeky","mikecann","poetryofscience","redditor_pics","rickroll","ru","unity3d","book","hero","istanbul","matlab","privacy","survivalfood","unsolvedmysteries","water","teeshirtart","thankkickme","ultimate","physicalfitness","wtfcodingcontests","designercorps","elsalvador","pizza","redditdeals","tcl","ughh","webgaming","criticalsoftware","flowchart","mixtape","p2ptech","webtechblog","arabic","financenews","hiking","hugs","infographics","usefulshit","antiterrorism","computing","heroesofnewerth","introweb","just4callie","newjersey","npr","onlinejournalism","antihillary","eupolitics","hitchhiking","rugbyunion","unanimous","vinyl","asc","beautiful","copyleft","lgbtreddit","mjstrains","piratenpartei","suomi","tourdefrance","vfx","coolpics","dogpictures","lanl_spanish","pixelart","textsalad","awwcute","cagematch","gis","goodnewsinbadtimes","scholar","diabetes","freesoftware","narwhals","qgyhrecreationaldrugs","scribd","universalhealthcare","black_metal","dependent_types","forth","gearhead","genealogy","invisiblefist","islamofascism","merb","uiuc","askcheez","ornithology","programming_ru","quirked","wildcrafting","youre_doing_it_wrong","ambigrams","beards","easymoneyforteens","industrialdesign","liberal","wildcraft","house_music","motorsports","advertising","avantgardemusic","cevre","colorreddit","discussion","minecraft","mjd","themes","warhammer","ascii","boobs","erowid","sweden","websitefeedback","brewing","cleveland","conservation","friendship","photographers","ushistory","brooklyn","cheat_sheets","homeowners","illustration","kultur_sanat","parkour","samokrutka","terrible","twiddit","wildlife","mit","reprap","timelapse","askxkcd","criticalthinking","defcon","rlquotes","seti","vectorgraphics","belgium","complaints","greenskeptics","horses","hotlinks","hypnotoad","iloveboxxy","korean","pre","reason","collaborative_hub","musicvideos","nhl","pricxwatch","redaction","redditbay","karma","urbantransport","britpolitics","enamerique","israelexposed","nl","noncrazychristians","realists","drblog","nederlands","respectfuldebate","theredditbay","autotune","christopherhitchens","theatre","calgary","denmark","discgolf","eastereggs","entrepreneurship","is_computer_on","philosophyofliberty","realty","spore","templates","durrr","oklahoma","reasoners","electronic_cigarette","florida","interiordesign","lds","memes","tf2comics","trepanation","boxing","golf","mozilla","pregnancy","screenshots","telescopes","treadmills","useful","vlogging","defendyourself","dog","nosql","personals","portraitphotos","prostitution","rawfitnessonline","scifiscroll","starlets","surfing","yard","3dma","bootstrapping","contacts","denver","happyatwork","nethack","stupidcriminals","americanmilitary","copyfight","dailyshow","foodart","furries","healthcare","madeinusa","northcarolina","ralphnader","arc","coding_tutorials","espanol","gong","hotshots","logic","mormon","pvttrackers","sales","secondlife","tragic_satire","uureddit","warpiggs","websecurity","aikido","anonymous","christopherlower","college","communist","credesktop_wallpaper","editors","holyfuckingshit","labor","redditeame","subgenius","l4dlookingforlove","redditshirt","transhumanism","alaska","lina","motivatedphotos","predictions","punkskahardcore","religiousdebate","sanjosesharks","squeak","tattoosofgirls","craftivism","globaleconomy","happymonsanto","imdrunk","netbooks","philosophycorner","southafrican","subvertising","django_class","notmadeinchina","onions","redditfriends","tacos","algeria","foreignaffairs","gratefuldead","headlines","invites","oliveoil","russian","wackynews","bloggerdal","electro","enhaskell","environmentfreebsd","fun","hackintosh","postapocalypse","sfsteamgiveaways","techbookreviews","ykwih","yourfav","zine","dogtraining","freestuff","greatpics","kimkardashian","longvideos","misogyny","mixtapes","nsfw_wtf","oldreddits","orchestral","polls","shakeytimes","amiga","colbertreport","evosoc","hardeconomics","hilary","maemo","mindfuck","nativeamerican","oldfamilyphotos","tvshowsdirectory","crossfit","dr_horrible","funnylolcats","homedreamtheater","ohm","streetfights","thelema","videogamedevelopment","mst3k","nomorecrapmusic","softwareundergroundfilm","7mooode","ambientalmente","fdsafe","kidsfacepainting","manga","mypussyhurts","runetnews","sandbox","strength_training","today_in_history","valve","christians","existentialism","gameshq","geeklove","kiteboarding","left4deadmoosepatrol","thereligionofpeace","thetechlabs","2008isabletonlive","bizarro","designfloat","fts","glassart","hdemici","jambands","leftist","aquariumfish","energyghosts","gmaps","graviga","mensissues","ourchinese","parsoc","polska","recommendme","redditclassics","shuttercraft","srrar","travelguides","adultchildren","altess","animemusicvideos","glutenfree","ipr","osc","revolution","flex","heresy","hotelsandtravel","infp","metalworking","openbsd","politicstoo","undergroundbound","abortionisprolife","americaneconomy","athiesm","bizarrenews","classyinsults","disney","farming","horribleidea","pssnaked","puppies","redditoriginals","scipy","searchisbroken","anticapitalism","businessnews","htmllegalnews","oddstuff","postquebec","reruns","ukulele","weight","crmnews","essays","geocaching","marijuanastudies","nachos","oracle","perth","redditbookclub","redditorsinrecovery","store","winnipeg","badmusic","bonsai","hpf","keys","restaurant","askjeph","computerviruses","criticalminds","hinduism","iceland","jobreddit","lockpicking","noisemachine","traveling","trueblood","audiosurf","bbwbikinis","dmt","geyik","guitartuts","humanitarian","karenliberation","macgamedev","pretty","punthreads","robot","abdelilah","android_nospam","arizona","cleverbot","edmonton","exdiggers","gametheory","hooray","icanhaz","lanl_french","leafs","neil_degrasse_tyson","orlando","poetscorner","sodypop","vintagecomputing","ablog","aprilfoolcolumbus","dance","meat","personalfinance","qualityassurance","rockband","streetviews","swapmeet","wolframalpha_answers","wood","hardhockey","jailbaitphotos","middleeastnews","projects","quant","sexyfemale","shortstory","vintage","amerikanpolizei","catonmat","iwasclevertoday","montana","muskurahat","socialist","stockmarket","stoner","walloftext","airport","ccrm","destructoid","econbooks","gorgeous","oss","outdoorsports","relationships","saltlakecity","scribblenauts","smokefree2mod","babies","missed","mockthehivemind","nontheist","phenomenology","suggestmusic","closeencounters","educationepicbacon","geekmylove","hackerspaces","outreach","scripting","spain","terraserenus","usnews","actlocally","cannabisextracts","ptsd","web_utilities","abandonware","adhd","antisharia","badsites","garden","gradschool","humanist","kiva","malaysia","oaxaca","tinfoilhat","trackbike","unrestricted","zeppelins","dsp","gadgetlab","maru","masculinists","tf2uk","unsee","econ","gangsnstuff","gta4hacks","krugman","land","maker","rally","redditcinema","socialite","tr","asianmovieclub","billnye","detroit","guides","hotdeals","industrial","jaikratom","manchester","memphis","movienights","uqreddit","webbuzzz","weedit","bodymods","clinton","dotfiles","followup","greenfatigue","juxtaposition","kitchen","loomknitting","maps","motive","redditstats","svg","tabletop","wtf_florida","alife","appraisals","boise","debate","elior","life","mccain","mileycyrus","schoonology","southafrica","trollcave","windows_worldwidejackboot","awesome","bittorrent","championsleague","fringescience","hookah","karmanaut","primatology","print","vector_art_b","watchthis","celebritiesphotos","creatives","deepspacenine","geneology","huntsvillealabama","lastnightontv","motorcycle","palestinians","pipetobacco","rgrd","savagegarden","tf2comp","thisshouldbepolitics","versus"];

keystates = {
		MAIN:0,
		SUBREDDITS:1,
		MENU:2
};

legend_items_1 = {
		'UPDOWN':'Scroll Article',
		'LEFTRIGHT':'Scroll Page',
		'ENTER':'View Article',
		'GREEN':'View Comments',
		'RETURN':'Close Article',
		'TOOLS':'Menu',
		'RED':'Subreddits',
		'BLUE':'More Keys'
};
legend_items_2 = {
		'FF':'Upvote',
		'STOP':'Downvote',
		'YELLOW':'Slideshow View',
		'GREEN':'Edit Subreddit (When in Subreddits menu)',
		'BLUE':'More Keys'
};


/********************************
 * Globals
 *******************************/
fs = new FileSystem();
cur_url = "";
cur_article = 0;
before = "";
after = "";
page_number = 0;
subreddit = "";
key_state = keystates.MAIN;
keys_disabled = false; // If true - disables all keys except "RETURN"

search_box = null;
username_box = null;
password_box = null;
subreddit_box = null;

menu_items = {
	displaynames: ['Login/Logout',		'Goto Subreddit',	'Search',		'Show/Hide Legend'],
	actions: [		menuDoLoginLogout,	menuGotoSubreddit, menuOpenSearch,	menuToggleLegend]
};

// These are the default config params (After initial run, they will be read from the config file each time)
config_params = {
	legend_shown: 1, // Controls which legend items are currently shown. 0 = Don't show
	username: "",
	password: "",
	subreddits_list: ["FRONTPAGE", "ALL", "PICS", "FUNNY", "GAMING", "WORLDNEWS"]
};

/********************************
 * Helper Functions
 *******************************/

function updateConfig() {
	configFile = fs.openCommonFile("config.json",'w');
	configFile.writeAll(JSON.stringify(config_params));
	fs.closeCommonFile(configFile);
}

function SceneScene1() {

};



function doLogin(userAction) {
	if (0 != userAction) {
		// User cancelled
		return;
	}
	
	// Show username inputbox
	username_box.onShow();
	$('#usernameText').focus();
}



function doLogout(userAction) {
	if (0 != userAction) {
		// User cancelled
		return;
	}
	
	// Just delete the user credentials
	config_params.username = "";
	config_params.password = "";
	updateConfig();
}


function menuDoLoginLogout() {
	if (config_params.username == "") {
		// Ask for login
		$('#loginPrompt').sfPopup('show');
	}
	else {
		// Ask for logout (must update logged in username)
		$('#logoutPrompt').sfPopup({
			text:'Currently logged in as "' + config_params.username + '". Would you like to logout?',
			num:2,
			buttons:['YES','NO'],
			callback:doLogout
		});
		$('#logoutPrompt').sfPopup('show');
	}
}

function menuGotoSubreddit() {
	// Show the subreddit chooser
	subreddit_box.onKeyPressFunc = onSubredditGotoSubmit;
	subreddit_box.onShow();
	$('#subredditText').focus();	
}

function menuOpenSearch() {
	search_box.onShow();
	$('#searchText').focus();
}

function menuToggleLegend() {
	// Toggle the legend
	if (config_params.legend_shown) {
		$('#mainLegend').sfKeyHelp('hide');
		config_params.legend_shown = 0;
		$("#pageNumber").css("bottom","0");
	}
	else {
		$('#mainLegend').sfKeyHelp(legend_items_1);
		config_params.legend_shown = 1;
		$('#mainLegend').sfKeyHelp('show');
		$("#pageNumber").css("bottom","40px");
	}
	
	updateConfig();
}

function toggleLegendItems() {
	if (config_params.legend_shown == 1) {
		$('#mainLegend').sfKeyHelp(legend_items_2);
		config_params.legend_shown = 2;
	}
	else if (config_params.legend_shown == 2) {
		$('#mainLegend').sfKeyHelp(legend_items_1);
		config_params.legend_shown = 1;
	} 
}

function onSearchSubmit(userAction, userString, id) {
	switch (userAction) {
    	case 29443:	// Enter Key
    		page_number = 0;
    		cur_url = "http://www.reddit.com/search/.json?q=userString";
        	updatePage(true);
        	break;
    	case 88: 	// return
    	case 45:   	//exit
    	default:
    		// Do nothing
    		break;
	}	
}

function onUsernameSubmit(userAction, userString, id) {
	switch (userAction) {
    	case 29443:	// Enter Key
    		// Save username
    		config_params.username = userString;
    		
    		// Show password inputbox
    		password_box.onShow();
    		$('#passwordText').focus();
        	break;
    	case 88: 	// return
    	case 45:   	//exit
    	default:
    		// Do nothing
    		break;
	}
}

function onPasswordSubmit(userAction, userString, id) {
	switch (userAction) {
    	case 29443:	// Enter Key
    		// Try to login
    		config_params.password = userString;
    		$.post("http://www.reddit.com/api/login", {api_type:"json", user:config_params.username, password:config_params.password, rem:false}, verifyLogin);
    		break;
    	case 88: 	// return
    	case 45:   	//exit
    	default:
    		// User cancelled, delete creds
    		config_params.username = "";
    		break;
	}
}

function getTop20(list, prefix) {
	res = [];
	count = 0;
	for (var i=0; i < list.length; i++) {
		if (startsWith(list[i],prefix)) {
			res.push(list[i]);
			count++;
		}
		if (count == 20) {
			break;
		}
	}
	return res;
}

function onSubredditReplaceSubmit(userAction, userString, id) {
	switch (userAction) {
    	case 29443:	// Enter Key
    		// Replace the current entry with new entry
			subreddit_idx = $('#subredditsList').sfList("getIndex");
			config_params.subreddits_list[subreddit_idx] = userString.toUpperCase();  
			$('#subredditsList').sfList({data:config_params.subreddits_list, index:subreddit_idx});
			updateConfig();
    	case 88: 	// return
    	case 45:   	//exit
    	default:
    		break;
	}
}

function onSubredditGotoSubmit(userAction, userString, id) {
	switch (userAction) {
    	case 29443:	// Enter Key
    		// Go to the requested subreddit
    		page_number = 0;
    		subreddit = "/r/" + userString;
    	    cur_url = "http://www.reddit.com"+subreddit+"/.json";
    	    updatePage(true);
    		break;
    	case 88: 	// return
    	case 45:   	//exit
    	default:
    		// Do nothing
    		break;
	}
}

function onSubredditKeypress(userStringSoFar) {
	dataObj = {
			request: userStringSoFar,
	        items: getTop20(SUBREDDITS_AUTOCOMPLETE, userStringSoFar)
	};
	subreddit_box.showAutoCompletePopup(dataObj);
}

function verifyLogin(data, textStatus, jqXHR) {
	if (0 == data.json.errors.length) {
		// Login success! Save creds
		updateConfig();
		$("#userName").text("logged in as: " + config_params.username);
	}
	else {
		// Login failed, remove creds
		config_params.username = "";
		config_params.password = "";
		$('#loginFailurePrompt').sfPopup('show');
		$("#userName").text("");
	}
}

function handle_article(index, article ) {
    info = article.data;
    var arr;
        
    // Create new article
    $("#siteTable").append('<div id="article'+index+'" class="thing link" uid="'+info.id+'"></div>');
    article = $('#article'+index);
       
    // Add the rank
    article.append('<span class="rank">' + (page_number*ARTICLES_IN_PAGE + index+1) + '</span>');
    
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
    else if (info.thumbnail != "") { // Sprite-based (add class)
        article.append('<a class="thumbnail ' + info.thumbnail + '" ></a>');
    }
    else { // Missing - use default
        article.append('<a class="thumbnail default"></a>');
    }
    
    //add permalink to comments
    article.append('<a class="comments" href="http://www.reddit.com' + info.permalink +'"> </a>');
    
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
    
    return true;
    
}

function updatePage(move_forward) {
	if (page_number == 0) { 
		$.getJSON(cur_url, {limit: ARTICLES_IN_PAGE}, parseReddit);
	}
	else {
		if (move_forward) {
			$.getJSON(cur_url, {count:page_number*ARTICLES_IN_PAGE, after:after, limit: ARTICLES_IN_PAGE}, parseReddit);
		}
		else {
			$.getJSON(cur_url, {count:page_number*ARTICLES_IN_PAGE, before:before, limit: ARTICLES_IN_PAGE}, parseReddit);
		}
		
	}
}

function parseReddit(data, textStatus, jqXHR) {
	// Init some globals
    cur_article = 0;
    
    // Handle the user-specified amount of articles
    before = data.data.before;
    after = data.data.after;
    $("#siteTable").text("");
    $("#subredditName").text(subreddit);
    for (var i=0; i < ARTICLES_IN_PAGE; i++) {
    	handle_article(i, data.data.children[i]);
    }
    
    // Adjust text size by page size
	total_length = 0;
	for (var i=0; i < ARTICLES_IN_PAGE; i++) {
		total_length += data.data.children[i].data.title.length;
    }
    if (total_length > MAX_CHARS_PER_PAGE) {
		// Decrease font size
		new_size = 30 - ((total_length-MAX_CHARS_PER_PAGE)/50);
		$(".link .title").css("font-size",new_size+"px");
	}
    else if (total_length < MIN_CHARS_PER_PAGE) {
		// Increase font size
    	new_size = 35 + 4*((MIN_CHARS_PER_PAGE-total_length)/50);
    	$(".link .title").css("font-size",new_size+"px");
	}
    
    // Mark first article and update page
    markSelector($('#article0'));
    $("#pageNumber").text(page_number+1);
}

function markSelector(x) {
    x.css("background-color", "#FFFF99");
    x.css("border-color", "#FF6666");
    font_size = parseInt(x.find(".title").css("font-size"));
    x.find(".title").css("font-size", font_size+5+"px");
} 

function unmarkSelector(x) {
    if (null != x) {
        x.css("background-color", "");
        x.css("border-color", "");
        font_size = parseInt(x.find(".title").css("font-size"));
        x.find(".title").css("font-size", font_size-5+"px");
    }
}

function imageloaded() {
	$('#loadingId').sfLoading('hide');
	
	if ($("#imageDisplayer").attr("src")) {
		$("#mainPage").css("opacity","0");
		$("#SceneScene1").css("background-color","#202020");
		$("#imageDisplayer").css("display","block");
	}
}

function iframeloaded() {
	$('#loadingId').sfLoading('hide');
	
    if ($("#pageDisplayer").attr("src")) {
    	$("#mainPage").css("opacity","0");
    	$("#pageDisplayer").css("display","block");
    } 
}

function isImageUrl(url) {
	if (endsWith(url,".png")) return true;
	if (endsWith(url,".bmp")) return true;
	if (endsWith(url,".tif")) return true;
	if (endsWith(url,".tiff")) return true;
	if (endsWith(url,".gif")) return true;
	if (endsWith(url,".jpeg")) return true;
	if (endsWith(url,".jpg")) return true;
	return false;
}

function handleArticlesKeydown(keyCode) {
	// If keys are disabled (and key isn't return) - do nothing
	if (keys_disabled && keyCode != sf.key.RETURN) {
		return;
	}
	
	switch (keyCode) {
		case sf.key.LEFT: // PREV PAGE
	    	if (page_number > 0) {
	    		page_number--;
	    		updatePage(false);
	    	}
	    	break;
		
		case sf.key.RIGHT: // NEXT PAGE
	    	page_number++;
	    	updatePage(true);
	    	break;
	    
		case sf.key.UP: // SELECT PREVIOUS
	        if (cur_article > 0) {
	            unmarkSelector($('#article'+cur_article));
	            cur_article--;
	            markSelector($('#article'+cur_article));
	        }
	        break;
	        
		case sf.key.DOWN: // SELECT NEXT
	        if (cur_article < ARTICLES_IN_PAGE-1) {
	            unmarkSelector($('#article'+cur_article));
	            cur_article++;
	            markSelector($('#article'+cur_article));
	        }
	        break;
	    
		case sf.key.ENTER: // GOTO LINK
		    article_title = $('#article'+ cur_article + " a.title");
		    url = article_title.attr("href");
		    
		    if (COMMENTS_REGEX.test(url)) {
		    	// Comments link - Open in comments view
		    	alert("HANDLE IN COMMENTS VIEW");
		    	//TODO 
		    }
		    else if (isImageUrl(url)) {
		    	// Image link - Show in <img> element
		    	 
		    	// Determine if vertical or horizontal stretch
		    	/*
		    	img = new Image();
		    	img.onload = function() {
		    		if (this.height >= this.width) {
		    			$("#imageDisplayer").css("height","100%");
		    			$("#imageDisplayer").css("width","auto");
		    		}
		    		else {
		    			$("#imageDisplayer").css("width","100%");
		    			$("#imageDisplayer").css("height","auto");
		    		}
		    	};
		    	img.src = url;
		    	*/
		    	
		    	// Show the image
		    	$("#imageDisplayer").attr("src",url);
		    	$("#loadingId").sfLoading("show");
		    	$("#mainPage").css("opacity","0.1");
		    	keys_disabled = true;
		    }
		    else if (startsWith(url, "https://www.youtube.com")) {
		    	// Youtube link - Open with video player
		    	alert("HANDLE IN YOUTUBE PLAYER");
		    	
		    	// Play the video
		    	/*
		    	sf.service.VideoPlayer.setFullScreen(true);
		    	sf.service.VideoPlayer.play({
		    	    url: url,
		    	    fullScreen: true
		    	});
		    	*/
		    }
		    else {
		    	// Normal link - open in IFRAME
		    	// TODO: How to add scroll bar?!?
		    	$("#pageDisplayer").attr("src",url);
				$("#loadingId").sfLoading("show");
				$("#mainPage").css("opacity","0.1");
				keys_disabled = true;
		    }
		    
		    break;
		    
		case sf.key.RETURN: // BACK TO APP (Hide IFRAME/IMAGE)
			widgetAPI.blockNavigation(event);
			
			$('#loadingId').sfLoading('hide');
		    $("#pageDisplayer").css("display","none");
		    $("#pageDisplayer").attr("src","");
		    
		    $("#imageDisplayer").css("display","none");
		    $("#imageDisplayer").attr("src","");
		    
		    $("#SceneScene1").css("background-color","#ffffff");
		    $("#mainPage").css("opacity","1");
		    keys_disabled = false;
		    
		    break;
	    
		case sf.key.FF: // UPVOTE
			// Check that user is logged in
			if (config_params.username == "") {
				$('#needLoginPrompt').sfPopup('show');
				break;
			}
			
			art = $('#article'+ cur_article);
			uid = art.attr("uid");
			
			// Handle midcol
			midcol = art.find(".midcol");
			midcol.removeClass("dislikes");
			midcol.toggleClass("unvoted likes");
			
			// Handle arrows
			arrow = art.find(".arrow.up");
			arrow_up = art.find(".arrow.upmod");
			arrow_downmod = art.find(".arrow.downmod");
			
			if (arrow.length) {
			    // UPVOTE
			    arrow.toggleClass("up upmod");
			    //$.post(REDDIT_VOTE_URL,{id: uid, dir: "1"});
			}
			else if (arrow_up.length) {
			    // REVERT UPVOTE
			    arrow_up.toggleClass("up upmod");
			    //$.post(REDDIT_VOTE_URL,{id: uid, dir: "0"});
			}
			
			if (arrow_downmod.length) {
			    arrow_downmod.toggleClass("downmod down");
			}
			break;
	    
		case sf.key.STOP: // DOWNVOTE
			// Check that user is logged in
			if (config_params.username == "") {
				$('#needLoginPrompt').sfPopup('show');
				break;
			}
			
	        art = $('#article'+ cur_article);
	        uid = art.attr("uid");
		
			// Handle midcol
			midcol = art.find(".midcol");
			midcol.removeClass("likes");
			midcol.toggleClass("unvoted dislikes");
			
			// Handle arrows
			arrow = art.find(".arrow.down");
			arrow_down = art.find(".arrow.downmod");
			arrow_upmod = art.find(".arrow.upmod");
			
			if (arrow.length) {
			    // DOWNVOTE
			    arrow.toggleClass("down downmod");
			    //$.post(REDDIT_VOTE_URL,{id: uid, dir: "-1"});
			}
			else if (arrow_down.length) {
			    // REVERT DOWNVOTE
			    arrow_down.toggleClass("down downmod");
			    //$.post(REDDIT_VOTE_URL,{id: uid, dir: "0"});
			}
			
			if (arrow_upmod.length) {
			    arrow_upmod.toggleClass("upmod up");
			}
			break;
			
		case sf.key.RED: // SHOW SUBREDDIT LIST
			$('#subredditsList').sfList("focus");
			$("#subredditsList").css("opacity","0.8");
			key_state = keystates.SUBREDDITS;
			break;
			
		case sf.key.GREEN: // GOTO COMMENTS
	        // TODO
			article_comments = $('#article'+ cur_article + " a.comments");
			alert(article_comments.attr("href"));
			
			sf.scene.show('comments',{Url: article_comments.attr("href")} );
			sf.scene.focus('comments');
			sf.scene.hide("scene1", NULL);
	    	break;
	    	
		case sf.key.YELLOW: // GOTO SLIDESHOW
			// TODO
			break;
			
		case sf.key.BLUE: // TOGGLE LEGEND ITEMS
			toggleLegendItems();
			break;
	    	
		case sf.key.TOOLS: // OPEN MENU
		    $('#menuBox').sfList("focus");
			$("#menuBox").css("opacity","0.8");
			key_state = keystates.MENU;
		    break;
	    	
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	} // END SWITCH
}

function handleSubredditsKeydown(keyCode) {
	switch (keyCode) {	    
		case sf.key.UP: // SELECT PREVIOUS
			$('#subredditsList').sfList("prev");
	        break;
	        
		case sf.key.DOWN: // SELECT NEXT
			$('#subredditsList').sfList("next");
	        break;
	    
		case sf.key.ENTER: // GOTO SUBREDDIT
			key_state = keystates.MAIN;
			$("#subredditsList").css("opacity","0");
			
			subreddit_idx = $('#subredditsList').sfList("getIndex");
			if (0 == subreddit_idx) {
				subreddit = "";
			}
			else {
				subreddit = "/r/" + config_params.subreddits_list[subreddit_idx];
			}
			
		    page_number = 0;
		    cur_url = "http://www.reddit.com"+subreddit+"/.json";
		    updatePage(true);
	        break;
	        
		case sf.key.GREEN: 	// SET NEW SUBREDDIT
			// Check that the first subreddit hasn't been chosen
			subreddit_idx = $('#subredditsList').sfList("getIndex");
			if (0 == subreddit_idx) {
				$('#cantEditSubredditPrompt').sfPopup('show');
				break;
			}
			
			// Show the subreddit chooser
			subreddit_box.onKeyPressFunc = onSubredditReplaceSubmit;
			subreddit_box.onShow();
			$('#subredditText').focus();
			break;
			
		case sf.key.RETURN: // HIDE SUBREDDIT LIST
		case sf.key.RED: 
			widgetAPI.blockNavigation(event);
			key_state = keystates.MAIN;
			$("#subredditsList").css("opacity","0");
			break;
	}
}

function handleMenuKeydown(keyCode) {
	switch (keyCode) {	    
		case sf.key.UP: // SELECT PREVIOUS
			$('#menuBox').sfList("prev");
	        break;
	        
		case sf.key.DOWN: // SELECT NEXT
			$('#menuBox').sfList("next");
	        break;
	    
		case sf.key.ENTER: // CHOOSE ENTRY
			key_state = keystates.MAIN;
			$('#menuBox').css("opacity","0");
			
			// Execute the relevant menu action
			menuIdx = $('#menuBox').sfList("getIndex");  
			action = menu_items.actions[menuIdx];
			action();
	        break;
			
	        break;
	    
		case sf.key.RETURN: // HIDE MENU
		case sf.key.TOOLS: 
			widgetAPI.blockNavigation(event);
			key_state = keystates.MAIN;
			$('#menuBox').css("opacity","0");
			break;
	}
}

SceneScene1.prototype.handleKeyDown = function (keyCode) {
	switch (key_state) {
		case keystates.MAIN: 
			handleArticlesKeydown(keyCode);
			break;
			
		case keystates.SUBREDDITS:
			handleSubredditsKeydown(keyCode);
			break;
			
		case keystates.MENU:
			handleMenuKeydown(keyCode);
			break;
	}
};

// Fades the splash screen (called on timer)
function fadeSplash() {
	$("#splash").css("opacity","0");
}

// Check if a string ends with some suffix
function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

//Check if a string ends with some prefix
function startsWith(str, prefix) {
    return (str.indexOf(prefix) == 0);
}


/********************************
 * Init Functions
 *******************************/

SceneScene1.prototype.initialize = function () {
	alert("SceneScene1.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	
	// Set timeout for splash screen
	setTimeout(fadeSplash, SPLASH_FADE_TIME);
	
	// Read config params from config file
	fs = new FileSystem();
	configFile = fs.openCommonFile("config.json",'r');
	if (null == configFile) {
		// Create config file
		updateConfig();
	}
	else {
		// Read config params
		config_params = JSON.parse(configFile.readAll());
		fs.closeCommonFile(configFile);
	}
	
	// Init prompts
	$('#loginPrompt').sfPopup({
		text:'Currently logged out. Would you like to login to reddit?',
		num:2,
		buttons:['YES','NO'],
		callback:doLogin
	});
	
	$('#loginSuccessPrompt').sfPopup({
		text:'Login succeeded',
		num:1,
		buttons:['OK']
	});
	
	
	$('#loginFailurePrompt').sfPopup({
		text:'Login failed',
		num:1,
		buttons:['OK']
	});
	
	$('#needLoginPrompt').sfPopup({
		text:'In order to upvote/downvote, you must be logged in',
		num:1,
		buttons:['OK']
	});
	
	$('#cantEditSubredditPrompt').sfPopup({
		text:"Can't edit the first subreddit entry (FRONTPAGE)",
		num:1,
		buttons:['OK']
	});
	
	// Init menu box
	$('#menuBox').sfList({data:menu_items.displaynames, index:0});
	
	// Init subreddits list
	$('#subredditsList').sfList({data:config_params.subreddits_list, index:0});
	
	
	// Init IME boxes
	search_box = new IMEShell_Common();
	search_box.inputboxID = "searchText";
	search_box.inputTitle = "Search Reddit";
	search_box.onKeyPressFunc = onSearchSubmit;
	search_box.context = this;
	
	username_box = new IMEShell_Common();
	username_box.inputboxID = "usernameText";
	username_box.inputTitle = "Username";
	username_box.onKeyPressFunc = onUsernameSubmit;
	username_box.context = this;
	
	password_box = new IMEShell_Common();
	password_box.inputboxID = "passwordText";
	password_box.inputTitle = "Password";
	password_box.onKeyPressFunc = onPasswordSubmit;
	password_box.context = this;
	
	subreddit_box = new IMEShell_Common();
	subreddit_box.inputboxID = "subredditText";
	subreddit_box.inputTitle = "Choose a subreddit";
	subreddit_box.inputDescription = "(for example \"science\")";
	subreddit_box.onCompleteFunc = onSubredditKeypress;
	subreddit_box.context = this;
		
	// Init legend
	$('#mainLegend').sfKeyHelp(legend_items_1);
	if (config_params.legend_shown) {
		$('#mainLegend').sfKeyHelp('show');
		$("#pageNumber").css("bottom","40px");
	}
	else {
		$('#mainLegend').sfKeyHelp('hide');
		$("#pageNumber").css("bottom","0px");
	}
	
	// Init video player
	sf.service.VideoPlayer.setKeyHandler(sf.key.RETURN, function () {
	    sf.service.VideoPlayer.stop();
	});
		
	// If we have saved credentials - try to login
	if (config_params.username != "") {
		$.post("http://www.reddit.com/api/login", {api_type:"json", user:config_params.username, password:config_params.password, rem:false}, verifyLogin);
	}	
};

SceneScene1.prototype.handleShow = function (data) {
	alert("SceneScene1.handleShow()");
	
	// Get the current page's articles
	cur_url = "http://www.reddit.com"+subreddit+"/.json";
	updatePage(true);
};

SceneScene1.prototype.handleHide = function () {
	alert("SceneScene1.handleHide()");
	// this function will be called when the scene manager hide this scene
	
	// Close all IME boxes
	search_box.onClose();
	username_box.onClose();
	password_box.onClose();
	subreddit_box.onClose();
};

SceneScene1.prototype.handleFocus = function () {
	alert("SceneScene1.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene1.prototype.handleBlur = function () {
	alert("SceneScene1.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
		
};