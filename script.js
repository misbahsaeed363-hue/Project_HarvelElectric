
// for sliders
function slideshow(selector) {
    let $slides = $(selector);
    let $totalSLides = $slides.length;
    let $index = 0;

    $slides.eq($index).fadeIn(1000);

    function showSLide() {
        $slides.eq($index).fadeOut(1000);
        $index = $index + 1;
        $index = $index % $totalSLides;
        $slides.eq($index).fadeIn(1000);
    }
    setInterval(showSLide, 3000)
}
$(document).ready(function () {
    slideshow(".product-img1");
    slideshow(".product-img2");
    slideshow(".product-img3");
    slideshow(".product-img4");
})


$(document).ready(function () {
    let names = [
        "Lighting Items",
        "Fans",
        "LCDS",
        "Geysers"
    ];
    var index = 0;
    var currentIndex = 0;
    function startTyping() {
        if (index < names.length) {
            var currentName = names[index];
            if (currentIndex < currentName.length) {
                $("#autotype").append(currentName.charAt(currentIndex));
                currentIndex++;
            } else {
                index++;
                currentIndex = 0;
                $("#autotype").text("");
            }
        } else {
            index = 0;
            startTyping();
        }
    }
    setInterval(startTyping, 300);
})