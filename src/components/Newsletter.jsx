import React from 'react'

function Newsletter() {
  return (
    <div className="newsletter">
  <div className="container">
    <div className="w3agile_newsletter_left">
      <h3>sign up for our newsletter</h3>
    </div>
    <div className="w3agile_newsletter_right">
      <form action="#" method="post">
        <input type="email" name="Email" defaultValue="Email" required />
        <input type="submit" defaultValue="subscribe now" />
      </form>
    </div>
    <div className="clearfix"> </div>
  </div>
</div>

  )
}

export default Newsletter