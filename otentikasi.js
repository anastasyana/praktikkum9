const submit_btn = document.getElementById('submit');

submit_btn.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'ahmad2017' && password === 'integrity') {
        window.location.href = 'home.html';
    } else {
        alert('Login Gagal: Periksa kembali username dan password Anda.');
    }
});