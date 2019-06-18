var canvas = document.querySelector('canvas');

canvas.width = 600;
canvas.height = 600;

var c = canvas.getContext('2d');

var i, j, cx= 120, cy =  120,x,y, xpos, ypos,start=0, spx=-1, spy=-1, sp=0;
var multipl = Math.sqrt( 2 ), linego = 0, firstTake=0;
var numr =(10 *  multipl);

var m = [],H = 5,W = 5, lo = [], lv = [], ld1 = [], ld2 = [];

{
for ( i = 1; i<=H; i++ ) {
    m[ i ] = [];
    for ( j = 1; j<=W; j++ ) {
        m[ i ][ j ] = 0 ;
    }
}
for ( i = 1; i<=H; i++ ) {
    lo[ i ] = [];
    for ( j = 1; j<=W-1; j++ ) {
        lo[ i ][ j ] = 0 ;
    }
}
for ( i = 1; i<=H-1; i++ ) {
    lv[ i ] = [];
    for ( j = 1; j<=W; j++ ) {
        lv[ i ][ j ] = 0 ;
    }
}

for ( i = 1; i<=H-1; i++ ) {
    lv[ i ] = [];
    for ( j = 1; j<=W; j++ ) {
        lv[ i ][ j ] = 0 ;
    }
}
for ( i = 1; i<=H; i++ ) {
    ld1[ i ] = [];
    for ( j = 1; j<=W; j++ ) {
        ld1[ i ][ j ] = 0 ;
    }
}
for ( i = 1; i<=H; i++ ) {
    ld2[ i ] = [];
    for ( j = 1; j<=W; j++ ) {
        ld2[ i ][ j ] = 0 ;
    }
}
}

function pointDraw(){
  firstTake++;
  for(i=0 ; i<=4 ; i++){

      for(j=0; j<=4 ; j++){
          c.beginPath();
          if(( i != spy && j!= spx) || sp==0){
          if(x<cx*j+80 && x>cx*j+40 && y<cy*i+80 && y>cy*i+40 && start==0 ){
            linego = 1;
            c.fillStyle = "gray" ;
            c.strokeStyle = "gray";
            start=1;
            spx = j;
            spy = i;
            m[i+1][j+1]=2;
            sp=1;
          }else{
          c.fillStyle = "white";
          c.strokeStyle = "white";
          }
          if( firstTake==1 || start == 1){
          c.ellipse(cx*j+ 60, cy*i+60, 20, 20, Math.PI *2, 0, 2 * Math.PI);
          c.fill();
          c.closePath();

          c.stroke();
        }
        }
      }
}
}


function lineDraw(){
//orizontal
if( linego == 1){
for(i=0 ; i<=4 ; i++){

      for(j=0; j<=3 ; j++){
        c.fillSyle = "white";
        xpos =((cx*j+60)+(cx*(j+1)+60))/2;
        ypos =cy*i+60;
          if(x<xpos+20 && x>xpos-20 && y<ypos+20 && y>ypos-20){
            if(((m[i+1][j+1]==2 || m[i+1][j+2]==2) && (m[i+1][j+1]==0 || m[i+1][j+2]==0)) && lo[i+1][j+1]==0){
              if(m[i+1][j+1]==2){
                m[i+1][j+1]=1;
                m[i+1][j+2]=2;
              }else{
              if(m[i+1][j+2]==2){
                m[i+1][j+2]=1;
                m[i+1][j+1]=2;
              }
            }
            c.beginPath();
            c.strokeStyle = "white";
            c.beginPath();
            c.moveTo(cx*j+80, cy*i+60);
            c.lineTo(cx*(j+1)+40, cy*i+60);
            c.closePath();
            c.fill();
            c.closePath();
            c.stroke();
            lo[i+1][j+1]=1;

          }
          }
    }
}
//vertical
for(i=0 ; i<=3 ; i++){

      for(j=0; j<=4 ; j++){
        xpos = cx*j+60;
        ypos = ((cy*(i+1)+60) + (cy*i+60))/2
        if(x<xpos+20 && x>xpos-20 && y<ypos+20 && y>ypos-20){
          if(((m[i+1][j+1]==2 || m[i+2][j+1]==2) && (m[i+1][j+1]==0 || m[i+2][j+1]==0)) && lv[i+1][j+1]==0 ){
            if(m[i+1][j+1]==2){
              m[i+1][j+1]=1;
              m[i+2][j+1]=2;
            }else{
            if(m[i+2][j+1]==2){
              m[i+2][j+1]=1;
              m[i+1][j+1]=2;
            }
          }
          c.beginPath();
          c.strokeStyle = "white";
          c.beginPath();
          c.moveTo(cx*j+60, cy*i+80);
          c.lineTo(cx*j+60, cy*(i+1)+40);
          c.closePath();
          c.fill();
          c.closePath();
          c.stroke();
          lv[i+1][j+1]=1;
        }
      }
    }
}
//diagonala 1
for(i=0; i<=3 ;i++){

    for(j=0; j<=3; j++){
      xpos = ((cx*j+60+numr) + (cx*(j+1)+60-numr))/2;
      ypos =((cx*i+60+numr)+ (cy*(i+1)+60-numr))/2;
    if(x<xpos+20 && x>xpos-20 && y<ypos+20 && y>ypos-20){
        if(((m[i+1][j+1]==2 || m[i+2][j+2]==2) && (m[i+1][j+1]==0 || m[i+2][j+2]==0)) && ld1[i+1][j+1]==0 ){
          if(m[i+1][j+1]==2){
            m[i+1][j+1]=1;
            m[i+2][j+2]=2;
          }else{
          if(m[i+2][j+2]==2){
            m[i+2][j+2]=1;
            m[i+1][j+1]=2;
          }
        }
      c.beginPath();
      c.strokeStyle = "white";
      c.beginPath();
      c.moveTo(cx*j+61+numr, cy*i+61+numr);
      c.lineTo(cx*(j+1)+59-numr, cy*(i+1)+60-numr);
      c.closePath();
      c.fill();
      c.closePath();
      c.stroke();
      ld1[i+1][j+1] = 1;
    }
  }
}
}
//diagonala 2
for(i=0; i<=3 ;i++){

    for(j=1; j<=4; j++){
      xpos = ((cx*j+60) + (cx*(j-1)+60))/2;
      ypos = ((cy*i+60) + (cy*(i+1)+60))/2;
      if(x<xpos+20 && x>xpos-20 && y<ypos+20 && y>ypos-20){
        if(((m[i+2][j]==2 || m[i+1][j+1]==2) && (m[i+2][j]==0 || m[i+1][j+1]==0)) && ld2[i+1][j+1]==0 ){
          if(m[i+2][j]==2){
            m[i+2][j]=1;
            m[i+1][j+1]=2;
          }else{
          if(m[i+1][j+1]==2){
            m[i+1][j+1]=1;
            m[i+2][j]=2;
          }
        }
      c.beginPath();
      c.strokeStyle = "white";
      c.beginPath();
      c.moveTo(cx*j+59-numr, cy*i+61+numr);
      c.lineTo(cx*(j-1)+61+numr, cy*(i+1)+59-numr);
      c.closePath();
      c.fill();
      c.closePath();
      c.stroke();
      ld2[i+1][j+1] = 1;
    }
    }
}
}
}
}


//function animate(){

    //c.clearRect(0, 0, 600, 600);


    pointDraw();
    function mouseXY(event) {
      var xM = event.clientX;
      var yM = event.clientY;

      x=xM-0;
      y=yM-0;
      c.fillStyle = "gray";


        lineDraw();
        pointDraw();

      }


    //requestAnimationFrame(animate);


//}
//animate();
