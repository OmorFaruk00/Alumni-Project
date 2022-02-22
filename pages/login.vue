<template>
   <div class="wrapper">
    <div class="login-logo"> <img src="/images/login.png" alt=""> </div>
    <div class="text-center mt-4 name"> User Login </div>
    <form class="p-3 mt-3">
        <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span> <input type="text" name="userName" id="userName" placeholder="Username"> </div>
        <div class="form-field d-flex align-items-center"> <span class="fas fa-key"></span> <input type="password" name="password" id="pwd" placeholder="Password"> </div> <button class="btn mt-3">Login</button>
    </form>
    <div class="text-center fs-6"> <NuxtLink to="/">Forget password? </NuxtLink>or <NuxtLink to="/studentsignup"> Sign Up </NuxtLink> </div>
</div> 
</template>
