jQuery(document).ready(function($){ 
	if (jQuery(window).width()  == 1024) {	
	$(".mainMenu .menu-item-has-children a").addClass("newchangesone");
		$(".mainMenu .menu-item-has-children ul a").addClass("newchangesone_ul");
		$(".mainMenu .menu-item-has-children ul a").removeClass("newchangesone");
		$(".serviceIcon:before").css("display", "none");
	   $(".mainMenu li .sub-menu").hide();
		$(".mainMenu .menu-item-has-children a").show();
		$('.mainMenu .menu-item-has-children a').click(function(){
		$(".mainMenu li .sub-menu").slideToggle();
		});
		$(".mainMenu .menu-item-has-children a.newchangesone").removeAttr("href").css("cursor","pointer");		
		}
		if (jQuery(window).width() <= 1024) {	
		$("section.technologies article i").removeClass("animate");
		$(".statistic li").removeClass("animate");
		$("section.services article .serviceIcon").removeClass("animate");		
		$("section.reasons article .w-iconbox").removeClass("animate");
		$(".friends ul").removeClass("animate");	
		$(".init-counter").removeClass("init-counter");
		$(".w-iconbox").removeClass("animate_afc animate_start");
		  } 
});
$(document).ready(function() {	
	$('.hover').hover(function() {
		$(this).addClass('flip');
	}, function() {
		$(this).removeClass('flip');
	});
	$( "section.services article:nth-child(3n)").css("padding-left","0");
	$( ".portFolios .portitem:nth-child(3n)").css("margin-right","0");
	$( ".copyRight ul li:last-child").css("border-right","none");
	$( ".technologies article.artInner:first-child").css("margin-left","0");
	$( ".technologies article .artInner:last-child").css("border-right","none");
})


$(document).ready(function() {	
	$('.employee').hover(function() {
		$(this).addClass('active');
	}, function() {
		$(this).removeClass('active');
	});
})

//Scroll to Top.........//
var scrolltotop={
	setting: {startline:100, scrollto: 0, scrollduration:100, fadeduration:[500, 100]},
	controlHTML: '<div class="scrollTop"><i data-icon="I" class="icon"></div>', //HTML for control, which is auto wrapped in DIV w/ ID="topcontrol"
	controlattrs: {offsetx:5, offsety:5}, //offset of control relative to right/ bottom of window corner
	anchorkeyword: '#top', //Enter href value of HTML anchors on the page that should also act as "Scroll Up" links
	state: {isvisible:false, shouldvisible:false},
	scrollup:function(){
		if (!this.cssfixedsupport) //if control is positioned using JavaScript
			this.$control.css({opacity:0}) //hide control immediately after clicking it
		var dest=isNaN(this.setting.scrollto)? this.setting.scrollto : parseInt(this.setting.scrollto)
		if (typeof dest=="string" && jQuery('#'+dest).length==1) //check element set by string exists
			dest=jQuery('#'+dest).offset().top
		else
			dest=0
		this.$body.animate({scrollTop: dest}, this.setting.scrollduration);
	},
	keepfixed:function(){
		var $window=jQuery(window)
		var controlx=$window.scrollLeft() + $window.width() - this.$control.width() - this.controlattrs.offsetx
		var controly=$window.scrollTop() + $window.height() - this.$control.height() - this.controlattrs.offsety
		this.$control.css({left:controlx+'px', top:controly+'px'})
	},
	togglecontrol:function(){
		var scrolltop=jQuery(window).scrollTop()
		if (!this.cssfixedsupport)
			this.keepfixed()
		this.state.shouldvisible=(scrolltop>=this.setting.startline)? true : false
		if (this.state.shouldvisible && !this.state.isvisible){
			this.$control.stop().animate({opacity:1}, this.setting.fadeduration[0])
			this.state.isvisible=true
		}
		else if (this.state.shouldvisible==false && this.state.isvisible){
			this.$control.stop().animate({opacity:0}, this.setting.fadeduration[1])
			this.state.isvisible=false
		}
	},
	
	init:function(){
		jQuery(document).ready(function($){
			var mainobj=scrolltotop
			var iebrws=document.all
			mainobj.cssfixedsupport=!iebrws || iebrws && document.compatMode=="CSS1Compat" && window.XMLHttpRequest //not IE or IE7+ browsers in standards mode
			mainobj.$body=(window.opera)? (document.compatMode=="CSS1Compat"? $('html') : $('body')) : $('html,body')
			mainobj.$control=$('<div id="topcontrol">'+mainobj.controlHTML+'</div>')
				.css({position:mainobj.cssfixedsupport? 'fixed' : 'absolute', bottom:mainobj.controlattrs.offsety, right:mainobj.controlattrs.offsetx, opacity:0, cursor:'pointer'})
				.attr({title:'Back to Top'})
				.click(function(){mainobj.scrollup(); return false})
				.appendTo('body')
			if (document.all && !window.XMLHttpRequest && mainobj.$control.text()!='') //loose check for IE6 and below, plus whether control contains any text
				mainobj.$control.css({width:mainobj.$control.width()}) //IE6- seems to require an explicit width on a DIV containing text
			mainobj.togglecontrol()
			$('a[href="' + mainobj.anchorkeyword +'"]').click(function(){
				mainobj.scrollup()
				return false
			})
			$(window).bind('scroll resize', function(e){
				mainobj.togglecontrol()
			})
		})
	}
}
//scrolltotop.init()
//Scroll to Top.........//


$(document).ready(function(){
	$(window).scroll(function() {
		var header = $("header");
		var headerHeight = header.height();
		var scrollTop = $(window).scrollTop();
		if (scrollTop > headerHeight) {
			if (!header.hasClass('sticky')) {
				if($('body').width() < 800) header.height(headerHeight);
				header.addClass('sticky');
				header.animate({opacity: 1}, 600);
			}
		} else {
			if (header.hasClass('sticky')) {
				header.removeClass('sticky');
				header.removeAttr('style');
				if($('body').width() < 800) header.height('auto');
			}
		}
	});
});


(function(e){function u(){r=false;for(var n in t){var i=e(t[n]).filter(function(){return e(this).is(":appeared")});i.trigger("appear",[i]);if(o){var s=o.not(i);s.trigger("disappear",[s])}o=i}}var t=[];var n=false;var r=false;var i={interval:250,force_process:false};var s=e(window);var o;e.expr[":"]["appeared"]=function(t){var n=e(t);if(!n.is(":visible")){return false}var r=s.scrollLeft();var i=s.scrollTop()+e("#header").outerHeight();var o=n.offset();var u=o.left;var a=o.top;var f=o.top+n.outerHeight();if(n.hasClass("rockstar-employees") || n.hasClass("magento-projects") || n.hasClass("third-party-integrations")){a -= (s.outerHeight() + 300);f += 300}if(i>=a&&i<=f){return true}else{return false}};e.fn.extend({appear:function(s){var o=e.extend({},i,s||{});var a=this.selector||this;if(!n){var f=function(){if(r){return}r=true;setTimeout(u,o.interval)};e(window).scroll(f).resize(f);n=true}if(o.force_process){setTimeout(u,o.interval)}t.push(a);return e(a)}});e.extend({force_appear:function(){if(n){u();return true}return false}})})(jQuery);

jQuery(document).ready(function(){
	Scandiweb.init();   
});
Scandiweb = {
    scrollY: $(window).scrollTop(),
    scrollDown: true,
    smoothTimer: false,
    init: function() {
        Scandiweb.company.init();
//        Scandiweb.competencesServicesInit();
//        Scandiweb.companyInit();
    },
    company: {
        dragging: false,
        curX: 0,
        scrollLeft: 0,
        init: function() {
            Scandiweb.company.counter.setCounter();
            var $block1 = $('.team .statistic .rockstar-employees');
            var $block2 = $('.team .statistic .magento-developers');
            var topLimitIn = 70;
            var bottomLimitIn = 140;
            var topLimitOut = 50;
            var blockInterval = 10;
            $block1.appear({interval: blockInterval});
            $block1.on('appear', function(event, $all_appeared_elements) {
                var blockOffset = $block1.offset().top - $(window).scrollTop();
                if (blockOffset > topLimitIn && blockOffset < ($(window).height() - bottomLimitIn)) {
                    if ($block1.find('span.init-counter').html() == 1) {
                        Scandiweb.company.counter.callCount($block1.find('span.init-counter'));
                    }
                    if ($block2.find('span.init-counter').html() == 1) {
                        Scandiweb.company.counter.callCount($block2.find('span.init-counter'));
                    }
                }
                return;
            });
            $block1.on('disappear', function(event, $all_appeared_elements) {
                var blockOffset = $block1.offset().top - $(window).scrollTop();
                if (blockOffset <= topLimitOut || blockOffset >= ($(window).height() - (topLimitOut - 40))) {
                    $block1.find('span.init-counter').html('1');
                    $block2.find('span.init-counter').html('1');
                }
                return;
            });
            var $block3 = $('.team .statistic .magento-projects');
            var $block4 = $('.team .statistic .magento-extensions');
            $block3.appear({interval: blockInterval});
            $block3.on('appear', function(event, $all_appeared_elements) {
                var blockOffset = $block3.offset().top - $(window).scrollTop();
                if (blockOffset > topLimitIn && blockOffset < ($(window).height() - bottomLimitIn)) {
                    if ($block3.find('span.init-counter').html() == 1) {
                        Scandiweb.company.counter.callCount($block3.find('span.init-counter'));
                    }
                    if ($block4.find('span.init-counter').html() == 1) {
                        Scandiweb.company.counter.callCount($block4.find('span.init-counter'));
                    }
                }
                return;
            });
            $block3.on('disappear', function(event, $all_appeared_elements) {
                var blockOffset = $block3.offset().top - $(window).scrollTop();
                if (blockOffset <= topLimitOut || blockOffset >= ($(window).height() - (topLimitOut - 40))) {
                    $block3.find('span.init-counter').html('1');
                    $block4.find('span.init-counter').html('1');
                }
                return;
            });
            var $block5 = $('.team .statistic .third-party-integrations');
            var $block6 = $('.team .statistic .updates-migrations');
            $block5.appear({interval: blockInterval});
            $block5.on('appear', function(event, $all_appeared_elements) {
                var blockOffset = $block5.offset().top - $(window).scrollTop();
                if (blockOffset > topLimitIn && blockOffset < ($(window).height() - topLimitIn)) {
                    if ($block5.find('span.init-counter').html() == 1) {
                        Scandiweb.company.counter.callCount($block5.find('span.init-counter'));
                    }
                    if ($block6.find('span.init-counter').html() == 1) {
                        Scandiweb.company.counter.callCount($block6.find('span.init-counter'));
                    }
                }
                return;
            });
            $block5.on('disappear', function(event, $all_appeared_elements) {
                var blockOffset = $block5.offset().top - $(window).scrollTop();
                if (blockOffset <= topLimitOut || blockOffset >= ($(window).height() - (topLimitOut - 40))) {
                    $block5.find('span.init-counter').html('1');
                    $block6.find('span.init-counter').html('1');
                }
                return;
            });
        },
        counter: {
            endTime: 500,
            setCounter: function() {
                $('span.init-counter').each(function(idx) {
                    $(this).data('count', parseInt($(this).html(), 10));
                    $(this).html('1');
                });
            },
            resetCounter: function() {
                $('.team .statistic span').addClass('init-counter');
                $('span.init-counter').each(function(idx) {
                    $(this).html('1');
                });
            },
            count: function($this, timeout) {
                var current = parseInt($this.html(), 11);
                $this.html(++current);
                if(current < $this.data('count')){
                    setTimeout(function(){Scandiweb.company.counter.count($this, timeout)}, timeout);
                } else {
                    $this.html($this.data('count'));
                    //$this.parent().effect("bounce", { times:2 }, 200);
                }
            },
            callCount: function($this) {
                var to = Math.ceil(Scandiweb.company.counter.endTime / $this.data('count'));
                Scandiweb.company.counter.count($this, to);
            }
        },
        
    }
}








jQuery(document).ready(function($) {
		/** TOOGLE ALERT **/
		$('.toggle-alert').click(function(e) {
		e.preventDefault();
		$(this).parent().slideUp();
	})
	// Tabs
	//When page loads...
	$('.tabs-wrapper').each(function() {
		$(this).find(".tab_content").hide(); //Hide all content
		$(this).find("ul.tabs li:first").addClass("active").show(); //Activate first tab
		$(this).find(".tab_content:first").show(); //Show first tab content
	});
	
	//On Click Event
	$("ul.tabs li").click(function(e) {
		$(this).parents('.tabs-wrapper').find("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(this).parents('.tabs-wrapper').find(".tab_content").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(this).parents('.tabs-wrapper').find(activeTab).fadeIn(); //Fade in the active ID content
		e.preventDefault();
	});
	
	$("ul.tabs li a").click(function(e) {
		e.preventDefault();
	})



	/** TOOGLE **/
	$('.toggle-content').each(function() {
		if(!$(this).hasClass('default-open')){
			$(this).hide();
		}
	});

	$("h5.toggle").click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass("active");
		}else{
			$(this).addClass("active");
		}

		return false;
	});

	$("h5.toggle").click(function(){
		$(this).next(".toggle-content").slideToggle();
	});

	$('.columns').each(function() {
		var cols = $(this).find('.col').length;
		$(this).addClass('columns-'+cols);
	});

});

/** BX SLIDER **/
$(window).on('orientationchange', function(e) {
     $.mobile.changePage(window.location.href, {
        allowSamePageTransition: true,
        transition: 'none',
        reloadPage: true
    });
});
    window.onorientationchange = function() { 
        var orientation = window.orientation; 
            switch(orientation) { 
                case 0: window.location.reload(); 
                break; 
                case 90: window.location.reload(); 
                break; 
                case -90: window.location.reload(); 
                break; } 
    };

$(document).ready(function(){
	$("[rel='tooltip']").tooltip();
    })


// CAREER PAGE TAB //





// remove animation class

$(document).ready(function($) {
var fields = $('input,textarea').get();
	$.each(fields, function(index, item){
		item = $(item);
		var defaultStr = item.val();
	
		item.focus(function () {
			var me = $(this);
			if(me.val() == defaultStr){
				me.val('');
			}
		});
		item.blur(function () {
			var me = $(this);			
			if(!me.val()){
				me.val(defaultStr);
			}
		});
	});
	});



$(window).load(function(){
	 $('.friends ul li').each(function(){           
            var parent_height = $(this).height();
            var image_height = $(this).find('img').height();            
            var top_margin = (parent_height - image_height)/2;          
            $(this).find('img').css( 'margin-top' , top_margin);
     });
	 $('.friends .panel .back').each(function(){           
            var parent_height = $(this).height();
            var image_height = $(this).find('.pad').height();            
            var top_margin = (parent_height - image_height)/2;          
            $(this).find('.pad').css( 'margin-top' , top_margin);
     });
	 
	 $('.brand .rsDefault .rsThumb').each(function(){           
            var parent_height = $(this).height();
            var image_height = $(this).find('img').height();            
            var top_margin = (parent_height - image_height)/2;          
            $(this).find('img').css( 'margin-top' , top_margin);
     });
});




$(document).ready(function() {  
$(function() {
       // $(".portfolioContainer li img").unveil(300);
    });}); 