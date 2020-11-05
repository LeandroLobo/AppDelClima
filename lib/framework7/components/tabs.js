(function framework7ComponentLoader(a,t){void 0===t&&(t=!0);document,window;var e=a.$,n=(a.Template7,a.utils),i=(a.device,a.support,a.Class,a.Modal,a.ConstructorMethods,a.ModalMethods,{show:function(){for(var a,t,n,i=[],r=arguments.length;r--;)i[r]=arguments[r];var s,l,o,b,d,h=this;1===i.length&&i[0]&&i[0].constructor===Object?(s=i[0].tabEl,l=i[0].tabLinkEl,o=i[0].animate,b=i[0].tabRoute,d=i[0].animatedInit):(s=(a=i)[0],l=a[1],o=a[2],b=a[3],"boolean"==typeof i[1]&&(s=(t=i)[0],o=t[1],l=t[2],b=t[3],i.length>2&&l.constructor===Object&&(s=(n=i)[0],o=n[1],b=n[2],l=n[3]))),void 0===o&&(o=!0);var g,c=e(s);if(b&&c[0]&&(c[0].f7TabRoute=b),!d&&(0===c.length||c.hasClass("tab-active")))return{$newTabEl:c,newTabEl:c[0]};l&&(g=e(l));var p=c.parent(".tabs");if(0===p.length)return{$newTabEl:c,newTabEl:c[0]};h.swipeout&&(h.swipeout.allowOpen=!0);var u=[];function f(a){u.push(a)}function v(){u.forEach((function(a){a()}))}var m,w=!1;if(p.parent().hasClass("tabs-animated-wrap")){p.parent()[o?"removeClass":"addClass"]("not-animated");var E=parseFloat(p.css("transition-duration").replace(",","."));o&&E&&(p.transitionEnd(v),w=!0);var C=100*(h.rtl?c.index():-c.index());p.transform("translate3d("+C+"%,0,0)")}p.parent().hasClass("tabs-swipeable-wrap")&&h.swiper&&((m=p.parent()[0].swiper)&&m.activeIndex!==c.index()?(w=!0,m.once("slideChangeTransitionEnd",(function(){v()})).slideTo(c.index(),o?void 0:0)):m&&m.animating&&(w=!0,m.once("slideChangeTransitionEnd",(function(){v()}))));var T=p.children(".tab-active");if(T.removeClass("tab-active"),!d&&(!m||m&&!m.animating||m&&b)&&(T.hasClass("view")&&T.children(".page").length&&T.children(".page").each((function(a,t){e(t).trigger("page:tabhide"),h.emit("pageTabHide",t)})),T.trigger("tab:hide"),h.emit("tabHide",T[0])),c.addClass("tab-active"),!d&&(!m||m&&!m.animating||m&&b)&&(c.hasClass("view")&&c.children(".page").length&&c.children(".page").each((function(a,t){e(t).trigger("page:tabshow"),h.emit("pageTabShow",t)})),c.trigger("tab:show"),h.emit("tabShow",c[0])),!g&&((!(g=e("string"==typeof s?'.tab-link[href="'+s+'"]':'.tab-link[href="#'+c.attr("id")+'"]'))||g&&0===g.length)&&e("[data-tab]").each((function(a,t){c.is(e(t).attr("data-tab"))&&(g=e(t))})),b&&(!g||g&&0===g.length)&&0===(g=e('[data-route-tab-id="'+b.route.tab.id+'"]')).length&&(g=e('.tab-link[href="'+b.url+'"]')),g.length>1&&c.parents(".page").length&&(g=g.filter((function(a,t){return e(t).parents(".page")[0]===c.parents(".page")[0]})),"ios"===h.theme&&0===g.length&&b))){var k=c.parents(".page"),x=e(h.navbar.getElByPage(k));0===(g=x.find('[data-route-tab-id="'+b.route.tab.id+'"]')).length&&(g=x.find('.tab-link[href="'+b.url+'"]'))}if(g.length>0){var M;if(T&&T.length>0){var y=T.attr("id");y&&(!(M=e('.tab-link[href="#'+y+'"]'))||M&&0===M.length)&&(M=e('.tab-link[data-route-tab-id="'+y+'"]')),(!M||M&&0===M.length)&&e("[data-tab]").each((function(a,t){T.is(e(t).attr("data-tab"))&&(M=e(t))})),(!M||M&&0===M.length)&&(M=g.siblings(".tab-link-active"))}else b&&(M=g.siblings(".tab-link-active"));if(M&&M.length>1&&T&&T.parents(".page").length&&(M=M.filter((function(a,t){return e(t).parents(".page")[0]===T.parents(".page")[0]}))),M&&M.length>0&&M.removeClass("tab-link-active"),g&&g.length>0&&(g.addClass("tab-link-active"),"md"===h.theme&&h.toolbar)){var $=g.parents(".tabbar, .tabbar-labels");$.length>0&&h.toolbar.setHighlight($)}}return{$newTabEl:c,newTabEl:c[0],$oldTabEl:T,oldTabEl:T[0],onTabsChanged:f,animated:w}}}),r={name:"tabs",create:function(){n.extend(this,{tab:{show:i.show.bind(this)}})},on:{"pageInit tabMounted":function(a){var t=e(a.el||a).find(".tabs-animated-wrap > .tabs > .tab-active")[0];if(t){this.tab.show({tabEl:t,animatedInit:!0,animate:!1})}}},clicks:{".tab-link":function(a,t){if(void 0===t&&(t={}),a.attr("href")&&0===a.attr("href").indexOf("#")||a.attr("data-tab")){this.tab.show({tabEl:t.tab||a.attr("href"),tabLinkEl:a,animate:t.animate})}}}};if(t){if(a.prototype.modules&&a.prototype.modules[r.name])return;a.use(r),a.instance&&(a.instance.useModuleParams(r,a.instance.params),a.instance.useModule(r))}return r}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))