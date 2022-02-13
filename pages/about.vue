<template>
    <div>                
        <div class="about-us">
            <div class="about-us-title text-center">
                <div class="container">
                    <h1 class="heading-bold text-uppercase">About Us</h1>
                </div>
            </div>
            <div class="about-us-content">
                <div class="container">
                    <div class="content-wrapper">
                        <p class="text-dark">
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.
                        </p>
                        <p class="text-dark">

                            Investigationes demonstraverunt lectores. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="programs-services">
            <div class="container">
                <div class="row">
                    <div class="services-img col-md-6 col-sm-12 col-xs-12">
                        <img class="img-responsive" src="images/service.jpg" alt="">
                    </div>
                    <div class="services-content col-md-6 col-sm-12 col-xs-12">
                        <h2 class="heading-regular">Programs &amp; Services</h2>
                        <div id="tab_services">
                            <!--Nav tabs-->
                            <ul class="nav nav-tabs" role="tablist">
                                <li role="presentation" class="active">
                                    <a class="text-dark" href="#social" aria-controls="social" role="tab" data-toggle="tab">Social</a>
                                </li>
                                <li role="presentation">
                                    <a class="text-dark" href="#professional" aria-controls="professional" role="tab" data-toggle="tab">Professional</a>
                                </li>
                                <li role="presentation">
                                    <a class="text-dark" href="#intelectual" aria-controls="intelectual" role="tab" data-toggle="tab">Intelectual</a>
                                </li>
                            </ul>
                            <!--Tab panes-->
                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane active animated zoomIn" id="social">
                                    <div class="tab-content-wrapper">
                                        <p class="text-dark">
                                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.
                                        </p>
                                        <ul class="list-item text-dark">
                                            <li>Feugiat nulla facilisis at vero eros et accumsan et iusto.</li>
                                            <li>Luptatum zzril delenit augue duis dolore.</li>
                                            <li>Vulputate velit esse molestie consequat.</li>
                                            <li>Delenit augue duis dolore vulputate velit esse molestie consequat</li>
                                        </ul>
                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane animated zoomIn" id="professional">
                                    <div class="tab-content-wrapper">
                                        <p class="text-dark">
                                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.
                                        </p>
                                        <ul class="list-item">
                                            <li>Feugiat nulla facilisis at vero eros et accumsan et iusto.</li>
                                            <li>Delenit augue duis dolore vulputate velit esse molestie consequat</li>
                                            <li>Luptatum zzril delenit augue duis dolore.</li>
                                            <li>Vulputate velit esse molestie consequat.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane animated zoomIn" id="intelectual">
                                    <div class="tab-content-wrapper">
                                        <p class="text-dark">
                                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.
                                        </p>
                                        <ul class="list-item">
                                            <li>Delenit augue duis dolore vulputate velit esse molestie consequat</li>
                                            <li>Vulputate velit esse molestie consequat.</li>
                                            <li>Luptatum zzril delenit augue duis dolore.</li>
                                            <li>Feugiat nulla facilisis at vero eros et accumsan et iusto.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>
<style>
.about-us .about-us-title {
    background: url("/images/about-us.jpg");
    background-size: cover;
    padding: 330px 0 200px;
}

.about-us .about-us-title h1 {
    color: #fff;
    letter-spacing: 1px;
}

.about-us .about-us-content {
    padding: 55px 0 25px;
}

.about-us .about-us-content .content-wrapper {
    line-height: 2;
    float: none;
}

.about-us .about-us-content .content-wrapper p {
    font-size: 14px;
    margin-bottom: 30px;
}

@media (min-width: 992px) {
    .about-us .about-us-title {
        padding: 330px 0 200px;
    }
    .about-us .about-us-content .content-wrapper {
        width: 80%;
        margin-right: auto;
        margin-left: auto;
    }
}

@media (max-width: 991px) {
    .about-us .about-us-title {
        padding: 70px 0 70px;
    }
}

.programs-services {
    padding-bottom: 40px;
}

.programs-services .services-img {
    padding-right: 30px;
}

.programs-services .services-img img {
    width: 100%;
}

.programs-services .services-content h2 {
    color: #2d2d2d;
    letter-spacing: 2px;
}

.programs-services .services-content #tab_services .nav-tabs {
    border-bottom: none;
}

.programs-services .services-content #tab_services .nav-tabs>li>a {
    padding-left: 0;
    padding-right: 0;
    font-size: 16px;
    font-family: "Montserrat-Light";
    color: #2d2d2d;
    border-bottom: 2px solid transparent !important;
}

.programs-services .services-content #tab_services .nav-tabs>li>a:hover {
    background: transparent !important;
    border-color: transparent !important;
}

.programs-services .services-content #tab_services .nav-tabs>li.active>a,
.programs-services .services-content #tab_services .nav-tabs>li.active>a:hover,
.programs-services .services-content #tab_services .nav-tabs>li.active>a:focus {
    border-top-color: transparent;
    border-right-color: transparent;
    border-left-color: transparent;
    border-bottom: 2px solid #f7ca18 !important;
}

.programs-services .services-content #tab_services .tab-content {
    margin-top: 30px;
    float: left;
    line-height: 2;
    font-size: 14px;
}

.programs-services .services-content #tab_services .tab-content .list-item {
    margin-top: 25px;
    float: left;
}

.programs-services .services-content #tab_services .tab-content .list-item li {
    float: left;
    width: 100%;
    line-height: 3;
    position: relative;
}

.programs-services .services-content #tab_services .tab-content .list-item li:before {
    content: "";
    height: 15px;
    width: 15px;
    background-color: #f7ca18;
    margin-right: 35px;
    position: absolute;
    left: 0;
    top: 14px;
}

@media (min-width: 768px) {
    .programs-services .services-content #tab_services ul li {
        margin-right: 60px;
    }
    .programs-services .services-content #tab_services .tab-content .list-item {
        margin-left: 35px;
    }
    .programs-services .services-content #tab_services .tab-content .list-item li {
        padding-left: 50px;
    }
}

@media (max-width: 767px) {
    .programs-services .services-content h2 {
        font-size: 26px;
    }
    .programs-services .services-content #tab_services ul li {
        margin-right: 10px;
    }
    .programs-services .services-content #tab_services .tab-content .list-item li {
        padding-left: 25px;
    }
}

@media (min-width: 992px) {
    .programs-services .services-content h2 {
        margin-bottom: 25px;
        margin-top: -5px;
    }
}

@media (max-width: 991px) {
    .programs-services .services-img {
        margin-bottom: 25px;
    }
    .programs-services .services-content h2 {
        margin-bottom: 10px;
    }
}

.our-history {
    background-color: #fafafa;
}

.our-history .history-content .list-history {
    position: relative;
}

.our-history .history-content .list-history:before {
    height: 5px;
    content: "";
    background-color: #f7ca18;
    position: absolute;
}

.our-history .history-content .list-history li {
    width: 16.666%;
    float: left;
    position: relative;
}

.our-history .history-content .list-history li .history-title {
    color: #2d2d2d;
    font-size: 14px;
    margin-bottom: 25px;
    text-align: center;
    width: 100%;
    float: left;
    line-height: 1.6;
}

.our-history .history-content .list-history li .history-dot {
    width: 100%;
    float: left;
    text-align: center;
}

.our-history .history-content .list-history li .history-dot span {
    width: 15px;
    height: 15px;
    background-color: #1a265c;
    border: 3px solid #fff;
    display: inline-block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}

.our-history .history-content .list-history li .history-year {
    font-size: 14px;
    color: #9f9f9f;
    margin-top: 25px;
    float: left;
    width: 100%;
}

@media (min-width: 1200px) {
    .our-history .history-content .list-history:before {
        width: 960px;
        left: 89px;
        top: 74px;
    }
}

@media (min-width: 992px) and (max-width: 1199px) {
    .our-history .history-content .list-history:before {
        width: 778px;
        left: 83px;
        top: 74px;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    .our-history .history-content .list-history .history-title {
        height: 66px;
    }
    .our-history .history-content .list-history:before {
        left: 59px;
        width: 606px;
        top: 95px;
    }
}

@media (max-width: 768px) {
    .our-history .history-content .list-history {
        width: 300px !important;
        margin: 0 auto;
    }
    .our-history .history-content .list-history:before {
        height: 458px !important;
        right: 118px;
        top: 30px;
        width: 5px;
    }
    .our-history .history-content .list-history li {
        width: 100%;
        float: left;
        text-align: center;
        padding: 10px 0;
    }
    .our-history .history-content .list-history li .history-title {
        float: left;
        width: 50%;
    }
    .our-history .history-content .list-history li .history-dot {
        float: left;
        width: 20%;
        margin-top: 20px !important;
    }
    .our-history .history-content .list-history li .history-year {
        float: left;
        width: 30%;
        margin-top: 20px !important;
    }
}

@media (min-width: 768px) {
    .our-history {
        padding: 60px 0 70px;
    }
    .our-history .history-content {
        padding-top: 40px;
        margin-top: 40px;
    }
}

@media (max-width: 767px) {
    .our-history {
        padding: 60px 0 20px;
    }
    .our-history .history-content {
        padding-top: 40px;
    }
}

.map .map-content img {
    width: 100%;
}

@media (min-width: 992px) {
    .map {
        padding: 60px 0;
    }
    .map .map-content {
        padding-top: 60px;
    }
}

@media (max-width: 991px) {
    .map {
        padding: 30px 0;
    }
    .map .map-content {
        padding-top: 20px;
    }
}

.title-page h2 {
    color: #2d2d2d;
    margin-bottom: 40px;
}

.title-page p {
    width: 53%;
    font-size: 14px;
    line-height: 2.4;
    margin-left: auto;
    margin-right: auto;
}

@media (max-width: 991px) {
    .title-page P {
        display: none;
    }
}

@media (max-width: 991px) {
    .title-page h2 {
        font-size: 26px;
    }
}

</style>