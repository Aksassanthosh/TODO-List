document.getElementById('loginform').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '12345') {
      redirectToMainPage(() => {
        window.location.href = 'main.html';
      });
    } else {
      alert('Invalid credentials');
    }
  });

  function redirectToMainPage(callback) {
   callback();
  }

