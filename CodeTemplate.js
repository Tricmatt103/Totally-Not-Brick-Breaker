$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	initializeLib(ctx);
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;

	numObjects = 0;
	numObjectsLoaded =0;
	var screen = 0;
	
	var score
	score = 0
	
	var Luigi = createObjectPic("Images/Luigi Stare.jpg")
	
	
	//Level 1
	var Rectangle = createObjectPic("Images/WhiteRect.png")
	var Brick = createObjectPic("Images/Brick.png")
	var Brick1 = createObjectPic("Images/Brick.png")
	var Brick2 = createObjectPic("Images/Brick.png")
	var Brick3 = createObjectPic("Images/Brick.png")
	var Brick4 = createObjectPic("Images/Brick.png")
	var Brick5 = createObjectPic("Images/Brick.png")
	var Brick6 = createObjectPic("Images/Brick.png")
	var Brick7 = createObjectPic("Images/Brick.png")
	var Brick8 = createObjectPic("Images/Brick.png")
	var Brick9 = createObjectPic("Images/Brick.png")
	var Brick10 = createObjectPic("Images/Brick.png")
	var Brick11 = createObjectPic("Images/Brick.png")
	var Brick12 = createObjectPic("Images/Brick.png")
	var Brick13 = createObjectPic("Images/Brick.png")
	var Brick14 = createObjectPic("Images/Brick.png")
	var Brick15 = createObjectPic("Images/Brick.png")
	var Brick16 = createObjectPic("Images/Brick.png")
	var Brick17 = createObjectPic("Images/Brick.png")
	var Brick18 = createObjectPic("Images/Brick.png")
	var Brick19 = createObjectPic("Images/Brick.png")
	var Brick20 = createObjectPic("Images/Brick.png")
	var Brick21 = createObjectPic("Images/Brick.png")
	var Brick22 = createObjectPic("Images/Brick.png")
	var Brick23 = createObjectPic("Images/Brick.png")
	var Brick24 = createObjectPic("Images/Brick.png")
	var Brick25 = createObjectPic("Images/Brick.png")
	
	//Level 2
	var Rectangle1 = createObjectPic("Images/WhiteRect.png")
	var Brick26 = createObjectPic("Images/Brick.png")
	var Brick27 = createObjectPic("Images/Brick.png")
	var Brick28 = createObjectPic("Images/Brick.png")
	var Brick29 = createObjectPic("Images/Brick.png")
	var Brick30 = createObjectPic("Images/Brick.png")
	var Brick31 = createObjectPic("Images/Brick.png")
	var Brick32 = createObjectPic("Images/Brick.png")
	var Brick33 = createObjectPic("Images/Brick.png")
	var Brick34 = createObjectPic("Images/Brick.png")
	var Brick35 = createObjectPic("Images/Brick.png")
	var Brick36 = createObjectPic("Images/Brick.png")
	var Brick37 = createObjectPic("Images/Brick.png")
	var Brick38 = createObjectPic("Images/Brick.png")
	var Brick39 = createObjectPic("Images/Brick.png")
	var Brick40 = createObjectPic("Images/Brick.png")
	var Brick41 = createObjectPic("Images/Brick.png")
	var Brick42 = createObjectPic("Images/Brick.png")
	var Brick43 = createObjectPic("Images/Brick.png")
	var Brick44 = createObjectPic("Images/Brick.png")
	var Brick45 = createObjectPic("Images/Brick.png")
	var Brick46 = createObjectPic("Images/Brick.png")
	var Brick47 = createObjectPic("Images/Brick.png")
	var Brick48 = createObjectPic("Images/Brick.png")
	var Brick49 = createObjectPic("Images/Brick.png")
	var Brick50 = createObjectPic("Images/Brick.png")
	var Brick51 = createObjectPic("Images/Brick.png")
	var Brick52 = createObjectPic("Images/Brick.png")
	var Brick53 = createObjectPic("Images/Brick.png")
	var Brick54 = createObjectPic("Images/Brick.png")
	var Brick55 = createObjectPic("Images/Brick.png")
	var Brick56 = createObjectPic("Images/Brick.png")
	var Brick57 = createObjectPic("Images/Brick.png")
	var Brick58 = createObjectPic("Images/Brick.png")
	var Brick59 = createObjectPic("Images/Brick.png")
	var DoubleBrick = createObjectPic("Images/QuestionBrick.png")
	var DoubleBrick1 = createObjectPic("Images/QuestionBrick.png")
	
	//Level 3
	var Rectangle2 = createObjectPic("Images/WhiteRect.png")
	var Brick60 = createObjectPic("Images/Brick.png")
	var Brick61 = createObjectPic("Images/Brick.png")
	var Brick62 = createObjectPic("Images/Brick.png")
	var Brick63 = createObjectPic("Images/Brick.png")
	var Brick64 = createObjectPic("Images/Brick.png")
	var Brick65 = createObjectPic("Images/Brick.png")
	var Brick66 = createObjectPic("Images/Brick.png")
	var Brick67 = createObjectPic("Images/Brick.png")
	var Brick68 = createObjectPic("Images/Brick.png")
	var Brick69 = createObjectPic("Images/Brick.png")
	var Brick70 = createObjectPic("Images/Brick.png")
	var Brick71 = createObjectPic("Images/Brick.png")
	var Brick72 = createObjectPic("Images/Brick.png")
	var Brick73 = createObjectPic("Images/Brick.png")
	var Brick74 = createObjectPic("Images/Brick.png")
	var Brick75 = createObjectPic("Images/Brick.png")
	var Brick76 = createObjectPic("Images/Brick.png")
	var Brick77 = createObjectPic("Images/Brick.png")
	var Brick78 = createObjectPic("Images/Brick.png")
	var Brick79 = createObjectPic("Images/Brick.png")
	var Brick80 = createObjectPic("Images/Brick.png")
	var Brick81 = createObjectPic("Images/Brick.png")
	var Brick82 = createObjectPic("Images/Brick.png")
	var Brick83 = createObjectPic("Images/Brick.png")
	var Brick84 = createObjectPic("Images/Brick.png")
	var Brick85 = createObjectPic("Images/Brick.png")
	var Brick86 = createObjectPic("Images/Brick.png")
	var Brick87 = createObjectPic("Images/Brick.png")
	var Brick88 = createObjectPic("Images/Brick.png")
	var Brick89 = createObjectPic("Images/Brick.png")
	var Brick90 = createObjectPic("Images/Brick.png")
	var Brick91 = createObjectPic("Images/Brick.png")
	var Brick92 = createObjectPic("Images/Brick.png")
	var Brick93 = createObjectPic("Images/Brick.png")
	var DoubleBrick2 = createObjectPic("Images/QuestionBrick.png")
	var DoubleBrick3 = createObjectPic("Images/QuestionBrick.png")
	var DoubleBrick4 = createObjectPic("Images/QuestionBrick.png")
	var DoubleBrick5 = createObjectPic("Images/QuestionBrick.png")
	var DoubleBrick6 = createObjectPic("Images/QuestionBrick.png")
	var DoubleBrick7 = createObjectPic("Images/QuestionBrick.png")
	var TripleBrick = createObjectPic("Images/TripleBrick.jpg")
	var TripleBrick1 = createObjectPic("Images/TripleBrick.jpg")
	var TripleBrick2 = createObjectPic("Images/TripleBrick.jpg")
	var TripleBrick3 = createObjectPic("Images/TripleBrick.jpg")
	
	//Boss Level
	var Rectangle3 = createObjectPic("Images/WhiteRect.png")
	
	var Boss = createObjectPic("Images/BossBrick.png")
	var Brick94 = createObjectPic("Images/Brick.png")
	var Brick95 = createObjectPic("Images/Brick.png")
	var Brick96 = createObjectPic("Images/Brick.png")
	var Brick97 = createObjectPic("Images/Brick.png")
	var Brick98 = createObjectPic("Images/Brick.png")
	var Brick99 = createObjectPic("Images/Brick.png")
	var Brick100 = createObjectPic("Images/Brick.png")
	var Brick101 = createObjectPic("Images/Brick.png")
	
	var Boss1 = createObjectPic("Images/BossBrick.png")
	var Brick102 = createObjectPic("Images/Brick.png")
	var Brick103 = createObjectPic("Images/Brick.png")
	var Brick104 = createObjectPic("Images/Brick.png")
	var Brick105 = createObjectPic("Images/Brick.png")
	var Brick106 = createObjectPic("Images/Brick.png")
	var Brick107 = createObjectPic("Images/Brick.png")
	var Brick108 = createObjectPic("Images/Brick.png")
	var Brick109 = createObjectPic("Images/Brick.png")
	var DoubleBrick8 = createObjectPic("Images/QuestionBrick.png")
	var DoubleBrick9 = createObjectPic("Images/QuestionBrick.png")
	var DoubleBrick10 = createObjectPic("Images/QuestionBrick.png")
	var DoubleBrick11 = createObjectPic("Images/QuestionBrick.png")

	var Boss2 = createObjectPic("Images/BossBrick.png")
        var Brick110 = createObjectPic("Images/Brick.png")
	var Brick111 = createObjectPic("Images/Brick.png")
	var Brick112 = createObjectPic("Images/Brick.png")
	var Brick113 = createObjectPic("Images/Brick.png")
	var Brick114 = createObjectPic("Images/Brick.png")
	var Brick115 = createObjectPic("Images/Brick.png")
	var Brick116 = createObjectPic("Images/Brick.png")
	var Brick117 = createObjectPic("Images/Brick.png")
	var DoubleBrick12 = createObjectPic("Images/QuestionBrick.png")
	var DoubleBrick13 = createObjectPic("Images/QuestionBrick.png")
	var DoubleBrick14 = createObjectPic("Images/QuestionBrick.png")
	var DoubleBrick15 = createObjectPic("Images/QuestionBrick.png")
    var DoubleBrick16 = createObjectPic("Images/QuestionBrick.png")
	var DoubleBrick17 = createObjectPic("Images/QuestionBrick.png")
	var DoubleBrick18 = createObjectPic("Images/QuestionBrick.png")
	var DoubleBrick19 = createObjectPic("Images/QuestionBrick.png")

	var Boss3 = createObjectPic("Images/BossBrick.png")
	
	
	
	
	var Ball = createObjectPic("Images/Ball.png")
	var Ball1 = createObjectPic("Images/Ball.png")
	var Ball2 = createObjectPic("Images/Ball.png")
	var Ball3 = createObjectPic("Images/Ball.png")
	
	var GameOver = createObjectPic("Images/GameOver.png")
	
    var mySound = addSound ("Sounds/PongSound.wav")
	var mySound1 = addSound ("Sounds/PongSound1.wav")
	var mySound2 = addSound ("Sounds/BossMusic.mp3")
	
	var button =createButton(160,50,300,100, "Images/PlayButton.png")
	
	
	button.job = function(){
	   screen = 8
	   score = 0
	  
	   
	
	Rectangle.x = 300
	Rectangle.y = 450
	
    Rectangle.speedx = 10
	Rectangle.speedy = 0
	
	Rectangle.scale = .32
	
	
	Ball.x = 300
	Ball.y = 370
	
	Ball.speedx = 10
	Ball.speedy = 11
	
	Ball.scale = .2
	
    Rectangle1.x = 300
	Rectangle1.y = 450
	
    Rectangle1.speedx = 10
	Rectangle1.speedy = 0
	
	Rectangle1.scale = .32
	
	
	Ball1.x = 300
	Ball1.y = 370
	
	Ball1.speedx = 12
	Ball1.speedy = 13
	
	Ball1.scale = .2
	
	Rectangle2.x = 300
	Rectangle2.y = 450
	
    Rectangle2.speedx = 10
	Rectangle2.speedy = 0
	
	Rectangle2.scale = .32
	
	
	Ball2.x = 300
	Ball2.y = 370
	
	Ball2.speedx = 14
	Ball2.speedy = 15
	
	Ball2.scale = .2
	
	Rectangle3.x = 300
	Rectangle3.y = 450
	
    Rectangle3.speedx = 10
	Rectangle3.speedy = 0
	
	Rectangle3.scale = .32
	
	
	Ball3.x = 300
	Ball3.y = 370
	
	Ball3.speedx = 13
	Ball3.speedy = 13
	
	Ball3.scale = .2
	
	GameOver.x = 0
	
	GameOver.scale = .5
	
	Luigi.x = 400
    Luigi.y = 300
	
	//Luigi.speedx = 10
	Luigi.speedy = 10
	Luigi.scale = .35
	
	button4.scale = 2
	
	
  //Bricks!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//Level 1
	
	Brick.x = 1
	Brick.y = 1
	
	Brick.scale = .1
	
	Brick1.x = 75
	Brick1.y = 1
	
	Brick1.scale = .1
	
	Brick2.x = 150
	Brick2.y = 1
	
	Brick2.scale = .1
	
	Brick3.x = 225
	Brick3.y = 1
	
	Brick3.scale = .1
	
	Brick4.x = 300
	Brick4.y = 1
	
	Brick4.scale = .1
	
	Brick5.x = 375
	Brick5.y = 1
	
	Brick5.scale = .1
	
	Brick6.x = 450
	Brick6.y = 1
	
	Brick6.scale = .1
	
	Brick7.x = 525
	Brick7.y = 1
	
	Brick7.scale = .1
	
	Brick8.x = 1
	Brick8.y = 30
	
	Brick8.scale = .1
	
	Brick9.x = 75
	Brick9.y = 30
	
	Brick9.scale = .1
	
	Brick10.x = 150
	Brick10.y = 30
	
	Brick10.scale = .1
	
	Brick11.x = 225
	Brick11.y = 30
	
	Brick11.scale = .1
	
	Brick12.x = 300
	Brick12.y = 30
	
	Brick12.scale = .1
	
	Brick13.x = 375
	Brick13.y = 30
	
	Brick13.scale = .1
	
	Brick14.x = 450
	Brick14.y = 30
	
	Brick14.scale = .1
	
	Brick15.x = 525
	Brick15.y = 30
	
	Brick15.scale = .1
	
	Brick16.x = 1
	Brick16.y = 60
	
	Brick16.scale = .1
	
	Brick17.x = 75
	Brick17.y = 60
	
	Brick17.scale = .1
	
	Brick18.x = 150
	Brick18.y = 60
	
	Brick18.scale = .1
	
	Brick19.x = 225
	Brick19.y = 60
	
	Brick19.scale = .1
	
	Brick20.x = 300
	Brick20.y = 60
	
	Brick20.scale = .1
	
	Brick21.x = 375
	Brick21.y = 60
	
	Brick21.scale = .1
	
	Brick22.x = 450
	Brick22.y = 60
	
	Brick22.scale = .1
	
	Brick23.x = 525
	Brick23.y = 60
	
	Brick23.scale = .1
	
	Brick24.x = 1
	Brick24.y = 90
	
	Brick24.scale = .1
	
	Brick25.x = 525
	Brick25.y = 90
	
	Brick25.scale = .1
	
	
	//Level 2
	
	Brick26.x = 1
	Brick26.y = 1
	
	Brick26.scale = .1
	
	Brick27.x = 75
	Brick27.y = 1
	
	Brick27.scale = .1
	
	Brick28.x = 150
	Brick28.y = 1
	
	Brick28.scale = .1
	
	Brick29.x = 225
	Brick29.y = 1
	
	Brick29.scale = .1
	
	Brick30.x = 300
	Brick30.y = 1
	
	Brick30.scale = .1
	
	Brick31.x = 375
	Brick31.y = 1
	
	Brick31.scale = .1
	
	Brick32.x = 450
	Brick32.y = 1
	
	Brick32.scale = .1
	
	Brick33.x = 525
	Brick33.y = 1
	
	Brick33.scale = .1
	
	Brick34.x = 1
	Brick34.y = 30
	
	Brick34.scale = .1
	
	Brick35.x = 75
	Brick35.y = 30
	
	Brick35.scale = .1
	
	Brick36.x = 150
	Brick36.y = 30
	
	Brick36.scale = .1
	
	Brick37.x = 225
	Brick37.y = 30
	
	Brick37.scale = .1
	
	Brick38.x = 300
	Brick38.y = 30
	
	Brick38.scale = .1
	
	Brick39.x = 375
	Brick39.y = 30
	
	Brick39.scale = .1
	
	Brick40.x = 450
	Brick40.y = 30
	
	Brick40.scale = .1
	
	Brick41.x = 525
	Brick41.y = 30
	
	Brick41.scale = .1
	
	Brick42.x = 1
	Brick42.y = 60
	
	Brick42.scale = .1
	
	Brick43.x = 75
	Brick43.y = 60
	
	Brick43.scale = .1
	
	Brick44.x = 150
	Brick44.y = 60
	
	Brick44.scale = .1
	
	Brick45.x = 225
	Brick45.y = 120
	
	Brick45.scale = .1
	
	Brick46.x = 300
	Brick46.y = 120
	
	Brick46.scale = .1
	
	Brick47.x = 375
	Brick47.y = 60
	
	Brick47.scale = .1
	
	Brick48.x = 450
	Brick48.y = 60
	
	Brick48.scale = .1
	
	Brick49.x = 525
	Brick49.y = 60
	
	Brick49.scale = .1
	
	Brick50.x = 1
	Brick50.y = 90
	
	Brick50.scale = .1
	
	Brick51.x = 525
	Brick51.y = 90
	
	Brick51.scale = .1
	
	Brick52.x = 150
	Brick52.y = 150
	
	Brick52.scale = .1
	
	Brick53.x = 800
	Brick53.y = 150
	
	Brick53.scale = .1
	
	Brick54.x = 800
	Brick54.y = 150
	
	Brick54.scale = .1
	
	Brick55.x = 375
	Brick55.y = 150
	
	Brick55.scale = .1
	
	Brick56.x = 1
	Brick56.y = 150
	
	Brick56.scale = .1
	
	Brick57.x = 1
	Brick57.y = 120
	
	Brick57.scale = .1
	
	Brick58.x = 525
	Brick58.y = 120
	
	Brick58.scale = .1
	
	Brick59.x = 525
	Brick59.y = 150
	
	Brick59.scale = .1
	
	DoubleBrick.x = 220
	DoubleBrick.y = 150
	
	DoubleBrick.scale = .022
	
	DoubleBrick1.x = 295
	DoubleBrick1.y = 150
	
	DoubleBrick1.scale = .022
	
	//Level 3
	
	Brick60.x = 1
	Brick60.y = 1
	
	Brick60.scale = .1
	
	Brick61.x = 75
	Brick61.y = 1
	
	Brick61.scale = .1
	
	Brick62.x = 150
	Brick62.y = 1
	
	Brick62.scale = .1
	
	Brick63.x = 225
	Brick63.y = 1
	
	Brick63.scale = .1
	
	Brick64.x = 300
	Brick64.y = 1
	
	Brick64.scale = .1
	
	Brick65.x = 375
	Brick65.y = 1
	
	Brick65.scale = .1
	
	Brick66.x = 450
	Brick66.y = 1
	
	Brick66.scale = .1
	
	Brick67.x = 525
	Brick67.y = 1
	
	Brick67.scale = .1
	
	Brick68.x = 1
	Brick68.y = 30
	
	Brick68.scale = .1
	
	Brick69.x = 75
	Brick69.y = 30
	
	Brick69.scale = .1
	
	Brick70.x = 150
	Brick70.y = 30
	
	Brick70.scale = .1
	
	Brick71.x = 800
	Brick71.y = 30
	
	Brick71.scale = .1
	
	Brick72.x = 800
	Brick72.y = 30
	
	Brick72.scale = .1
	
	Brick73.x = 375
	Brick73.y = 30
	
	Brick73.scale = .1
	
	Brick74.x = 450
	Brick74.y = 30

	Brick74.scale = .1
	
	Brick75.x = 525
	Brick75.y = 30
	
	Brick75.scale = .1
	
	Brick76.x = 800
	Brick76.y = 60
	
	Brick76.scale = .1
	
	Brick77.x = 75
	Brick77.y = 60
	
	Brick77.scale = .1
	
	Brick78.x = 150
	Brick78.y = 60
	
	Brick78.scale = .1
	
	Brick79.x = 225
	Brick79.y = 120
	
	Brick79.scale = .1
	
	Brick80.x = 300
	Brick80.y = 120
	
	Brick80.scale = .1
	
	Brick81.x = 375
	Brick81.y = 60
	
	Brick81.scale = .1
	
	Brick82.x = 450
	Brick82.y = 60
	
	Brick82.scale = .1
	
	Brick83.x = 800
	Brick83.y = 60
	
	Brick83.scale = .1
	
	Brick84.x = 1
	Brick84.y = 90
	
	Brick84.scale = .1
	
	Brick85.x = 525
	Brick85.y = 90
	
	Brick85.scale = .1
	
	Brick86.x = 150
	Brick86.y = 150
	
	Brick86.scale = .1
	
	Brick87.x = 800
	Brick87.y = 150
	
	Brick87.scale = .1
	
	Brick88.x = 800
	Brick88.y = 150
	
	Brick88.scale = .1
	
	Brick89.x = 375
	Brick89.y = 150
	
	Brick89.scale = .1
	
	Brick90.x = 1
	Brick90.y = 150
	
	Brick90.scale = .1
	
	Brick91.x = 1
	Brick91.y = 120
	
	Brick91.scale = .1
	
	Brick92.x = 525
	Brick92.y = 120
	
	Brick92.scale = .1
	
	Brick93.x = 525
	Brick93.y = 150
	
	Brick93.scale = .1
	
	DoubleBrick2.x = 220
	DoubleBrick2.y = 150
	
	DoubleBrick2.scale = .022
	
	DoubleBrick3.x = 295
	DoubleBrick3.y = 150
	
	DoubleBrick3.scale = .022
	
	DoubleBrick4.x = 800
	DoubleBrick4.y = 30
	
	DoubleBrick4.scale = .022
	
	DoubleBrick5.x = 800
	DoubleBrick5.y = 30
	
	DoubleBrick5.scale = .022
	
	DoubleBrick6.x = 800
	DoubleBrick6.y = 60
	
	DoubleBrick6.scale = .022
	
	DoubleBrick7.x = 800
	DoubleBrick7.y = 60
	
	DoubleBrick7.scale = .022
	
	TripleBrick.x = 225
	TripleBrick.y = 30
	
	TripleBrick.scale = .12
	
	TripleBrick1.x = 300
	TripleBrick1.y = 30
	
	TripleBrick1.scale = .12
	
	TripleBrick2.x = 1
	TripleBrick2.y = 60
	
	TripleBrick2.scale = .12
	
	TripleBrick3.x = 525
	TripleBrick3.y = 60
	
	TripleBrick3.scale = .12
	
	//Boss Level
	Boss.x = 300
	Boss.y = 30
	
    Boss.speedx = 10
	
	Boss.scale = .15
	
	Brick94.x = 1000
	Brick94.y = 120
	
	Brick94.scale = .1
	
	Brick95.x = 1000
	Brick95.y = 120
	
	Brick95.scale = .1
	
	Brick96.x = 1000
	Brick96.y = 120
	
	Brick96.scale = .1
	
	Brick97.x = 1000
	Brick97.y = 120
	
	Brick97.scale = .1
	
	Brick98.x = 1000
	Brick98.y = 120

	Brick98.scale = .1
	
	Brick99.x = 1000
	Brick99.y = 120
	
	Brick99.scale = .1
	
	Brick100.x = 1000
	Brick100.y = 120
	
	Brick100.scale = .1
	
	Brick101.x = 1000
	Brick101.y = 120
	
	Brick101.scale = .1
	
	
	Boss1.x = 800
	Boss1.y = 30
	
    Boss1.speedx = 9
	
	Boss1.scale = .15
	
	Brick102.x = 1000
	Brick102.y = 120
	
	Brick102.scale = .1
	
	Brick103.x = 1000
	Brick103.y = 120
	
	Brick103.scale = .1
	
	Brick104.x = 1000
	Brick104.y = 120
	
	Brick104.scale = .1
	
	Brick105.x = 1000
	Brick105.y = 120
	
	Brick105.scale = .1
	
	Brick106.x = 1000
	Brick106.y = 120

	Brick106.scale = .1
	
	Brick107.x = 1000
	Brick107.y = 120
	
	Brick107.scale = .1
	
	Brick108.x = 1000
	Brick108.y = 120
	
	Brick108.scale = .1
	
	Brick109.x = 1000
	Brick109.y = 120
	
	Brick109.scale = .1
	
	DoubleBrick8.x = 1000
	DoubleBrick8.y = 120
	
	DoubleBrick8.scale = .022
	
	DoubleBrick9.x = 1000
	DoubleBrick9.y = 120
	
	DoubleBrick9.scale = .022
	
	DoubleBrick10.x = 1000
	DoubleBrick10.y = 120
	
	DoubleBrick10.scale = .022
	
	DoubleBrick11.x = 1000
	DoubleBrick11.y = 120
	
	DoubleBrick11.scale = .022
	
	Boss2.x = 800
	Boss2.y = 30
	
    Boss2.speedx = 8
	
	Boss2.scale = .15


    Brick110.x = 1000
	Brick110.y = 120
	
	Brick110.scale = .1
	
	Brick111.x = 1000
	Brick111.y = 120
	
	Brick111.scale = .1
	
	Brick112.x = 1000
	Brick112.y = 120
	
	Brick112.scale = .1
	
	Brick113.x = 1000
	Brick113.y = 120
	
	Brick113.scale = .1
	
	Brick114.x = 1000
	Brick114.y = 120

	Brick114.scale = .1
	
	Brick115.x = 1000
	Brick115.y = 120
	
	Brick115.scale = .1
	
	Brick116.x = 1000
	Brick116.y = 120
	
	Brick116.scale = .1
	
	Brick117.x = 1000
	Brick117.y = 120
	
	Brick117.scale = .1

    DoubleBrick12.x = 1000
	DoubleBrick12.y = 120
	
	DoubleBrick12.scale = .022
	
	DoubleBrick13.x = 1000
	DoubleBrick13.y = 120
	
	DoubleBrick13.scale = .022
	
	DoubleBrick14.x = 1000
	DoubleBrick14.y = 120
	
	DoubleBrick14.scale = .022
	
	DoubleBrick15.x = 1000
	DoubleBrick15.y = 120
	
	DoubleBrick15.scale = .022
	
	DoubleBrick16.x = 1000
	DoubleBrick16.y = 120
	
	DoubleBrick16.scale = .022
	
	DoubleBrick17.x = 1000
	DoubleBrick17.y = 120
	
	DoubleBrick17.scale = .022
	
	DoubleBrick18.x = 1000
	DoubleBrick18.y = 120
	
	DoubleBrick18.scale = .022
	
	DoubleBrick19.x = 1000
	DoubleBrick19.y = 120
	
	DoubleBrick19.scale = .022
	
	Boss3.x = 800
	Boss3.y = 30
	
    Boss3.speedx = 7
	
	Boss3.scale = .15
	
	}
	  
	var button1 =createButton(160,200,300,100,"Images/InstructionButton.png")
	
	
	button1.job = function(){
	   screen = 3
	  }
	
	 var button2 =createButton(160,350,300,100,"Images/AboutButton.png")
	 
	button2.colour = 'Blue'
	button2.textCol = 'Black'
	
	button2.job = function(){
	   screen = 4
	  }
	var button3 =createButton(100,400,200,100, 'Images/Backbutton.png', "Back")
	
	button3.colour = 'Blue'
	button3.textCol = 'Black'
	
	button3.job = function(){
	   screen = 1
	  }
	  
	var button4 =createButton(70,400,200,100, 'Images/MainMenuButton.png', "MainMenu")
	
	button4.colour = 'Blue'
	button4.textCol = 'Black'
	
	button4.job = function(){
	   screen = 1
	   
	  }
	  
	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{
	/////////////////////
	///STATE VARIABLES
	/// All your variables get their start values here.
	
	
	
	
	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}

	init();	
	


	
	
	
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
		///////////////////////
		//	CLEAR THE SCREEN
		////////////////////
		ctx.fillStyle = 'Black';
		ctx.fillRect(0,0, w, h);	
		
		
		
		
		
		if(screen == 0){
		/////////////////////
		//	LOADING SCREEN
			ctx.fillStyle = 'red';
			ctx.fillText("Loading Images & Sounds: " + numObjectsLoaded + "/" + numObjects,100,100)
		
			if(numObjectsLoaded >= numObjects) screen = 1;
		 
		}else if(screen == 1){
		////////////////////
		//	MAIN MENU
		
		
			
			button.draw();
		    button1.draw();
			button2.draw();
			
		}else if(screen == 2){
		////////////////////
		//	GAME SCREEN 1
		
	 Ball.x = Ball.x + Ball.speedx
		    if(Ball.x > 570 ) Ball.speedx = Ball.speedx * -1
		    else if(Ball.x < 1 ) Ball.speedx = Ball.speedx * -1
	
		Ball.y = Ball.y + Ball.speedy
		    if(Ball.y > 510 ) Ball.speedy = Ball.speedy * -1
		    else if(Ball.y < 0 ) Ball.speedy = Ball.speedy * -1
	
	
	
		
		if(Ball.collideObject (Rectangle)){
	  //Ball.speedx = Ball.speedx * -1
	  Ball.speedy = Ball.speedy * -1
	  mySound1.play();
	    score += 1
	  
	  
	  }else if(Ball.collideObject (Brick)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick.scale = 0.01
	  Brick.x = 10000
	  Ball.speedy = Ball.speedy * -1
	  mySound.play();
	    score += 1
	  
	  }else if(Ball.collideObject (Brick1)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick1.scale = 0.01
	  Brick1.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
	  
	  }else if(Ball.collideObject (Brick2)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick2.scale = 0.01
	  Brick2.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
	 
	  }else if(Ball.collideObject (Brick3)){
	 //Ball.speedx = Ball.speedx * -1
	  Brick3.scale = 0.01
	  Brick3.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
	  
	  }else if(Ball.collideObject (Brick4)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick4.scale = 0.01
	  Brick4.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
	  
	  }else if(Ball.collideObject (Brick5)){
	 //Ball.speedx = Ball.speedx * -1
	  Brick5.scale = 0.01
	  Brick5.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
	  
	  }else if(Ball.collideObject (Brick6)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick6.scale = 0.01
	  Brick6.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
	  
	  }else if(Ball.collideObject (Brick7)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick7.scale = 0.01
	  Brick7.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
	  
	  }else if(Ball.collideObject (Brick8)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick8.scale = 0.01
	  Brick8.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
	  
	  }else if(Ball.collideObject (Brick9)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick9.scale = 0.01
	  Brick9.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
	  
	  }else if(Ball.collideObject (Brick10)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick10.scale = 0.01
	  Brick10.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
	 
	  }else if(Ball.collideObject (Brick11)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick11.scale = 0.01
	  Brick11.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
	  
	  }else if(Ball.collideObject (Brick12)){
	 //Ball.speedx = Ball.speedx * -1
	  Brick12.scale = 0.01
	  Brick12.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
	  
	  }else if(Ball.collideObject (Brick13)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick13.scale = 0.01
	  Brick13.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
	  
	  }else if(Ball.collideObject (Brick14)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick14.scale = 0.01
	  Brick14.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
	  
	  }else if(Ball.collideObject (Brick15)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick15.scale = 0.01
	  Brick15.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
	  
	  }else if(Ball.collideObject (Brick16)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick16.scale = 0.01
	  Brick16.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
	  
	  }else if(Ball.collideObject (Brick17)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick17.scale = 0.01
	  Brick17.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
	  
	  }else if(Ball.collideObject (Brick18)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick18.scale = 0.01
	  Brick18.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
	  
	  }else if(Ball.collideObject (Brick19)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick19.scale = 0.01
	  Brick19.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
	  
	  }else if(Ball.collideObject (Brick20)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick20.scale = 0.01
	  Brick20.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
	  
	  }else if(Ball.collideObject (Brick21)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick21.scale = 0.01
	  Brick21.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
	  
	  }else if(Ball.collideObject (Brick22)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick22.scale = 0.01
	  Brick22.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
	  
	  }else if(Ball.collideObject (Brick23)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick23.scale = 0.01
	  Brick23.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
	  
	  }else if(Ball.collideObject (Brick24)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick24.scale = 0.01
	  Brick24.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
		
	  }else if(Ball.collideObject (Brick25)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick25.scale = 0.01
	  Brick25.x = 10000
	  Ball.speedy = Ball.speedy * -1
	   mySound.play();
	    score += 1
	  }
	
	  
	  if(Brick.x > 1000 && Brick1.x > 1000 && Brick2.x > 1000 && Brick3.x > 1000 && Brick4.x > 1000 && Brick5.x > 1000 && Brick6.x > 1000 && Brick7.x > 1000 && Brick8.x > 1000 && Brick9.x > 1000 && Brick10.x > 1000 && Brick11.x > 1000 && Brick12.x > 1000 && Brick13.x > 1000 && Brick14.x > 1000 && Brick15.x > 1000 && Brick16.x > 1000 && Brick17.x > 1000 && Brick18.x > 1000 && Brick19.x > 1000 && Brick20.x > 1000 && Brick21.x > 1000 && Brick22.x > 1000 && Brick23.x > 1000 && Brick24.x > 1000 && Brick25.x > 1000){
	  alert("You won!!!                                                                                  Prepare for level 2!")
	  screen = 5
	  Ball1.x = 300
	  Ball1.y = 350
	  Rectangle1.x = 300
	  Rectangle1.y = 450
	  }
	  
	 if(Ball.y > 450){
	  alert("Game Over")
	   screen = 6
	  }
	  
	  
	  
	 ctx.font = "40px Times New Roman"
	 ctx.fillstyle = 'white'
	 ctx.fillText(score,450,300)
	   
	   
	 
		Ball.draw();
		Rectangle.draw();
		Brick.draw();
		Brick1.draw();
		Brick2.draw();
		Brick3.draw();
		Brick4.draw();
		Brick5.draw();
		Brick6.draw();
		Brick7.draw();
		Brick8.draw();
		Brick9.draw();
		Brick10.draw();
		Brick11.draw();
		Brick12.draw();
		Brick13.draw();
		Brick14.draw();
		Brick15.draw();
		Brick16.draw();
		Brick17.draw();
		Brick18.draw();
		Brick19.draw();
		Brick20.draw();
		Brick21.draw();
		Brick22.draw();
		Brick23.draw();
		Brick22.draw();
		Brick23.draw();
		Brick24.draw();
		Brick25.draw();
		
		}else if(screen == 3){
		//Instructions
		
		ctx.fillStyle = 'White'
		ctx.fillRect(0, 0, w, h)
		ctx.font = "20px Times New Roman"
		ctx.fillStyle = 'Black'
		ctx.fillText("Welcome to Totally not Brick Breaker!",10,25);
		ctx.font = "30px Times New Roman"
		ctx.fillText("Controls:",10,60);
		ctx.font = "20px Times New Roman"
		ctx.fillText("Use the left and right arrow keys to control the paddle to try and hit the", 10,95);
		ctx.fillText("ball into the bricks!",10,120)
		button3.draw();
		
		
		}else if(screen == 4){
		//About
		ctx.fillStyle = 'White'
		ctx.fillRect(0, 0, w, h)
		ctx.font = "20px Times New Roman"
		ctx.fillStyle = 'Black'
		ctx.fillText("This game was created by Matthew Tricarico in Mr Guzy's Grade 9",10,25);
		ctx.fillText("Tech class",10,50);
		button3.draw();
		
		
		}else if(screen == 5){
		//Level 2!
		Ball1.x = Ball1.x + Ball1.speedx
		    if(Ball1.x > 570 ) Ball1.speedx = Ball1.speedx * -1
		    else if(Ball1.x < 1 ) Ball1.speedx = Ball1.speedx * -1
	
		Ball1.y = Ball1.y + Ball1.speedy
		    if(Ball1.y > 510 ) Ball1.speedy = Ball1.speedy * -1
		    else if(Ball1.y < 0 ) Ball1.speedy = Ball1.speedy * -1
		
	    if(Ball1.collideObject (Rectangle1)){
	    //Ball.speedx = Ball.speedx * -1
	    Ball1.speedy = Ball1.speedy * -1
	    mySound1.play();
	     score += 1
	  
	  }else if(Ball1.collideObject (Brick26)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick26.scale = 0.01
	  Brick26.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick27)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick27.scale = 0.01
	  Brick27.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	 
	  }else if(Ball1.collideObject (Brick28)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick28.scale = 0.01
	  Brick28.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick29)){
	 //Ball.speedx = Ball.speedx * -1
	  Brick29.scale = 0.01
	  Brick29.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick30)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick30.scale = 0.01
	  Brick30.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick31)){
	 //Ball.speedx = Ball.speedx * -1
	  Brick31.scale = 0.01
	  Brick31.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick32)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick32.scale = 0.01
	  Brick32.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick33)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick33.scale = 0.01
	  Brick33.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick34)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick34.scale = 0.01
	  Brick34.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick35)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick35.scale = 0.01
	  Brick35.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick36)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick36.scale = 0.01
	  Brick36.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick37)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick37.scale = 0.01
	  Brick37.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
		
	  }else if(Ball1.collideObject (Brick38)){
	 //Ball.speedx = Ball.speedx * -1
	  Brick38.scale = 0.01
	  Brick38.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick39)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick39.scale = 0.01
	  Brick39.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick40)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick40.scale = 0.01
	  Brick40.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick41)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick41.scale = 0.01
	  Brick41.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick42)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick42.scale = 0.01
	  Brick42.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick43)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick43.scale = 0.01
	  Brick43.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick44)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick44.scale = 0.01
	  Brick44.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick45)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick45.scale = 0.01
	  Brick45.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick46)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick46.scale = 0.01
	  Brick46.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick47)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick47.scale = 0.01
	  Brick47.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick48)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick48.scale = 0.01
	  Brick48.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick49)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick49.scale = 0.01
	  Brick49.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick50)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick50.scale = 0.01
	  Brick50.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick51)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick51.scale = 0.01
	  Brick51.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick52)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick52.scale = 0.01
	  Brick52.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick53)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick53.scale = 0.01
	  Brick53.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick54)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick54.scale = 0.01
	  Brick54.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick55)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick55.scale = 0.01
	  Brick55.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick56)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick56.scale = 0.01
	  Brick56.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick57)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick57.scale = 0.01
	  Brick57.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick58)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick58.scale = 0.01
	  Brick58.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (Brick59)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick59.scale = 0.01
	  Brick59.x = 10000
	  mySound.play();
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (DoubleBrick)){
	  //Ball.speedx = Ball.speedx * -1
	  DoubleBrick.scale = 0.01
	  DoubleBrick.x = 10000
	  mySound.play();
	  Brick54.scale = .1
	  Brick54.x = 225
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
	  
	  }else if(Ball1.collideObject (DoubleBrick1)){
	  //Ball.speedx = Ball.speedx * -1
	  DoubleBrick1.scale = 0.01
	  DoubleBrick1.x = 10000
	  mySound.play();
	  Brick53.scale = .1
	  Brick53.x = 300
	  Ball1.speedy = Ball1.speedy * -1
	    score += 1
		
	  }
	  
	 
	 
	  
	  if(Brick26.x > 1000 && Brick27.x > 1000 && Brick28.x > 1000 && Brick29.x > 1000 && Brick30.x > 1000 && Brick31.x > 1000 && Brick32.x > 1000 && Brick33.x > 1000 && Brick34.x > 1000 && Brick35.x > 1000 && Brick36.x > 1000 && Brick37.x > 1000 && Brick38.x > 1000 && Brick39.x > 1000 && Brick40.x > 1000 && Brick41.x > 1000 && Brick42.x > 1000 && Brick43.x > 1000 && Brick44.x > 1000 && Brick45.x > 1000 && Brick46.x > 1000 && Brick47.x > 1000 && Brick48.x > 1000 && Brick49.x > 1000 && Brick50.x > 1000 && Brick51.x > 1000 && Brick52.x > 1000){// && Brick53.x > 1000 && Brick54.x > 1000 && Brick55.x > 1000){// && Brick56.x > 1000 && Brick57.x > 1000 && Brick58.x > 1000 && Brick59.x > 1000){// && DoubleBrick.x > 1000 && DoubleBrick1.x > 1000){
	  alert("You won!!!                                                                                  Prepare for level 3!")
	  screen = 7
	  Ball2.x = 300
	  Ball2.y = 350
	  Rectangle2.x = 300
	  Rectangle2.y = 450
	  }
	  
	 if(Ball1.y > 450){
	  alert("Game Over")
	   screen = 6
	   
	  }
	  
	  
	  
	 ctx.font = "40px Times New Roman"
	 ctx.fillstyle = 'white'
	 ctx.fillText(score,450,300)
	   
	   
	 
		Ball1.draw();
		Rectangle1.draw();
		Brick26.draw();
		Brick27.draw();
		Brick28.draw();
		Brick29.draw();
		Brick30.draw();
		Brick31.draw();
		Brick32.draw();
		Brick33.draw();
		Brick34.draw();
		Brick35.draw();
		Brick36.draw();
		Brick37.draw();
		Brick38.draw();
		Brick39.draw();
		Brick40.draw();
		Brick41.draw();
		Brick42.draw();
		Brick43.draw();
		Brick44.draw();
		Brick45.draw();
		Brick46.draw();
		Brick47.draw();
		Brick48.draw();
		Brick49.draw();
		Brick50.draw();
		Brick51.draw();
		Brick52.draw();
		Brick53.draw();
		Brick54.draw();
		Brick55.draw();
		Brick56.draw();
		Brick57.draw();
		Brick58.draw();
		Brick59.draw();
		DoubleBrick.draw();
		DoubleBrick1.draw();

		
		}else if(screen == 6){
		//Game Over
		GameOver.draw();
		button4.draw();
		mySound2.stop();
		//wee gee!!!!!
		Luigi.y = Luigi.y + Luigi.speedy
		    if(Luigi.y > 430 ) Luigi.speedy = Luigi.speedy * -1
		    else if(Luigi.y < 0 ) Luigi.speedy = Luigi.speedy * -1
		
		Luigi.draw();
		}else if(screen == 7){
		
		Ball2.x = Ball2.x + Ball2.speedx
		    if(Ball2.x > 570 ) Ball2.speedx = Ball2.speedx * -1
		    else if(Ball2.x < 1 ) Ball2.speedx = Ball2.speedx * -1
	
		Ball2.y = Ball2.y + Ball2.speedy
		    if(Ball2.y > 510 ) Ball2.speedy = Ball2.speedy * -1
		    else if(Ball2.y < 0 ) Ball2.speedy = Ball2.speedy * -1
		
		if(Ball2.collideObject (Rectangle2)){
	    //Ball.speedx = Ball.speedx * -1
	    Ball2.speedy = Ball2.speedy * -1
	    mySound1.play();
	     score += 1
	  
	  }else if(Ball2.collideObject (Brick60)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick60.scale = 0.01
	  Brick60.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick61)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick61.scale = 0.01
	  Brick61.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	 
	  }else if(Ball2.collideObject (Brick62)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick62.scale = 0.01
	  Brick62.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick63)){
	 //Ball.speedx = Ball.speedx * -1
	  Brick63.scale = 0.01
	  Brick63.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick64)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick64.scale = 0.01
	  Brick64.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick65)){
	 //Ball.speedx = Ball.speedx * -1
	  Brick65.scale = 0.01
	  Brick65.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick66)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick66.scale = 0.01
	  Brick66.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick67)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick67.scale = 0.01
	  Brick67.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick68)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick68.scale = 0.01
	  Brick68.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick69)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick69.scale = 0.01
	  Brick69.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick70)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick70.scale = 0.01
	  Brick70.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick71)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick71.scale = 0.01
	  Brick71.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
		
	  }else if(Ball2.collideObject (Brick72)){
	 //Ball.speedx = Ball.speedx * -1
	  Brick72.scale = 0.01
	  Brick72.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick73)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick73.scale = 0.01
	  Brick73.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick74)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick74.scale = 0.01
	  Brick74.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick75)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick75.scale = 0.01
	  Brick75.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick76)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick76.scale = 0.01
	  Brick76.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick77)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick77.scale = 0.01
	  Brick77.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick78)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick78.scale = 0.01
	  Brick78.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick79)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick79.scale = 0.01
	  Brick79.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick80)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick80.scale = 0.01
	  Brick80.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick81)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick81.scale = 0.01
	  Brick81.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick82)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick82.scale = 0.01
	  Brick82.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick83)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick83.scale = 0.01
	  Brick83.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick84)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick84.scale = 0.01
	  Brick84.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick85)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick85.scale = 0.01
	  Brick85.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick86)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick86.scale = 0.01
	  Brick86.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick87)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick87.scale = 0.01
	  Brick87.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick88)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick88.scale = 0.01
	  Brick88.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick89)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick89.scale = 0.01
	  Brick89.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick90)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick90.scale = 0.01
	  Brick90.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick91)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick91.scale = 0.01
	  Brick91.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick92)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick92.scale = 0.01
	  Brick92.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (Brick93)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick93.scale = 0.01
	  Brick93.x = 10000
	  mySound.play();
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (DoubleBrick2)){
	  //Ball.speedx = Ball.speedx * -1
	  DoubleBrick2.scale = 0.01
	  DoubleBrick2.x = 10000
	  mySound.play();
	  Brick88.scale = .1
	  Brick88.x = 225
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (DoubleBrick3)){
	  //Ball.speedx = Ball.speedx * -1
	  DoubleBrick3.scale = 0.01
	  DoubleBrick3.x = 10000
	  mySound.play();
	  Brick87.scale = .1
	  Brick87.x = 300
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
		
	  }else if(Ball2.collideObject (DoubleBrick4)){
	  //Ball.speedx = Ball.speedx * -1
	  DoubleBrick4.scale = 0.01
	  DoubleBrick4.x = 10000
	  mySound.play();
	  Brick71.scale = .1
	  Brick71.x = 225
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (DoubleBrick5)){
	  //Ball.speedx = Ball.speedx * -1
	  DoubleBrick5.scale = 0.01
	  DoubleBrick5.x = 10000
	  mySound.play();
	  Brick72.scale = .1
	  Brick72.x = 300
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1

     }else if(Ball2.collideObject (DoubleBrick6)){
	  //Ball.speedx = Ball.speedx * -1
	  DoubleBrick6.scale = 0.01
	  DoubleBrick6.x = 10000
	  mySound.play();
	  Brick76.scale = .1
	  Brick76.x = 1
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (DoubleBrick7)){
	  //Ball.speedx = Ball.speedx * -1
	  DoubleBrick7.scale = 0.01
	  DoubleBrick7.x = 10000
	  mySound.play();
	  Brick83.scale = .1
	  Brick83.x = 525
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	
	  }else if(Ball2.collideObject (TripleBrick)){
	  //Ball.speedx = Ball.speedx * -1
	  TripleBrick.scale = 0.01
	  TripleBrick.x = 10000
	  mySound.play();
	  DoubleBrick4.scale = .022
	  DoubleBrick4.x = 225
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (TripleBrick1)){
	  //Ball.speedx = Ball.speedx * -1
	  TripleBrick1.scale = 0.01
	  TripleBrick1.x = 10000
	  mySound.play();
	  DoubleBrick5.scale = .022
	  DoubleBrick5.x = 300
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1

		}else if(Ball2.collideObject (TripleBrick2)){
	  //Ball.speedx = Ball.speedx * -1
	  TripleBrick2.scale = 0.01
	  TripleBrick2.x = 10000
	  mySound.play();
	  DoubleBrick6.scale = .022
	  DoubleBrick6.x = 1
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
	  
	  }else if(Ball2.collideObject (TripleBrick3)){
	  //Ball.speedx = Ball.speedx * -1
	  TripleBrick3.scale = 0.01
	  TripleBrick3.x = 10000
	  mySound.play();
	  DoubleBrick7.scale = .022
	  DoubleBrick7.x = 525
	  Ball2.speedy = Ball2.speedy * -1
	    score += 1
		
	  }
		
	  if(Brick60.x > 1000 && Brick61.x > 1000 && Brick62.x > 1000 && Brick63.x > 1000 && Brick64.x > 1000 && Brick65.x > 1000 && Brick66.x > 1000 && Brick67.x > 1000 && Brick68.x > 1000 && Brick69.x > 1000 && Brick70.x > 1000 && Brick71.x > 1000 && Brick72.x > 1000 && Brick73.x > 1000 && Brick74.x > 1000 && Brick75.x > 1000 && Brick76.x > 1000 && Brick77.x > 1000 && Brick78.x > 1000 && Brick79.x > 1000 && Brick80.x > 1000 && Brick81.x > 1000 && Brick82.x > 1000 && Brick83.x > 1000 && Brick84.x > 1000 && Brick85.x > 1000 && Brick86.x > 1000 && Brick87.x > 1000 && Brick88.x > 1000 && Brick89.x > 1000 && Brick90.x > 1000 && Brick91.x > 1000 && Brick92.x > 1000 && Brick93.x > 1000 && DoubleBrick2.x > 1000 && DoubleBrick3.x > 1000 && DoubleBrick4.x > 1000 && DoubleBrick5.x > 1000 && DoubleBrick6.x > 1000 && DoubleBrick7.x > 1000 && TripleBrick.x > 1000 && TripleBrick1.x > 1000 && TripleBrick2.x > 1000 && TripleBrick3.x > 1000){
	  alert("You won!!!                                                                                  Prepare for the Boss Level!")
	  screen = 8
	  Ball3.x = 300
	  Ball3.y = 350
	  Rectangle3.x = 300
	  Rectangle3.y = 450
		}
		
	  if(Ball2.y > 450){
	  alert("Game Over")
	   screen = 6
	  }
		
		
	       Ball2.draw();
		Rectangle2.draw();
		Brick60.draw();
		Brick61.draw();
		Brick62.draw();
		Brick63.draw();
		Brick64.draw();
		Brick65.draw();
		Brick66.draw();
		Brick67.draw();
		Brick68.draw();
		Brick69.draw();
		Brick70.draw();
		Brick71.draw();
		Brick72.draw();
		Brick73.draw();
		Brick74.draw();
		Brick75.draw();
		Brick76.draw();
		Brick77.draw();
		Brick78.draw();
		Brick79.draw();
		Brick80.draw();
		Brick81.draw();
		Brick82.draw();
		Brick83.draw();
		Brick84.draw();
		Brick85.draw();
		Brick86.draw();
		Brick87.draw();
		Brick88.draw();
		Brick89.draw();
		Brick90.draw();
		Brick91.draw();
		Brick92.draw();
		Brick93.draw();
		DoubleBrick2.draw();
		DoubleBrick3.draw();
        DoubleBrick4.draw();
		DoubleBrick5.draw();
		DoubleBrick6.draw();
		DoubleBrick7.draw();
		TripleBrick.draw();
		TripleBrick1.draw();
		TripleBrick2.draw();
		TripleBrick3.draw();
		
			
            
        }else if(screen == 8){
		mySound2.play();
		
		
		Boss.x = Boss.x + Boss.speedx
		    if(Boss.x > 525 ) Boss.speedx = Boss.speedx * -1
		    else if(Boss.x < 0 ) Boss.speedx = Boss.speedx * -1
		
		Boss1.x = Boss1.x + Boss1.speedx
		    if(Boss1.x > 525 ) Boss1.speedx = Boss1.speedx * -1
		    else if(Boss1.x < 0 ) Boss1.speedx = Boss1.speedx * -1
		
		Boss2.x = Boss2.x + Boss2.speedx
		    if(Boss2.x > 525 ) Boss2.speedx = Boss2.speedx * -1
		    else if(Boss2.x < 0 ) Boss2.speedx = Boss2.speedx * -1
		
		Boss3.x = Boss3.x + Boss3.speedx
		    if(Boss3.x > 525 ) Boss3.speedx = Boss3.speedx * -1
		    else if(Boss3.x < 0 ) Boss3.speedx = Boss3.speedx * -1
		
		Ball3.x = Ball3.x + Ball3.speedx
		    if(Ball3.x > 570 ) Ball3.speedx = Ball3.speedx * -1
		    else if(Ball3.x < 1 ) Ball3.speedx = Ball3.speedx * -1
	
		Ball3.y = Ball3.y + Ball3.speedy
		    if(Ball3.y > 510 ) Ball3.speedy = Ball3.speedy * -1
		    else if(Ball3.y < 0 ) Ball3.speedy = Ball3.speedy * -1
		
		if(Ball3.collideObject (Rectangle3)){
	    //Ball.speedx = Ball.speedx * -1
	    Ball3.speedy = Ball3.speedy * -1
	    mySound1.play();
	     score += 1
	  
	    }else if(Ball3.collideObject (Boss)){
	    //Ball.speedx = Ball.speedx * -1
	    mySound.play();
		Ball3.x = Rectangle.x
		Ball3.y = 370
		Brick94.x = 1
		Brick95.x = 75
		Brick96.x = 150
		Brick97.x = 225
		Brick98.x = 300
		Brick99.x = 375
		Brick100.x = 450
		Brick101.x = 525
		Boss1.x = Boss.x
		Boss.scale = 0.01
	    Boss.x = 10000
	    Ball3.speedy = Ball3.speedy * -1
	    score += 1
		
	  }else if(Ball3.collideObject (Brick94)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick94.scale = 0.01
	  Brick94.x = 10000
	  mySound.play();
	  Ball3.speedy = Ball3.speedy * -1
	    score += 1
	  
	  }else if(Ball3.collideObject (Brick95)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick95.scale = 0.01
	  Brick95.x = 10000
	  mySound.play();
	  Ball3.speedy = Ball3.speedy * -1
	    score += 1
	 
	  }else if(Ball3.collideObject (Brick96)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick96.scale = 0.01
	  Brick96.x = 10000
	  mySound.play();
	  Ball3.speedy = Ball3.speedy * -1
	    score += 1
	  
	  }else if(Ball3.collideObject (Brick97)){
	 //Ball.speedx = Ball.speedx * -1
	  Brick97.scale = 0.01
	  Brick97.x = 10000
	  mySound.play();
	  Ball3.speedy = Ball3.speedy * -1
	    score += 1
	  
	  }else if(Ball3.collideObject (Brick98)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick98.scale = 0.01
	  Brick98.x = 10000
	  mySound.play();
	  Ball3.speedy = Ball3.speedy * -1
	    score += 1
	  
	  }else if(Ball3.collideObject (Brick99)){
	 //Ball.speedx = Ball.speedx * -1
	  Brick99.scale = 0.01
	  Brick99.x = 10000
	  mySound.play();
	  Ball3.speedy = Ball3.speedy * -1
	    score += 1
	  
	  }else if(Ball3.collideObject (Brick100)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick100.scale = 0.01
	  Brick100.x = 10000
	  mySound.play();
	  Ball3.speedy = Ball3.speedy * -1
	    score += 1
	  
	  }else if(Ball3.collideObject (Brick101)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick101.scale = 0.01
	  Brick101.x = 10000
	  mySound.play();
	  Ball3.speedy = Ball3.speedy * -1
	    score += 1
		
		
		
		
		
		 }else if(Ball3.collideObject (Boss1)){
	    //Ball.speedx = Ball.speedx * -1
		Ball3.x = Rectangle3.x
		Ball3.y = 370
	    mySound.play();
		Brick94.x = 1000
		Brick95.x = 1000
		Brick96.x = 1000
		Brick97.x = 1000
		Brick98.x = 1000
		Brick99.x = 1000
		Brick100.x = 1000
		Brick101.x = 1000
		
		Brick102.x = 1000
		Brick103.x = 75
		Brick104.x = 150
		Brick105.x = 1000
		Brick106.x = 1000
		Brick107.x = 375
		Brick108.x = 450
		Brick109.x = 1000
		DoubleBrick8.x = 1
		DoubleBrick9.x = 225
		DoubleBrick10.x = 300
		DoubleBrick11.x = 525
			
		Boss2.x = Boss1.x
		Boss1.scale = 0.01
	    Boss1.x = 10000
	    Ball3.speedy = Ball3.speedy * -1
	    score += 1
		
	  
	  }else if(Ball3.collideObject (DoubleBrick8)){
	  //Ball.speedx = Ball.speedx * -1
	  DoubleBrick8.scale = 0.01
	  DoubleBrick8.x = 10000
	  mySound.play();
	  Brick102.scale = .1
	  Brick102.x = 1
	  Ball3.speedy = Ball3.speedy * -1
	    score += 1
	  
	  }else if(Ball3.collideObject (DoubleBrick9)){
	  //Ball.speedx = Ball.speedx * -1
	  DoubleBrick9.scale = 0.01
	  DoubleBrick9.x = 10000
	  mySound.play();
	  Brick106.scale = .1
	  Brick106.x = 225
	  Ball3.speedy = Ball3.speedy * -1
	    score += 1
		
	  }else if(Ball3.collideObject (DoubleBrick10)){
	  //Ball.speedx = Ball.speedx * -1
	  DoubleBrick10.scale = 0.01
	  DoubleBrick10.x = 10000
	  mySound.play();
	  Brick107.scale = .1
	  Brick107.x = 300
	  Ball3.speedy = Ball3.speedy * -1
	    score += 1
	  
	  }else if(Ball3.collideObject (DoubleBrick11)){
	  //Ball.speedx = Ball.speedx * -1
	  DoubleBrick11.scale = 0.01
	  DoubleBrick11.x = 10000
	  mySound.play();
	  Brick109.scale = .1
	  Brick109.x = 525
	  Ball3.speedy = Ball3.speedy * -1
	    score += 1
		
	  }else if(Ball3.collideObject (Brick102)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick102.scale = 0.01
	  Brick102.x = 10000
	  mySound.play();
	  Ball3.speedy = Ball3.speedy * -1
	    score += 1
	  
	  }else if(Ball3.collideObject (Brick103)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick103.scale = 0.01
	  Brick103.x = 10000
	  mySound.play();
	  Ball3.speedy = Ball3.speedy * -1
	    score += 1
	 
	  }else if(Ball3.collideObject (Brick104)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick104.scale = 0.01
	  Brick104.x = 10000
	  mySound.play();
	  Ball3.speedy = Ball3.speedy * -1
	    score += 1
	  
	  }else if(Ball3.collideObject (Brick105)){
	 //Ball.speedx = Ball.speedx * -1
	  Brick105.scale = 0.01
	  Brick105.x = 10000
	  mySound.play();
	  Ball3.speedy = Ball3.speedy * -1
	    score += 1
	  
	  }else if(Ball3.collideObject (Brick106)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick106.scale = 0.01
	  Brick106.x = 10000
	  mySound.play();
	  Ball3.speedy = Ball3.speedy * -1
	    score += 1
	  
	  }else if(Ball3.collideObject (Brick107)){
	 //Ball.speedx = Ball.speedx * -1
	  Brick107.scale = 0.01
	  Brick107.x = 10000
	  mySound.play();
	  Ball3.speedy = Ball3.speedy * -1
	    score += 1
	  
	  }else if(Ball3.collideObject (Brick108)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick108.scale = 0.01
	  Brick108.x = 10000
	  mySound.play();
	  Ball3.speedy = Ball3.speedy * -1
	    score += 1
	  
	  }else if(Ball3.collideObject (Brick109)){
	  //Ball.speedx = Ball.speedx * -1
	  Brick109.scale = 0.01
	  Brick109.x = 10000
	  mySound.play();
	  Ball3.speedy = Ball3.speedy * -1
	    score += 1
		
		
		
		}else if(Ball3.collideObject (Boss2)){
	    //Ball.speedx = Ball.speedx * -1
               Ball3.x = Rectangle3.x
               Ball3.y = 370
	    mySound.play();
        Brick102.x = 1000
		Brick103.x = 1000
		Brick104.x = 1000
		Brick105.x = 1000
		Brick106.x = 1000
		Brick107.x = 1000
		Brick108.x = 1000
		Brick109.x = 1000
		DoubleBrick8.x = 1000
		DoubleBrick9.x = 1000
		DoubleBrick10.x = 1000
		DoubleBrick11.x = 1000
		
		DoubleBrick12.x = 1
		DoubleBrick13.x = 75
		DoubleBrick14.x = 150
		DoubleBrick15.x = 225
		DoubleBrick16.x = 300
		DoubleBrick17.x = 375
		DoubleBrick18.x = 450
		DoubleBrick19.x = 525
		

		Boss3.x = Boss2.x
		Boss2.scale = 0.01
	    Boss2.x = 10000
	    Ball3.speedy = Ball3.speedy * -1
	    score += 1
		}
		
		if(Ball3.y > 450){
	    alert("Game Over")
	    screen = 6
	    }
		
		 Rectangle3.draw();
		 Ball3.draw();
         Boss.draw();
		 Brick94.draw();
		 Brick95.draw();
		 Brick96.draw();
		 Brick97.draw();
		 Brick98.draw();
		 Brick99.draw();
		 Brick100.draw();
		 Brick101.draw();
		 
         Boss1.draw();
		 Brick102.draw();
		 Brick103.draw();
		 Brick104.draw();
		 Brick105.draw();
		 Brick106.draw();
		 Brick107.draw();
		 Brick108.draw();
		 Brick109.draw();
		 DoubleBrick8.draw();
		 DoubleBrick9.draw();
		 DoubleBrick10.draw();
		 DoubleBrick11.draw();
		 
         Boss2.draw();
		 DoubleBrick12.draw();
		 DoubleBrick13.draw();
		 DoubleBrick14.draw();
		 DoubleBrick15.draw();
		 DoubleBrick16.draw();
		 DoubleBrick17.draw();
		 DoubleBrick18.draw();
		 DoubleBrick19.draw();
		 
         Boss3.draw();
         
        }		
	
	
	}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	

	

	
	
	
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	
	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
		
		//Runs this code whenever the mouse is clicked
		//For more screens for your game, just add more else ifs
		if(screen == 0){
		
		
		}else if (screen == 1){
		if(button.isMouseOver()) button.job()
		if(button1.isMouseOver()) button1.job()
		if(button2.isMouseOver()) button2.job()
		
		
		
		
		}else if (screen == 3){
		 if(button3.isMouseOver()) button3.job()
		
		 }else if (screen == 4){
		 if(button3.isMouseOver()) button3.job()
		 
		 }else if (screen == 6){
		 if(button4.isMouseOver()) button4.job()
		 
		 
		 }
		 
		 
		 
		 
	}, false);

	
	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;
		updateMouse(mx,my);

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
		
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
	// up 38
	//down 40
	//right 39
	//left 37
	
	alert.key 
		if(key==37){//left
		Rectangle.x -= Rectangle.speedx
	      if(Rectangle.x < 0) Rectangle.x = 0
	    Rectangle1.x -= Rectangle1.speedx
	      if(Rectangle1.x < 0) Rectangle1.x = 0
		   Rectangle2.x -= Rectangle2.speedx
	      if(Rectangle2.x < 0) Rectangle2.x = 0
		  Rectangle3.x -= Rectangle3.speedx
	      if(Rectangle3.x < 0) Rectangle3.x = 0
		  
		}else if (key == 38){//Up
		
	
		}else if (key == 39){//right
		Rectangle.x += Rectangle.speedx
	     if(Rectangle.x > 525) Rectangle.x = 525
	    Rectangle1.x += Rectangle1.speedx
	     if(Rectangle1.x > 525) Rectangle1.x = 525
		  Rectangle2.x += Rectangle2.speedx
	     if(Rectangle2.x > 525) Rectangle2.x = 525
		  Rectangle3.x += Rectangle3.speedx
	     if(Rectangle3.x > 525) Rectangle3.x = 525
		 
		}else if (key == 40){//down
		
		}
		
		
		
	}, false); //End the event listener

	

	

})

