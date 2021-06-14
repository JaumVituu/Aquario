//recupera o elemento canvas
const canvas = document.getElementById('field');
//obtem o contexto 2d
const ctx = canvas.getContext('2d');



//inicializa a classe Aquario

let field = new Aquario(ctx);
field.inicializa();
field.start();