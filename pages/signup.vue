<template>
  <div class="form-bg">
    <div class="container">
      <div class="row">
        <div class="offset-md-2 col-md-8 offset-sm-1 col-sm-12">
          <div class="form-container d-flux justify-content-center">
            <h3 class="signup-title">Create Account</h3>
            <form class="form-horizontal">
              <div class="form-icon">
                <i class="fa fa-user"></i>
              </div>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <span class="input-icon">
                      <i class="fa fa-user"></i>
                    </span>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <span class="input-icon">
                      <i class="fa fa-user"></i>
                    </span>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <span class="input-icon">
                      <i class="fa fa-user"></i>
                    </span>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Depertment"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <span class="input-icon">
                      <i class="fa fa-user"></i>
                    </span>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Batch"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <span class="input-icon">
                      <i class="fa fa-user"></i>
                    </span>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Student Id"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <span class="input-icon">
                      <i class="fa fa-user"></i>
                    </span>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Image"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <span class="input-icon">
                      <i class="fa fa-user"></i>
                    </span>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <span class="input-icon">
                      <i class="fa fa-user"></i>
                    </span>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <span class="input-icon">
                      <i class="fa fa-user"></i>
                    </span>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <span class="input-icon">
                      <i class="fa fa-user"></i>
                    </span>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <span class="input-icon">
                      <i class="fa fa-user"></i>
                    </span>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Job Designation"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <span class="input-icon">
                      <i class="fa fa-user"></i>
                    </span>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Current Company"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <span class="input-icon">
                      <i class="fa fa-user"></i>
                    </span>
                    <input
                      type="email"
                      class="form-control"
                      placeholder=" Previous Company"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <span class="input-icon">
                      <i class="fa fa-user"></i>
                    </span>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Previous Company"
                    />
                  </div>
                </div>
              </div>

              <nuxt-link to="/#" class="btn signup">Sign Up</nuxt-link>
              <h6 class="pt-2">
                Already have an acount
                <nuxt-link to="/login" class="text-primary">login</nuxt-link>
              </h6>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.form-bg{
    margin-top:80px;
    margin-bottom: 200px;
}
.form-container {
  background: linear-gradient(
    150deg,
    #135753 33%,
    #2d9da7 34%,
    #2d9da7 66%,
    #0b3253 67%
  );
  font-family: "Raleway", sans-serif;
  text-align: center;
  padding: 30px 20px 50px;
}
.form-container .signup-title {
  color: #fff;
  font-size: 23px;
  text-transform: capitalize;
  letter-spacing: 1px;
  margin: 0 0 60px;
}
.form-container .form-horizontal {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}
.form-horizontal .form-icon {
  color: #135753 ;
  background-color: #f6f6f6;
  font-size: 55px;
  line-height: 74px;
  height: 90px;
  width: 90px;
  margin: -65px auto 10px;
  border-radius: 50%;
  border: 7px solid #135753;
}
.form-horizontal .form-group {
  margin: 0 0 10px;
  position: relative;
}
.form-horizontal .form-group:nth-child(3) {
  margin-bottom: 30px;
}
.form-horizontal .form-group .input-icon {
  color: #e7e7e7;
  font-size: 23px;
  position: absolute;
  left: 0;
  top: 10px;
}
.form-horizontal .form-control {
  color: rgb(41, 34, 34);
  font-size: 16px;
  font-weight: 600;
  height: 50px;
  padding: 10px 10px 10px 40px;
  margin: 0 0 5px;
  border: none;
  border-bottom: 2px solid #e7e7e7;
  border-radius: 0;
  box-shadow: none;
}
.form-horizontal .form-control:focus {
  box-shadow: none;
  border-bottom-color: #2d9da7;
}
.form-horizontal .form-control::placeholder {
  color: rgb(37, 36, 36);
  font-size: 16px;
  font-weight: 600;
}

.form-horizontal .signup {
  color: #fff;
  background-color: #2d9da7;
  font-size: 17px;
  text-transform: capitalize;
  letter-spacing: 2px;
  width: 100%;
  padding: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease 0s;
  margin-top: 10px;
}
.form-horizontal .signup:focus,
.form-horizontal .signup:hover {
  font-weight: 600;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3) inset;
}
</style>
