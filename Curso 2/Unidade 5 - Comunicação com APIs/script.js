import * as api from './api.js';

const dvPosts = document.querySelector('#posts');

function renderPosts() {
    api.getPosts().then(posts => {
        dvPosts.innerHTML = '';
        posts.forEach(post => {
            dvPosts.innerHTML += /*html*/`
                <div class="post">
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                    <button onclick="excluirPost(${post.id})">Excluir</button>
                </div>
            `
        })
    });
}


function excluirPost(id) {
    api.deletePost(id).then(() => {
        alert('Post excluído com sucesso');
        renderPosts();
    });
}

window.excluirPost = excluirPost;
window.renderPosts = renderPosts;