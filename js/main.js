jQuery(document).ready(function(){
	$('body').addClass('js');
	$('.secondary-nav').prepend('<a title="Previous post" class="post-nav prev-post">Previous</a>' + '<a title="Next post" class="post-nav next-post">Next</a>');
	var navPrev = $('.prev-post');
	var navNext = $('.next-post');

	function setHrefs(){
		var prevID = $('.active').prev('section').attr('id');
		var nextID = $('.active').next('section').attr('id');
		if (prevID) {
			navPrev
				.attr('href', "#" + prevID);
		} else {
			navPrev
				.removeAttr('href');
		}
		if (nextID) {
			navNext
				.attr('href', "#" + nextID);
		} else {
			navNext
				.removeAttr('href');
		}
	}
	function navigate(){
		var link = window.location.hash.substr(1);
		$('.active').removeClass('active');
		if (link != "" ){
			$('#' + link).addClass('active');
		} else {
			$('#toc').addClass('active');
		}
		$('html, body').scrollTop(0);
	}

	// key navigation
	$("body").keydown(function(e) {
		if(e.which == 37) { // left
			$('.prev-post')[0].click();
		}
		else if(e.which == 39) { // right
			$('.next-post')[0].click();
		}
	});

	window.onhashchange = function(){
		navigate();
		setHrefs();
	};

	navigate();
	setHrefs();

//	 Fitvids
//	 Target your .container, .wrapper, .post, etc.
//	jQuery("main").fitVids();
});
