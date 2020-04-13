class Level{
    constructor(){}
    
    async play(){
        camera.position.x = player.x;
        camera.position.y = player.y;
        camera.zoom = 5;
        stroke(255);
        line(1920/2,0,1920/2,1080);
        line(0,1080/2,1920,1080/2);
        plr.show();
        if(start === 1){
            plr.move();
        }
        if(gamestate === "play"){
            if(lvl === 1){
                /*if(levelClear === true){
                    levelClear= false;
                    create = true;
                }*/
                if(create){
                    gem1 = createSprite(1920/2,1080/2 - 45,30,30);
                    gem2 = createSprite(1920/2,1080/2,30,30);
                    gem3 = createSprite(1920/2,1080/2 + 45,30,30);
                    gem1.visible = false;
                    gem2.visible = false;
                    gem3.visible = false;
                    l1_l1.push(createSprite(1920/2 - 35,1080/2,20,140));
                    l1_l1.push(createSprite(1920/2,1080/2 - 80,50,20));
                    l1_l1.push(createSprite(1920/2 + 35,1080/2,20,140));
                    l1_l1.push(createSprite(1920/2,1080/2 + 80,50,20));
                    robot.push(createSprite(30,30,10,10)); //robot[0]
                    robot.push(createSprite(980,540,10,10)); //robot[1] gem saefguarder
                    rbt.push(new Rbt(0,0)); //rbt[0]
                    rbt.push(new Rbt(1,1)); //rbt[1]
                    mouseX = 1000;
                    mouseY = 1080;
                    level1_layer1 = new Wall(l1_l1);
                    g1 = 255;
                    g2 = 255;
                    g3 = 255;
                    mouseIsPressed = false;
                    flag = 0;
                    create = false;
                }
                if(start === 0){
                    if(mouseIsPressed || flag === 1){
                        start = 1;
                    }
                }
                if(start === 1){
                    rbt[0].move();
                    rbt[1].move();
                    for(var i = 0; i < rbt.length; i++){
                        for(var j = 0; j < rbt.length; j++){
                            if(i !== j){
                                rbt[i].collide(robot[j]);
                            }
                        }
                        rbt[i].collide(player);
                    }
                    if(g1 + g2 + g3 > 3){
                        rbt[0].kill();
                        rbt[1].kill();
                        rbt[0].turn();
                        rbt[1].turn();
                    }else{      
                        for(var i = 0; i < rbt.length; i++){
                            rbt[i].k = false;
                            rbt[i].m = false;
                            if(rbt[i].over > 250){
                                rbt[i].over -= 8.5
                            }
                        }
                        player.speed = 2;
                        //player.m = false;
                    }
                    level1_layer1.l1();
                    for(var j = 0; j < robot.length; j++){
                        if(robot[j] !== undefined){
                            if(rbt[j].type !== 1){
                                rbt[j].collideGems();
                            }
                        }
                    }
                    if(20 > rbt[0].over + rbt[1].over > 0 /*&& rbt[0].over + rbt[1].over < 20*/){
                        flag = 0;
                    }
                    if(rbt[0].over + rbt[1].over < 2){
                        if(mouseIsPressed || flag === 1){
                            lvl = 2;
                            create = true;
                        }
                    }
                    gem.gem1();
                    gem.gem2();
                    gem.gem3();
                    player.collide(gem1);
                    player.collide(gem2);
                    player.collide(gem3);
                }
            }else if(lvl === 2){
                if(create){
                    mouseIsPressed = false;
                    flag = 0;
                    start = 0;
                    /*gem1 = createSprite(1920/2,1080/2 - 45,30,30);
                    gem2 = createSprite(1920/2,1080/2,30,30);
                    gem3 = createSprite(1920/2,1080/2 + 45,30,30);*/
                    g1 = 255; g2 = 255; g3 = 255;
                    //layer 1
                    l2_l1.push(createSprite(1920/2 - 35,1080/2,20,140));
                    l2_l1.push(createSprite(1920/2,1080/2 - 80,50,20));
                    l2_l1.push(createSprite(1920/2 + 35,1080/2,20,140));
                    l2_l1.push(createSprite(1920/2,1080/2 + 80,50,20));
                    //layer2
                    l2_l2.push(createSprite(1920/2 - 55,1080/2,20,180));
                    l2_l2.push(createSprite(1920/2,1080/2 - 100,90,20));
                    l2_l2.push(createSprite(1920/2 + 55,1080/2,20,180));
                    l2_l2.push(createSprite(1920/2,1080/2 + 100,90,20));
                    //layer 1 corners
                    l2_c1.push(createSprite(1920/2 - 35,1080/2 - 80,20,20));
                    l2_c1.push(createSprite(1920/2 + 35,1080/2 - 80,20,20));
                    l2_c1.push(createSprite(1920/2 + 35,1080/2 + 80,20,20));
                    l2_c1.push(createSprite(1920/2 - 35,1080/2 + 80,20,20));
                    //layer 2 corners
                    l2_c2.push(createSprite(1920/2 - 55,1080/2 - 100,20,20));
                    l2_c2.push(createSprite(1920/2 + 55,1080/2 - 100,20,20));
                    l2_c2.push(createSprite(1920/2 + 55,1080/2 + 100,20,20));
                    l2_c2.push(createSprite(1920/2 - 55,1080/2 + 100,20,20));
                    //
                    robot[0].x = 30;
                    robot[0].y = 30;
                    robot[1].x = 980;
                    robot[1].y = 540;
                    robot.push(createSprite(30,1050,10,10)); //robot[2]
                    rbt.push(new Rbt(2,0)); //rbt[2]
                    level2_layer1 = new Wall(l2_l1);
                    level2_corner1 = new Wall(l2_c1);
                    level2_layer2 = new Wall(l2_l2);
                    level2_corner2 = new Wall(l2_c2);
                    for(var i = 0; i < rbt.length; i++){
                        rbt[i].k = true;
                        rbt[i].m = true;
                        rbt[i].over = 256;
                    }
                    player.speed = 5;
                    create = false;
                }
                if(start === 0){
                    if(player.t > 0 && player.x !== 160 && player.y !== 90){
                        player.t -= 34;
                    }
                    if(player.t <= 0){
                        player.x = 160;
                        player.y = 90;
                    }
                    if(player.t <= 221 && player.x === 160 && player.y === 90){
                        player.t += 34;
                    }
                    if(player.t >= 255 && player.x === 160 && player.y === 90 && mouseIsPressed || flag === 1){
                        start = 1;
                    }
                }
                if(start === 1){
                    rbt[0].move();
                    rbt[1].move();
                    rbt[2].move();
                    for(var i = 0; i < rbt.length; i++){
                        for(var j = 0; j < rbt.length; j++){
                            if(i !== j){
                                rbt[i].collide(robot[j]);
                            }
                        }
                        rbt[i].collide(player);
                    }
                    if(g1 + g2 + g3 > 3){
                        for(var j = 0; j < robot.length; j++){
                            if(robot[j] !== undefined){
                                rbt[j].kill();
                                rbt[j].turn();
                            }
                        }
                    }else{      
                        for(var i = 0; i < rbt.length; i++){
                            rbt[i].k = false;
                            rbt[i].m = false;
                            if(rbt[i].over > 250){
                                rbt[i].over -= 8.5
                            }
                        }
                        player.speed = 2;
                        //player.m = false;
                    }
                    level2_layer1.l1();
                    level2_corner1.l1();
                    level2_layer2.l1();
                    level2_corner2.l1();
                    for(var j = 0; j < robot.length; j++){
                        if(robot[j] !== undefined){
                            if(rbt[j].type !== 1){
                                rbt[j].collideGems();
                            }
                        }
                    }
                    if(rbt[0].over + rbt[1].over > 0 && rbt[0].over + rbt[1].over < 20){
                        flag = 0;
                    }
                    if(rbt[0].over + rbt[1].over < 2){
                        if(mouseIsPressed || flag === 1){
                            lvl = 3;
                            create = true;
                        }
                    }
                    gem.gem1();
                    gem.gem2();
                    gem.gem3();
                    player.collide(gem1);
                    player.collide(gem2);
                    player.collide(gem3);
                }
            }else if(lvl === 3){
                if(create){
                    mouseIsPressed = false;
                    flag = 0;
                    start = 0;
                    /*gem1 = createSprite(1920/2,1080/2 - 45,30,30);
                    gem2 = createSprite(1920/2,1080/2,30,30);
                    gem3 = createSprite(1920/2,1080/2 + 45,30,30);*/
                    g1 = 255; g2 = 255; g3 = 255;
                    //layer 1
                    l3_l1.push(createSprite(1920/2 - 35,1080/2,20,140));
                    l3_l1.push(createSprite(1920/2,1080/2 - 80,50,20));
                    l3_l1.push(createSprite(1920/2 + 35,1080/2,20,140));
                    l3_l1.push(createSprite(1920/2,1080/2 + 80,50,20));
                    //layer2
                    l3_l2.push(createSprite(1920/2 - 55,1080/2,20,180));
                    l3_l2.push(createSprite(1920/2,1080/2 - 100,90,20));
                    l3_l2.push(createSprite(1920/2 + 55,1080/2,20,180));
                    l3_l2.push(createSprite(1920/2,1080/2 + 100,90,20));
                    //layer 3
                    l3_l3.push(createSprite(1920/2 - 75,1080/2,20,220));
                    l3_l3.push(createSprite(1920/2,1080/2 - 120,130,20));
                    l3_l3.push(createSprite(1920/2 + 75,1080/2,20,220));
                    l3_l3.push(createSprite(1920/2,1080/2 + 120,130,20));
                    //layer 1 corners
                    l3_c1.push(createSprite(1920/2 - 35,1080/2 - 80,20,20));
                    l3_c1.push(createSprite(1920/2 + 35,1080/2 - 80,20,20));
                    l3_c1.push(createSprite(1920/2 + 35,1080/2 + 80,20,20));
                    l3_c1.push(createSprite(1920/2 - 35,1080/2 + 80,20,20));
                    //layer 2 corners
                    l3_c2.push(createSprite(1920/2 - 55,1080/2 - 100,20,20));
                    l3_c2.push(createSprite(1920/2 + 55,1080/2 - 100,20,20));
                    l3_c2.push(createSprite(1920/2 + 55,1080/2 + 100,20,20));
                    l3_c2.push(createSprite(1920/2 - 55,1080/2 + 100,20,20));
                    //layer 3 corners
                    l3_c3.push(createSprite(1920/2 - 75,1080/2 - 120,20,20));
                    l3_c3.push(createSprite(1920/2 + 75,1080/2 - 120,20,20));
                    l3_c3.push(createSprite(1920/2 + 75,1080/2 + 120,20,20));
                    l3_c3.push(createSprite(1920/2 - 75,1080/2 + 120,20,20));
                    //
                    robot[0].x = 30;
                    robot[0].y = 30;
                    robot[1].x = 980;
                    robot[1].y = 540;
                    robot[2].x = 30;
                    robot[2].y = 1050;
                    robot.push(createSprite(1890,1050,10,10)); //robot[3]
                    rbt.push(new Rbt(3,0)); //rbt[3]
                    level3_layer1 = new Wall(l3_l1);
                    level3_corner1 = new Wall(l3_c1);
                    level3_layer2 = new Wall(l3_l2);
                    level3_corner2 = new Wall(l3_c2);
                    level3_layer3 = new Wall(l3_l3);
                    level3_corner3 = new Wall(l3_c3);
                    for(var i = 0; i < rbt.length; i++){
                        rbt[i].k = true;
                        rbt[i].m = true;
                        rbt[i].over = 256;
                    }
                    player.speed = 5;
                    create = false;
                }
                if(start === 0){
                    if(player.t > 0 && player.x !== 160 && player.y !== 90){
                        player.t -= 34;
                    }
                    if(player.t <= 0){
                        player.x = 160;
                        player.y = 90;
                    }
                    if(player.t <= 221 && player.x === 160 && player.y === 90){
                        player.t += 34;
                    }
                    if(player.t >= 255 && player.x === 160 && player.y === 90 && mouseIsPressed || flag === 1){
                        start = 1;
                    }
                }
                if(start === 1){
                    rbt[0].move();
                    rbt[1].move();
                    rbt[2].move();
                    rbt[3].move();
                    for(var i = 0; i < rbt.length; i++){
                        for(var j = 0; j < rbt.length; j++){
                            if(i !== j){
                                rbt[i].collide(robot[j]);
                            }
                        }
                        rbt[i].collide(player);
                    }
                    if(g1 + g2 + g3 > 3){
                        for(var j = 0; j < robot.length; j++){
                            if(robot[j] !== undefined){
                                rbt[j].kill();
                                rbt[j].turn();
                            }
                        }
                    }else{
                        for(var i = 0; i < rbt.length; i++){
                            rbt[i].k = false;
                            rbt[i].m = false;
                            if(rbt[i].over > 250){
                                rbt[i].over -= 8.5
                            }
                        }
                        player.speed = 2;
                        //player.m = false;
                    }
                    level3_layer1.l1();
                    level3_corner1.l1();
                    level3_layer2.l1();
                    level3_corner2.l1();
                    level3_layer3.l1();
                    level3_corner3.l1();
                    for(var j = 0; j < robot.length; j++){
                        if(robot[j] !== undefined){
                            if(rbt[j].type !== 1){
                                rbt[j].collideGems();
                            }
                        }
                    }
                    if(rbt[0].over + rbt[1].over > 0 && rbt[0].over + rbt[1].over < 20){
                        flag = 0;
                    }
                    if(rbt[0].over + rbt[1].over < 2){
                        if(mouseIsPressed || flag === 1){
                            lvl = 4;
                            create = true;
                        }
                    }
                    gem.gem1();
                    gem.gem2();
                    gem.gem3();
                    player.collide(gem1);
                    player.collide(gem2);
                    player.collide(gem3);
                }
            }else if(lvl === 4){
                if(create){
                    mouseIsPressed = false;
                    flag = 0;
                    start = 0;
                    /*gem1 = createSprite(1920/2,1080/2 - 45,30,30);
                    gem2 = createSprite(1920/2,1080/2,30,30);
                    gem3 = createSprite(1920/2,1080/2 + 45,30,30);*/
                    g1 = 255; g2 = 255; g3 = 255;
                    //layer 1
                    l4_l1.push(createSprite(1920/2 - 35,1080/2,20,140));
                    l4_l1.push(createSprite(1920/2,1080/2 - 80,50,20));
                    l4_l1.push(createSprite(1920/2 + 35,1080/2,20,140));
                    l4_l1.push(createSprite(1920/2,1080/2 + 80,50,20));
                    //layer2
                    l4_l2.push(createSprite(1920/2 - 55,1080/2,20,180));
                    l4_l2.push(createSprite(1920/2,1080/2 - 100,90,20));
                    l4_l2.push(createSprite(1920/2 + 55,1080/2,20,180));
                    l4_l2.push(createSprite(1920/2,1080/2 + 100,90,20));
                    //layer 3
                    l4_l3.push(createSprite(1920/2 - 75,1080/2,20,220));
                    l4_l3.push(createSprite(1920/2,1080/2 - 120,130,20));
                    l4_l3.push(createSprite(1920/2 + 75,1080/2,20,220));
                    l4_l3.push(createSprite(1920/2,1080/2 + 120,130,20));
                    //layer 4
                    l4_l4.push(createSprite(1920/2 - 95,1080/2,20,260));
                    l4_l4.push(createSprite(1920/2,1080/2 - 140,170,20));
                    l4_l4.push(createSprite(1920/2 + 95,1080/2,20,260));
                    l4_l4.push(createSprite(1920/2,1080/2 + 140,170,20));
                    //layer 1 corners
                    l4_c1.push(createSprite(1920/2 - 35,1080/2 - 80,20,20));
                    l4_c1.push(createSprite(1920/2 + 35,1080/2 - 80,20,20));
                    l4_c1.push(createSprite(1920/2 + 35,1080/2 + 80,20,20));
                    l4_c1.push(createSprite(1920/2 - 35,1080/2 + 80,20,20));
                    //layer 2 corners
                    l4_c2.push(createSprite(1920/2 - 55,1080/2 - 100,20,20));
                    l4_c2.push(createSprite(1920/2 + 55,1080/2 - 100,20,20));
                    l4_c2.push(createSprite(1920/2 + 55,1080/2 + 100,20,20));
                    l4_c2.push(createSprite(1920/2 - 55,1080/2 + 100,20,20));
                    //layer 3 corners
                    l4_c3.push(createSprite(1920/2 - 75,1080/2 - 120,20,20));
                    l4_c3.push(createSprite(1920/2 + 75,1080/2 - 120,20,20));
                    l4_c3.push(createSprite(1920/2 + 75,1080/2 + 120,20,20));
                    l4_c3.push(createSprite(1920/2 - 75,1080/2 + 120,20,20));
                    //layer 4 corners
                    l4_c4.push(createSprite(1920/2 - 95,1080/2 - 140,20,20));
                    l4_c4.push(createSprite(1920/2 + 95,1080/2 - 140,20,20));
                    l4_c4.push(createSprite(1920/2 + 95,1080/2 + 140,20,20));
                    l4_c4.push(createSprite(1920/2 - 95,1080/2 + 140,20,20));
                    //
                    robot[0].x = 30;
                    robot[0].y = 30;
                    robot[1].x = 980;
                    robot[1].y = 540;
                    robot[2].x = 30;
                    robot[2].y = 1050;
                    level4_layer1 = new Wall(l4_l1);
                    level4_corner1 = new Wall(l4_c1);
                    level4_layer2 = new Wall(l4_l2);
                    level4_corner2 = new Wall(l4_c2);
                    level4_layer3 = new Wall(l4_l3);
                    level4_corner3 = new Wall(l4_c3);
                    level4_layer4 = new Wall(l4_l4);
                    level4_corner4 = new Wall(l4_c4);
                    for(var i = 0; i < rbt.length; i++){
                        rbt[i].k = true;
                        rbt[i].m = true;
                        rbt[i].over = 256;
                    }
                    player.speed = 5;
                    create = false;
                }
                if(start === 0){
                    if(player.t > 0 && player.x !== 160 && player.y !== 90){
                        player.t -= 34;
                    }
                    if(player.t <= 0){
                        player.x = 160;
                        player.y = 90;
                    }
                    if(player.t <= 221 && player.x === 160 && player.y === 90){
                        player.t += 34;
                    }
                    if(player.t >= 255 && player.x === 160 && player.y === 90 && mouseIsPressed || flag === 1){
                        start = 1;
                    }
                }
                if(start === 1){
                    rbt[0].move();
                    rbt[1].move();
                    rbt[2].move();
                    for(var i = 0; i < rbt.length; i++){
                        for(var j = 0; j < rbt.length; j++){
                            if(i !== j){
                                rbt[i].collide(robot[j]);
                            }
                        }
                        rbt[i].collide(player);
                    }
                    if(g1 + g2 + g3 > 3){
                        for(var j = 0; j < robot.length; j++){
                            if(robot[j] !== undefined){
                                rbt[j].kill();
                                rbt[j].turn();
                            }
                        }
                    }else{
                        for(var i = 0; i < rbt.length; i++){
                            rbt[i].k = false;
                            rbt[i].m = false;
                            if(rbt[i].over > 250){
                                rbt[i].over -= 8.5
                            }
                        }
                        player.speed = 2;
                        //player.m = false;
                    }
                    level4_layer1.l1();
                    level4_corner1.l1();
                    level4_layer2.l1();
                    level4_corner2.l1();
                    level4_layer3.l1();
                    level4_corner3.l1();
                    level4_layer4.l1();
                    level4_corner4.l1();
                    for(var j = 0; j < robot.length; j++){
                        if(robot[j] !== undefined){
                            if(rbt[j].type !== 1){
                                rbt[j].collideGems();
                            }
                        }
                    }
                    if(rbt[0].over + rbt[1].over > 0 && rbt[0].over + rbt[1].over < 20){
                        flag = 0;
                    }
                    if(rbt[0].over + rbt[1].over < 2){
                        if(mouseIsPressed || flag === 1){
                            lvl = 5;
                            create = true;
                        }
                    }
                    gem.gem1();
                    gem.gem2();
                    gem.gem3();
                    player.collide(gem1);
                    player.collide(gem2);
                    player.collide(gem3);
                }
            }
        }
    }
}