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
		text: [ 'Through balancing work & pleasure, Holiday Inn wants to create more Moments of Joy for busy professionals. We created an H5 that asked guests how they would spend time with someone they love if they had extended their stay an Extra Day the next time they travel for business.', 'Through an illustrated chat simulation, the idea of Extended Stay is introduced...Messages from different friends show different examples of the difficulty in work/life balance. By submitting one sentence about how to spend an Extra Day, users are entered to receive free Extended Stay giveaways.' 
		],
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
		summary: 'We created a concise infographic and corresponding animated video for UPS Supply Chain Solutions\' annual white papers about the stand out characteristics of successful leaders in export manufacturing.',
		text: [ 'UPS Supply Chain Solutions\' annual white papers provide insight into the guiding principles used to create innovative solutions and strategies that synchronize multiple business processes.', 'To make this valuable document appealing and easy to digest, we created a concise infographic and corresponding animated video about the stand out characteristics of successful leaders in export manufacturing.' 
		],
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
		text: [ 'Whether you are looking to understand your audience better, produce better content, or just run a smarter loyalty program - data can help you achieve it.  This animated video follows your customer Jay, as he produces valuable data all day long that could help your brand become a bigger part of his life.', 'When a brand has the ability to deliver the right content at the right time in the right channel... Jay is not only more likely to engage with you, he also knows that you value him as an individual, increasing that tough-to-earn Brand Love.' 
		],
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
		text: [ 'Pepsi and Pepsi Ambassadors worldwide issue a series of unforgettable challenges and rewards throughout the year. In China, 12 KOLs from a variety of fields and backgrounds encourage the world to dream a little bigger, have more fun, and, most importantly: to Live for Now.', 'Each of the 6 challenge themes - Tech, Music, Film, Entrepreneurship, Design, and Sport - features its own unique design profile. For the key visuals, these disparate identities are unified with Pepsi\'s iconic red, white, and blue.', 'Are you ready to take on the Pepsi Challenge?' 
		],
		tags: [ 'Art Direction', 'Digital Activation', 'Illustration', 'Mobile H5', 'Print Campaign', 'OOH' ],
		banner: 'Pepsi_preview_banner.jpg',
		elements: [
			{
				type: 'images',
				images: [ 'Pepsi-01.jpg', 'Pepsi-02.jpg' ]
			},
			{
				type: 'flex-grid',
				custom_class: 'center-content',
				items: [
					{
						type: 'image',
						value: 'Pepsi-03.jpg'
					},
					{
						type: 'html',
						value: '<p class="h4">For social & digital, an interactive mobile-friendly HTML5 page was developed to introduce the 12 unique KOLs and their challenges in a fun, engaging way.<br><br>Fans were encouraged to “like” their favorite celebrity and share on Wechat.</p>'
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
		id: 'top5',
		brand: 'Pop Culture Poster Show',
		title: 'What\'s Your All-Time, Desert Island TOP 5?',
		summary: 'We ask artists from different disciplines - graphic design, illustration, fashion, printmaking - to create a series of 5 posters based on their TOP 5 biggest artistic influences from movies, TV, books, comics, and music... using only 5 colors.',
		text: [ 
			'When someone asks what you like, what you listen to, what you\'re reading, the purpose of the question is not only to spark conversation around common interests. Gauging your taste offers sometimes unexpected insights into your personality, into how you define your identity, and thus who you are.', 
			'In an artist\'s development, mass media and pop culture have great influence.', 
			'TOP 5 asks artists from different disciplines to create a series of 5 posters based on their TOP 5 biggest artistic influences from movies, TV, books, comics, and music... using only 5 colors.', 
			'To see all the posters and find out more, visit <a class="gold-link" href="http://top5postershow.com">top5postershow.com</a>',
			'Featured in: <a href="http://www.timeoutshanghai.com/features/Things_to_Do-Around_Town/46019/Unravel-and-TOP-5-team-up-for-a-night-of-live-storytelling-and-pop-art.html">TimeOut Shanghai</a>, <a href="http://www.smartshanghai.com/wire/community/unravel-and-top-5-founders-talk-about-upcoming-collaboration">SmartShanghai</a>' 
		],
		tags: ['Art Exhibition', 'Event Organization', 'Promotional Materials', 'Illustration' ],
		main_image: 'TOP5-main.png',
		secondary_image: 'TOP5-secondary.png',
		elements: [
			{
				type: 'gallery',
				slides: [ 'TOP5-slide00.jpg', 'TOP5-slide01.jpg', 'TOP5-slide02.jpg', 'TOP5-slide03.jpg', 'TOP5-slide04.jpg', 'TOP5-slide05.jpg', 'TOP5-slide06.jpg', 'TOP5-slide07.jpg', 'TOP5-slide08.jpg' ]
			},
			{
				type: 'images',
				images: [ 'TOP5-S2-colorstrip.jpg' ]
			},
			{
				type: 'html',
				value: '<h2 class="text-center margin-none">Series 2</h2><p class="text-center">2017/07/27</p>',
				style: { 'text-align': 'center' }
			},
			{
				type: 'images',
				images: [ 'TOP5-S2-flyer.jpg', 'TOP5-S2-poster.jpg', 'TOP5-S2-timeout.jpg' ]
			},
			{
				type: 'images',
				images: [ 'TOP5-S1-colorstrip.jpg' ]
			},
			{
				type: 'html',
				value: '<h2 class="text-center margin-none">Series 1</h2><p class="text-center">2016/12/02</p>',
				style: { 'text-align': 'center' }
			},
			{
				type: 'images',
				images: [ 'TOP5-S1-flyer.jpg', 'TOP5-S1-poster.png' ]
			}
		]
	},
	{
		category: 'events',
		id: 'elvis',
		brand: 'Elvis Fan Club',
		title: 'A Teenage Dream, Realized',
		summary: '"Happy Birthday, Elvis" Fest 2016 encompassed 7 Elvis-themed events over 2 weekends in Hong Kong and Shanghai. You\'re invited to the biggest, weirdest, wackiest 81st birthday party ever.',
		text: [
			'How do you describe a dream come to life? A personal goal since high school, “Happy Birthday, Elvis” Fest was years in the making.',
			'"Happy Birthday, Elvis" Fest 2016 encompassed 7 Elvis-themed events over 2 weekends in Hong Kong and Shanghai. You\'re invited to the biggest, weirdest, wackiest 81st birthday party ever.'
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
						value: '<p class="h4">Saturday, January 9</p><p class="h4"><b>Elvis\' 81st Birthday Party Rock Show</b> at The Wanch, Hong Kong</br>Performances from The Boogie Playboys and Miss Cathy, The Queen of Hong Kong Rockabilly<span class="sm-hr"></span>Sunday, January 10</p><p class="h4"><b>Elvis\' 81st Birthday Party</b> with the International Elvis Presley Fan Club (Hong Kong)<br>Baby ♥s Elvis Pop Up Exhibition<span class="sm-hr"></span>Friday, January 15</p><p class="h4"><b>BABY ♥s ELVIS</b></br>A narrative Elvis-themed group art show curated by Beryl Chung and Basement6 Food by Umi Bunwich / Sponsored by Fireball / Music by DJ BO</p>'
					},
					{
						type: 'html',
						value: '<p class="h4">Saturday, January 16</p><p class="h4"><b>Elvis\' Family Birthday Party</b> at the Kerry Parkside Courtyard Hotel<br>Live Elvis Impersonation by Curt Mabry of Zmack / Music by DJ BO and the Kerry House Band / Baby ♥s Elvis Pop Up Exhibition</p><p class="h4"><b>BABY ♥s ELVIS Life Drawing Event</b> at Basement 6 with Shanghai Sketch Club<br>Featuring Burlesque Model, Lulu Galore</p><p class="h4"><b>Elvis The Pelvis\' Hip Grind Special</b> at INFERNO<br>Performances from Banana Monkey, Chad Romero & The Cadillacs, Parachutes on Fire, & DJ BO Support from Lulu Galore and Baby ♥s Elvis art show<span class="sm-hr"></span>Sunday, January 17</p><p class="h4"><b>Elvis\' Southern-Fried Brunch</b><br>A Mississippi-style feast by Ruijin Cajun, hosted by District</p>'
					}
				]
			}
		]
	},
	{
		category: 'illustration',
		id: 'illustration',
		title: 'Art & Illustration',
		summary: 'I like to say my first illustration job was in grade school, copying pokemon cards on classmates\' notebooks for snack money. Check out these more recent selected illustration projects and personal favorites.',
		text: [ 
			'I like to say my first illustration job was in grade school, copying pokemon cards on classmates\' notebooks for snack money.', 
			'Check out these more recent selected illustration projects and personal favorites.' 
		],
		tags: [ 'Illustration Projects', 'Personal Projects', 'Textile Design', 'Unravel Stroytelling Posters' ],
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
					{ type: 'image', value: 'Illo-11.jpg' },
					{ type: 'image', value: 'Illo-12.jpg' },
					{ type: 'image', value: 'Illo-13.jpg' }
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
				<span v-on:click="navigate('projects')" id="header-icon" class="bc bc-beryl-icon">
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
				<span class="mobile-header-menu" v-on:click="navOpen = !navOpen" v-bind:class="{ 'close-x': navOpen }">
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
		var $this = this;
		this.mobileDevice = mobileDevice;
		// IF PAGE LOAD IS SUB-ROUTE OF PROJECTS SET NAV TAB TO PROJECTS
		var name = this.$route.name == 'project' ? 'projects' : this.$route.name; 
		var target = $('#'+ name +'-nav')[0];
		// SET START LOCATION FOR NAV LINE
		if ( !this.mobileDevice ) {
			setTimeout(function() { 
				$this.setLine( target, 0 );
			}, 100 );
		}
		$('.nav-item').removeClass( 'active' );
		$(target).addClass( 'active' );

		$( window ).resize( function( target ) {
			var name = $this.$route.name == 'project' ? 'projects' : $this.$route.name; 
			var target = $('#'+ name +'-nav')[0];
			if ( !$this.mobileDevice ) {
				$this.setLine( target, 0 );
			}
		});
	},
	methods: {
		navigate: function( page ) {
			if ( page == this.$route.name ) return;
			router.push({ name: page });

			// IF PAGE LOAD IS SUB-ROUTE OF PROJECTS SET NAV TAB TO PROJECTS
			var name = page == 'project' ? 'projects' : this.$route.name; 
			var target = $('#'+ name +'-nav')[0];
			if ( !this.mobileDevice ) {
				this.setLine( target, 20, 'easeInExpo' );
			} else {
				this.navOpen = false;
			}
			$('.nav-item').removeClass( 'active' );
			$(target).addClass( 'active' );
		},
		setLine: function( target, delay, ease ) {
			if ( !delay ) delay = 0;
			if ( !ease ) ease = 'ease';

			$('#nav-line').animate({
				left: target.offsetLeft,
				width: target.offsetWidth
			}, delay, ease );
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
			<div class="inner-container">
				<div id="projects-hero" class="hero-banner" v-bind:style="{ background: colors[backgroundIndex], height: mobileHeight }">
					<div class="hero-text">
						<h1>Hello, <br class="sm-br">I&apos;m Beryl</h1>
						<router-link :to="{ name: 'about' }">
							<h5>ART DIRECTOR / ILLUSTRATOR / DESIGNER / SEMI-PRECIOUS MINERAL</h5>
						</router-link>
					</div>
					<div class="hero-image" v-for="n in 6">
						<img :src="'public/images/projects/hero-' + n + '.png'" />
					</div>
				</div>

				<div id="projects-clients">
					<div class="client-item project-item" v-for="( client, index ) in projects.clients" :key="client.id" v-on:click="showProject(client)">
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

				<div class="event-item project-item" v-for="( project, index ) in projects.events" :key="project.id" v-on:click="showProject(project)">
					<div class="project-preview">
						<img class="secondary-img" :src="'public/images/projects/' + project.secondary_image"/>
						<img class="main-img" :src="'public/images/projects/' + project.main_image"/>
					</div>
					<div class="project-body">
						<h6>{{ project.brand | uppercase }}</h6>
						<h2 class="project-title">{{ project.title }}</h2>
						<h4>{{ project.summary }}</h4>
					</div>
				</div>

				<div class="illustration-item project-item" v-for="project in projects.illustration" v-on:click="showProject(project)" :key="project.id">
					<div class="illustration-preview">
						<img class="illustration-img" v-for="n in 3" :src="'public/images/projects/Illustration_' + n +'.jpg'"/>
					</div>
					<div class="illustration-body">
						<h2 class="project-title">{{ project.title }}</h2>
						<h4>{{ project.summary }}</h4>
					</div>
				</div>
				<div class="footer-block">
					<p>Beryl Chung &copy; 2017</p>
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
					<div class="inner-container">
						<h6>{{ currentProject.brand | uppercase }}</h6>
						<h2>{{ currentProject.title }}</h2>
						<div class="project-text">
							<p class="h4" v-for="text in currentProject.text" v-html="text"></p>
							<p class="h4" v-if="!currentProject.text">{{ currentProject.summary }}</p>
						</div>
						<p class="project-tags" v-if="currentProject.tags">{{ currentProject.tags.join( '; ' ) }}</p>
						<router-link class="back-button" :to="{ name: 'projects' }">
							<span class="bc bc-arrow-left"></span> Back
						</router-link>
					</div>
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
							<div class="project-grid" v-bind:class="element.custom_class" v-if="element.type=='flex-grid'">
								<div class="flex-item" v-bind:class="item.custom_class" v-for="item in element.items">
									<img v-if="item.type=='image'" :src="'public/images/projects/' + currentProject.id + '/' + item.value" />
									<div class="html-block" v-if="item.type=='html'" v-html="item.value"></div>
								</div>
							</div>
							<div class="html-block" v-if="element.type=='html'" v-html="element.value" v-bind:style="element.style"></div>
							<div class="project-images" v-if="element.type=='images'">
								<div class="project-image" v-for="image in element.images" :key="image">
									<img :src="'public/images/projects/' + currentProject.id + '/' + image">
								</div>
							</div>
							<div class="project-video" v-if="element.type=='video'" v-bind:style="{ 'background-image': 'url(public/images/projects/' + currentProject.id + '/' + element.screenshot + ')' }">
								<iframe :src="element.video_url + '?modestbranding=1&showinfo=0&rel=0'" frameborder="0" allowfullscreen></iframe>
							</div>
						</div>
						<div class="footer-block">
							<p>Beryl Chung &copy; 2017</p>
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
				experience: 'Beryl\'s experience extends across multiple industries for a roster of both national and international clients, including: Intercontinental Hotels Group, H&M, Ermenegildo Zegna, Pepsi, UPS, Unilever, Dupont, Merck Sharp & Dohme, Brand USA, NFL, Premier League.',
				features: [
					{ name: 'Drift Compass | Portrait Project', link: 'https://youtu.be/NIHBQGYyEkM' },
					{ name: 'Juxtapoz Magazine', link: 'https://www.juxtapoz.com/news/illustration/beryl-chungs-dedication-to-the-king-of-rock-and-roll/' },
					{ name: 'Giant Robot NY', link: 'https://www.giantrobot.com/blogs/giant-robot-store-and-gr2-news/15827171-grny-dime-bag-3-group-show-7-18-09-8-12-09' }
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
						<p class="h6 featured-links project-tags">
							Featured in: <span v-for="(featured, index) in personal.features"><a v-bind:href="featured.link">{{ featured.name }}</a><span v-show="index+1 < personal.features.length">, </span></span>
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
			<div class="footer-block">
				<p>Beryl Chung &copy; 2017</p>
			</div>
		</div>`,
});

// CONTACT
// action="https://0356d63.netsolhost.com/cgi-bin/FormMail.contact.pl" method="post"

var Contact = Vue.component( 'bc-contact', {
	template:
		`<div id="contact">
			<div id="contact-block">
				<div class="contact-info">
					<p>Get in touch using this<br>form or email</p>
					<a class="email-link" href="mailto:hi@berylchung.com?Subject=Hi">hi@berylchung.com</a>
				</div>
				<div class="contact-form">
					<form id="feedbackForm">
						<p class="group-label">Name</p>
						<div class="form-group">
							<div class="input-group half-width" v-bind:class="{ 'has-error': formErrors.first_name }">
								<input id="formFirstName" name="First Name" v-model="formVals.first_name"/>
								<p>First Name</p>
							</div>
							<div class="input-group half-width">
								<input id="formLastName" name="Last Name" v-model="formVals.last_name"/>
								<p>Last Name</p>
							</div>
						</div>
						<p class="group-label">Email Address</p>
						<div class="form-group">
							<div class="input-group" v-bind:class="{ 'has-error': formErrors.email }">
								<input id="formEmail" name="formmail_mail_email"  v-model="formVals.email"/>
								<p class="form-error" v-show="emailError">{{ emailError }}</p>
							</div>
						</div>
						<p class="group-label">Subject</p>
						<div class="form-group">
							<div class="input-group" v-bind:class="{ 'has-error': formErrors.subject }">
								<input id="formSubject" name="Subject" v-model="formVals.subject"/>
							</div>
						</div>
						<p class="group-label">Message</p>
						<div class="form-group">
							<div class="input-group" v-bind:class="{ 'has-error': formErrors.message }">
								<textarea id="formMessage" name="Message" v-model="formVals.message"></textarea>
							</div>
						</div>
					</form>
					<button class="submit-btn" v-on:click="submitForm();">
						<span v-if="!formSending">SUBMIT</span>
						<span v-if="formSending" class="loader"></span>
					</button>
				</div>
			</div>
			<div class="footer-block">
				<p>Beryl Chung &copy; 2017</p>
			</div>
		</div>`,
	data: function() {
		return {
			formErrors: {},
			formVals: {
				first_name: '',
				last_name: '',
				email: '',
				subject: '',
				message: ''
			},
			formSending: false,
			emailError: ''
		};
	},
	watch: {
		// WATCH REQUIRED FORM VALS TO RESET ERRORS ON EDIT
		// EACH VALUE MUST BE SET > DEEP WATCH DOES NOT SHOW NEW AND OLD
		"formVals.first_name": function( newVal ) { this.formErrors.first_name = null; },
		"formVals.email": function( newVal ) { this.formErrors.email = null; },
		"formVals.subject": function( newVal ) { this.formErrors.subject = null; },
		"formVals.message": function( newVal ) { this.formErrors.message= null; }
	},
	methods: {
		submitForm: function() {
			var $this = this;
			if ( $this.formSending ) return;
			$this.formSending = true;

			function checkFields( form ) {

				var required = [ 'first_name', 'email', 'subject', 'message' ];
				var msg = 'Please complete the following fields:\n';
				var error = false;
				required.forEach( function( val ) {
					if ( !$this.formVals[val] || $this.formVals[val].length == 0 ) {
						$this.formErrors[val] = true;
						error = true;
					} else {
						if ( val == 'email' ) {
							if ( emailCheck( $this.formVals.email ) ) {
								$this.formErrors.email = true;
								error = true;
							} else {
								$this.formErrors.email = false;
							}
						} else {
							$this.formErrors[val] = false;
						}
					}
				});

				// IF ANY ERRORS RETURN FALSE AND STOP SEND
				return error ? false : true;
			};

			function emailCheck(emailStr) {
				var emailPat=/^(.+)@(.+)$/;
				var matchArray=emailStr.match(emailPat);

				if ( matchArray==null ) {
					$this.emailError = "Email address seems incorrect (check @ and .'s)";
					return true;
				} else {
					$this.emailError = "";
				}

				return false;
			};

			var form = {
				"Name": $this.formVals.first_name,
				"formmail_mail_email": $this.formVals.email,
				"Subject": $this.formVals.subject,
				"Message": $this.formVals.message
			};
			// ONLY ADD LAST IF FIRST AVAIL
			if ( $this.formVals.first_name && $this.formVals.last_name ) {
				form.Name = $this.formVals.first_name + ' ' + $this.formVals.last_name;
			}

			var valid_form = checkFields(form);

			if ( valid_form ) {
				console.log( 'Sending...');
				$.ajax({
					method: 'POST',
					// url: 'https://0356d63.netsolhost.com/cgi-bin/FormMail.contact.pl',
					url: 'https://0356d63.netsolhost.com/cgi-bin/FormMail.testingform.pl',
					data: form
				}).then(
					function( response ) {
						$this.formVals = {
							first_name: '',
							last_name: '',
							email: '',
							subject: '',
							message: ''
						};
						$this.formSending = false;
					},
					function( response ) {
						$this.formSending = false;
						console.log( 'AJAX Error', response );
					}
				);
			} else {
				$this.formSending = false;
				console.log( 'Form Error', $this.formErrors );
			}
		}
	}
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
