<template>
    <section class="sticky-top bg-light">
        <div class="container">
            <div class="row ">
                <div class="col-lg-6 col-md-6 col-sm-12 top-menu">
                    <div class="top-logo">
                        <img src="/images/diulogo.png" alt="logo"/>
                    </div>
                    <!-- <h4 class="alumni">Alumni Asociation</h4> -->
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 top-menu">
                    <div class="d-flex justify-content-end top-btn">
                        <div class="dropdown">
                            <a type="button" class="dropdown-toggle" data-toggle="dropdown">
                                <h6 class="text-info top-text">
                                    Sing in
                                    <strong class="text-dark mx-1">or</strong>
                                    Create Account
                                </h6>
                            </a>
                            <div class="dropdown-menu signup_menu dropdown-menu-right">
                                <div class="student_signup">
                                    <div class="account_text p-3">
                                        <h6 class="mt-2 font-weight-bold">
                                            <span class="fa fa-users mr-2"></span>
                                            Students
                                        </h6>
                                        <p>Sing in or Create your alumni account</p>
                                        <div class="mt-3 d-flex signup_small">
                                            <NuxtLink class="btn-account signin-text" to="/login">sign in</NuxtLink >
                                            <NuxtLink class="btn-account acount-text" to="/certificate-verification">Create Account</NuxtLink >
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div class="employee_signup p-3">
                                    <div class="account_text">
                                        <h6 class="mt-2 font-weight-bold">
                                            <span class="fa fa-user mr-2"></span>
                                            Employee
                                        </h6>
                                        <p>Sing in or Create your alumni account</p>
                                        <div class="mt-3 d-flex signup_small">
                                            <NuxtLink class="btn-account signin-text" to="/login">sign in</NuxtLink >
                                            <NuxtLink class="btn-account acount-text" to="/employeesignup">Create Account</NuxtLink >
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
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav text-center">
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/">HOME</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/about">ABOUT US</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/contact">contact</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/blog">BLOG</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/event">EVENTS</NuxtLink>
                        </li>

                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/gallery">GALLERY</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/members">alumni</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/login">LOGIN</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
</template>
<script>
export default {
   name:"Topnavbar",
}
</script>