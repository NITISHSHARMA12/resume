function myFunction() {
    var element = document.getElementById("darkmode");
    $("div").toggleClass("darkmode");
    $("li").toggleClass("darkmodeList");
    $(".card-title").toggleClass("card-title-dark");
    $(".year").toggleClass("year-dark");
    console.log(element)

}