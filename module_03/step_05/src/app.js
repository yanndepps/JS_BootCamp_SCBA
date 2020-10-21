// partial application reduces the amount of arguments for a function

const getData = baseURL => route => callback =>
      fetch(`${baseURL}${route}`)
      .then(response => response.json())
      .then(data => callback(data));

const getSocialMediaData = getData('https://jsonplaceholder.typicode.com');
const getSocialMediaPosts = getSocialMediaData('/posts');
const getSocialMediaaComments = getSocialMediaData('/comments');

getSocialMediaPosts(posts => {
  posts.forEach(post => console.log(post.title));
})
