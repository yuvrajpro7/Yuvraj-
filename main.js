function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    } else {
        menu.classList.add("show");
    }
    function toggleMenu() {
        var menu = document.getElementById('menu');
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    }
}
function showContent(id) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function hideContent(id) {
    document.getElementById(id).classList.remove('active');
}
function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function showContent(id) {
    var content = document.getElementById(id);
    content.style.display = 'block';
}

function hideContent(id) {
    var content = document.getElementById(id);
    content.style.display = 'none';
}
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

function showContent(id) {
    document.getElementById(id).style.display = 'block';
}

function hideContent(id) {
    document.getElementById(id).style.display = 'none';
}
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function showContent(id) {
    document.getElementById(id).classList.add('active');
}

function hideContent(id) {
    document.getElementById(id).classList.remove('active');
}
function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
}