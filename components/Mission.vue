<template>
<section class="our-mission">
    <div class="container my-5">
    <div class="mission-body">
        <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="mission-img">
                <img src="https://picsum.photos/1920/1089" class="img-fluid" alt="...">
            </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="mission">               
                <h3> Our Mission</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde vitae deleniti ex? Vero omnis ea, debitis magni quam tempora temporibus voluptatum modi harum voluptatibus recusandae voluptatem vel. Culpa adipisci in cupiditate, libero sint, rerum, minus sunt officiis dicta odio velit expedita vero enim id nisi molestiae ut neque cumque quas!</p>
            </div>
        </div>
        
    </div>
    </div>
</div>
</section>    
</template>
<style>
.our-mission{
    /* background: rgb(240, 225, 225); */
    background: rgb(224, 215, 215);
    padding: 100px 0px;
}
.mission-body{
     /* box-shadow: 5px 5px 10px #ebc9c985, -5px -5px 10px rgb(155, 119, 119);  */
     box-shadow: 5px 5px 10px #dacccc85, -5px -5px 10px rgb(155, 119, 119);     
     padding: 100px;
     /* background: rgba(206, 185, 185, 0.904); */
      background: rgba(233, 224, 224, 0.904);
     border-radius: 20px;
}
.mission{
    color: #F39C12;
    background-color: #fff;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    /* width: 450px;
    height: 350px; */
    padding: 25px 10px;
    margin: 0 auto;
    border-radius: 30% 0;
    box-shadow: 0 0 15px rgba(0,0,0,0.15);
    position: relative;
    z-index: 1;
}  
.mission:before,
.mission:after{
    content: '';
    height: 100%;
    width: 100%;
    border: 5px solid #F39C12;
    border-right: none;
    border-bottom: none;
    border-radius: 10px;
    position: absolute;
    left: -12px;
    top: -12px;
    z-index: -1;
}
.mission:after{
    transform: rotate(180deg);
    left: auto;
    right: -12px;
    top: auto;
    bottom: -12px;
}
.mission h3{
    font-size: 26px;
    /* padding: 10px; */
    color: #000;
    
}
.mission p{
    font-size: 16px;
    padding: 20px 40px 50px 40px;
    color: rgb(65, 61, 61);
    
}
.mission-img {
    width: 100%;
    height: 100%;
}
.mission-img img{
    width: 100%;
    height: 100%;
}

@media only screen and (max-width: 920px) {
    .mission-img{
        padding-bottom: 50px !important;
        

    }

}
/* .col-sm-12{
    margin-bottom: 50px;
} */
</style>