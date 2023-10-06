document.getElementById('signin').style.display = 'none'; // Initially hide the signup section

function display(sectionId) {
    if (sectionId === 'signin') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('signin').style.display = 'block';
    } else if (sectionId === 'login') {
        document.getElementById('login').style.display = 'block';
        document.getElementById('signin').style.display = 'none';
    }
}