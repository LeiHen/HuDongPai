/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon_bulb_2': '&#xe609;',
		'icon_logofont': '&#xe600;',
		'icon_logolong': '&#xe601;',
		'icon_logo': '&#xe602;',
		'icon_speaker': '&#xe603;',
		'icon_search': '&#xe604;',
		'icon_bulb_1': '&#xe67f;',
		'icon_spinner': '&#xe605;',
		'icon_cog': '&#xe606;',
		'icon_user': '&#xe607;',
		'icon_envelope': '&#xe608;',
		'icon_squirrel': '&#xf0b2;',
		'icon_tag': '&#xe60a;',
		'icon_tags': '&#xe60b;',
		'icon_barcode': '&#xe60c;',
		'icon_qrcode': '&#xe60d;',
		'icon_loading_1': '&#xe60e;',
		'icon_loading_2': '&#xe60f;',
		'icon_loading_3': '&#xe610;',
		'icon_cog2': '&#xe680;',
		'icon_expression_happy': '&#xe611;',
		'icon_expression_happy_2': '&#xe612;',
		'icon_expression_smiley': '&#xe613;',
		'icon_expression_smiley_2': '&#xe614;',
		'icon_expression_tongue': '&#xe615;',
		'icon_expression_tongue_2': '&#xe616;',
		'icon_expression_sad': '&#xe617;',
		'icon_expression_sad_2': '&#xe618;',
		'icon_expression_wink': '&#xe619;',
		'icon_expression_wink_2': '&#xe61a;',
		'icon_expression_grin': '&#xe61b;',
		'icon_expression_grin_2': '&#xe61c;',
		'icon_expression_cool': '&#xe61d;',
		'icon_expression_cool_2': '&#xe61e;',
		'icon_expression_angry': '&#xe61f;',
		'icon_expression_angry_2': '&#xe620;',
		'icon_expression_evil': '&#xe621;',
		'icon_expression_evil_2': '&#xe622;',
		'icon_expression_shocked': '&#xe623;',
		'icon_expression_shocked_2': '&#xe624;',
		'icon_expression_confused': '&#xe625;',
		'icon_expression_confused_2': '&#xe626;',
		'icon_expression_neutral': '&#xe627;',
		'icon_expression_neutral_2': '&#xe628;',
		'icon_expression_wondering': '&#xe629;',
		'icon_expression_wondering_2': '&#xe62a;',
		'icon_mail': '&#xe681;',
		'icon_youtube': '&#xe682;',
		'icon_youtube2': '&#xe683;',
		'icon_apple': '&#xe62b;',
		'icon_android': '&#xe62c;',
		'icon_windows': '&#xe62d;',
		'icon_windows8': '&#xe62e;',
		'icon_chrome': '&#xe62f;',
		'icon_firefox': '&#xe630;',
		'icon_IE': '&#xe631;',
		'icon_opera': '&#xe632;',
		'icon_safari': '&#xe684;',
		'icon_number_1': '&#xe633;',
		'icon_number_2': '&#xe634;',
		'icon_number_3': '&#xe635;',
		'icon_number_4': '&#xe636;',
		'icon_number_5': '&#xe637;',
		'icon_number_6': '&#xe638;',
		'icon_number_7': '&#xe639;',
		'icon_number_8': '&#xe63a;',
		'icon_number_9': '&#xe63b;',
		'icon_number_0': '&#xe63c;',
		'icon_number_base_1': '&#xe63d;',
		'icon_number_base_2': '&#xe63e;',
		'icon_number_base_3': '&#xe63f;',
		'icon_number_base_4': '&#xe640;',
		'icon_number_base_5': '&#xe641;',
		'icon_number_base_6': '&#xe642;',
		'icon_number_base_7': '&#xe643;',
		'icon_number_base_8': '&#xe644;',
		'icon_number_base_9': '&#xe645;',
		'icon_number_base_0': '&#xe646;',
		'icon_checkmark': '&#xe647;',
		'icon_checkmark_base': '&#xe648;',
		'icon_cance_base': '&#xe649;',
		'icon_cance': '&#xe64a;',
		'icon_plus_base': '&#xe64b;',
		'icon_plus': '&#xe64c;',
		'icon_minus_base': '&#xe64d;',
		'icon_minus': '&#xe64e;',
		'icon_notice_base': '&#xe64f;',
		'icon_notice': '&#xe650;',
		'icon_qrcode2': '&#xf029;',
		'icon_print': '&#xf02f;',
		'icon_caret_down_1': '&#xf0d7;',
		'icon_caret_up_1': '&#xf0d8;',
		'icon_caret_left_1': '&#xf0d9;',
		'icon_caret_right_1': '&#xf0da;',
		'icon_caret_left_2': '&#xf104;',
		'icon_caret_right_2': '&#xf105;',
		'icon_caret_up_2': '&#xf106;',
		'icon_caret_down_2': '&#xf107;',
		'icon_weibo': '&#xf18a;',
		'icon_renren': '&#xf18b;',
		'icon_qq': '&#xf1d6;',
		'icon_wechat': '&#xf1d7;',
		'icon_toggle_off': '&#xf204;',
		'icon_toggle_on': '&#xf205;',
		'icon_users_base': '&#xe651;',
		'icon_user_base': '&#xe652;',
		'icon_users_1': '&#xe653;',
		'icon_user_1': '&#xe654;',
		'icon_mapmarker': '&#xe655;',
		'icon_th_menu': '&#xe656;',
		'icon_th_list': '&#xe657;',
		'icon_phonelink': '&#xe658;',
		'icon_share': '&#xe659;',
		'icon_check_box': '&#xe65a;',
		'icon_check_box_outline-blank': '&#xe65b;',
		'icon_radio_button_off': '&#xe65c;',
		'icon_radio_button_on': '&#xe65d;',
		'icon_phone': '&#xe65e;',
		'icon_mobile': '&#xe65f;',
		'icon_user_3': '&#xe660;',
		'icon_compass': '&#xe661;',
		'icon_earth': '&#xe662;',
		'icon_pictures': '&#xe663;',
		'icon_github': '&#xe664;',
		'icon_github_2': '&#xe665;',
		'icon_flickr': '&#xe685;',
		'icon_flickr_2': '&#xe666;',
		'icon_vimeo': '&#xe667;',
		'icon_twitter': '&#xe668;',
		'icon_twitter_2': '&#xe669;',
		'icon_facebook': '&#xe66a;',
		'icon_facebook_2': '&#xe66b;',
		'icon_googleplus': '&#xe66c;',
		'icon_googleplus_2': '&#xe686;',
		'icon_pinterest': '&#xe66d;',
		'icon_pinterest_2': '&#xe66e;',
		'icon_tumblr': '&#xe66f;',
		'icon_tumblr_2': '&#xe670;',
		'icon_linkedin': '&#xe671;',
		'icon_linkedin_2': '&#xe672;',
		'icon_dribbble': '&#xe673;',
		'icon_dribbble_2': '&#xe674;',
		'icon_stumbleupon': '&#xe675;',
		'icon_stumbleupon_2': '&#xe676;',
		'icon_qq_2': '&#xe677;',
		'icon_instagram': '&#xe678;',
		'icon_dropbox': '&#xe679;',
		'icon_evernote': '&#xe67a;',
		'icon_skype': '&#xe67b;',
		'icon_skype_2': '&#xe67c;',
		'icon_picasa': '&#xe67d;',
		'icon_behance': '&#xe67e;',
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
