
var logOutButton = document.getElementById('logout');

logOutButton.addEventListener('click', function(){
    app.post('/logout', (req, res) => {
        //destroy session
        req.session.destroy(err => {
          if (err) {
            console.error('Logout error:', err);
            res.status(500).json({ message: 'Logout failed' });
          } else {
            res.json({ message: 'Logout successful' });
          }
        });
      });
})



