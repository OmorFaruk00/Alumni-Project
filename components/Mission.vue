<template>
    <div class="our-mission">
        <!-- <h3 class="title mb-5">OUR MISSION</h3>    -->
    <div class="container my-5">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-10 col-xs-12">
                <div class="email-signature">                    
                    <div class="signature-icon">
                        <i class="fa fa-users"></i>
                    </div>
                    <div class="col-lg-6 offset-lg-4 col-md-6 offset-md-4 col-sm-12 offset-sm-1">
                    <div class="mission-text">
                        <h4 class="title">OUR MISSSION</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Inventore sapiente voluptatibus aliquid explicabo! Blanditiis facilis quibu
                            sdam voluptatum quis amet, voluptatem molestias sapiente totam exercitationem atque n
                            ostrum deserunt quae delectus inventore ratione quos recusandae deleniti? Ipsum, placeat illo 
                            deleniti recusandae, doloremque, dolorum ducimus iusto velit aperiam a dolores sit. Perferendis, delectus
                            sdam voluptatum quis amet, voluptatem molestias sapiente totam exercitationem atque n
                            ostrum deserunt quae delectus inventore ratione quos recusandae deleniti? Ipsum, placeat illo 
                            deleniti recusandae, doloremque, dolorum ducimus iusto velit aperiam a dolores sit. Perferendis, delectus</p>
                    </div>
                    </div>                   
                    </div>                                
                </div>                
            </div>
        </div>
    </div>      
                    
</template>
<style>
.our-mission{
    padding-top: 100px;   
    padding-bottom: 150px;
}
.mission-text{   
    margin-top: 50px;
    text-align: center;
}
.mission-text p{
    font-size: 16px;
    margin-top: 20px;

} 
.our-mission img{
    
  width: 500px;
  height: 400px;
  padding-left:50px ;
  border-radius: 150px 0 0 150px;
}
.email-signature{
    background: #039982;
    height: 400px;
    font-family: 'Noto Sans', sans-serif;
    /* padding: 50px 0 40px 140px; */
    border-radius: 25px;
    box-shadow: 0 0 3px #999,10px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: relative;
    z-index: 1;
}
.email-signature:before,
.email-signature:after{
    content: "";
    background: #00c0a9;
    width: 100px;
    height: 100%;
    border-radius: 100%;
    position: absolute;
    top: 0;
    left: -45px;
}
.email-signature:after{
    background: #fff;
    width: 88%;
    border-radius: 150px 0 0 150px;
    left: auto;
    right: 0;
    z-index: -1;
}
.email-signature .icon{
    padding: 0;
    margin: 0;
    list-style: none;
    position: absolute;
    top: 10px;
    right: 30px;
}
.email-signature .icon li{
    margin: 0 2px;
    display: inline-block;
}
.email-signature .icon li a{
    color: #00c0a9;
    font-size: 18px;
    text-align: center;
    line-height: 25px;
    height: 25px;
    width: 25px;
    display: block;
    transition: all 0.3s ease 0s;
}
.email-signature .icon li a:hover{
    color: #fff;
    background-color: #00c0a9;
}
.email-signature .signature-icon{
    color: #00c0a9;
    background-color: #eaeaea;
    font-size: 40px;
    text-align: center;
    line-height: 65px;
    width: 90px;
    height: 90px;
    border-radius: 20px;
    border: 10px solid #fff;
    transform: translateY(-50%);
    position: absolute;
    top: 50%;
    left: 16px;
    z-index: 1;
}
.email-signature .signature-details{
    text-transform: uppercase;
    width: 43%;
    padding: 20px 0 0;
    margin: 0 15px 0 0;
    float: left;
}

@media screen and (max-width:576px){
    .email-signature{ padding: 180px 15px 20px; }
    .email-signature:before{
        background: #00c0a9;
        width: 100%;
        height: 100px;
        border-radius: 100%;
        top: -45px;
        left: 0;
    }
    .email-signature:after{
        height: 74%;
        width: 100%;
        border-radius: 150px 150px 0 0;
        top: auto;
        bottom: 0;
    }
    .email-signature .icon{
        text-align: center;
        margin: 0 auto;
        top: 130px;
        right: 0;
        left: 0;
    }
    .email-signature .signature-icon{
        margin: 0 auto;
        top: 70px;
        left: 0;
        right: 0;
    }   
    .email-signature .title{ font-size: 25px; }
    .email-signature .signature-content{
        text-align: center;
        width: 100%;
        padding: 15px 0 0;
        border-left: none;
        float: none;
    }
}


</style>