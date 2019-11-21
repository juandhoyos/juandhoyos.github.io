

;(function($){

	$.extend({
		progress : function( opt ){

			var def = {
				step : 10,
    			line_w : 30,
			}

			var setting = $.extend({},def,opt);

			function Progress(){

				this.index_w = setting.line_w / (setting.step - 1);
				this.index = 0;
				this.init();
			}

			Progress.prototype = {
				constructor : Progress,
				init : function(){
					this.render();
					this.changeLength();
				},

				render : function(){
					$(`<div class='wrap'>
					        <div class="line"></div>
					        <p class="step"></p>
					         <button class='next btn btn-info' name='next'>Siguiente</button>

					    </div> `).appendTo(document.body);

					$(".line").css({
						width : setting.line_w,
					});
					for(var i = 1;i <= setting.step;i++){
						$(`<span class='flag'></span>`).css({
							left : (i - 1) * this.index_w - 10,
						}).appendTo(".wrap");
					}
				},

				changeLength : function(){
					var _this = this;
					$("[name='next']").click(function(){
						$(this).next().prop("disabled",false);
						_this.index += 1;
						if(_this.index >= setting.step - 1){
							_this.index = setting.step - 1;
							$(this).prop("disabled",true);
						}
						$(this).parent().find(".step").stop().animate({
							width : _this.index * _this.index_w,
						},1000);
					});

				}
			}
			new Progress();
		}
	});
})(jQuery)


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
