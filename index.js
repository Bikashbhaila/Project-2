
// Corner Navigation Buttons
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left',
      hoverEnabled: false
    });
  });
 
  let cityData=[];
  let city=0;


function start(){
    

//Initialize variables
    let map=[]; //The X column
    let mapRow=[];  //The Y column
    let x=0; //Random X Position
    let y=0; //Random Y Position
    let MapID=0; //Map ID used to give each pixle a positioning
    let xRan=0;
    let yRan=0;
    
//Generates the Array
    for (i=0;i<400;i++) {
        for (j=0;j<200;j++) {
        mapRow.push(0);
        } 
    map.push(mapRow);
    mapRow=[];
    } 

//Places Ground in the Array
for(o=0;o<=10;o++){
    x=Math.floor(Math.random() * 200)+50;
    y=Math.floor(Math.random() * 100)+50;
    map[x][y]=1;
    let bigIsland=Math.floor(Math.random() * 10000)+5000;
    for (k=bigIsland;k>0;k--){
        xRan=Math.floor(Math.random() * 3)-1;
        yRan=Math.floor(Math.random() * 3)-1;

        x=x+xRan;
        y=y+yRan;
        if(x<3){  x=3;} if(x>398){  x=398;}
        if(y<3){  y=3;} if(y>198){  y=198;}


            if(map[x-1][y]==1||map[x+1][y]==1||map[x][y-1]==1||map[x][y+1]==1&&map[x][y]!=1){
                map[x][y]=1;
            }
    else{
        k++;
        }
    }
}
    
//City Placer
for(o=0;o<=10;o++){
    x=Math.floor(Math.random() * 399)+1;
    y=Math.floor(Math.random() * 199)+1;

    if(map[x][y]==1){

        map[x][y]=2;

        let city={
            population: Math.floor(Math.random() * 100000)+1,
            name: "Enter City Here", 
            capital: "false",
            castle: "true",
            market: "true"
        };
        cityData.push(city);
    }
    else{
        o--;
    }
}
//Mountian Placer
for(o=0;o<=10;o++){
    x=Math.floor(Math.random() * 399)+1;
    y=Math.floor(Math.random() * 199)+1;

    if(map[x][y]==1){
        let bigIsland=Math.floor(Math.random() * 25)+25;
        for (k=bigIsland;k>0;k--){
             xRan=Math.floor(Math.random() * 6)-3;
             yRan=Math.floor(Math.random() * 6)-3;

            x=x+xRan;
            y=y+yRan;
            if(x<3){  x=3;} if(x>398){  x=398;}
            if(y<3){  y=3;} if(y>198){  y=198;}

            
            if(map[x][y]==1){
                map[x][y]=3;
            }
        
         }
    }   
    else{
        o--;
    }
}
//Consols the Array for Debuging
    //console.table(map);

cityNum=0;
//Converts the array into a readable 
for (l=0;l<map.length;l++){
    for (u=0;u<200;u++){
        if(map[l][u]==1){
            $("#map").append(`<div id=${MapID} class="grass">`)
            $(`#${MapID}`).css({
                height: '4px',
                width: '4px',
                position: 'absolute',
                top: u*4,
                left: l*4,
                
            })
            $(`#${MapID}`).css("background-color", "forestgreen");
        }
        else if(map[l][u]==2){
            $("#map").append(`<div id=${MapID} class="city city${cityNum}">`)
            $("#map").append(`<div id=${MapID}x>`)

            $(`#${MapID}`).css({
                height: '12px',
                width: '12px',
                position: 'absolute',
                top: u*4,
                left: l*4,
                
            })
            $(`#${MapID}x`).css({
                height: '4px',
                width: '4px',
                position: 'absolute',
                top: u*4,
                left: l*4,
            })
            $(`#${MapID}x`).css("background-color", "forestgreen");

            $(`#${MapID}`).css("border-style", "solid");
            $(`#${MapID}`).css("border-width", "1px");
            $(`#${MapID}`).css("border-color", "black");
            
            $(`#${MapID}`).css("z-index", "3");
            $(`#${MapID}`).css("border-radius", "50%");
            $(`#${MapID}`).css("background-color", "darkred");
            cityNum++;
        }
        else if(map[l][u]==3){
            $("#map").append(`<img src="./assets/mountian.png" id=${MapID}>`)
            $("#map").append(`<div id=${MapID}x>`)
            $(`#${MapID}`).css({
                height: '10px',
                width: '10px',
                position: 'absolute',
                top: u*4,
                left: l*4,
                
            })
            $(`#${MapID}x`).css({
                height: '4px',
                width: '4px',
                position: 'absolute',
                top: u*4,
                left: l*4,
                
            })
            $(`#${MapID}x`).css("background-color", "forestgreen");
            $(`#${MapID}`).css("z-index", "2");
        }
        MapID++;
    }
}
cityClick();
grassClick();
}


function cityClick() {
    $(".city").click(function(){
         city=$(this).attr('class')[9]
        $(".click").empty();
        $(".click").append(`
        <div class="click1">Population<input class="val1" type="number" value="${cityData[city].population}"></div>
        <div class="click2">Is Capital<input class="val2" type="text" value="${cityData[city].capital}"></div>
        <div class="click3">Has Castle<input class="val3" type="text" value="${cityData[city].castle}"></div>
        <div class="click4">Has Marketplace<input class="val4" type="text" value="${cityData[city].market}"></div>
        <div class="click5">City Name<input class="val5" type="text" value="${cityData[city].name}"></div>
        <input  class="click6" type="button" value="Save">
    `)
    $(".click6").click(function(){
        cityData[city].population=$(".val1").val()
        cityData[city].name=$(".val5").val()
        cityData[city].castle=$(".val3").val()
        cityData[city].market=$(".val4").val()
        cityData[city].capital=$(".val2").val()
    });
});
}
function grassClick() {
    $(".grass").click(function(){
        $(".click").empty();
    });

}

    
start();
