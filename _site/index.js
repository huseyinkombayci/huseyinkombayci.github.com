// // Helper
// const dom = {
// 	select: document.querySelector.bind(document)
// };

// function injectScript(src, cb) {
// 	const script = document.createElement('script');
// 	script.src = src;
// 	script.addEventListener('load', cb);
// 	document.head.appendChild(script);
// }

// // Latest blog post
// (async () => {
// 	const username = 'huseyinkombayci';
// 	const graphql = `
// 		query PostQuery($username: String!) {
// 			posts(username: $username, limit: 1) {
// 				title
// 				url
// 				subtitle
// 			}
// 		}
// 	`;

// 	const url = new URL('https://micro-medium-api-gqmwonovpk.now.sh/graphql');
// 	url.searchParams.append('variables', JSON.stringify({username}));
// 	url.searchParams.append('query', graphql);

// 	const json = await (await fetch(url)).json();
// 	const item = json.data.posts[0];

// 	const title = dom.select('#latest-blog-post a');
// 	title.href = item.url;
// 	title.textContent = item.title;

// 	dom.select('#latest-blog-post p').textContent = item.subtitle;
// 	dom.select('#latest-blog-post').classList.add('visible');
// })();