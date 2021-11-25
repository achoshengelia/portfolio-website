const projectsData = [
	{
		title: 'Zueinander (Finden) Trovarsi',
		description:
			'Built using Next, Nest & PostgreSQL. A website for the exhibition/event series about mental health awareness in South Tyrol. My first project in React where I worked on the frontend part. Having only worked with vanilla JavaScript before, this project helped me to understand the true power of React and declarative programming.',
		image: '/gifs/zueinander.gif',
		tags: ['Next', 'Nest', 'Node', 'PostgreSQL'],
		source: 'http://www.zueinander-trovarsi.it/',
		visit: 'https://github.com/RezikoChkadua/achi-backed',
		id: 0,
	},
	{
		title: 'Synth Gear',
		description:
			'My first full-stack application. Used express.js to create an app that follows the REST guidelines, Bootstrap for adding styles, EJS as a templating engine, MongoDB as the database and Mongoose as the Object Data Mapper. For authentication and authorisation I used passport.js. This project gives the users ability to create an account, add and delete (if they are authorised) items with the option to upload pictures (used Cloudinary for this). Also add and delete (if they are authorised) reviews. I used Moment.js to add a timer to each review and item to indicate how long ago it was created.',
		image: '/gifs/synthgear.gif',
		tags: ['Node', 'Express', 'MongoDB', 'Mongoose'],
		source: 'https://synthgear.herokuapp.com/',
		visit: 'https://github.com/achoshengelia/synth-gear',
		id: 1,
	},
];

export default projectsData;
