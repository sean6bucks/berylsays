'use strict'


// GLOBAL CODE =====================
// =================================
// TODO: FIND A PLACE TO PUT

// add custom ease options for jquery without full UI library
if ($) $.extend( jQuery.easing, {
    easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    }
});

// COMPONENTS ========

const Header = Vue.component( 'bc-header', {
	router,
	template: 
		`<div id="header">
			<div id="inner-header">
				<span id="header-icon" class="td td-beryl-icon"></span>
				<div id="header-nav">
					<span v-bind:id="item.value + '-nav'" class="nav-item noselect" v-for="item in navigation" v-on:click="navigate( item.value )">
						<h5>{{ item.name }}</h5>
					</span>
					<span id="nav-line"></span>
					<div id="header-social">
						<span class="social-item td" v-bind:class="'td-' + item.icon" v-for="item in socials" v-bind:src="item.address"></span> 
					</div>
				</div>
			</div>
		</div>`,
	data: function() {
		return {
			navigation: [
				{
					name: 'Projects',
					value: 'projects'
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
			]
		};
	},
	mounted: function() {
		console.log('#'+ this.$route.name+'-nav');
		var target = $('#'+ this.$route.name+'-nav')[0];

		// SET START LOCATION FOR NAV LINE
		$('#nav-line').css({
			left: target.offsetLeft,
			width: target.offsetWidth
		});
	},
	methods: {
		navigate: function( page ) {
			if ( page == this.$route.name ) return;
			router.push( page );

			var target = $('#'+page+'-nav')[0];
			$('#nav-line').animate({
				left: target.offsetLeft,
				width: target.offsetWidth
			}, 20, 'easeInExpo');
		}
	}
});

const Projects = Vue.component( 'bc-projects', {
	template: 
		`<div id="home">
			<div id="home-hero" class="hero-banner">
				<div class="hero-text">
					<h1>Hello, I&apos;m Beryl</h1>
					<h5>ART DIRECTOR / ILLUSTRATOR / DESIGNER / SEMI-PRECIOUS MINERAL</h5>
				</div>
				<div class="hero-image" v-for="n in 6">
					<img v-bind:src="'public/images/hero-' + n + '.png'" />
				</div>
			</div>

			<div id="home-clients">
				<div class="client-item" v-for="client in clients">
					<div class="client-preview">
						<img class="banner-img" v-bind:src="'public/images/' + client.banner" />
						<div class="mobile-img" v-if="client.mobile">
							<img v-bind:src="'public/images/' + client.mobile" />
						</div>
					</div>
					<div class="client-body">
						<h6>{{ client.brand }}</h6>
						<h3>{{ client.title }}</h3>
						<p>{{ client.summary }}</p>
					</div>
				</div>
			</div>

			<div class="project-item" v-for="( project, index ) in projects">
				<div class="project-body">
					<h6>{{ project.brand }}</h6>
					<h2>{{ project.title }}</h2>
					<h4>{{ project.summary }}</h4>
				</div>
				<div class="project-preview">
					<img class="main-img" v-bind:src="'public/images/' + project.main_image" />
					<img class="secondary-img" v-bind:src="'public/images/' + project.secondary_image" />
				</div>
			</div>

			<div class="illustration-item" v-if="illustration">
				<div class="illustration-body">
					<h2>{{ illustration.title }}</h2>
					<h4>{{ illustration.summary }}</h4>
				</div>
				<div class="illustration-preview">
					<img class="illustration-img" v-for="n in 3" v-bind:src="'public/images/Illustration_' + n +'.jpg'" />
				</div>
			</div>
		</div>
		<router-view class="project-view"></router-view>`,
	data: function() {
		return {
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
			}
		};
	},
	mounted: function() {
		var $this = this;
		// TODO: ADD LOADING BEHAVIOR AND SHADE TO DISSAPEAR;
		this.loading = false;
		// ON MOUNT > START GEMS SLIDESHOW
		this.nextSlide();
	},
	beforeDestroy: function() {
		clearTimeout( this.berylLoop );
	},
	methods: {
		nextSlide: function() {
			console.log('loop');
			var $this = this;
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
			
			$this.berylLoop = setTimeout(function() {
				$this.nextSlide();
			}, 1500);
		}
	}
});

const About = Vue.component( 'bc-about', {
	template: `<div><h1>ABOUT</h1></div>`,
});


// ROUTER ========

var router = new VueRouter({
	routes: [
		{ path: '/', redirect: '/projects' },
		{ 
			path: '/projects',
			name: 'projects', 
			component: Projects,
			props: true,
			alwaysRefresh: true
		},
		{ 
			path: '/about',
			name: 'about',
			component: About,
			props: true
		},
		{
			path: '/contact',
			name: 'contact',
			component: null,
			props: true
		}
	]
});


// VUES ===========

// == MAIN VIEW ==

var beryl = new Vue({
	router,
	template: 
	`<div id="app" v-cloak>
		<bc-header></bc-header>
		<div id="main">
			<router-view class="view"></router-view>
		</div>
	</div>`,
	data: {},
	props: ['loading'],
	mounted: function() {
		console.log('Ready');
		this.loading = false;
	},
	methods: {

	}
}).$mount('#app');


