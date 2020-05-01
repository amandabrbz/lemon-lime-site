var btnContact = $(".jl-contact-btn");

//window preloader
$(window).on("load", function () {
    var preLoader = $(".jl-preloader");
  
    setTimeout(function () {
      preLoader.addClass("jl-fade-out");
    }, 2000);
  });

//btn toggle
btnContact.click(function () {
  let boxContact = $(".jl-contact-info");

  boxContact.toggle("jl-is-open");
});