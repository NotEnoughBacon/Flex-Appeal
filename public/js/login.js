document.getElementById('signupBtn').addEventListener('click', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    const userData = {
        name,
        email,
        password
    };

    fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }).then(response => {

        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Could not create user');
        }
    }).then(data => {

        console.log('user created successfully', data);

    }).catch(error => {

        console.error('user not created', error);
    });
});