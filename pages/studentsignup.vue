<template>
    <section class="signup">
        <div class="mask d-flex align-items-center">
            <div class="container">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-10 col-lg-10 col-xl-10">
                        <div class="card" style="border-radius: 15px">
                            <div class="card-body p-5">
                                <div class="logo">
                                    <img src="/images/login.png" alt=""/>
                                </div>
                                <h4 class="text-uppercase text-center my-4">
                                    Create an account
                                </h4>
                                <form>
                                    <!-- <h4 class="pb-3 text-info">Student Information</h4> -->
                                    <div class="row">
                                        <div class="col-sm-12 col-md-6 col-lg-6">
                                            <div class="form-outline mb-2">
                                                <label class="form-label mb-2" for="form3Example1cg">Name</label >
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    class="form-control" 
                                                    v-model="name" readonly/>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6 col-lg-6">
                                            <div class="form-outline mb-2">
                                                <label class="form-label mb-2" for="form3Example1cg">Depertment</label >
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    class="form-control" 
                                                    v-model="depertment" readonly/>
                                            </div>
                                        </div>
                                         <div class="col-sm-12 col-md-6 col-lg-4">
                                            <div class="form-outline mb-2">
                                                <label class="form-label mb-2" for="form3Example1cg">Batch</label >
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    class="form-control" 
                                                    v-model="batch" readonly/>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6 col-lg-4">
                                            <div class="form-outline mb-2">
                                                <label class="form-label mb-2" for="form3Example1cg">Roll</label >
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    class="form-control" 
                                                    v-model="roll" readonly/>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6 col-lg-4">
                                            <div class="form-outline mb-2">
                                                <label class="form-label mb-2" for="form3Example1cg">Shift</label >
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    class="form-control" 
                                                    v-model="shift" readonly/>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6 col-lg-6">
                                            <div class="form-outline mb-2">
                                                <label class="form-label mb-2" for="form3Example1cg">Reg_code</label >
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    class="form-control" 
                                                    v-model="reg_code" readonly/>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6 col-lg-6">
                                            <div class="form-outline mb-2">
                                                <label class="form-label mb-2" for="form3Example1cg">Session</label >
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    class="form-control" 
                                                    v-model="session" readonly/>
                                            </div>
                                        </div>
                                        
                                       
                                    </div>
                                    <hr/>
                                    <h4 class="pb-3 text-info">Account Information</h4>
                                    <div class="row">
                                        <div class="col-sm-12 col-md-6 col-lg-4">
                                            <div class="form-outline mb-2">
                                                <label class="form-label mb-2" for="form3Example1cg">Username</label >
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    class="form-control"
                                                    placeholder="Enter username"
                                                    />
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6 col-lg-4">
                                            <div class="form-outline mb-2">
                                                <label class="form-label mb-2" for="form3Example1cg">Password</label >
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    class="form-control"
                                                    placeholder="Enter password"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6 col-lg-4">
                                            <div class="form-outline mb-2">
                                                <label class="form-label mb-2" for="form3Example1cg">Confirm Password
                                                </label>
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    class="form-control"
                                                    placeholder="Enter confirm password"/>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <h4 class="pb-3 text-info">Contact Information</h4>
                                    <div class="mobile-form-wrapper pb-3">
                                        <label class="form-label mb-2" for="form3Example1cg">Mobile
                                        </label>
                                        <div class="input-group control-group input-wrapper">
                                            <input
                                                type="text"
                                                name="name[]"
                                                class="form-control"
                                                placeholder="Enter mobile number"/>
                                            <div class="input-group-btn">
                                                <button class="btn btn-info mobile-add-button" type="button">
                                                    <i class="fa fa-plus"></i>
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="email-form-wrapper">
                                        <label class="form-label mb-2" for="form3Example1cg">Email
                                        </label>
                                        <div class="input-group control-group input-wrapper">
                                            <input
                                                type="text"
                                                name="name[]"
                                                class="form-control"
                                                placeholder="Enter your email"/>
                                            <div class="input-group-btn">
                                                <button class="btn btn-info email-add-button" type="button">
                                                    <i class="fa fa-plus"></i>
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-outline mb-2">
                                        <label class="form-label mb-2 mt-3" for="form3Example1cg">Parmanent Address</label >
                                        <textarea
                                            type="text"
                                            id="form3Example1cg"
                                            class="form-control"
                                            placeholder="Enter address"/>
                                    </div>
                                    <hr/>
                                    <h4 class="pb-3 text-info">Job Details</h4>
                                    <div class="job-form-wrapper">
                                        <div class="row">
                                            <div class="col-sm-12 col-md-6 col-lg-6">
                                                <div class="form-outline mb-2">
                                                    <label class="form-label mb-2" for="form3Example1cg">Company Name</label >
                                                    <input
                                                        type="text"
                                                        id="form3Example1cg"
                                                        class="form-control"
                                                        placeholder="Enter name"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-6 col-lg-6">
                                                <div class="form-outline mb-2">
                                                    <label class="form-label mb-2" for="form3Example1cg">Company Address</label >
                                                    <input
                                                        type="text"
                                                        id="form3Example1cg"
                                                        class="form-control"
                                                        placeholder="Enter address"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-6 col-lg-6">
                                                <div class="form-outline mb-2">
                                                    <label class="form-label mb-2" for="form3Example1cg">Starting Date</label >
                                                    <input
                                                        type="text"
                                                        id="form3Example1cg"
                                                        class="form-control"
                                                        placeholder="Enter date"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-6 col-lg-6">
                                                <div class="form-outline mb-2">
                                                    <label class="form-label mb-2" for="form3Example1cg">End Date
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="form3Example1cg"
                                                        class="form-control"
                                                        placeholder="Enter date"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-6 col-lg-6">
                                                <div class="form-outline mb-2">
                                                    <label class="form-label mb-2" for="form3Example1cg">Depertment</label >
                                                    <input
                                                        type="text"
                                                        id="form3Example1cg"
                                                        class="form-control"
                                                        placeholder="Enter depertment"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-6 col-lg-6">
                                                <div class="form-outline mb-2">
                                                    <label class="form-label mb-2" for="form3Example1cg">Responsibility</label >
                                                    <input
                                                        type="text"
                                                        id="form3Example1cg"
                                                        class="form-control"
                                                        placeholder="Enter your responsibility"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-12 col-lg-12 d-flex">
                                                <button class="btn btn-info job-add-button ml-auto" type="button">
                                                    <i class="fa fa-plus"></i>
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <h4 class="pb-3 text-info">Social Links</h4>
                                    <div class="row">
                                        <div class="col-sm-12 col-md-6 col-lg-6">
                                            <div class="form-outline mb-2">
                                                <label class="form-label mb-2" for="form3Example1cg">Facebook</label >
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    class="form-control"
                                                    placeholder="Enter link"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6 col-lg-6">
                                            <div class="form-outline mb-2">
                                                <label class="form-label mb-2" for="form3Example1cg">LinkedIn</label >
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    class="form-control"
                                                    placeholder="Enter link"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6 col-lg-6">
                                            <div class="form-outline mb-2">
                                                <label class="form-label mb-2" for="form3Example1cg">Instagram
                                                </label>
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    class="form-control"
                                                    placeholder="Enter link"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6 col-lg-6">
                                            <div class="form-outline mb-2">
                                                <label class="form-label mb-2" for="form3Example1cg">Twitter
                                                </label>
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    class="form-control"
                                                    placeholder="Enter link"/>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div class="form-outline mb-4">
                                        <label class="form-label mb-2" for="form3Example1cg">Picture</label >
                                        <input type="file" id="form3Example1cg" class="form-control"/>
                                    </div>
                                    <div class="form-outline mb-4">
                                        <label class="form-label mb-2" for="form3Example1cg">Short Interview Video
                                        </label>
                                        <input type="file" id="form3Example1cg" class="form-control"/>
                                    </div>
                                    <div class="d-flex mb-4">
                                        <h6 class="mr-3">
                                            Do you like to help Diu alumni

                                            <input type="radio" id="" class="ml-5 mr-2 pt-5"/>Yes
                                            <input type="radio" id="" class="ml-3 mr-2 pt-5"/>No
                                        </h6>
                                    </div>
                                    <div class="d-flex">
                                        <h6 class="mr-3">
                                            Looking for jobs

                                            <input type="radio" id="" class="ml-5 mr-2 pt-5"/>Yes
                                            <input type="radio" id="" class="ml-3 mr-2 pt-5"/>No
                                        </h6>
                                    </div>

                                    <div class="d-flex justify-content-center">
                                        <button type="button" class="btn signup_btn btn-block btn-lg text-body">
                                            Register
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
    export default {
        data() {
            return {
                name: '',
                batch: '',
                depertment: '',
                reg_code: '',
                session: '',
                shift: '',
                passing_year: '',
                roll: ''

            }

        },
        mounted() {
            let alumni = JSON.parse(localStorage.getItem("Alumni info"));
            this.name = alumni.data.name;
            this.batch = alumni.data.batch;
            this.depertment = alumni.data.program;
            this.reg_code = alumni.data.regcode;
            this.session = alumni.data.session;
            this.shift = alumni.data.shift
            this.passing_year = alumni.data.passing_year
            this.roll = alumni.data.roll

        }
    }
</script>