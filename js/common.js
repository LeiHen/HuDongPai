// JavaScript Document

/**
 * @name     :collectWeb
 * @author   :Nice
 * @dependent:收藏本站
 */
function addFavorite() {

    if (window.sidebar && window.sidebar.addPanel) { 
    // Mozilla Firefox Bookmark
        window.sidebar.addPanel(document.title, window.location.href, '');
    } else if (window.external && ('AddFavorite' in window.external)) { 
    // IE Favorite
        window.external.AddFavorite(location.href, document.title);
    } else if (window.opera && window.print) { 
    // Opera Hotlist
        this.title = document.title;
        return true;
    } else { 
    // webkit - safari/chrome
        alert('请使用' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL') + ' + D 收藏！');
    }

}
/* @end **/



/**
* @name     :
* @author   :Nice
* @version  :
* @type     :基类
* @explain  :
* @relating :
* @dependent:
*/
function slide(ID){
    // ID='bannerIndex';
    var wrap=$("#"+ID);

    var Imgs=wrap.children(".imgs");
    var Nav=wrap.children(".banner_nav");

    // var x=wrap.html();
    // csoleBug(Imgs.html());

    GLOBAL.namespace("A.BOOK");


    GLOBAL.namespace("SLIDE."+ID);
    var x='GLOBAL.SLIDE.'+ID+'.index'=0;

    csoleBug(x);

}

/* @end **/












/**
* @name		:
* @author	:Nice
* @version	:
* @type		:基类
* @explain	:
* @relating	:
* @dependent:
*/

/* @end **/