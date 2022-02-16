<template>
  <section class="sticky-top bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-6">
          <div class="top-logo">
            <img src="/images/diulogo.png" alt="logo" />
          </div>
          <!-- <h4 class="alumni">Alumni Asociation</h4>                   -->
        </div>
        <div class="col-lg-6 col-md-6 col-6">
          <div class="d-flex justify-content-end top-btn">
            <div class="dropdown">
              <a type="button" class="dropdown-toggle" data-toggle="dropdown">
                <h6 class="text-info top-text">
                  Sing in
                  <strong class="text-dark">or</strong>
                  Create Account
                </h6>
              </a>
              <div class="dropdown-menu signup_menu dropdown-menu-right">
                <div class="student_signup">
                  <div class="account_text p-3">
                    <h6 class="mt-2 font-weight-bold">
                      <span class="fa fa-users mr-2"></span> Students
                    </h6>
                    <p>Sing in or Create your alumni account</p>
                    <div class="mt-4">
                      <NuxtLink class="btn-account signin-text" to="/login"
                        >sign in</NuxtLink
                      >
                      <NuxtLink class="btn-account acount-text" to="/studentsignup"
                        >Create Account</NuxtLink
                      >
                    </div>
                  </div>
                </div>
                <hr />
                <div class="employee_signup p-3">
                  <div class="account_text">
                    <h6 class="mt-2 font-weight-bold">
                      <span class="fa fa-user mr-2"></span> Employee
                    </h6>
                    <p>Sing in or Create your alumni account</p>
                    <div class="mt-4">
                      <NuxtLink class="btn-account signin-text" to="/login"
                        >sign in</NuxtLink
                      >
                      <NuxtLink
                        class="btn-account acount-text"
                        to="/employeesignup"
                        >Create Account</NuxtLink
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav class="navbar navbar-expand-lg navbar-dark bg-info">
      <div class="container">
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav text-center">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/">HOME</NuxtLink>
              <!-- <a class="nav-link" href="/">HOME</a> -->
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/about">ABOUT US</NuxtLink>
              <!-- <a class="nav-link" href="/about">ABOUT US</a> -->
            </li>
            <!-- <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#"
                            id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false"> PROGRAM & EVENT </a> <div class="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"> <a class="dropdown-item"
                            href="#">SPONSORSHIP</a> <a class="dropdown-item" href="#">LATEST MEMBER</a> <a
                            class="dropdown-item" href="#">ALUMNI PROFILE</a> <a class="dropdown-item"
                            href="#">ALUMNI LOGIN</a> <a class="dropdown-item" href="#">ALUMNI REGISTER</a>
                            </div> </li> -->
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/blog">BLOG</NuxtLink>
              <!-- <a class="nav-link" href="/blog">BLOG</a> -->
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/event">EVENTS</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/login">LOGIN</NuxtLink>
            </li>
            <!-- <li class="nav-item">
                                <NuxtLink class="nav-link" to="/register">SIGN UP</NuxtLink>
                            </li> -->
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/gallery">GALLERY</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/members">alumni</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/contact">contact</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>
<style>
.navbar{
  background-color: #00779c !important;
   /* background-color: rgb(4, 54, 61) !important; */
}
.alumni {
  margin-top: -50px;
  font-size: 30px;
  margin-left: 150px;
  color: #000;
}
.top-logo {
  width: 150px;
  height: 80px;
}
.top-logo img {
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-bottom: 10px;
}
.top-btn {
  margin-top: 28px;
}
.dropdown-toggle::after {
  display: none;
  cursor: pointer;
}
.signup_menu {
  width: 320px;
}
.student_signup {
  margin: 10px;
  height: 140px;
  background-color: #dcdeed;
  border-radius: 5px;
}
.employee_signup {
  margin: 10px;
  height: 140px;
  background-color: #dcdeed;
  border-radius: 5px;
}
.account_text p {
  color: gray;
  line-height: 18px;
  margin-top: 8px;
}
.btn-account {
  padding: 7px;
  border: 1px solid #00adff;
  margin-top: 13px;
}
.btn-account:hover {
  color: white;
  background: #00adff;
}
.signin-text {
  color: #00adff;
}
.acount-text {
  color: rgb(95, 78, 78);
}
.navbar-nav {
  margin-left: auto;
  margin-right: auto;
}
.nav-link {
  font-size: 18px;
  color: #fff !important;
  text-transform: uppercase;
  margin-left: 30px;
}
.dropdown-item {
  color: #343a40;
  line-height: 20px;
  font-size: 14px;
  padding: 15px 40px;
}
@media only screen and (max-width: 750px) {
  .top-text {
    padding-bottom: 20px !important;
    text-align: center;
  }
}
</style>
