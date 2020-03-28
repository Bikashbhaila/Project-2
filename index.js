
//Number of Pixles assigned to each Island
    let bigIsland=15000;

//Initialize variables
    let map=[]; //The X column
    let mapRow=[];  //The Y column
    let x=0; //Random X Position
    let y=0; //Random Y Position
    let MapID=0; //Map ID used to give each pixle a positioning

//Generates the Array
    for (i=0;i<400;i++) {
        for (j=0;j<200;j++) {
        mapRow.push(0);
        } 
    map.push(mapRow);
    mapRow=[];
    } 

//Places Objects in the Array
    for(o=0;o<=10;o++){
        x=Math.floor(Math.random() * 200)+50;
        y=Math.floor(Math.random() * 100)+50;
        map[x][y]=1;
        for (k=bigIsland;k>0;k--){
            x=Math.floor(Math.random() * 395)+1;
            y=Math.floor(Math.random() * 195)+1;
                if(map[x-1][y]==1||map[x+1][y]==1||map[x][y-1]==1||map[x][y+1]==1&&map[x][y]!=1){
                    map[x][y]=1;
                }
        else{
            k++;
            }
        }
    }

//Consols the Array for Debuging
    console.table(map);


//Converts the array into a readable 
for (l=0;l<map.length;l++){
    for (u=0;u<200;u++){
        if(map[l][u]==1){
            $("#map").append(`<div id=${MapID}>`)
            $(`#${MapID}`).css({
                height: '4px',
                width: '4px',
                position: 'absolute',
                top: u*4,
                left: l*4,
                
            })
            $(`#${MapID}`).css("background-color", "forestgreen");
        }
        MapID++;
    }
}

