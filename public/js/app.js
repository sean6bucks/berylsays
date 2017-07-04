'use strict'

// GLOBAL DATA
var allProjects = [
	{
		// TODO: NEED 2x VERSIONS OF IMAGES
		category: 'clients',
		id: 'holiday-inn',
		brand: 'Holiday Inn',
		title: 'What Would You Do with an Extra Day',
		summary: 'Through balancing work & pleasure, Holiday Inn wants to create more Moments of Joy for busy professionals.',
		tags: [ 'Animation', 'Art Direction', 'Digital Activation', 'Illustration', 'Mobile H5' ],
		banner: 'HolidayInn_preview_banner.jpg',
		mobile: 'HolidayInn_preview_mobile.png',
		elements: [
			{
				type: 'video',
				video_url: 'https://www.youtube.com/embed/zalWvCoyiYM',
				screenshot: 'hi_screenshot.png'
			},
			{
				type: 'images',
				images: [ 'HI-01.jpg', 'HI-02.jpg', 'HI-03.jpg' ]
			}
		]
	},
	{
		category: 'clients',
		id: 'ups',
		brand: 'UPS',
		title: 'UPS Whitepapers: Think Like a Leader',
		summary: 'We created a concise infographic and corresponding animated video for UPS Supply Chain Solutions’ annual white papers about the stand out characteristics of successful leaders in export manufacturing.',
		tags: [ 'Animation', 'Art Direction', 'Illustration', 'infographic' ],
		banner: 'UPS_preview_banner.png',
		elements: [
			{
				type: 'video',
				video_url: 'https://www.youtube.com/embed/anzd1EqI9jg',
				screenshot: 'ups_screenshot.png'
			},
			{
				type: 'images',
				images: [ 'UPS-infographic.jpg' ]
			}
		]
	},
	{
		category: 'clients',
		id: 'ogilvy',
		brand: 'Ogilvy',
		title: 'Making Data Tracking Simple',
		summary: 'This animated video follows your customer Jay, as he produces valuable data all day long that could help your brand become a bigger part of his life.',
		tags: [ 'Animation', 'Art Direction', 'Illustration' ],
		banner: 'Ogilvy_preview_banner.png',
		elements: [
			{
				type: 'video',
				video_url: 'https://www.youtube.com/embed/SyQt6jIkobk',
				screenshot: 'data_screenshot.png'
			},
			{
				type: 'flex-grid',
				items: [ 
					{
						type: 'image',
						value: 'DATA01.gif'
					},
					{
						type: 'image',
						value: 'DATA02.gif' 
					},
					{
						type: 'image',
						value: 'DATA03.gif' 
					},
					{
						type: 'image',
						value: 'DATA04.gif' 
					}
				]
			},
			{
				type: 'images',
				images: [ 'DATA-storyboard.jpg' ]
			}
		]
	},
	{
		category: 'clients',
		id: 'pepsi',
		brand: 'Pepsi',
		title: 'Welcome to the New Pepsi Challenge',
		summary: 'In China, 12 Pepsi Ambassadors from a variety of fields and backgrounds encourage the world to dream a little bigger, have more fun, and, most importantly: to Live for Now.',
		tags: [ 'Art Direction', 'Digital Activation', 'Illustration', 'Print Campaign', 'OOH' ],
		banner: 'Pepsi_preview_banner.jpg',
		elements: [
			{
				type: 'images',
				images: [ 'Pepsi-01.jpg', 'Pepsi-02.jpg' ]
			},
			{
				type: 'flex-grid',
				items: [
					{
						type: 'image',
						value: 'Pepsi-03.jpg'
					},
					{
						type: 'html',
						custom_class: 'center-content',
						value: 'For social & digital, an interactive mobile-friendly HTML5 page was developed to introduce the 12 unique KOLs and their challenges in a fun, engaging way.<br><br>Fans were encouraged to “like” their favorite celebrity and share on Wechat.'
					}
				]
			},
			{
				type: 'images',
				images: [ 'Pepsi-04.jpg' ]
			}
		]
	},
	{
		category: 'events',
		id: 'elvis',
		brand: 'Elvis Fan Club',
		title: 'A Teenage Dream, Realized',
		summary: '"Happy Birthday, Elvis" Fest 2016 encompassed 7 Elvis-themed events over 2 weekends in Hong Kong and Shanghai. You’re invited to the biggest, weirdest, wackiest 81st birthday party ever.',
		text: [
			'How do you describe a dream come to life? A personal goal since high school, “Happy Birthday, Elvis” Fest was years in the making.',
			'"Happy Birthday, Elvis" Fest 2016 encompassed 7 Elvis-themed events over 2 weekends in Hong Kong and Shanghai. You’re invited to the biggest, weirdest, wackiest 81st birthday party ever.'
		],
		main_image: 'Elvis_main.png',
		secondary_image: 'Elvis_secondary.png',
		elements: [
			{
				type: 'gallery',
				slides: [ 'Elvis-slide1.png', 'Elvis-slide2.jpg', 'Elvis-slide3.jpg', 'Elvis-slide4.jpg', 'Elvis-slide5.jpg', 'Elvis-slide6.png', 'Elvis-slide7.jpg', 'Elvis-slide8.png' ]
			},
			{
				type: 'images',
				images: [ 'Elvis-flyers.png', 'Elvis-collage.png', 'Elvis-tshirt.jpg' ]
			},
			{
				type: 'video',
				video_url: 'https://www.youtube.com/embed/jGr9ZPAMK-M',
				screenshot: 'elvis_screenshot.png'
			},
			{
				type: 'flex-grid',
				items: [
					{
						type: 'html',
						value: 'Saturday, January 9<br><br><b>Elvis\' 81st Birthday Party Rock Show</b> at The Wanch, Hong Kong<br>Performances from The Boogie Playboys and Miss Cathy, The Queen of Hong Kong Rockabilly<div class="sm-hr"></div>Sunday, January 10<br><br><b>Elvis\' 81st Birthday Party</b> with the International Elvis Presley Fan Club (Hong Kong)<br>Baby ♥s Elvis Pop Up Exhibition<div class="sm-hr"></div>Friday, January 15<br><br><b>BABY ♥s ELVIS</b><br>A narrative Elvis-themed group art show curated by Beryl Chung and Basement6 Food by Umi Bunwich / Sponsored by Fireball / Music by DJ BO'
					},
					{
						type: 'html',
						value: 'Saturday, January 16<br><br><b>Elvis\' Family Birthday Party</b> at the Kerry Parkside Courtyard Hotel<br>Live Elvis Impersonation by Curt Mabry of Zmack / Music by DJ BO and the Kerry House Band / Baby ♥s Elvis Pop Up Exhibition<br><br><b>BABY ♥s ELVIS Life Drawing Event</b> at Basement 6 with Shanghai Sketch Club<br>Featuring Burlesque Model, Lulu Galore<br><br><b>Elvis The Pelvis\' Hip Grind Special</b> at INFERNO<br>Performances from Banana Monkey, Chad Romero & The Cadillacs, Parachutes on Fire, & DJ BO Support from Lulu Galore and Baby ♥s Elvis art show<div class="sm-hr"></div>Sunday, January 17<br><br><b>Elvis\' Southern-Fried Brunch</b><br>A Mississippi-style feast by Ruijin Cajun, hosted by District'
					}
				]
			}
		]
	},
	{
		category: 'events',
		id: 'top5',
		brand: 'Pop Culture Poster Show',
		title: 'What’s Your All-Time, Desert Island TOP 5?',
		summary: 'We ask artists from different disciplines - graphic design, illustration, fashion, printmaking - to create a series of 5 posters based on their TOP 5 biggest artistic influences from movies, TV, books, comics, and music... using only 5 colors.',
		tags: ['Art Exhibition', 'Event Organization', 'Promotional Materials', 'Illustration' ],
		main_image: 'Top5_main.png',
		secondary_image: 'Top5_secondary.png',
		elements: [
			{
				type: 'gallery',
				slides: [ 'slide1.jpg','slide2.jpg', 'slide3.jpg', 'slide4.jpg', 'slide5.jpg' ]
			},
			{
				type: 'images',
				images: [ 'flyer.jpg', 'poster.png' ]
			}
		]
	},
	{
		category: 'illustration',
		id: 'illustration',
		title: 'Art & Illustration',
		summary: 'I like to say my first illustration job was in grade school, copying pokemon cards on classmates’ notebooks for snack money. Check out these more recent selected illustration projects and personal favorites.',
		tags: [ 'MisterBaby', 'Pepsi Team', 'HOTB', 'Elvis Alter', 'Elvis Facecards', 'Unraveled: The Line', 'Unraveled: Chance' ],
		elements: [
			{
				type: 'flex-grid',
				items: [
					{ type: 'image', value: 'Illo-01.jpg' },
					{ type: 'image', value: 'Illo-02.jpg' },
					{ type: 'image', value: 'Illo-03.jpg' },
					{ type: 'image', value: 'Illo-04.jpg' },
					{ type: 'image', value: 'Illo-05.jpg' },
					{ type: 'image', value: 'Illo-06.jpg' },
					{ type: 'image', value: 'Illo-07.jpg' },
					{ type: 'image', value: 'Illo-08.jpg' },
					{ type: 'image', value: 'Illo-09.jpg', custom_class: 'flex-center' },
					{ type: 'image', value: 'Illo-10.jpg' },
					{ type: 'image', value: 'Illo-11.jpg' }
				]
			}
		]
	}
];

// GLOBAL CODE =====================
// =================================
// TODO: FIND A PLACE TO PUT

var width = ( window.innerWidth > 0 ) ? window.innerWidth : screen.width;
var mobileDevice = width < 700 ? true : false;

// add custom ease options for jquery without full UI library
if ($) $.extend( jQuery.easing, {
    easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    }
});

// REGISTER UPPERCASE FILTER
Vue.filter('uppercase', function (value) {
	if (!value) return;
	if ( 'string' !== typeof value ) return value;
	return value.toUpperCase();
});
Vue.filter('decodeHtml', function (value) {
	var txt = document.createElement("textarea");
	txt.innerHTML = value;
	return txt.value;
});

// COMPONENTS ========

var Header = Vue.component( 'bc-header', {
	router,
	template: 
		`<div id="header">
			<div id="inner-header">
				<span id="header-icon" class="bc bc-beryl-icon">
					<img src="public/images/header/bgsc-logo.png" />
				</span>
				<transition :name="'menu-open'">
				<div id="header-nav" :class="{ 'nav-open': navOpen }" v-show="!mobileDevice || navOpen">
					<span v-bind:id="item.value + '-nav'" class="nav-item no-select" v-for="item in navigation" v-on:click="navigate( item.value )">
						<h5>{{ item.name | uppercase }}</h5>
					</span>
					<span id="nav-line"></span>
					<div id="header-social">
						<a span class="social-item" v-for="item in socials" v-bind:href="item.address" target="_blank">
							<span class="bc" v-bind:class="'bc-' + item.icon"></span> 
						</a>
					</div>
				</div>
				</transition>
				<span class="mobile-header-menu" v-on:click="navOpen = !navOpen">
					<span class="hamburger"></span>
				</span>
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
					address: 'https://www.facebook.com/berylsays',
				},
				{
					icon: 'instagram',
					address: 'https://www.instagram.com/berylchvng/',
				},
				{
					icon: 'linkedin',
					address: 'https://www.linkedin.com/in/beryl-chung-91b82b80/',
				}
			],
			navOpen: false,
			mobileDevice: false
		};
	},
	beforeMount: function() {
		
	},
	mounted: function() {
		this.mobileDevice = mobileDevice;
		// IF PAGE LOAD IS SUB-ROUTE OF PROJECTS SET NAV TAB TO PROJECTS
		var name = this.$route.name == 'project' ? 'projects' : this.$route.name; 
		var target = $('#'+ name +'-nav')[0];
		// SET START LOCATION FOR NAV LINE
		if ( !this.mobileDevice ) {
			$('#nav-line').css({
				left: target.offsetLeft,
				width: target.offsetWidth
			});
		}
		$('.nav-item').removeClass( 'active' );
		$(target).addClass( 'active' );
	},
	methods: {
		navigate: function( page ) {
			if ( page == this.$route.name ) return;
			router.push({ name: page });

			// IF PAGE LOAD IS SUB-ROUTE OF PROJECTS SET NAV TAB TO PROJECTS
			var name = page == 'project' ? 'projects' : this.$route.name; 
			var target = $('#'+ name +'-nav')[0];
			if ( !this.mobileDevice ) {
				$('#nav-line').animate({
					left: target.offsetLeft,
					width: target.offsetWidth
				}, 20, 'easeInExpo');
			} else {
				this.navOpen = false;
			}
			$('.nav-item').removeClass( 'active' );
			$(target).addClass( 'active' );
		}
	}
});

// HOME ==== AKA PROJECTS
var currentProject = {}

var Home = Vue.component( 'bc-home', {
	data: function(){
		return {
			transitionName: 'slide-up',
		}
	},
	template: 
		`<div id="home">
			<transition :name="transitionName">
				<router-view></router-view>
			</transition>
		</div>`,
	watch: {
		'$route': 'beforeRouteUpdate',
	},
	methods: {
		beforeRouteUpdate: function( to, from ) {
			if ( to.name == 'project' ) {
				this.transitionName = 'slide-up';
			// IF FROM PROJECT USE SLIDE DOWN CLOSE
			} else if ( from.name == 'project' ) {
				this.transitionName = 'slide-down';
			}
		}
	}
});


//  PROJECTS

var Projects = Vue.component( 'bc-projects', {
	router,
	template: 
		`<div id="projects">
			<div class="inner-container av-viewport">
				<div id="projects-hero" class="hero-banner" v-bind:style="{ background: colors[backgroundIndex], height: mobileHeight }">
					<div class="hero-text">
						<h1>Hello, <br class="sm-br">I&apos;m Beryl</h1>
						<h5>ART DIRECTOR / ILLUSTRATOR / DESIGNER / SEMI-PRECIOUS MINERAL</h5>
					</div>
					<div class="hero-image" v-for="n in 6">
						<img :src="'public/images/projects/hero-' + n + '.png'" />
					</div>
				</div>

				<div id="projects-clients">
					<div class="client-item project-item aniview" v-for="client in projects.clients" :key="client.id" v-on:click="showProject(client)">
						<div data-av-animation="slideInUp">
							<div class="client-preview">
								<div class="client-preview-crop">
									<img :src="'public/images/projects/' + client.banner" />
								</div>
								<img class="banner-img" :src="'public/images/projects/' + client.banner" />
								<div class="mobile-img" v-if="client.mobile">
									<img :src="'public/images/projects/' + client.mobile" />
								</div>
							</div>
							<div class="client-body">
								<h6>{{ client.brand | uppercase }}</h6>
								<h3 class="project-title">{{ client.title }}</h3>
								<p>{{ client.summary }}</p>
							</div>
						</div>
					</div>
				</div>

				<div class="event-item project-item" v-for="( project, index ) in projects.events" :key="project.id" v-on:click="showProject(project)">
					<div class="project-preview aniview">
						<img class="main-img" :src="'public/images/projects/' + project.main_image" data-av-animation="slideInUp" />
						<img class="secondary-img" :src="'public/images/projects/' + project.secondary_image" data-av-animation="fadeInUp" />
					</div>
					<div class="project-body center-content aniview" data-av-animation="slideInUp">
						<h6>{{ project.brand | uppercase }}</h6>
						<h2 class="project-title">{{ project.title }}</h2>
						<h4>{{ project.summary }}</h4>
					</div>
				</div>

				<div class="illustration-item project-item" v-for="project in projects.illustration" v-on:click="showProject(project)" :key="project.id">
					<div class="illustration-preview aniview">
						<img class="illustration-img" v-for="n in 3" :src="'public/images/projects/Illustration_' + n +'.jpg'" data-av-animation="slideInUp"/>
					</div>
					<div class="illustration-body center-content aniview" data-av-animation="slideInUp">
						<h2 class="project-title">{{ project.title }}</h2>
						<h4>{{ project.summary }}</h4>
					</div>
				</div>
			</div>
		</div>`,
	data: function() {
		var projects = {};
		$.each( allProjects, function(index, project){
			var category = project.category;
			if (!projects[category]) projects[category] = [];
			projects[category].push( project );
		});
		return {
			projects: projects,
			currentProject: currentProject,
			colors: [ '#000000', '#80CBC4', '#4DD0E1', '#FFCDD2', '#EC407A', '#FFCA28' ],
			backgroundIndex: 0,
			mobileDevice: false,
			mobileHeight: null
		}
	},
	beforeMount: function() {
		
	},
	mounted: function() {
		var $this = this;

		this.mobileDevice = mobileDevice;
		// SET PROJECTS HEADER HEIGHT FOR MOBILE
		if ( mobileDevice ) {
			var height = ( window.innerHeight > 0 ) ? window.innerHeight : screen.height;
			this.mobileHeight = height - 60 + 'px';
		}
		// ON MOUNT > START GEMS SLIDESHOW
		this.nextSlide();
	},
	beforeDestroy: function() {
		clearTimeout( this.berylLoop );
	},
	methods: {
		nextSlide: function() {
			var $this = this;
			// CAROUSEL FOR HERO BANNER GEMS
			var slide = $('.hero-image.active');
			if ( !slide[0] ) {
				slide = $('.hero-image').first();
				slide.addClass('active');
				$this.backgroundIndex = 0;
			} else {
				slide.removeClass('active');
				
				var next = slide.next('.hero-image') 
				if ( !next[0] ) next = $('.hero-image').first();
				
				next.addClass('active');
				$this.backgroundIndex = $('.hero-image').index(next);
			}
			
			$this.berylLoop = setTimeout(function() {
				$this.nextSlide();
			}, 5000);
		},
		showProject: function(project) {
			currentProject = project;
			router.push({ name: 'project', params: { id: project.id }});
		}
	}
});

// PROJECTS CHILDREN ( DETAIL PAGE )

var Project = Vue.component( 'bc-detail', {
	router,
	template:
		`<div :id="currentProject.id +'-detail'" class="project-detail">
			<div class="project-block">
				<div class="left-column">
					<h6>{{ currentProject.brand | uppercase }}</h6>
					<h2>{{ currentProject.title }}</h2>
					<div class="project-text">
						<p class="h4" v-for="text in currentProject.text">{{ text }}</p>
						<p class="h4" v-if="!currentProject.text">{{ currentProject.summary }}</p>
					</div>
					<p class="project-tags" v-if="currentProject.tags">{{ currentProject.tags.join( '; ' ) }}</p>
					<router-link class="back-button" :to="{ name: 'projects' }">
						<span class="bc bc-arrow-left"></span> Back
					</router-link>
				</div>
				<div class="right-column">
					<div class="inner-container">
						<div class="project-element" v-for="element in currentProject.elements">
							<div class="project-gallery" v-if="element.type=='gallery'">
								<div class="gallery-slider">
									<transition-group :name="transitionName" tag="ul">
										<li class="gallery-slide" v-for="( slide, index ) in element.slides" :key="slide" v-show="currentSlide==index">
											<img :src="'public/images/projects/' + currentProject.id + '/' + slide" />
										</li>
									</transition-group>
								</div>
								<div class="gallery-buttons no-select">
									<span class="bc bc-arrow-left gallery-button" v-on:click="changeSlide('last', element )"></span>
									<span class="bc bc-arrow gallery-button" v-on:click="changeSlide('next', element )"></span>
									<span class="gallery-label">{{ currentSlide + 1 }} of {{ element.slides.length }}</span>
								</div>
							</div>
							<div class="project-grid" v-if="element.type=='flex-grid'">
								<div class="flex-item" v-bind:class="item.custom_class" v-for="item in element.items">
									<img v-if="item.type=='image'" :src="'public/images/projects/' + currentProject.id + '/' + item.value" />
									<div class="html-block" v-if="item.type=='html'" v-html="item.value"></div>
								</div>
							</div>

							<div class="project-images" v-if="element.type=='images'">
								<div class="project-image" v-for="image in element.images" :key="image">
									<img :src="'public/images/projects/' + currentProject.id + '/' + image">
								</div>
							</div>
							<div class="project-video" v-if="element.type=='video'" v-bind:style="{ 'background-image': 'url(public/images/projects/' + currentProject.id + '/' + element.screenshot + ')' }">
								<iframe :src="element.video_url + '?modestbranding=1&showinfo=0&rel=0'" frameborder="0" allowfullscreen></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>`,
	data: function() {
		return {
			currentProject: currentProject,
			transitionName: 'slide-left',
			currentSlide: 0,
			slideInt: 0
		}
	},
	mounted: function() {
		this.currentSlide = 0;
	},
	beforeDestroy: function() {

	},
	methods: {
		changeSlide: function(dir, element){
			var length = element.slides.length;
			
			if ( dir == 'next' ) this.slideInt++;
			else this.slideInt--;

			if ( this.slideInt < 0 ) this.slideInt = length - 1;

			this.transitionName = dir + '-slide';
			this.currentSlide = this.slideInt % length;
		}
	}
});



// ABOUT 

var About = Vue.component( 'bc-about', {
	data: function() {
		return {
			personal: {
				career: 'Beryl Chung is an art director, illustrator, and designer working in digital media & advertising. She is currently living in Shanghai spending her hard-earned wages on soup dumplings & karaoke.',
				bio: 'Beryl was born & raised in New York and is an only child, which explains a lot about her personality. She has a BFA from Parsons the New School for Design.',
				experience: 'Beryl’s experience extends across multiple industries, for a roster of both national and international clients. Clients include: Intercontinental Hotels Group, H&M, Ermenegildo Zegna, Pepsi, UPS, Unilever, Dupont, Brand USA, NFL, Premier League.',
				features: [
					{ name: 'Giant Robot NY', link: 'https://www.giantrobot.com/blogs/giant-robot-store-and-gr2-news/15827171-grny-dime-bag-3-group-show-7-18-09-8-12-09' },
					{ name: 'Juxtapoz Magazine', link: 'https://www.juxtapoz.com/news/illustration/beryl-chungs-dedication-to-the-king-of-rock-and-roll/' }
				]
			},
			beryl: {
				headline: 'Beryl is a mineral composed of beryllium aluminium cyclosilicate with the chemical formula Be&#8323;Al&#8322;(SiO3)&#8326;.',
				subtext: 'Naturally occurring, hexagonal crystals of beryl can be up to several meters in size. Notable gemstones which contain beryllium include beryl (aquamarine, emerald) and chrysoberyl. As a free element it is a steel-gray, strong, lightweight and brittle alkaline earth metal.'
			}
		}
	},
	template: 
		`<div id="about">
			<div id="personal-info">
				<div class="left-block">
					<div class="text-block">
						<h3>{{ personal.career }}</h3>
						<h3>{{ personal.bio }}</h3>
						<p class="h6">{{ personal.experience }}</p>
						<p class="h6">
							Featured in: <span v-for="(featured, index ) in personal.features"><a v-bind:href="featured.link">{{ featured.name }}</a><span v-show="index+1 < personal.features.length">, </span></span>
						</p>
					</div>
				</div>
				<div class="right-block">
					<img src="public/images/about/profile.jpg" />
				</div>
			</div>
			<div id="beryl-info">
				<div class="left-block">
					<div class="minerals-block">
						<img class="mineral-img" v-for="n in 3" :src="'public/images/about/mineral-' + n +'.png'" />
					</div>
				</div>
				<div class="right-block">
					<p class="h5">{{ beryl.headline | decodeHtml }}</p>
					<p>{{ beryl.subtext }}</p>
				</div>
			</div>
		</div>`,
});

// CONTACT

var Contact = Vue.component( 'bc-contact', {
	template:
		`<div id="contact">
			<div id="contact-block">
				<div class="contact-info">
					<p>Get in touch using this<br>form or email</p>
					<a class="email-link" href="mailto:hi@berylchung.com?Subject=Hi">hi@berylchung.com</a>
				</div>
				<div class="contact-form">
					<form>
						<p class="group-label">Name</p>
						<div class="form-group">
							<div class="input-group half-width">
								<input />
								<p>First Name</p>
							</div>
							<div class="input-group half-width">
								<input />
								<p>Last Name</p>
							</div>
						</div>
						<p class="group-label">Email Address</p>
						<div class="form-group">
							<div class="input-group">
								<input />
							</div>
						</div>
						<p class="group-label">Subject</p>
						<div class="form-group">
							<div class="input-group">
								<input />
							</div>
						</div>
						<p class="group-label">Message</p>
						<div class="form-group">
							<div class="input-group">
								<textarea></textarea>
							</div>
						</div>
						<button class="submit-btn" type="submit">SUBMIT</button>
					</form>
				</div>
			</div>
		</div>`
});


// ROUTER ========

var router = new VueRouter({
	routes: [
		{ path: '/', redirect: '/projects' },
		{
			path: '/projects',
			component: Home,
			alwaysRefresh: true,
			children: [
				{ 
					path: '',
					name: 'projects', 
					component: Projects,
					props: true
				},
				{
					path: '/projects/:id',
					name: 'project',
					component: Project
				},
			]
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
			component: Contact,
			props: true
		}
	]
});


// VUES ===========

// == MAIN VIEW ==

var beryl = new Vue({
	router,
	data: {
		transitionName: 'drop-down',
		loading: true,
		mobileDevice: false,
	},
	template: 
	`<div id="app" v-cloak>
		<transition name="load-finish">
			<div id="loading-shade" v-if="loading">
				<img class="loading-icon" src="public/images/header/bgsc-logo.png" />
			</div>
		</transition>
		<bc-header></bc-header>
		<div id="main">
			<transition :name="transitionName">
				<router-view class="view"></router-view>
			</transition>
		</div>
	</div>`,
	beforeMount: function() {
		if ( this.$route.name == 'project' && ( !currentProject || !currentProject.id ) ) {
			currentProject = findWhere( allProjects, { id: this.$route.params.id });
		}
		// DETECT MOBILE DEVICE
		this.mobileDevice = mobileDevice;
		if ( width < 700 ) this.mobileDevice = true;
	},
	mounted: function() {
		var $this = this;
		console.log('Ready');
		// SCRAPE PROJECTS FOR IMAGES
		var images = this.compileImages();
		// PRELOAD IMAGES AND SET LOADED WHEN FINISHED
		this.preLoadImages( images, function(){
			// SET ANIMATED ELEMENTS
			if ( !$this.mobileDevice ) {
				$('.aniview').AniView({
					animateThreshold: 200,
				});
			}
			// REMOVE LOADING SHADE
			$this.loading = false;
		});
	},
	watch: {
		'$route' : 'beforeRouteUpdate',
	},
	methods: {
		compileImages: function() {
			var images = [];
			// ADD HERO BANNER BERYL AND ILLUSTRATION IMAGES
			images = images.concat([
				'public/images/projects/hero-1.png',
				'public/images/projects/hero-2.png',
				'public/images/projects/hero-3.png',
				'public/images/projects/hero-4.png',
				'public/images/projects/hero-5.png',
				'public/images/projects/hero-6.png',
				'public/images/projects/Illustration_1.jpg',
				'public/images/projects/Illustration_2.jpg',
				'public/images/projects/Illustration_3.jpg'
			]);
			// SCRAPE IMAGES FROM PROJECTS
			$.each( allProjects, function( index, project ){
				var basePath = 'public/images/projects/';
				if ( project.banner )
					images.push( basePath + project.banner );
				if ( project.mobile )
					images.push( basePath + project.mobile );
				if ( project.elements && project.elements.length ) {
					var projectPath = basePath + project.id + '/';
					$.each( project.elements, function( index, element ) {
						if ( element.type == 'images' && element.images ) {
							$.each( element.images, function( index, image ) {
								images.push( projectPath + image );
							});
						} else if ( element.type == 'gallery' && element.slides ) {
							$.each( element.slides, function( index, image ) {
								images.push( projectPath + image );
							});
						} else if ( element.type == 'flex-grid' && element.items ) {
							$.each( element.items, function( index, item ) {
								if ( item.type == 'image' )
									images.push( projectPath + item.value );
							});
						}
					});
				}
			});
			// ADD ABOUT PAGE IMAGES
			images = images.concat([
				'public/images/about/profile.jpg',
				'public/images/about/mineral-1.png',
				'public/images/about/mineral-2.png',
				'public/images/about/mineral-3.png',
			]);
			return images;
		},
		preLoadImages: function( images, callback ) {
			var $this = this;
			$.each( images, function(index, image_url) {
				var image = new Image();
				image.onload = function(){
					// IF LAST COMPLETE LOADING
					if ( !images[index + 1] ) 
						callback();
				};
				// handle failure
				image.onerror = function() {
					// IF LAST COMPLETE LOADING
					if ( !images[index + 1] ) 
						callback();
				};
				image.src = image_url;
			});
		},
		beforeRouteUpdate: function( to, from ) {
			// REMOVE TRANSITIONS IF MOBILE MENU
			if ( this.mobileDevice ) {
				this.transitionName = '';
			} else {
				// IF FROM PROJECTS OR PROJECT DROP ABOUT & CONTACT DOWN
				if ( from.name == 'projects' || from.name == 'project' ) {
					this.transitionName = 'drop-down';
				// IF BACK TO PROJECTS DROP ABOUT & CONTACT UP
				} else if ( to.name == 'projects' ) {
					this.transitionName = 'drop-up';
				// IF FROM/TO ABOUT OR CONTACT DROP OUT AND "to" DOWN
				} else {
					this.transitionName = 'drop-down-out'
				}
			}
		}
	}
}).$mount('#app');

function findWhere(target, value) {
	var key, val;
	if ( 'object' === typeof target ) {
		key = Object.keys(value)[0];
		val = value[key];
		var found;
		$.each( target, function(index, object) {
			if ( object[key] == val ) found = object;
		});
		return found;
	} else if ( 'function' == typeof value ) {
		// TODO: FINISH
	}
};
