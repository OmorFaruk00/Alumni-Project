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
                                        src="/images/login.png"
                                        alt=""/>
                                </div>
                                <h2 class="text-uppercase text-center my-4">
                                    CERTIFICATE VERIFICATION
                                </h2>
                                <form>
                                    <div class="form-outline mb-2">
                                        <label class="form-label mb-2" for="form3Example1cg">Roll</label >
                                        <input type="text" id="form3Example1cg" class="form-control form-control"/>
                                    </div>

                                    <div class="form-outline mb-2">
                                        <label class="form-label mb-2" for="form3Example3cg">Session</label >
                                        <input type="email" id="form3Example3cg" class="form-control form-control"/>
                                    </div>
                                    <div class="form-outline mb-2">
                                        <label class="form-label mb-2" for="form3Example4cg">Reg code</label >
                                        <input type="password" id="form3Example4cg" class="form-control form-control"/>
                                    </div>
                                    <div class="form-outline mb-2">
                                        <label class="form-label mb-2" for="form3Example4cdg">Passing Year</label >
                                        <input type="password" id="form3Example4cdg" class="form-control form-control"/>
                                    </div>

                                    <div class="d-flex justify-content-center">
                                        <nuxt-link to="/studentsignup" type="button" class="btn signup_btn btn-block btn-lg text-body">
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