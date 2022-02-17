<template>
  <div class="upcoming-event">
    <h3 class="title mb-5 pb-5 text-dark">UPCOMING EVENT</h3>
    <div class="container">
      <div class="row event-row">
        <div class="area-img col-md-5 col-sm-12 col-xs-12">
          <img
            class="img-responsive animated zoomIn"
            src="images/even-img.jpg"
            alt=""
          />
        </div>
        <div class="area-content col-md-7 col-sm-12 col-xs-12">
          <div class="area-top p-3">
            <div class="row">
              <div class="col-sm-10 col-xs-9">
                <h5 class="heading-light no-margin animated fadeInRight">
                  ANNUAL MEET UP AND SCHOLARSHIP PRESENTATIONS
                </h5>                
                <h6 class="mb-3 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio nobis voluptatibus rem laudantium, impedit, nisi
                  explicabo harum sed cumque sit quisquam vel mollitia maiores
                  reiciendis obcaecati. Quas alias soluta nisi esse, quisquam
                  consequuntur veniam molestias enim officiis expedita, culpa
                  unde!
                </h6>
                <span>
                  <span class="icon map-icon"></span>
                  <span class="text-place text-dark animated fadeInRight"
                    >Sayidan Street, Gondomanan, 8993, San Francisco, CA</span
                  >
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
              <nuxt-link to="#" class="home-btn mt-4 ml-2 mr-3"
                >JOIN NOW</nuxt-link
              >
              <nuxt-link to="/event" class="home-btn mt-4 ml-2"
                >ALL EVENTS</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>

</style>
