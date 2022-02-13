<template>
    <div class="demo">
    <div class="container">
        <div class="row">
            <div class="col-lg-offset-3 col-lg-12 col-md-offset-2 col-md-8">
                <div class="email-signature">
                    <div class=" col-lg-6 col-md-6 col-sm-12">
                        <h2 class="title">Steve Thomas</h2>
                        <span class="post">web developer</span>
                    </div>
                    <div class=" col-lg-6 col-md-6 col-sm-12">
                        <h2 class="title">Steve Thomas</h2>
                        <span class="post">web developer</span>
                    </div>
                    <!-- <div class="signature-icon">
                        <img src="images/slider1.jpg" alt="">
                    </div>
                    <div class="signature-details">
                        <h2 class="title">Steve Thomas</h2>
                        <span class="post">web developer</span>
                    </div> -->
                    
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style>
.email-signature{
    background-color: #fff;
    font-family: 'Poppins', sans-serif;
    padding: 20px 20px 20px 195px;
    margin: 10px 0;
    border: 10px solid #458DCE;
    border-left: 40px solid #458DCE;
    border-right: 40px solid #458DCE;
    position: relative;
    z-index: 1;
}
.email-signature:before,
.email-signature:after{
    content: '';
    background: linear-gradient(to right, rgba(0,0,0,0.15),transparent);
    width: 15px;
    position: absolute;
    left: -40px;
    top: -20px;
    bottom: -20px;
}
.email-signature:after{
    transform: rotateY(180deg);
    left: auto;
    right: -40px;
}
.email-signature .signature-icon{
    background-color: #458DCE;
    height: 300px;
    width: 400px;
    padding: 7px 20px;
    transform: translateY(-50%);
    position: absolute;
    left: 20px;
    top: 50%;
}
.email-signature .signature-icon img{
    width: 100%;
    /* height: auto; */
    border: 3px solid #fff;
    
}
.email-signature .signature-details{ margin: 0 0 15px; }
.email-signature .title{
    color: #333;
    font-size: 22px;
    font-weight: 500;
    text-transform: capitalize;
    /* margin: 0; */
}
.email-signature .post{
    color: #458DCE;
    font-size: 15px;
    font-weight: 600;
    text-transform: capitalize;
}
.email-signature .signature-content span{
    color: #333;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 5px;
    display: inline-block;
}
.email-signature .signature-content span i{
    color: #458DCE;
    font-size: 13px;
    font-weight: 600;
    margin: 0 2px 0 0;
}
@media screen and (max-width:576px){
    .email-signature{
        padding: 170px 20px 20px;
        text-align: center;
    }
    .email-signature .signature-icon{
        transform: translateX(-50%) translateY(0);
        left: 50%;
        top: 20px;
    }
}


</style>