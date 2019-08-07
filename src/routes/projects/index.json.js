import projects from './_projects.js';

const contents = JSON.stringify(projects.map(post => {
	return {
    // TODO change this to map correctly to projects
		// title: post.title,
		// slug: post.slug
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}