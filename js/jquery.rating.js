if(window.jQuery){(function(a){a.rating={cancel:"Cancel Rating",cancelValue:"",split:0,starWidth:16,groups:{},event:{fill:function(f,c,b,d){this.drain(f);a(c).prevAll(".star_group_"+f).andSelf().addClass("star_"+(d||"hover"));var e=a(c).children("a");val=e.text();if(b.focus){b.focus.apply(a.rating.groups[f].valueElem[0],[val,e[0]])}},drain:function(d,c,b){a.rating.groups[d].valueElem.siblings(".star_group_"+d).removeClass("star_on").removeClass("star_hover")},reset:function(e,c,b){if(!a(a.rating.groups[e].current).is(".cancel")){a(a.rating.groups[e].current).prevAll(".star_group_"+e).andSelf().addClass("star_on")}var d=a(c).children("a");val=d.text();if(b.blur){b.blur.apply(a.rating.groups[e].valueElem[0],[val,d[0]])}},click:function(e,c,b){a.rating.groups[e].current=c;var d=a(c).children("a");val=d.text();a.rating.groups[e].valueElem.val(val);a.rating.event.drain(e,c,b);a.rating.event.reset(e,c,b);if(b.callback){b.callback.apply(a.rating.groups[e].valueElem[0],[val,d[0]])}}}};a.fn.rating=function(b){if(this.length==0){return this}b=a.extend({},a.rating,b||{});this.each(function(d){var e=a.extend({},b||{},(a.metadata?a(this).metadata():(a.meta?a(this).data():null))||{});var h=(this.name||"unnamed-rating").replace(/\[|\]/,"_");if(!a.rating.groups[h]){a.rating.groups[h]={count:0}}d=a.rating.groups[h].count;a.rating.groups[h].count++;a.rating.groups[h].readOnly=a.rating.groups[h].readOnly||e.readOnly||a(this).attr("disabled");if(d==0){a.rating.groups[h].valueElem=a('<input type="hidden" name="'+h+'" value=""'+(e.readOnly?' disabled="disabled"':"")+">");a(this).before(a.rating.groups[h].valueElem);if(a.rating.groups[h].readOnly||e.required){}else{a(this).before(a('<div class="cancel"><a title="'+e.cancel+'">'+e.cancelValue+"</a></div>").mouseover(function(){a.rating.event.drain(h,this,e);a(this).addClass("star_on")}).mouseout(function(){a.rating.event.reset(h,this,e);a(this).removeClass("star_on")}).click(function(){a.rating.event.click(h,this,e)}))}}eStar=a('<div class="star"><a title="'+(this.title||this.value)+'">'+this.value+"</a></div>");a(this).after(eStar);if(e.half){e.split=2}if(typeof e.split=="number"&&e.split>0){var c=(a.fn.width?a(eStar).width():0)||e.starWidth;var g=(d%e.split),f=Math.floor(c/e.split);a(eStar).width(f).find("a").css({"margin-left":"-"+(g*f)+"px"})}a(eStar).addClass("star_group_"+h);if(a.rating.groups[h].readOnly){a(eStar).addClass("star_readonly")}else{a(eStar).addClass("star_live").mouseover(function(){a.rating.event.drain(h,this,e);a.rating.event.fill(h,this,e,"hover")}).mouseout(function(){a.rating.event.drain(h,this,e);a.rating.event.reset(h,this,e)}).click(function(){a.rating.event.click(h,this,e)})}if(this.checked){a.rating.groups[h].current=eStar}a(this).remove();if(d+1==this.length){a.rating.event.reset(h,this,e)}});for(n in a.rating.groups){(function(f,d,e){if(!f){return}a.rating.event.fill(e,f,b||{},"on");a(d).val(a(f).children("a").text())})(a.rating.groups[n].current,a.rating.groups[n].valueElem,n)}return this};a(function(){a("input[@type=radio].star").rating()})})(jQuery)};