document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const userName = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/TSCarol').then(function(response) {
            if (!response.ok) {
                throw new Error('Não foi possível carregar os dados do usuário.');
            }
            return response.json();
    })
    .then(function(json) {
        nameElement.innerText = json.name;
        userName.innerText = json.login;
        avatarElement.src = json.avatar_url;
        reposElement.innerText = json.public_repos;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        linkElement.href =json.html_url;
    })
    .catch(function(erro) {
        alert('Ocorreu um erro:', error);
    }) 
})

