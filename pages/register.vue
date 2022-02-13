<template>
    <section class="vh-100 bg-image">
  <div class="mask d-flex align-items-center h-100">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">
                <div class="logo"> <img src="https://www.kindpng.com/picc/m/22-223910_circle-user-png-icon-transparent-png.png" alt=""> </div>
              <h2 class="text-uppercase text-center my-4">Create an account</h2>
              <form>
                <div class="form-outline mb-2">
                     <label class="form-label mb-2" for="form3Example1cg">Your Name</label>
                  <input type="text" id="form3Example1cg" class="form-control form-control" />                 
                </div>

                <div class="form-outline mb-2">
                  <label class="form-label  mb-2" for="form3Example3cg">Your Email</label>
                  <input type="email" id="form3Example3cg" class="form-control form-control" />                  
                </div>
                <div class="form-outline mb-2">
                  <label class="form-label mb-2" for="form3Example4cg">Password</label>
                  <input type="password" id="form3Example4cg" class="form-control form-control" />                  
                </div>
                <div class="form-outline mb-2">
                <label class="form-label mb-2" for="form3Example4cdg">Repeat your password</label>
                  <input type="password" id="form3Example4cdg" class="form-control form-control" />                  
                </div>   

                <div class="d-flex justify-content-center">
                  <button type="button" class="btn signup_btn btn-block btn-lg text-body">Register</button>
                </div>
                <p class="text-center text-muted mt-5 mb-0">Have already an account? <NuxtLink to="/">Login Here</NuxtLink></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<style>
/* body {
     background: #ecf0f3
 } */
.logo {
     width: 80px;
     margin: auto
 }
 .logo img {
     width: 100%;
     height: 80px;
     object-fit: cover;
     border-radius: 50%;
     box-shadow: 0px 0px 3px #5f5f5f, 0px 0px 0px 5px #ecf0f3, 8px 8px 15px #a7aaa7, -8px -8px 15px #fff
 } 
.card-body{
     background-color: #ecf0f3;
     border-radius: 15px;
     box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #fff
}
.signup_btn {
    margin-top: 20px;
    box-shadow: none;
     width: 100%;
     height: 45px;
     background-color: #03A9F4;
     color: #fff;
     border-radius: 25px;
     box-shadow: 3px 3px 3px #b1b1b1, -3px -3px 3px #fff;
     letter-spacing: 1.3px
}
.signup_btn:hover{
    background-color: #039BE5;
}
</style>