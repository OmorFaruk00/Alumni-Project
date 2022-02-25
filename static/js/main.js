$(document).ready(function() {
  $('.nav-list').on('click', 'li', function() {
    $('.nav-list li.active').removeClass('active');
    $(this).addClass('active');
  });

  var maxLimit = 4;
  var jobLimit = 12;
  var x = 1;
  var j =1;
  var appendMobile = '<div class="input-group control-group input-wrapper mt-2"><input type="text" name="name[]" class="form-control" placeholder="Enter mobile Number"><div class="input-group-btn"><button class="btn btn-danger mobile-remove-button" type="button"><i class="fa fa-minus"></i> Remove</button></div></div>'; 
  var appendEmail = '<div class="input-group control-group input-wrapper mt-2"><input type="text" name="name[]" class="form-control" placeholder="Enter Your Email"><div class="input-group-btn"><button class="btn btn-danger email-remove-button" type="button"><i class="fa fa-minus"></i> Remove</button></div></div>'; 
  
  
  // for mobile addition field
  $('.mobile-add-button').click(function(e){
    e.preventDefault();
      if(x < maxLimit){ 
          $('.mobile-form-wrapper').append(appendMobile);
          x++;
      }
  });
  
  // for mobile deletion field
  $('.mobile-form-wrapper').on('click', '.mobile-remove-button', function(e){
      e.preventDefault();
      $(this).parents('.input-wrapper').remove();
      x--;
  });
   // for email add field
   $('.email-add-button').click(function(e){
    e.preventDefault();
      if(x <  maxLimit){ 
          $('.email-form-wrapper').append(appendEmail);
          x++;
      }
  });
  
  //  for email deletion field
  $('.email-form-wrapper').on('click', '.email-remove-button', function(e){
      e.preventDefault();
      $(this).parents('.input-wrapper').remove();
      x--;
  });

  var jobfieldHTML = `<div class="row input-wrapper">
  <div class="col-sm-12 col-md-6 col-lg-6">
      <div class="form-outline mb-2">
          <label class="form-label mb-2" for="form3Example1cg">Company Name</label >
          <input
              type="text"
              id="form3Example1cg"
              class="form-control"
              placeholder="Enter name"/>
      </div>
  </div>
  <div class="col-sm-12 col-md-6 col-lg-6">
      <div class="form-outline mb-2">
          <label class="form-label mb-2" for="form3Example1cg">Company Address</label >
          <input
              type="text"
              id="form3Example1cg"
              class="form-control"
              placeholder="Enter address"/>
      </div>
  </div>
  <div class="col-sm-12 col-md-6 col-lg-6">
      <div class="form-outline mb-2">
          <label class="form-label mb-2" for="form3Example1cg">Starting Date</label >
          <input
              type="text"
              id="form3Example1cg"
              class="form-control"
              placeholder="Enter date"/>
      </div>
  </div>
  <div class="col-sm-12 col-md-6 col-lg-6">
      <div class="form-outline mb-2">
          <label class="form-label mb-2" for="form3Example1cg">End Date
          </label >
          <input
              type="text"
              id="form3Example1cg"
              class="form-control"
              placeholder="Enter date"/>
      </div>
  </div>
  <div class="col-sm-12 col-md-6 col-lg-6">
      <div class="form-outline mb-2">
          <label class="form-label mb-2" for="form3Example1cg">Depertment</label >
          <input
              type="text"
              id="form3Example1cg"
              class="form-control"
              placeholder="Enter depertment"/>
      </div>
  </div>
  <div class="col-sm-12 col-md-6 col-lg-6">
      <div class="form-outline mb-2">
          <label class="form-label mb-2" for="form3Example1cg">Responsibility</label >
          <input
              type="text"
              id="form3Example1cg"
              class="form-control"
              placeholder="Enter your responsibility"/>
      </div>
  </div>
  <div class="col-sm-12 col-md-12 col-lg-12 d-flex">
      <button class="btn btn-danger job-remove-button ml-auto" type="button">
          <i class="fa fa-minus"></i> Remove</button>      
  </div>
</div>

`;
// for job add field
$('.job-add-button').click(function(e){
  e.preventDefault();
    if(x < jobLimit){ 
        $('.job-form-wrapper').append(jobfieldHTML);
        j++;
    }
});
// for job remove field
$('.job-form-wrapper').on('click', '.job-remove-button', function(e){
  e.preventDefault();
  $(this).parents('.input-wrapper').remove();
  j--;
});









});
