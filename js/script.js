$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$(".navbar").addClass("sticky");
			$(".goTop").fadeIn();
		}		
		else{
			$(".navbar").removeClass("sticky");
			$(".goTop").fadeOut();
		}		
	});
	
	$(".goTop").click(function(){
		scroll(0,0)
	});
	
	$('.menu-toggler').click(function(){
		$(this).toggleClass("active");
		$(".navbar-menu").toggleClass("active");
	});
});



$('.skill-per').each(function(){
	var $this = $(this);
	var per = $this.attr('per');
		$this.css("width",per+'%');
		$({animatedValue:0}).animate({animatedValue: per},{duration: 1000,
		step: function(){
			$this.attr('per', Math.floor(this.animatedValue)+'%');
		},
		complete:function(){
			$this.attr('per', Math.floor(this.animatedValue)+ '%');
		}
	});
});
