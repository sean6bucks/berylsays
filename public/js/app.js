'use strict'

var beryl = new Vue({
	el: '#app',
	data: {
		clients: [
			{
				brand: 'Holiday Inn',
				title: 'What Would You Do with an Extra Day',
				summary: 'Through balancing work & pleasure, Holiday Inn wants to create more Moments of Joy for busy professionals.',
				banner: '',
				mobile: ''
			},
			{
				brand: 'UPS',
				title: 'UPS Whitepapers: Think Like a Leader'
				summary: 'We created a concise infographic and corresponding animated video for UPS Supply Chain Solutions’ annual white papers about the stand out characteristics of successful leaders in export manufacturing.',
				banner: '',
			},
			{
				brand: 'Ogilvy',
				title: 'Making Data tracking Simple',
				summary: 'This animated video follows your customer Jay, as he produces valuable data all day long that could help your brand become a bigger part of his life.',
				banner: '',
			},
			{
				brand: 'Pepsi',
				title: 'Welcome to the New Pepsi Challenge',
				summary: 'In China, 12 Pepsi Ambassadors from a variety of fields and backgrounds encourage the world to dream a little bigger, have more fun, and, most importantly: to Live for Now.',
				banner: '',
			}
		]
	},
	ready: function() {

	},
	methods: {}
});