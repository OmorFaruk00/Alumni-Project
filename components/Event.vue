<template>
    <div class="upcoming-event">
         <h3 class="title mb-5 pb-5 text-white">UPCOMING EVENT</h3> 
                <div class="container">
                    <div class="row event-row">
                        <div class="area-img col-md-5 col-sm-12 col-xs-12">
                            <img class="img-responsive animated zoomIn" src="images/even-img.jpg" alt="">
                        </div>
                        <div class="area-content col-md-7 col-sm-12 col-xs-12">
                            <div class="area-top p-3">
                                <div class="row">
                                    <div class="col-sm-10 col-xs-9">
                                        <h5 class="heading-light no-margin animated fadeInRight">ANNUAL MEET UP AND SCHOLARSHIP PRESENTATIONS</h5>
                                        <!-- <h2 class="heading-bold animated fadeInLeft">ANNUAL MEET UP AND SCHOLARSHIP PRESENTATIONS</h2> -->
                                        <h6 class="mb-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nobis voluptatibus rem laudantium, impedit, nisi explicabo harum sed cumque sit quisquam vel mollitia maiores reiciendis obcaecati. Quas alias soluta nisi esse, quisquam consequuntur veniam molestias enim officiis expedita, culpa unde!</h6>
                                        <span>
                                        <span class="icon map-icon"></span>
                                        <span class="text-place text-dark animated fadeInRight">Sayidan Street, Gondomanan, 8993, San Francisco, CA</span>
                                        </span>
                                    </div>
                                    <div class="col-sm-2 col-xs-3">
                                        <div class="area-calendar calendar animated slideInRight">
                                            <span class="day text-dark">29</span>
                                            <span class="month text-warning">APRIL</span>
                                            <span class="year text-dark bg-year">2022</span>
                                        </div>
                                    </div>
                                    <!-- <button class="btn btn-primary mt-5 ml-5">join</button> -->
                                    <nuxt-link to="#" class="home-btn mt-4 ml-2 mr-3">JOIN NOW</nuxt-link>
                                    <nuxt-link to="/event" class="home-btn mt-4 ml-2">ALL EVENTS</nuxt-link>
                                </div>
                            </div>                         

                        </div>
                    </div>
                </div>
            </div>
</template>
<style>

.event-row{  
    
    box-shadow: 0px 0px 3px #5f5f5f, 0px 0px 0px 5px #ecf0f3, 8px 8px 15px #a7aaa7, -8px -8px 15px #fff; 
    margin-bottom: 50px; 
    background-color: #fff;    

}
.upcoming-event {    
    padding-top: 100px;
    padding-bottom: 150px;
    background-color: rgb(4, 53, 110);
         
}
.upcoming-event .area-top {
    color: #2d2d2d;
   
}
.upcoming-event .area-top h2 {
    line-height: 1.2;
    margin: 14px 0;
}
.upcoming-event .area-top .map-icon {
    background: url("/images/map-icon.png") no-repeat;
    width: 18px;
    height: 18px;
    float: left;
    margin-right: 10px;
}
.upcoming-event .area-top .text-place {
    font-size: 13px;
    line-height: 1.4;
    color: #757575;
}
.upcoming-event .area-top .area-calendar {
    background-color: #ebebeb;
    text-align: center;
    float: left;
    width: 70px;
    height: 90px;
    line-height: 1.4;
    padding-top: 5px;
}
.upcoming-event .area-top .area-calendar span {
    clear: both;
    float: left;
    width: 100%;
}
.upcoming-event .area-top .area-calendar .day {
    font-size: 27px;
    color: #2d2d2d;
}
.upcoming-event .area-top .area-calendar .month {
    font-size: 14px;
    color: #2d2d2d;
    padding-bottom: 5px;
}
.upcoming-event .area-top .area-calendar .year {
    background-color: #dadada;
    font-size: 14px;
    color: #595959;
    padding: 3px 0;
}
.upcoming-event .area-bottom {
    vertical-align: middle;
}
.upcoming-event .area-bottom .join-now {
    color: #fff;
    font-size: 18px;
    padding: 22px 80px;
    margin-top: 7px;
    
}
@media (max-width: 991px) {
    .upcoming-event .area-img {
        margin-bottom: 30px;
    }
    .upcoming-event .area-img img {
        width: 100%;
    }
}
@media (min-width: 768px) {
    .upcoming-event .area-bottom {
        padding-top: 88px;
    }
}
@media (max-width: 767px) {
    .upcoming-event {
        padding: 20px 0 !important;
    }
    .upcoming-event .area-top h2 {
        font-size: 25px;
    }
    .upcoming-event .area-bottom {
        padding-top: 30px;
    }
    .upcoming-event .area-bottom #time {
        margin-bottom: 30px;
    }
}
@media (max-width: 570px) {
    .upcoming-event .area-bottom #time {
        width: 100%;
    }
    .upcoming-event .area-bottom .join-now {
        float: left !important;
    }
}
.table-cell {
    float: left;
    position: relative;
}
.table-cell:before {
    content: ":";
    position: absolute;
    right: 0;
    top: 2px;
    margin: auto;
    font-size: 30px;
}
.table-cell .tab-val {
    font-size: 40px;
    color: #2d2d2d;
    
}
.table-cell .tab-metr {
    font-size: 14px;
    text-transform: capitalize;
    
    margin-top: 15px;
}
.table-cell:nth-child(4):before {
    display: none;
}
.table-cell:nth-child(1):before {
    padding-left: 0 !important;
}
@media (min-width: 768px) {
    .table-cell {
        padding: 0 23px;
    }
    .table-cell:nth-of-type(1) {
        padding: 0 23px 0 0 !important;
    }
    .table-cell .tab-val {
        font-size: 40px;
    }
    .table-cell .tab-metr {
        font-size: 14px;
        margin-top: 15px;
    }
}
@media (max-width: 767px) {
    .table-cell {
        padding: 0 15px;
    }
    .table-cell:nth-of-type(1) {
        padding: 0 15px 0 0 !important;
    }
    .table-cell .tab-val {
        font-size: 30px;
    }
    .table-cell .tab-metr {
        font-size: 12px;
        margin-top: 15px;
    }
}
</style>
