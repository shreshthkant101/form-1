class Form{
    
    constructor(){
         this.input1 = createInput("Email");
         this.input2 = createInput("answer");
         this.button = createButton('Submit answer');
         this.question = createElement('H1');
         this.greeting = createElement('H3');
         
    }
  
   

    display(){
        var Title = createElement('H2');
        Title.html("Voting");
        Title.position(displayWidth/2,0);
        
        this.input1.position(displayWidth/2,displayHeight/2 - 80);
        this.input2.position(displayWidth/2,displayHeight/2 - 40);
        this.button.position(displayWidth/2 , displayHeight/2);
        this.greeting.html("hello,  Voter! whom would you like to be prime minister next? a) Mr. Narendra Modi. b) Arvind Kejriwal");
        this.greeting.position(displayWidth/2 - 70,displayHeight/4);
        this.button.mousePressed(()=>{
            this.input1.hide();
            this.input2.hide();
            this.greeting.hide();
            this.button.hide();
            this.thanks = createElement('h1');
            this.thanks.position(displayWidth/2, displayHeight/2);
            this.thanks.html('thanks for submitting!');
            var em = this.input1.value();
            var ans = this.input2.value();
            upload(em,ans);
            
        })
    }
    
}
    