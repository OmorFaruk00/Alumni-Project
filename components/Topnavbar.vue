<template>
    <div>
        <div class="top_menu container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="top-logo">
                        <img src="/images/toplogo.png" alt="logo"></div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="d-flex justify-content-end top-btn">

                            <div class="dropdown">
                                <a type="button" class="dropdown-toggle" data-toggle="dropdown">
                                    <h6 class="text-info">Sing in
                                        <strong class="text-dark">or</strong>
                                        Create Account</h6>
                                </a>
                                <div class="dropdown-menu signup_menu dropdown-menu-right">
                                    <div class="student_signup">
                                        <div class="row">
                                            <div class="col-lg-2 col-md-12">
                                                <div class="icon group-icon"></div>
                                            </div>
                                            <div class="col-lg-10 col-md-12 account_text">
                                                <h6 class="mt-2 font-weight-bold">Students</h6>
                                                <p>Sing in or Create your alumni account</p>
                                                <button class="btn-account signin-text">Sign in</button>
                                                <button class="btn-account acount-text">Create Account</button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr>
                                        <div class="employee_signup">
                                            <div class="row">
                                                <div class="col-lg-2"></div>
                                                <div class="col-lg-10 account_text">
                                                    <h6 class="mt-2 font-weight-bold">Employee</h6>
                                                    <p>Sing in or Create your alumni account</p>
                                                    <button class="btn-account signin-text">Sign in</button>
                                                    <button class="btn-account acount-text">Create Account</button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>                   
                </div>

                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
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
                                <li class="nav-item">
                                    <NuxtLink class="nav-link" to="/register">SIGN UP</NuxtLink>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink class="nav-link" to="/gallery">GALLERY</NuxtLink>
                                </li>
                                 <li class="nav-item">
                                    <NuxtLink class="nav-link" to="/members">MEMBER</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </template>
        <style></style>