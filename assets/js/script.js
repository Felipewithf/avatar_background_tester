
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

var variationIndex = 0; //left to right
var categoryIndex = 0; //up and down

console.log(variationIndex);

function changeStageBackground(event) {
    event.preventDefault();
    console.log(event.keyCode);
    if (event.keyCode == 39) //right 
    {
        variationIndex++;
        $('#stage').attr("src", `./assets/img/bg/${givemeVariationIndex()}.jpg`)

    };
    if (event.keyCode == 37) //left
    {
        variationIndex--;
        $('#stage').attr("src", `./assets/img/bg/${givemeVariationIndex()}.jpg`)

    };
    if (event.keyCode == 38) //top 
    {
        categoryIndex++;
        $('#stage').attr("src", `./assets/img/bg/${givemeCategoryIndex()}.jpg`)
        console.log(categoryIndex);
    };
    if (event.keyCode == 40) //bottom 
    {
        categoryIndex--;
        $('#stage').attr("src", `./assets/img/bg/${givemeCategoryIndex()}.jpg`)
       console.log(categoryIndex);
    };
   
};

function givemeVariationIndex(){
    //check if there are no more variations of backgrounds
    if(variationIndex == background[categoryIndex].num.length){
        variationIndex = 0;
    }else if(variationIndex == -1){
        variationIndex = background[categoryIndex].num.length -1;
    }
    return (`${background[categoryIndex].code}/${background[categoryIndex].num[variationIndex]}`);
}

function givemeCategoryIndex(){
    //check if there are no more categories of backgrounds
    if(categoryIndex == background.length){
      categoryIndex = 0;
      }else if(categoryIndex == -1){
         categoryIndex = background.length -1;
     }
    return (`${background[categoryIndex].code}/${background[categoryIndex].num[0]}`);
}

$(document).keydown(changeStageBackground);

