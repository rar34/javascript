// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => displayPost(data))

const loadData = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    console.log(data);
    displayPost(data)
}

function displayPost(posts) {
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        const postDiv = document.createElement('div');

        postDiv.classList.add('post-div')

        postDiv.innerHTML = `
                            <h3>User: ${post.userId} </h3>
                            <h1>Post: ${post.title}</h1>
                            <p>Post Description: ${post.body}</p>
                         `;

        postContainer.appendChild(postDiv);
    }
}

