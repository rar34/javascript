fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))

function displayPost(posts) {
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        const postDiv = document.createElement('div');

        postDiv.classList.add('post-div')

        postDiv.innerHTML = `
        <h5>User: ${post.userId} </h5>
        <h4>Post: ${post.title}</h4>
        <p>Post Description: ${post.body}</p>
        `;

        postContainer.appendChild(postDiv);
    }
}

