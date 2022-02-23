<template>
    <section class="signup">
        <div class="mask d-flex align-items-center">
            <div class="container">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div class="card" style="border-radius: 15px">
                            <div class="card-body p-5">
                                <div class="logo">
                                    <img src="/images/login.png" alt=""/>
                                </div>
                                <h2 class="text-uppercase text-center my-4">
                                    CERTIFICATE VERIFICATION
                                </h2>
                                <form>
                                    <div class="form-outline mb-2">
                                        <label class="form-label mb-2" for="form3Example1cg">Roll</label >
                                        <input type="text" id="role" class="form-control" name="role" required v-model="role"/>
                                        <span class="role text-danger mt-5"></span>
                                    </div>

                                    <div class="form-outline mb-2">
                                        <label class="form-label mb-2" for="form3Example3cg">Session</label >
                                        <input type="text" id="form3Example3cg" class="form-control" name="session" v-model="session"/>
                                         <span class="session text-danger mt-5"></span>
                                    </div>
                                    <div class="form-outline mb-2">
                                        <label class="form-label mb-2" for="form3Example4cg">Reg code</label >
                                        <input type="text" id="form3Example4cg" class="form-control" name="reg_code" v-model="reg_code"/>
                                    </div>
                                    <div class="form-outline mb-2">
                                        <label class="form-label mb-2" for="form3Example4cdg">Passing Year</label >
                                        <input type="text" id="form3Example4cdg" class="form-control" name="passing_year" v-model="passing_year"/>
                                    </div>

                                    <div class="d-flex justify-content-center">
                                        <nuxt-link to="/studentsignup"                                
                                            type="submit"
                                            class="btn signup_btn btn-block btn-lg text-body">
                                            Search
                                        </nuxt-link>
                                    </div>
                                    <p class="text-center text-muted mt-5 mb-0">
                                        Have already an account?
                                        <NuxtLink to="/login">
                                            <span class="text-primary">Login Here</span>
                                        </NuxtLink >
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
// <script>
// import axios from "axios";
// export default {
   
//    data(){
//        return{
//            role:'',
//            session:'',
//            reg_code:'',
//            passing_year:''
//        }
//    },
//    methods: {
//        async ceatificate_varification(){
//            let result = await axios.post('https://api.diu.ac/transcript_verification');
           
//            if(result.data[0].role != this.role){
//                 $('.roll').html('Roll not match');
//            }
//            else if(result.data[0].session != this.session){
//                 $('.session').html('session not match');
//            }
                
//           else{
//                 console.log('ok');

           

//            }
             
//            }
//        }
//     //    async ceatificate_varification(){
//     //        let result = await axios.get(`http://localhost:3000/students?role=${this.role}&session=${this.session}&reg_code=${this.reg_code}&passing_year=${this.passing_year}`)
//     //        console.log(result);
//     //    }
// //    },
// }
// </script>