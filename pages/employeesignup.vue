<template>
    <section class="signup">
        <div class="mask d-flex align-items-center">
            <div class="container">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div class="card" style="border-radius: 15px">
                            <div class="card-body p-5">
                                <div class="logo">
                                    <img
                                        src="https://www.kindpng.com/picc/m/22-223910_circle-user-png-icon-transparent-png.png"
                                        alt=""/>
                                </div>
                                <h2 class="text-uppercase text-center my-4">
                                    Create an account
                                </h2>
                                <form @submit.prevent="employee">
                                    <div class="form-outline mb-2">
                                        <label class="form-label mb-2" for="form3Example1cg">Name</label >
                                        <input type="text" id="form3Example1cg" class="form-control form-control" v-model="student.name"/>
                                    </div>

                                    <div class="form-outline mb-2">
                                        <label class="form-label mb-2" for="form3Example3cg" >Department</label >
                                        <input type="text" id="form3Example3cg" class="form-control form-control" v-model="student.department"/>
                                    </div>
                                    <div class="form-outline mb-2">
                                        <label class="form-label mb-2" for="form3Example4cg">Batch</label >
                                        <input type="text" id="form3Example4cg" class="form-control form-control" v-model="student.batch"/>
                                    </div>
                                    <div class="form-outline mb-2">
                                        <label class="form-label mb-2" for="form3Example4cdg">Student Id</label >
                                        <input type="text" id="form3Example4cdg" class="form-control form-control" v-model="student.student_id"/>
                                    </div>

                                    <div class="d-flex justify-content-center">
                                        <button type="submit" class="btn signup_btn btn-block btn-lg text-body">
                                            Register
                                        </button>
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
<script>
import axios from 'axios';
export default {
    data(){
        return{
            data:[],
            student:{
                name:'',
                department:'',
                batch:"",
                student_id:''
            }
            
        }
       
    },
    methods:{
       async employee_signup(){
            // alert('ok');
            await this.axios.post('http://127.0.0.1:8000/api/data',this.student)
            .then((res) => {
                this.onSuccess(res.data.message);
            })
            .catch((error)=>{
                this.onFailure(error.response.data.message);
            })
            }            
        },
        onSuccess(){
            this.success = true;

        },
        onFailure(){
            this.error = true;
        }
    
    
}
</script>