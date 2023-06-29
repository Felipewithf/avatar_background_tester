
function changeStageBackground(event) {
    event.preventDefault();
    console.log(event.keyCode);
    if (event.keyCode == 39) {
        $('#stage').attr("src", "./assets/img/bg/c1/2.jpg")
    };
    if (event.keyCode == 37) {
        $('#stage').attr("src", "./assets/img/bg/c1/1.jpg")
    };
    if (event.keyCode == 40) {
        $('#stage').attr("src", "./assets/img/bg/c2/1.jpg")
    };
    if (event.keyCode == 38) {
        $('#stage').attr("src", "./assets/img/bg/c3/1.jpg")
    };


};

$(document).keydown(changeStageBackground);

