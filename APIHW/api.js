var rootDiv = document.getElementById('root');
var container = document.createElement('div');

var logo = document.createElement('img');
logo.src = 'quote.jpg';
logo.style.width = '80rem';
logo.style.height = '40rem';
logo.style.display = 'block';
logo.style.marginLeft = 'auto';
logo.style.marginRight = 'auto';

rootDiv.appendChild(container);
container.appendChild(logo);

var request = new XMLHttpRequest();
request.open('GET','https://jsonplaceholder.typicode.com/users',true);

request.onload = function(){
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
    data.forEach(user => {
        var card = document.createElement('div');
        var heading1 = document.createElement('h1');
        heading1.textContent = user.name;
        heading1.style.fontFamily = 'Arial';
        heading1.style.fontSize = '3.5rem';
        heading1.style.textAlign = 'center';
        heading1.classList.add('w3-light-blue','w3-margin','w3-text-white','w3-padding');

        var username = document.createElement('div');
        username.textContent = user.username;
        username.classList.add('w3-margin','w3-text-purple');
        
        var email = document.createElement('div');
        email.textContent = user.email;
        email.classList.add('w3-margin','w3-text-pink');
        email.style.textAlign = 'right';

        container.appendChild(card);
        card.appendChild(heading1);
        card.appendChild(username);
        card.appendChild(email);
    });
}
    else {
        alert('ERROR! ERROR!');
    }
}

request.send();