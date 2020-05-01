var btnContact = $(".jl-contact-btn");

btnContact.click(function () {
  let boxContact = $(".jl-contact-info");

  boxContact.toggle("jl-is-open");
});

$(window).on("load", function () {
  var preLoader = $(".jl-preloader");

  setTimeout(function () {
    preLoader.addClass("jl-fade-out");
  }, 2000);
});
