export async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log("Requisição para " + response.url + " retornou status " + response.status);
    const data = await response.json();
    return data;
}

export async function getPostById(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log("Requisição para " + response.url + " retornou status " + response.status);
    const data = await response.json();
    return data;
}

export async function getCommentsByPost(postId) {
    const url = new URL('https://jsonplaceholder.typicode.com/comments');
    url.searchParams.append('postId', postId);
    // url.search = new URLSearchParams({
    //     postId: postId
    // })
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    console.log("Requisição para " + response.url + " retornou status " + response.status);
    const data = await response.json();
    return data;
}

export async function createPost(post) {
    const body = {
        userId: post.userId,
        title: post.title,
        body: post.body,
    }
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log("Requisição para " + response.url + " retornou status " + response.status);
    const data = await response.json();
    return data;
}

export async function updatePost(post) {
    const body = {
        userId: post.userId,
        title: post.title,
        body: post.body,
    }

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log("Requisição para " + response.url + " retornou status " + response.status);
    const data = await response.json();
    return data;
}

export async function updatePostTitle(id, title) {
    const body = {
        title: title,
    }

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log("Requisição para " + response.url + " retornou status " + response.status);
    const data = await response.json();
    return data;
}

export async function deletePost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    });
    console.log("Requisição para " + response.url + " retornou status " + response.status);
    return (response.status === 200);
}