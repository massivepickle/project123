class Wall{
    constructor(n){
        this.count = n.length;
        this.n = n;
        //this.layer = l;
        this.horizontal = loadImage("horizontal.png");
        this.vertical = loadImage("vertical.png");
        //if(lvl === 1){
            for(var i = 0; i < n.length; i++){
                n[i].strength = 255;
                n[i].visible = false;
            }
        //}
    }

    l1(){
        for(var i = 0; i < this.count; i++){
            if(this.n[i] !== undefined){
                push();
                translate(this.n[i].x,this.n[i].y);
                if(this.n[i].strength <= 1){
                    delete this.n[i];
                    wallbreaks += 1;
                    break; 
                }
                for(var j = 0; j < robot.length; j++){
                    if(robot[j] !== undefined){
                        if(rbt[j].type !== 1){
                            if(robot[j].isTouching(this.n[i])){
                                this.n[i].strength -= 8;
                            }
                        }
                        rbt[j].collide(this.n[i]);
                    }
                }
                tint(255,this.n[i].strength);
                imageMode(CENTER);
                if(this.n[i].width > this.n[i].height || this.n[i].width === this.n[i].height){
                    image(this.horizontal,0,0,this.n[i].width,this.n[i].height);
                }else{
                    image(this.vertical,0,0,this.n[i].width,this.n[i].height);
                }
                pop();
                player.collide(this.n[i]);
            }
        }
    }
}