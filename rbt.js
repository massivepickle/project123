class Rbt{
    constructor(n,t){
        this.serial = n;
        this.type = t;
        this.m = true;
        this.k = true;
        this.over = 255;
        robot[n].speed = 4.8;
        robot[n].visible = false;
    }

    turn(){
        robot[this.serial].rotation = Math.atan2(player.y-robot[this.serial].y, player.x-robot[this.serial].x) * 180/PI;
        /*push();
        translate(robot[this.serial].x, robot[this.serial].y);
        tint(0, 153, 204, 126);
        rotate(robot[this.serial].rotation);
        image(ximg,0-robot[this.serial].width/2,0-robot[this.serial].height/2,30,30);
        pop();*/
    }

    move(){
        push();
        translate(robot[this.serial].x, robot[this.serial].y);
        rotate(robot[this.serial].rotation + 90);
        imageMode(CENTER);
        tint(255, 255);
        image(rbt_img,0,0,robot[this.serial].width,robot[this.serial].height);
        switch(this.type){
            case 0:
                tint(255,this.over);
                image(red,0,0,robot[this.serial].width,robot[this.serial].height);
                pop();
                break;
            case 1:
                tint(255,this.over);
                image(neon,0,0,robot[this.serial].width,robot[this.serial].height);
                pop();
                break;
            case 2:
                tint(255,this.over);
                image(gold,0,0,robot[this.serial].width,robot[this.serial].height);
                pop();
                break;
            default:
                break;
        }
        if(this.over < 255){
            this.k = false;
            if(this.over > 0){
                this.over -= 4;
            }
        }
        if(this.m){
            var run = player.x - robot[this.serial].x;
            var rise = player.y - robot[this.serial].y;

            var length  = sqrt((rise * rise) + (run * run));
            var unitX   = run   / length;
            var unitY   = rise  / length;

            robot[this.serial].x += unitX * robot[this.serial].speed;
            robot[this.serial].y += unitY * robot[this.serial].speed;

            robot[this.serial].collide(edge);             
        }
    }

    kill(){
        if(this.k && robot[this.serial].isTouching(player)){
            if(Math.round(millis()) - lasthit > 400){
                lives -= 1;
            }
            lasthit = Math.round(millis());
            this.teleport();
        }
    }

    teleportLimitations(){
        if(robot[this.serial].x < edge[0].x+60 || robot[this.serial].x > edge[1].x-60 ||
           robot[this.serial].y < edge[2].y+60 || robot[this.serial].y > edge[3].y-60 ||
           robot[this.serial].isTouching(player) || 
           robot[this.serial].isTouching(gem1) ||
           robot[this.serial].isTouching(gem2) ||
           robot[this.serial].isTouching(gem3) ||
           robot[this.serial].isTouching(edge) ){   
                        
            return true;
        }else{
            
            return false;
        }
    }

    async teleport(){
        //robot[this.serial].rotation = player.rotation - 180;
        await randomSeed(millis()*second());
        var temp = Math.round(random());
        if(temp === 0)
            robot[this.serial].x = random(player.x-51,player.x-10);
        else
            robot[this.serial].x = random(player.x+10,player.x+51);
        await randomSeed(Math.round(0.5*millis()));
        var newTemp = Math.round(random());
        if(newTemp === 0)
            robot[this.serial].y = random(player.y-51,player.y-10);
        else
            robot[this.serial].y = random(player.y+10,player.y+51);
        if(this.teleportLimitations()){
            this.teleport();
        }/*else if(robot[this.serial].rotation + 180 > player.rotation + 180 + 45 && robot[this.serial].rotation + 180 < player.rotation + 180 + 315){
            randomSeed(69);
            robot[this.serial].rotation = player.rotation - 180;
            this.teleport();
            console.log(player.rotation + 180)
            console.log(robot[this.serial].rotation + 180)
        }else{

        }*/
    }
    
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    collideGems(){
        robot[this.serial].collide(gem1);
        robot[this.serial].collide(gem2);
        robot[this.serial].collide(gem3);
    }

    collide(sprite){
        robot[this.serial].collide(sprite);
    }
}