<template>
   <body class="grey lighten-2">
  <div class="container">
    <div class="col s12 m7">

      <div class="card horizontal">
        <div class="card-image">
          <img src="https://unsplash.it/400/300?image=503" class="fadeIn">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <span class="card-title">San Francisco</span>
            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
              </p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>


    <div class="col s12 m7">

      <div class="card horizontal" id="fadedfx">

        <div class="card-stacked">
          <div class="card-content">
            <span class="card-title">New York </span>
            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
              </p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
        <div class="card-image">
          <img src="https://unsplash.it/400/300?image=736" class="fadedfx">
        </div>
      </div>

    </div>

    <div class="col s12 m7">

      <div class="card horizontal">
        <div class="card-image">
          <img src="https://unsplash.it/400/300?image=763" class="fadedfx">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <span class="card-title">London</span>
            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
              </p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</body> 
</template>
<style>
.fadedfx {
  background-color: #fe5652;
  visibility: hidden;
}

.fadeIn {
  animation-name: fadeIn;
  -webkit-animation-name: fadeIn;
  animation-duration: 1.5s;
  -webkit-animation-duration: 1.5s;
  animation-timing-function: ease-in-out;
  -webkit-animation-timing-function: ease-in-out;
  visibility: visible !important;
}

@keyframes fadeIn {
  0% {
    opacity: 0.0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0.0;
  }
  100% {
    opacity: 1;
  }
}
</style>