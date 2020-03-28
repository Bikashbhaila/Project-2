
//Number of Pixles assigned to each Island
    let bigIsland=15000;

//Initialize variables
    let map=[]; //The X column
    let mapRow=[];  //The Y column
    let x=0; //Random X Position
    let y=0; //Random Y Position
    let MapID=0; //Map ID used to give each pixle a positioning
    let xRan=0;
    let yRan=0;
    let down=0;
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
    

for(o=0;o<=10;o++){
    x=Math.floor(Math.random() * 399)+1;
    y=Math.floor(Math.random() * 199)+1;

    if(map[x][y]==1){

        map[x][y]=2;
    }
    else{
        o--;
    }
}

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
        else if(map[l][u]==2){
            $("#map").append(`<div id=${MapID}>`)
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
        }
        else if(map[l][u]==3){
            $("#map").append(`<img src="./mountian.png" id=${MapID}>`)
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

