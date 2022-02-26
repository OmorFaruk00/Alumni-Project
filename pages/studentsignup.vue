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
                                                    v-model="name"
                                                    readonly="readonly"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6 col-lg-6">
                                            <div class="form-outline mb-2">
                                                <label class="form-label mb-2" for="form3Example1cg">Depertment</label >
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    class="form-control"
                                                    v-model="depertment"
                                                    readonly="readonly"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6 col-lg-4">
                                            <div class="form-outline mb-2">
                                                <label class="form-label mb-2" for="form3Example1cg">Batch</label >
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    class="form-control"
                                                    v-model="batch"
                                                    readonly="readonly"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6 col-lg-4">
                                            <div class="form-outline mb-2">
                                                <label class="form-label mb-2" for="form3Example1cg">Roll</label >
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    class="form-control"
                                                    v-model="roll"
                                                    readonly="readonly"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6 col-lg-4">
                                            <div class="form-outline mb-2">
                                                <label class="form-label mb-2" for="form3Example1cg">Shift</label >
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    class="form-control"
                                                    v-model="shift"
                                                    readonly="readonly"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6 col-lg-6">
                                            <div class="form-outline mb-2">
                                                <label class="form-label mb-2" for="form3Example1cg">Reg_code</label >
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    class="form-control"
                                                    v-model="reg_code"
                                                    readonly="readonly"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6 col-lg-6">
                                            <div class="form-outline mb-2">
                                                <label class="form-label mb-2" for="form3Example1cg">Session</label >
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    class="form-control"
                                                    v-model="session"
                                                    readonly="readonly"/>
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
                                                    placeholder="Enter username"/>
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
                                    <div class="mobiles">
                                        <div class="form-row" v-for="(mobile, index) in mobiles" :key="index">
                                            <div class="form-group col-12">
                                                <label class="form-label">Mobile Number</label>
                                                <input
                                                    v-model="mobiles[index]"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Enter number"/>
                                            </div>
                                            <div class="form-group col-12">
                                                <div class="d-flex float-right">
                                                    <button
                                                        class="btn btn-danger mr-3"
                                                        @click="remove_mobile(index)"
                                                        v-show="index || (!index && mobile.length > 20)">
                                                        <i class="fa fa-minus mr-2"></i>Remove
                                                    </button>
                                                    <button @click="add_mobile" type="button" class="btn btn-info">
                                                        <i class="fa fa-plus"></i>
                                                        Add
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="eamil">
                                        <div class="form-row" v-for="(email, index) in emails" :key="index">
                                            <div class="form-group col-12">
                                                <label class="form-label">Email</label>
                                                <input
                                                    v-model="emails[index]"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Enter email"/>
                                            </div>
                                            <div class="form-group col-12">
                                                <div class="d-flex float-right">
                                                    <button
                                                        class="btn btn-danger mr-3"
                                                        @click="remove_email(index)"
                                                        v-show="index || (!index && email.length > 25)">
                                                        <i class="fa fa-minus mr-2"></i>Remove
                                                    </button>
                                                    <button @click="add_email" type="button" class="btn btn-info">
                                                        <i class="fa fa-plus"></i>
                                                        Add
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-outline mb-2">
                                        <label class="form-label mb-2 mt-3" for="form3Example1cg">Present Address</label >
                                        <textarea
                                            type="text"
                                            id="form3Example1cg"
                                            class="form-control"
                                            placeholder="Enter address"/>
                                    </div>
                                    <hr/>
                                    <h4 class="pb-3 text-info">Job Details</h4>
                                    <div class="work-experiences">
                                        <div
                                            class="form-row"
                                            v-for="(experience, index) in workExperiences"
                                            :key="index">
                                            <div class="form-group col-md-6 col-lg-6 col-sm-12">
                                                <label class="form-label">Company Name</label>
                                                <input
                                                    v-model="experience.company_name"
                                                    :name="`workExperiences[${index}][company_name]`"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder=""/>
                                            </div>
                                            <div class="form-group col-md-6 col-lg-6 col-sm-12">
                                                <label class="form-label">Company Address</label>
                                                <input
                                                    v-model="experience.company_address"
                                                    :name="`workExperiences[${index}][company_address]`"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder=""/>
                                            </div>
                                            <div class="form-group col-md-6 col-lg-6 col-sm-12">
                                                <label class="form-label">Start Date</label>
                                                <input
                                                    v-model="experience.start_date"
                                                    :name="`workExperiences[${index}][start_date]`"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder=""/>
                                            </div>
                                            <div class="form-group col-md-6 col-lg-6 col-sm-12">
                                                <label class="form-label">End Date</label>
                                                <input
                                                    v-model="experience.end_date"
                                                    :name="`workExperiences[${index}][end_date]`"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder=""/>
                                            </div>
                                            <div class="form-group col-md-6 col-lg-6 col-sm-12">
                                                <label class="form-label">Depertment</label>
                                                <input
                                                    v-model="experience.depertment"
                                                    :name="`workExperiences[${index}][depertment`"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder=""/>
                                            </div>
                                            <div class="form-group col-md-6 col-lg-6 col-sm-12">
                                                <label class="form-label">Responsibility</label>
                                                <input
                                                    v-model="experience.responsibility"
                                                    :name="`workExperiences[${index}][responsibility]`"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder=""/>
                                            </div>
                                            <div class="form-group col-md-12 col-lg-12 col-sm-12">
                                                <div class="d-flex float-right">
                                                    <button
                                                        class="btn btn-danger mr-3"
                                                        @click="remove_Experience(index)"
                                                        v-show="index || (!index && workExperiences.length > 200)">
                                                        <i class="fa fa-minus mr-2"></i>Remove
                                                    </button>
                                                    <button
                                                        @click="add_Experience"
                                                        type="button"
                                                        class="btn btn-info d-flex float-right">
                                                        <i class="fa fa-plus pt-1 pr-2"></i>
                                                        Add
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                        <button
                                            @click="submit"
                                            type="button"
                                            class="btn signup_btn btn-block btn-lg text-body">
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
                name: "",
                batch: "",
                depertment: "",
                reg_code: "",
                session: "",
                shift: "",
                passing_year: "",
                roll: "",
                mobiles: [""],
                emails: [""],
                present_address: '',
                workExperiences: [
                    {
                        company_name: "",
                        company_address: "",
                        start_date: "",
                        end_date: "",
                        depertment: "",
                        responsibility: ""
                    }
                ]
            };
        },
        methods: {
            add_mobile() {
                if (this.mobiles.length <= 3) {
                    this
                        .mobiles
                        .push("");
                }
            },
            remove_mobile(index) {
                this
                    .mobiles
                    .splice(index, 1);
            },
            add_email() {
                if (this.mobiles.length <= 3) {
                    this
                        .emails
                        .push("");
                }
            },
            remove_email(index) {
                this
                    .emails
                    .splice(index, 1);
            },
            add_Experience() {

                if (this.workExperiences.length <= 11) {

                    this
                        .workExperiences
                        .push({
                            company_name: "",
                            company_address: "",
                            start_date: "",
                            end_date: "",
                            depertment: "",
                            responsibility: ""
                        });
                }
            },
            remove_Experience(index) {
                this
                    .workExperiences
                    .splice(index, 1);
            },

            submit() {
                const data = {
                    mobiles: this.mobiles,
                    emails: this.emails,
                    workExperiences: this.workExperiences
                };
                alert(JSON.stringify(data, null, 2));
                // const data = {     workExperiences: this.workExperiences,   };
                // alert(JSON.stringify(data, null, 2));
            }
        },
        mounted() {
            let alumni = JSON.parse(localStorage.getItem("Alumni info"));
            this.name = alumni.data.name;
            this.batch = alumni.data.batch;
            this.depertment = alumni.data.program;
            this.reg_code = alumni.data.regcode;
            this.session = alumni.data.session;
            this.shift = alumni.data.shift;
            this.passing_year = alumni.data.passing_year;
            this.roll = alumni.data.roll;
        }
    };
</script>