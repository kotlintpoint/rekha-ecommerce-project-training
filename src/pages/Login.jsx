import React from 'react'

function Login() {
  return (
    <div className="w3_login">
  <h3>Sign In &amp; Sign Up</h3>
  <div className="w3_login_module">
    <div className="module form-module">
      <div className="toggle"><i className="fa fa-times fa-pencil" />
        <div className="tooltip">Click Me</div>
      </div>
      <div className="form">
        <h2>Login to your account</h2>
        <form action="#" method="post">
          <input type="text" name="Username" placeholder="Username" required=" " />
          <input type="password" name="Password" placeholder="Password" required=" " />
          <input type="submit" defaultValue="Login" />
        </form>
      </div>
      <div className="form">
        <h2>Create an account</h2>
        <form action="#" method="post">
          <input type="text" name="Username" placeholder="Username" required=" " />
          <input type="password" name="Password" placeholder="Password" required=" " />
          <input type="email" name="Email" placeholder="Email Address" required=" " />
          <input type="text" name="Phone" placeholder="Phone Number" required=" " />
          <input type="submit" defaultValue="Register" />
        </form>
      </div>
      <div className="cta"><a href="#">Forgot your password?</a></div>
    </div>
  </div>
</div>

  )
}

export default Login