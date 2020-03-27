let bigIsland=15000;

let map=[];
let mapRow=[];
for (i=0;i<400;i++) {
    for (j=0;j<200;j++) {
        mapRow.push(0);
    } 
map.push(mapRow);
mapRow=[];
} 


let x=Math.floor(Math.random() * 200)+50;
let y=Math.floor(Math.random() * 100)+50;



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
console.table(map);
let m=0;
for (l=0;l<map.length;l++){
    for (u=0;u<200;u++){
        if(map[l][u]==0){
           // $("#map").append(`<div id=${m}>`)
            //$(`#${m}`).css({
            //    height: '4px',
           //     width: '4px',
           //     position: 'absolute',
           //     top: u*4,
           //     left: l*4,
           // })
           // $(`#${m}`).css("background-color", "blue");
        }
        else{
            $("#map").append(`<div id=${m}>`)
            $(`#${m}`).css({
                height: '4px',
                width: '4px',
                position: 'absolute',
                top: u*4,
                left: l*4,
                
            })
            $(`#${m}`).css("background-color", "forestgreen");
        }
        m++;
    }
}

