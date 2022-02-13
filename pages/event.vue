<template >
 <div class="container event-page">
     <h3 class="title mt-5 mb-5">All Event Archive</h3>       
    <div class="row ">
        <div class="col-md-4 col-lg-4 col-sm-12 mb-5">
            <div class="card shadow" style="">
                <img src="https://picsum.photos/1920/1080" class="card-img-top" alt="...">
                    <div class="card-body bg-light">
                        <h5 class="card-title">Events title</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquam ea accusantium nihil enim distinctio iste, fuga sint vitae maxime sed. Ad expedita modi maiores neque inventore voluptatibus in harum..</p>
                        <div class="d-flex justify-content-between mt-3 mb-3">
                            <p>Date :30-5-2022</p>
                            <nuxt-link to="/#" class="join-btn">JOIN</nuxt-link>
                        </div>                        
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-12 mb-5">
            <div class="card shadow" style="">
                <img src="https://picsum.photos/1920/1080" class="card-img-top" alt="...">
                    <div class="card-body bg-light">
                        <h5 class="card-title">Events title</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquam ea accusantium nihil enim distinctio iste, fuga sint vitae maxime sed. Ad expedita modi maiores neque inventore voluptatibus in harum..</p>
                        <div class="d-flex justify-content-between mt-3 mb-3">
                            <p>Date :30-5-2022</p>
                            <nuxt-link to="/#" class="join-btn">JOIN</nuxt-link>
                        </div>                        
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-12 mb-5">
            <div class="card shadow" style="">
                <img src="https://picsum.photos/1920/1080" class="card-img-top" alt="...">
                    <div class="card-body bg-light">
                        <h5 class="card-title">Events title</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquam ea accusantium nihil enim distinctio iste, fuga sint vitae maxime sed. Ad expedita modi maiores neque inventore voluptatibus in harum..</p>
                        <div class="d-flex justify-content-between mt-3 mb-3">
                            <p>Date :30-5-2022</p>
                            <nuxt-link to="/#" class="join-btn">JOIN</nuxt-link>
                        </div>                        
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-12 mb-5">
            <div class="card shadow" style="">
                <img src="https://picsum.photos/1920/1080" class="card-img-top" alt="...">
                    <div class="card-body bg-light">
                        <h5 class="card-title">Events title</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquam ea accusantium nihil enim distinctio iste, fuga sint vitae maxime sed. Ad expedita modi maiores neque inventore voluptatibus in harum..</p>
                        <div class="d-flex justify-content-between mt-3 mb-3">
                            <p>Date :30-5-2022</p>
                            <nuxt-link to="/#" class="join-btn">JOIN</nuxt-link>
                        </div>                        
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-12 mb-5">
            <div class="card shadow" style="">
                <img src="https://picsum.photos/1920/1080" class="card-img-top" alt="...">
                    <div class="card-body bg-light">
                        <h5 class="card-title">Events title</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquam ea accusantium nihil enim distinctio iste, fuga sint vitae maxime sed. Ad expedita modi maiores neque inventore voluptatibus in harum..</p>
                        <div class="d-flex justify-content-between mt-3 mb-3">
                            <p>Date :30-5-2022</p>
                            <nuxt-link to="/#" class="join-btn">JOIN</nuxt-link>
                        </div>                        
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-12 mb-5">
            <div class="card shadow" style="">
                <img src="https://picsum.photos/1920/1080" class="card-img-top" alt="...">
                    <div class="card-body bg-light">
                        <h5 class="card-title">Events title</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquam ea accusantium nihil enim distinctio iste, fuga sint vitae maxime sed. Ad expedita modi maiores neque inventore voluptatibus in harum..</p>
                        <div class="d-flex justify-content-between mt-3 mb-3">
                            <p>Date :30-5-2022</p>
                            <nuxt-link to="/#" class="join-btn">JOIN</nuxt-link>
                        </div>                        
                    </div>
                </div>
            </div>    
                         
        </div>        
    </div>
</template>
<style>
.event-page{
    margin-bottom: 100px;
}
.card-title{
    font-size: 20px;
    font-weight: bold;
}
.card-text{
    font-size: 14px;
    
}
.join-btn{
    color: #17a2b8;
    font-size: 16px;
}

.shadow:before,
.shadow:after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    background: linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000);
    background-size: 400%;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    z-index: -1;
    animation: animate 20s linear infinite;
}
.shadow:after {
    filter: blur(10px);
}

@keyframes animate {
    0% {
        background-position: 0 0;
    }
    50% {
        background-position: 300% 0;
    }
    100% {
        background-position: 0 0;
    }
}

</style>