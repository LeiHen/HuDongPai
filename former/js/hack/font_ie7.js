/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'hudongpai\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon_douban': '&#xe659;',
		'icon_douban_circle': '&#xe660;',
		'icon_logofont': '&#xe602;',
		'icon_logolong': '&#xe601;',
		'icon_logo': '&#xe600;',
		'icon_link': '&#xe757;',
		'icon_earth': '&#xe752;',
		'icon_accessibility': '&#xe758;',
		'icon_happy': '&#xe681;',
		'icon_happy2': '&#xe682;',
		'icon_smiley': '&#xe683;',
		'icon_smiley2': '&#xe684;',
		'icon_tongue': '&#xe685;',
		'icon_tongue2': '&#xe686;',
		'icon_sad': '&#xe687;',
		'icon_sad2': '&#xe688;',
		'icon_wink': '&#xe689;',
		'icon_wink2': '&#xe690;',
		'icon_grin': '&#xe691;',
		'icon_grin2': '&#xe692;',
		'icon_cool': '&#xe693;',
		'icon_cool2': '&#xe694;',
		'icon_angry': '&#xe695;',
		'icon_angry2': '&#xe696;',
		'icon_evil': '&#xe697;',
		'icon_evil2': '&#xe698;',
		'icon_shocked': '&#xe699;',
		'icon_shocked2': '&#xe700;',
		'icon_confused': '&#xe701;',
		'icon_confused2': '&#xe702;',
		'icon_neutral': '&#xe703;',
		'icon_neutral2': '&#xe704;',
		'icon_wondering': '&#xe705;',
		'icon_wondering2': '&#xe706;',
		'icon_cancel_circle3': '&#xe796;',
		'icon_check_circle3': '&#xe795;',
		'icon_google_drive': '&#xe661;',
		'icon_youtube2': '&#xe664;',
		'icon_youtube': '&#xe663;',
		'icon_flickr2': '&#xe732;',
		'icon_flickr1': '&#xe731;',
		'icon_flickr_square': '&#xe734;',
		'icon_dribbble': '&#xe665;',
		'icon_dribbble2': '&#xe666;',
		'icon_pin': '&#xe741;',
		'icon_pin2': '&#xe742;',
		'icon_mail2': '&#xe744;',
		'icon_mail': '&#xe743;',
		'icon_plus3': '&#xe7911;',
		'icon_minus3': '&#xe794;',
		'icon_check3': '&#xe791;',
		'icon_cross3': '&#xe792;',
		'icon_cancel': '&#xe713;',
		'icon_check': '&#xe711;',
		'icon_plus': '&#xe715;',
		'icon_minus': '&#xe717;',
		'icon_th_menu': '&#xe727;',
		'icon_th_list': '&#xe729;',
		'icon_times2': '&#xe714;',
		'icon_plus2': '&#xe716;',
		'icon_minus2': '&#xe718;',
		'icon_check2': '&#xe712;',
		'icon_th_menu2': '&#xe728;',
		'icon_th_list2': '&#xe730;',
		'icon_printer': '&#xe745;',
		'icon_video': '&#xe755;',
		'icon_check_circle': '&#xe719;',
		'icon_check_circle2': '&#xe720;',
		'icon_cancel_circle': '&#xe721;',
		'icon_cancel_circle2': '&#xe722;',
		'icon_plus_circle': '&#xe723;',
		'icon_plus_circle2': '&#xe724;',
		'icon_minus_circle': '&#xe725;',
		'icon_minus_circle2': '&#xe726;',
		'icon_photo': '&#xe756;',
		'icon_comments': '&#xe754;',
		'icon_power_off': '&#xe753;',
		'icon_phone': '&#xe751;',
		'icon_apple': '&#xe632;',
		'icon_windows': '&#xe633;',
		'icon_android': '&#xe631;',
		'icon_weibo': '&#xe644;',
		'icon_renren': '&#xe645;',
		'icon_tencent_weibo': '&#xe643;',
		'icon_qq': '&#xe641;',
		'icon_wechat': '&#xe642;',
		'icon_signal': '&#xe605;',
		'icon_arrow_left': '&#xe614;',
		'icon_arrow_down': '&#xe613;',
		'icon_arrow_up': '&#xe611;',
		'icon_arrow_right': '&#xe612;',
		'icon_arrow_left_big': '&#xe618;',
		'icon_arrow_down_big': '&#xe617;',
		'icon_arrow_up_big': '&#xe6315;',
		'icon_arrow_right_big': '&#xe616;',
		'icon_flickr_circle': '&#xe733;',
		'icon_twitter': '&#xe647;',
		'icon_twitter_circle': '&#xe648;',
		'icon_facebook': '&#xe649;',
		'icon_facebook_circle': '&#xe650;',
		'icon_googleplus': '&#xe651;',
		'icon_googleplus_circle': '&#xe652;',
		'icon_pinterest': '&#xe653;',
		'icon_pinterest_circle': '&#xe654;',
		'icon_tumblr': '&#xe655;',
		'icon_tumblr_circle': '&#xe656;',
		'icon_instagram': '&#xe658;',
		'icon_picasa': '&#xe657;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon_[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
