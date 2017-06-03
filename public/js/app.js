'use strict'

var beryl = new Vue({
	el: '#app',
	data: {
		loading: true,
		current_page: 'project',
		navigation: [
			{
				name: 'Projects',
				value: 'project'
			},
			{
				name: 'About',
				value: 'about'
			},
			{
				name: 'Contact',
				value: 'contact'
			}
		],
		socials: [
			{
				icon: 'facebook',
				address: 'http://BERYLS_FACEBOOK',
			},
			{
				icon: 'instagram',
				address: 'http://BERYLS_INSTAGRAM',
			},
			{
				icon: 'linkedin',
				address: 'http://BERYLS_LINKEDIN',
			}
		],
		clients: [
			{
				// TODO: NEED 2x VERSIONS OF IMAGES
				brand: 'Holiday Inn',
				title: 'What Would You Do with an Extra Day',
				summary: 'Through balancing work & pleasure, Holiday Inn wants to create more Moments of Joy for busy professionals.',
				banner: 'HolidayInn_preview_banner.jpg',
				mobile: 'HolidayInn_preview_mobile.png'
			},
			{
				brand: 'UPS',
				title: 'UPS Whitepapers: Think Like a Leader',
				summary: 'We created a concise infographic and corresponding animated video for UPS Supply Chain Solutions’ annual white papers about the stand out characteristics of successful leaders in export manufacturing.',
				banner: 'UPS_preview_banner.png',
			},
			{
				brand: 'Ogilvy',
				title: 'Making Data tracking Simple',
				summary: 'This animated video follows your customer Jay, as he produces valuable data all day long that could help your brand become a bigger part of his life.',
				banner: 'Ogilvy_preview_banner.png',
			},
			{
				brand: 'Pepsi',
				title: 'Welcome to the New Pepsi Challenge',
				summary: 'In China, 12 Pepsi Ambassadors from a variety of fields and backgrounds encourage the world to dream a little bigger, have more fun, and, most importantly: to Live for Now.',
				banner: 'Pepsi_preview_banner.jpg',
			}
		],
		projects: [
			{
				brand: 'Elvis Fan Club',
				title: 'A Teenage Dream, Realized',
				summary: '"Happy Birthday, Elvis" Fest 2016 encompassed 7 Elvis-themed events over 2 weekends in Hong Kong and Shanghai. You’re invited to the biggest, weirdest, wackiest 81st birthday party ever.',
				main_image: 'Elvis_main.png',
				secondary_image: 'Elvis_secondary.png'
				
			},
			{
				brand: 'Pop Culture Poster Show',
				title: 'What’s Your All-Time, Desert Island TOP 5?',
				summary: 'We ask artists from different disciplines - graphic design, illustration, fashion, printmaking - to create a series of 5 posters based on their TOP 5 biggest artistic influences from movies, TV, books, comics, and music... using only 5 colors.',
				main_image: 'Top5_main.png',
				secondary_image: 'Top5_secondary.png'
			}
		],
		illustration: {
			title: 'Art & Illustration',
			summary: 'I like to say my first illustration job was in grade school, copying pokemon cards on classmates’ notebooks for snack money. Check out these more recent selected illustration projects and personal favorites.'
		},
	},
	mounted: function() {
		console.log('Ready');
		var $this = this;

		// TODO: ADD LOADING BEHAVIOR AND SHADE TO DISSAPEAR;
		setTimeout( function(){ $this.loading = false; }, 2000 );

		// ON MOUNT > START GEMS SLIDESHOW
		this.nextSlide();

	},
	methods: {
		navigate: function( page ) {
			if ( page == this.current_page ) return;
			console.log( 'On: ', this.current_page );
			console.log( 'Go To: ', page );
			this.current_page = page;
		},
		nextSlide: function() {
			// CAROUSEL FOR HERO BANNER GEMS
			var slide = $('.hero-image.active');
			if ( !slide[0] ) {
				slide = $('.hero-image').first();
				slide.addClass('active');
			} else {
				slide.removeClass('active');
				
				var next = slide.next('.hero-image') 
				if ( !next[0] ) next = $('.hero-image').first();
				
				next.addClass('active');
			}
			
			setTimeout(function() {
				beryl.nextSlide();
			}, 1500);
		}
	}
});