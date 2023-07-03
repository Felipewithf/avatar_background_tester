
var background = [{
    "name": "something",
    "code": "c1",
    "num": [1, 2, 3]
},
{
    "name": "something2",
    "code": "c2",
    "num": [1, 2]
},
{
    "name": "something",
    "code": "c3",
    "num": [1]
},
];

var avatar = [{
    "name": "something",
    "code": "a1",
    "num": [1,2,3]
},
{
    "name": "something",
    "code": "a2",
    "num": [1,2]
},
{
    "name": "something",
    "code": "a3",
    "num": [1,2,3]
},
{
    "name": "something",
    "code": "a4",
    "num": [1,2,3,4]
},
{
    "name": "something",
    "code": "a5",
    "num": [1,2,3]
},

];

var variationIndex = 0; //left to right
var categoryIndex = 0; //up and down

var variationIndexAvatar = 0; //left to right (Avatars)
var categoryIndexAvatar = 0; //up and down (Avatars)



// render the thumbnails of background
for (const backgroundsThumbnails of background) {
    var bck_thumbnailSrc = `./assets/img/bg/${backgroundsThumbnails.code}/1.jpg` ;
    $(".bgItems").append($("<li>")
                    .append($("<img>").attr("src",bck_thumbnailSrc) 
                    ));
};

// render the thumbnails of avatars
for (const avatarsThumbnails of avatar) {
    var avt_thumbnailSrc = `./assets/img/av/${avatarsThumbnails.code}/1.png` ;
    $(".avItems").append($("<li>")
                    .append($("<img>").attr("src",avt_thumbnailSrc) 
                    ));
};

function changeAssets(event){
    event.preventDefault();
    console.log(event.keyCode);
    //check if is a background change
    if(event.keyCode > 36 && event.keyCode < 41 ){
        changeStageBackground(event);
    };
    //check if is an avatar change
    if(event.keyCode == 65 || event.keyCode == 68 || event.keyCode == 83 || event.keyCode == 87 ){
        changeStageAvatar(event);
    };
}

function changeStageAvatar(event) {

    if (event.keyCode == 68) //right 
    {
        variationIndexAvatar++;
        $('#avatarStage').attr("src", `./assets/img/av/${givemeVariationIndex("a")}.png`)

    };
    if (event.keyCode == 65) //left
    {
        variationIndexAvatar--;
        $('#avatarStage').attr("src", `./assets/img/av/${givemeVariationIndex("a")}.png`)

    };
    if (event.keyCode == 87) //Up
    {
        categoryIndexAvatar++;
        $('#avatarStage').attr("src", `./assets/img/av/${givemeCategoryIndex("a")}.png`)
    };
    if (event.keyCode == 83) //Down 
    {
        categoryIndexAvatar--;
        $('#avatarStage').attr("src", `./assets/img/av/${givemeCategoryIndex("a")}.png`)
    };
   
};

function changeStageBackground(event) {

    if (event.keyCode == 39) //right 
    {
        variationIndex++;
        $('#stage').attr("src", `./assets/img/bg/${givemeVariationIndex("b")}.jpg`)

    };
    if (event.keyCode == 37) //left
    {
        variationIndex--;
        $('#stage').attr("src", `./assets/img/bg/${givemeVariationIndex("b")}.jpg`)

    };
    if (event.keyCode == 38) //top 
    {
        categoryIndex++;
        $('#stage').attr("src", `./assets/img/bg/${givemeCategoryIndex("b")}.jpg`)
    };
    if (event.keyCode == 40) //bottom 
    {
        categoryIndex--;
        $('#stage').attr("src", `./assets/img/bg/${givemeCategoryIndex("b")}.jpg`)
    };
   
};

function givemeVariationIndex(b_a){
    // check if is a background or avatar
    if(b_a === "b"){
        //check if there are no more variations of backgrounds
        if(variationIndex >= background[categoryIndex].num.length){
            variationIndex = 0;
        }else if(variationIndex < 0){
            variationIndex = background[categoryIndex].num.length -1;
        }
        return (`${background[categoryIndex].code}/${background[categoryIndex].num[variationIndex]}`);

    }else {
        //else assume is an avatar change 
        //check if there are no more variations of \avatars
        if(variationIndexAvatar >= avatar[categoryIndexAvatar].num.length){
            variationIndexAvatar = 0;
            
        }else if(variationIndexAvatar < 0){
            variationIndexAvatar = avatar[categoryIndexAvatar].num.length -1;
        }
        return (`${avatar[categoryIndexAvatar].code}/${avatar[categoryIndexAvatar].num[variationIndexAvatar]}`);
    }
}

function givemeCategoryIndex(b_a){
    
    // check if is a background or avatar
    if(b_a === "b"){
        //check if there are no more categories of backgrounds
        if(categoryIndex == background.length){
        categoryIndex = 0;
        }else if(categoryIndex == -1){
            categoryIndex = background.length -1;
        }
        return (`${background[categoryIndex].code}/${background[categoryIndex].num[0]}`);
    }else {
        console.log(categoryIndexAvatar);
        //else assume is an avatar change
        if(categoryIndexAvatar == avatar.length){
            categoryIndexAvatar = 0;
            }else if(categoryIndexAvatar == -1){
                categoryIndexAvatar = avatar.length -1;
            }
            console.log(categoryIndexAvatar);
            return (`${avatar[categoryIndexAvatar].code}/${avatar[categoryIndexAvatar].num[0]}`);

    }
}



$(document).keydown(changeAssets);


