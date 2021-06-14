/* class Peixe{
	dx;
	dy;
	px;
	py;
	vel;
	obj;
	tmp;
	width;
	height;
	
	 Draw (){
		dx = 0;
		dy = 0;
		px = 0;
		py = 0;
		vel = 5;
		obj = getElementById("dv1");
		tmp = setInterval("Update",60);
		addEventListener("keydown",PressButton);
		addEventListener("keyup",ReleaseButton);
	}
	
	addEventListener("load",Draw);
	 PressButton(){
		 keyboard = event.keyCode;
		if (keyboard==38){
			dy = 1;
		}
		else if (keyboard==40){
			dy= -1;
		}
		else if (keyboard==37){
			dx =-1;
		}
		else if (keyboard==39){
			dx = 1;
		}
	}
	
	 ReleaseButton(){
		 keyboard = event.keyCode;
		if (keyboard==38){
			dy = 0;
		}
		else if (keyboard==40){
			dy= 0;
		}
		else if (keyboard==37){
			dx =0;
		}
		else if (keyboard==39){
			dx = 0;
		}
	}
	
	 Update(){
		px += dx*vel;
		py += dy*vel;
		obj.style
	}
} */