<template>
  <section class="our_response">
    
        <h3 class="title mb-5">Our Responsibility</h3>   
    <div class="row">
    <div class="col-md-3 col-sm-6">
        <div class="serviceBox">
            <div class="service-icon">
                <span><i class="fa fa-globe"></i></span>
            </div>
            <h3 class="title">Scholarship</h3>
            <p class="description">De create building thinking about your requirment and latest treand on our marketplace area</p>
        </div>
    </div>
    <div class="col-md-3 col-sm-6">
        <div class="serviceBox yellow">
            <div class="service-icon">
                <span><i class="fa fa-user"></i></span>
            </div>
            <h3 class="title">Help Current Students</h3>
            <p class="description">De create building thinking about your requirment and latest treand on our marketplace area</p>
        </div>
    </div>
      <div class="col-md-3 col-sm-6">
        <div class="serviceBox purple">
            <div class="service-icon">
                <span><i class="fa fa-landmark"></i></span>
            </div>
            <h3 class="title">Help Our University</h3>
            <p class="description">De create building thinking about your requirment and latest treand on our marketplace area</p>
        </div>
    </div>
      <div class="col-md-3 col-sm-6">
        <div class="serviceBox red">
            <div class="service-icon">
                <span><i class="fa fa-handshake"></i></span>
            </div>
            <h3 class="title">Build Our Community</h3>
            <p class="description">De create building thinking about your requirment and latest treand on our marketplace area</p>
        </div>
    </div>
    </div>

  </section>
</template>
<style>
.our_response{
    background: #EBE8EE;
    padding: 100px 100px 200px;   

}
.serviceBox{
    color: #036c78;
    font-family: 'Zen Maru Gothic', sans-serif;
    text-align: center;
    padding: 30px 25px 40px;
    border-radius: 0 80px;
    border: 2px dashed #036c78;
    position: relative;
    z-index: 1;
}
.serviceBox:before{
    content: "";
    background: #f4f4f4;
    border-radius: 0 70px;
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.3);
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    width: calc(100% - 15px);
    height: calc(100% - 15px);
    top: 50%;
    left: 50%;
    z-index: -1;
}
.serviceBox:after{
    content: "";
    background:#036c78;
    width: 130px;
    height: 70px;
    position: absolute;
    top: -9px;
    left: -9px;
    z-index: -2;
}
.serviceBox .service-icon{
    font-size: 45px;
    margin: 0 auto 15px;
} 
.serviceBox .title{
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 0 12px;
}
.serviceBox .description{
    color: #444;
    font-size: 15px;
    line-height: 22px;
}
.serviceBox.yellow{
    color: #d38a0c;
    border-color: #d38a0c;
}
.serviceBox.yellow:after{
    background-color: #d38a0c;
    height: 130px;
    width: 100px;
    border-radius: 0 0 0 80px;
    top: auto;
    bottom: -9px;
}
.serviceBox.purple{
    color: #8455D0;
    border-color: #8455D0;
}
.serviceBox.purple:after{
    background-color: #8455D0;
    top: auto;
    bottom: -9px;
    left: auto;
    right: -9px;
}
.serviceBox.red{
    color: #CD4B4C;
    border-color: #CD4B4C;
}
.serviceBox.red:after{
    background-color: #CD4B4C;
    width: 100px;
    height: 130px;
    border-radius: 0 85px 0 0;
    left: auto;
    right: -9px;
}
@media only screen and (max-width: 990px){
    .serviceBox{ margin: 0 10px 30px; }
}


</style>