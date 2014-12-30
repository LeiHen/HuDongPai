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
* @name     :slide
* @author   :Nice
* @type     :基类
* @dependent:slide(bannerID,过渡时间,延迟时间)
*/
function slide(ID,transitionTime,time){
    // ID='bannerIndex';

    if (!isObj(transitionTime)) {
        var transitionTime=5000;
    };
    
    var wrap=$("#"+ID);
    var imgs=wrap.children(".imgs");
    var nav=wrap.children(".banner_nav");
    var img=imgs.children('.list')
    var imgL=imgs.children('.list').length;
    var eNavLi=nav.children(".list");

    imgs.css("width",imgL*100+"%");
    img.css('width', 100/imgL+'%');
    GLOBAL.SLIDE.INDEX.ID=0;

    function delay(e,eNavLi,transitionTime,imgL){
        var i=GLOBAL.SLIDE.INDEX.ID=GLOBAL.SLIDE.INDEX.ID+1;
        // var imgsL=

        if (i>(imgL-1)) {
            i=GLOBAL.SLIDE.INDEX.ID=0;
        };

        e.animate({
            left: -i * 100 + '%'
        }, transitionTime)

        // var eNavLi.children(".list")
        eNavLi.removeClass('hover');
        $(eNavLi[i]).addClass('hover');

        console.log(eNavLi[i]);

    }


    function btnNav(event){

        var i=event.data.eNavLi.index(this);

        console.log(i);
        GLOBAL.SLIDE.INDEX.ID=i;

        event.data.imgs.stop().animate({
            left:-i*100+"%"
        },1000);

        event.data.eNavLi.removeClass('hover');
        $(this).addClass('hover');

        return false;
    }
    var obj={
        eNavLi:eNavLi,
        ID:ID,
        imgs:imgs,
        transitionTime:transitionTime
    }
    eNavLi.click(obj,btnNav);
    // btnNav(eNavLi,ID,imgs,transitionTime);

    setInterval(function(){
        delay(imgs,eNavLi,transitionTime,imgL);
    },time);


    // var x=wrap.html();
    // csoleBug(Imgs.html());

    // var x='SLIDE.INDEX.'+ID=0;
    
    
    // if (ID=="W") {
        // GLOBAL.SLIDE.INDEX.ID=GLOBAL.SLIDE.INDEX.ID+2;
        // console.log('我是W')
    // };

    // csoleBug(GLOBAL.SLIDE.INDEX.ID);

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