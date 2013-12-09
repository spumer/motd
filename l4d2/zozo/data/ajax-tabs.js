$(document).ready(function() {	
	$('.server-info-block').find('li').click(function() {
		var url = './data/server_info_servers.php';
		var id = $(this).attr('class').replace('current', '').replace(' ', ''); // cut class 'current' from tab
		var con = ' #' + id + '-content'; // #27015-content
		var mon = '.' + id + '-mon'; // .27015-mon
		$(mon).html('<div class="ajax-load-gif"></div>');
		var mon_delay = $(mon);
		setTimeout(function() { mon_delay.load(url+con); }, 800);
    });
	
	//MOTD
	$('.l4d2-tab').click( function() {
		$('.l4d2-box').html("<div class='ajax-load-gif'></div>");
		$(".l4d2-box").load("./data/motd_tabs.php #l4d2-content");
    } );
	$('.tf2-tab').click( function() {
		$('.tf2-box').html("<div class='ajax-load-gif'></div>");
		$(".tf2-box").load("./data/motd_tabs.php #tf2-content");
    } );
	$('.nd-tab').click( function() {
		$('.nd-box').html("<div class='ajax-load-gif'></div>");
		$(".nd-box").load("./data/motd_tabs.php #nd-content");
    } );
	$('.kf-tab').click( function() {
		$('.kf-box').html("<div class='ajax-load-gif'></div>");
		$(".kf-box").load("./data/motd_tabs.php #kf-content");
    } );
	$('.chat-tab').click( function() {
		$('.chat-box').html("<div class='ajax-load-gif'></div>");
		$(".chat-box").load("./data/motd_tabs.php #chat-content");
    } );
} );