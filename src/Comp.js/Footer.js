import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Chetan.</span>
        <div className="links">
          <a href="https://www.facebook.com/recover/initiate/?ars=facebook_login">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://in.linkedin.com/?trk=guest_homepage-basic_nav-header-logo">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com/">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/accounts/emailsignup/">
          <i class="fab fa-instagram"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created By Chetan
        </p>
          
        {/* <h5 >Copyright @ 2022 Outdoor Adventure </h5> */}

      </div>
    </footer>
  );
}

export default Footer;