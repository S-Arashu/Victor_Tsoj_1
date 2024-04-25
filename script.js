function displayTime() {
    time = new Date();
    document.getElementById('time').innerHTML = time;
}

setInterval(displayTime, 1000);

function disappear () {
    console.log(document.querySelector('div.nameAuthor'));
    document.querySelector('div.nameAuthor').classList.toggle('authorVisible')
    
}

setTimeout(disappear, 15000);