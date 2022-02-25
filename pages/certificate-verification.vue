<template>
  <section class="signup">
    <div class="mask d-flex align-items-center">
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px">
              <div class="card-body p-5">
                <div class="logo">
                  <img src="/images/login.png" alt="" />
                </div>
                <h4 class="text-uppercase text-center my-4">
                  CERTIFICATE VERIFICATION
                </h4>
                <form @submit.prevent="ceatificate_varification">
                  <div class="form-outline mb-2">
                    <label class="form-label mb-2" for="form3Example1cg"
                      >Roll</label
                    >
                    <input
                      type="text"
                      id="role"
                      class="form-control"
                      name="role"
                      v-model="roll"
                      placeholder="Enter roll. Ex:20"
                      required
                    />

                    <h6 class="text-danger">
                      {{ error.roll && error.roll[0] }}
                    </h6>
                  </div>

                  <div class="form-outline mb-2">
                    <label class="form-label mb-2" for="form3Example3cg"
                      >Session</label
                    >
                    <input
                      type="text"
                      id="form3Example3cg"
                      class="form-control"
                      name="session"
                      v-model="session"
                      placeholder="Enter session. Ex:2020-2021"
                      required
                    />
                    <h6 class="text-danger">
                      {{ error.session && error.session[0] }}
                    </h6>
                  </div>
                  <div class="form-outline mb-2">
                    <label class="form-label mb-2" for="form3Example4cg"
                      >Reg code</label
                    >
                    <input
                      type="text"
                      id="form3Example4cg"
                      class="form-control"
                      name="reg_code"
                      v-model="reg_code"
                      placeholder="Enter reg code. Ex:102025"
                      required
                    />
                    <h6 class="text-danger">
                      {{ error.reg_code && error.reg_code[0] }}
                    </h6>
                  </div>
                  <div class="form-outline mb-2">
                    <label class="form-label mb-2" for="form3Example4cdg"
                      >Passing Year</label
                    >
                    <input
                      type="text"
                      id="form3Example4cdg"
                      class="form-control"
                      name="passing_year"
                      v-model="passing_year"
                      placeholder="Enter passing year. Ex:2021"
                      required
                    />
                    <h6 class="text-danger">
                      {{ error.passing_year && error.passing_year[0] }}
                    </h6>
                  </div>

                  <div class="d-flex justify-content-center">
                    <button
                      type="submit"
                      class="btn signup_btn btn-block btn-lg text-body"
                    >
                      Search
                    </button>
                  </div>
                  <p class="text-center text-muted mt-5 mb-0">
                    Have already an account?
                    <NuxtLink to="/login">
                      <span class="text-primary">Login Here</span>
                    </NuxtLink>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      error: {},
      roll: "",
      session: "",
      reg_code: "",
      passing_year: "",
    };
  },
  methods: {
    async ceatificate_varification() {
      try {
        let result = await axios.post(
          "https://api.diu.ac/transcript_verification",
          {
            roll: this.roll,
            session: this.session,
            reg_code: this.reg_code,
            passing_year: this.passing_year,
          }
        );
        this.$notify({           
            title: "Success",
            text: "Varified Successfull",
          });
        console.log(result);
        localStorage.setItem("Alumni info", JSON.stringify(result.data));
        console.log(this.data);
         
        setTimeout(() => {
          this.$router.push("/studentsignup");
        }, 2000);
      } catch (err) {
        if (err.response.status === 422) {
          this.error = err.response.data;
          this.$notify({           
            title: "Error",
            text: "Reg Code Not Varified",
          });         
        } else if (err.response.status === 404) {
          this.$toaster.error("Somethig wrong?.", { timeout: 3000 });
          this.error = err.response.data;
        } else {
          this.error = err.response.data;
        }
      }
    },
  },
};
</script>
