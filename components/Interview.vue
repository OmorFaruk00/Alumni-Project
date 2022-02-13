<template>
   <div class="alumni-interview">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-12 col-xs-12 pull-right">
                            <div class="interview-wrapper">
                                <div class="interview-title">
                                    <h4 class="heading-light text-capitalize">Alumni Interview</h4>
                                    <h1 class="heading-light text-capitalize">Hannah Jordan</h1>
                                </div>
                                <div class="interview-desc text-left">
                                    <p class="text-light">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta
                                        decima et quinta decima.</p>
                                </div>
                                <div class="interview-see-story">
                                    <a href="./story-single.html" class="see-story bnt text-uppercase">SEE HANNAH STORY</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
</template>
<style>
.alumni-interview {
    background-size: cover;
}

.alumni-interview .interview-wrapper {
    display: block;
    float: left;
}

.alumni-interview .interview-wrapper h1 {
    font-size: 42px;
    color: #2d2d2d;
    margin: 20px 0;
    letter-spacing: 1px;
}

.alumni-interview .interview-wrapper h4 {
    font-size: 20px;
}

.alumni-interview .interview-wrapper .interview-desc p {
    line-height: 2;
    font-size: 13px;
    width: 85%;
}

.alumni-interview .interview-wrapper .interview-see-story {
    float: left;
    margin-top: 50px;
    display: block;
}

.alumni-interview .interview-wrapper .interview-see-story a {
    border: 3px solid #f7ca18;
    padding: 17px 41px;
    font-size: 17px;
    text-transform: uppercase;
    color: #2d2d2d;
    display: block;
    -moz-transition: all 0.3s ease-in-out 0s;
    -webkit-transition: all 0.3s ease-in-out 0s;
    -ms-transition: all 0.3s ease-in-out 0s;
    -o-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
}

.alumni-interview .interview-wrapper .interview-see-story a:hover {
    background-color: #f7ca18;
    color: #fff;
    -moz-transition: all 0.3s ease-in-out 0s;
    -webkit-transition: all 0.3s ease-in-out 0s;
    -ms-transition: all 0.3s ease-in-out 0s;
    -o-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
}

.alumni-interview .interview-wrapper h1 {
    color: #2d2d2d;
}

@media (min-width: 992px) {
    .alumni-interview .interview-wrapper {
        padding: 125px 0;
    }
}

@media (max-width: 991px) {
    .alumni-interview .interview-wrapper {
        padding: 40px 0;
    }
}

@media (min-width: 992px) {
    .alumni-interview {
        background: url("/images/bg-home.jpg") no-repeat;
    }
}

@media (max-width: 991px) {
    .alumni-interview {
        background-color: #e9e9e9;
    }
}

</style>