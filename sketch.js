var canvas,database,form;
var answers = [];
var answer, email, indexref;
var pin;
var index;
function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight - 30);
    database = firebase.database();
    form = new Form();
    indexref = database.ref('index');
    indexref.on("value",cin,error); 
}
function draw(){
    form.display();
    
}
function error(){

}
function upload(n,a){
    pp = index + 1;
    p = "voter" + pp;
    database.ref('/').update({
        'index' : pp
       
    });

    database.ref(p).update({
        'email' : n,
        'answer': a
    });
}
function cin(data){
    index = data.val();
}