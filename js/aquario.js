class Aquario
{
	// define as variaveis
	
	fps ;
    canvas ;
    width ;
	height ;
    minVelocity ;
    maxVelocity ;
    qtdebolhas ;
	bolhas;
    intervalId ;
	ctx;
	bolha;
	addSize;
	
	
	 
  
  
	//define o construtor e o contexto
	  constructor(ctx) {
		  this.fps = 60;
	
	this.width = 0;
	this.height = 0;
	this.minVelocity = 150;
	this.maxVelocity = 700;
	this.qtdebolhas = 5;
	this.intervalId = 0;
	this.addSize = 0;

    this.ctx = ctx;
	//console.table(this.ctx);
	//define o tamanho da janela
	this.width = window.innerWidth;
	console.table(window.innerWidth);
	this.height = window.innerHeight;
	console.table(window.innerHeight);
	this.ctx.canvas.width = this.width;
    this.ctx.canvas.height = this.height;
	    
  }
  
 
inicializa()
{
	
	var self = this;
	 
addEventListener('resize', function resize(event){
		//redefine as medidas quando a janela é alterada
    
	self.width = window.innerWidth;
    self.height = window.innerHeight;
	self.ctx.canvas.width = self.width;
	self.ctx.canvas.height = self.height;
	console.table(self.ctx.width);
	console.table(self.ctx.height);
    self.desenha() 
	
	 /*this.width = window.innerWidth;
    this.height = window.innerHeight;
	this.ctx.width = this.width;
	this.ctx.height = this.height;
	console.table(this.ctx); */
	
}); 
addEventListener("keydown",
	function PressKey()
	{
		var key = event.keyCode;
		if (key == 83){
			self.minVelocity += 100;
			self.maxVelocity += 100;
			console.table("Velocidade minima = " + self.minVelocity + ", Velocidade máxima = " + self.maxVelocity);
		}		
		else if (key == 88){
			self.minVelocity -= 100;
			self.maxVelocity -= 100;
			console.table("Velocidade mínima = " + self.minVelocity + ", Velocidade máxima =" + self.maxVelocity);
		}
	});	
addEventListener('mouseup', logMouseButton);
function logMouseButton(e) {
	if (typeof e === 'object') {
		switch (e.button) {
			case 0:
				console.table("Esquerdo");
				self.addSize += 10;
				console.table("Tamanho adicional =" + self.addSize);
			break;
			case 1:
				console.table("Meio")
			break;
			case 2:
				console.table("Direito");
				self.addSize += -10;
				console.table("Tamanho adicional =" + self.addSize);
			break;
			default:
				console.table("outro");
    }
  }
}
addEventListener('wheel', OnWheel);
function OnWheel(w) {
	var rolar = w.deltaY;
	if (rolar == -33.33333206176758)
	{
		self.qtdebolhas += 2;
		self.start();
		console.table("Rolar para cima");
		console.table(rolar);
	}
	else{
		self.qtdebolhas -= 2;
		self.start();
		console.table("Rolar para baixo");
		console.table(rolar);
	}	
}
}
start()
{
	
	this.bolhas = [];
	//console.table(bolhas);
	for(var i=0; i<this.qtdebolhas; i++) {
		//console.table("start");
			var x = Math.random()*this.width;
			
			var y =  Math.random()*this.height;
			var size =  Math.random()*(5+50)-5;
			var vel = (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity;
			
			this.bolha = new Bolha(x,y, size,vel );
			//console.table(s.x);
			//console.table(this.bolha);
		this.bolhas[i] = this.bolha;
	}
	
//console.table(bolhas);
	var timeUpdate = 1000 / this.fps;
	var self = this;
	this.intervalId = setInterval(function() {
        self.update();
        self.desenha();	
    }, timeUpdate);
}

	desenha()
	{
		//console.table("teste");
		//desenha o plano de fundo
		this.ctx.fillStyle = '#1E90FF	';
		this.ctx.fillRect(0, 0, this.width, this.height);
		
		//desenha as estrelas no plano de fundo
		this.ctx.fillStyle = '#87CEEB';
		for(var i=0; i<this.bolhas.length;i++) {
			this.bolha = this.bolhas[i];
			this.ctx.fillRect(this.bolha.x, this.bolha.y, this.bolha.size, this.bolha.size);
			//console.table(bolha);
		}
		
	}


  update(){
	var dt = 1 / this.fps;

	for(var i=0; i<this.bolhas.length; i++) {
		var bolha = this.bolhas[i];
		bolha.y += dt * bolha.velocity;
		//	If the bolha has moved from the bottom of the screen, spawn it at the top.
		if(bolha.y > this.height) {
			var x = Math.random()*this.width;
			var size =  Math.random()*(5+50)-5
			size += this.addSize;
			var vel = (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity;
			let s = new Bolha(x, 0,size, vel);
			//console.table(s);			
		 	this.bolhas[i] = s;
		}
		
	}
	//console.table(this.bolhas);
}

stop()
{
	clearInterval(this.intervalId);
}
	
}