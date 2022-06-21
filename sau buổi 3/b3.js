const kill = document.getElementById('killtxt');
const death = document.getElementById('deathtxt');
const assist = document.getElementById('assisttxt');

function increaseK(){
    var element = document.getElementById('killtxt');
    var value = element.innerHTML;
    ++value;
    document.getElementById('killtxt').innerHTML = value;
    if ( value > 10 & value < 20 || value >20 & value <28) {
        var el = document.getElementById("picduck");
        el.src="https://i.pinimg.com/originals/8c/2b/7c/8c2b7cd3af71c5f2c9a0e8d14a083b63.jpg";
    }
}

function increaseD(){
    var element = document.getElementById('deathtxt');
    var value = element.innerHTML;
    ++value;
    document.getElementById('deathtxt').innerHTML = value;

    if ( value > 5 & value <= 10 || value > 23 & value < 30) {
        var el = document.getElementById("picduck");
        el.src="https://i.pinimg.com/736x/ab/0b/0d/ab0b0d4239972748a5bd2021bab19409.jpg";
    }
}


function increaseA(){
    var element = document.getElementById('assisttxt');
    var value = element.innerHTML;
    ++value;
    document.getElementById('assisttxt').innerHTML = value;
    if ( value > 2 & value <= 5 || value > 19 & value < 35) {
        var el = document.getElementById("picduck");

            el.src="https://www.askideas.com/media/13/Duck-Using-Banana-Phone-Funny-Picture.jpg";
        };
    }
    
// ----------------------------------------------------------------

var name1 = document.getElementById("cp1").innerHTML;
var at1 = document.getElementById("att1").innerHTML;
var bl1 = document.getElementById("bl1").innerHTML;

var name2 = document.getElementById("cp2").innerHTML;
var at2 = document.getElementById("att2").innerHTML;
var bl2 = document.getElementById("bl2").innerHTML;

var attack1 = document.getElementById("attack1").innerHTML;
var blood1 = document.getElementById("blood1").innerHTML;

var attack2 = document.getElementById("attack2").innerHTML;
var blood2 = document.getElementById("blood2").innerHTML;


function intro(name, attack, blood){
    this.fname = name;
    this.att = attack;
    this.bl = blood;
    this.random = function(){
        let x= Math.floor((Math.random()*500) + 200);
        val = x;
        return val;
    }
    console.log(
        `This is champion: ${name} 
        attack: ${attack}
        blood: ${blood}`
    );
}

var intro1= new intro(name1, at1, bl1);
 var at1 = intro1.random(); 
document.getElementById('att1').innerHTML = at1;

// document.getElementById('att1.1').innerHTML = at1;

// ---------------------------------------------------------------------------------------------
var intro2 =new intro(name2, at2, bl2);
var at2 = intro2.random();
document.getElementById('att2').innerHTML = at2;

function myVal(a1, a2, b1, b2) {
    this.atk1 = a1;
    this.atk2 = a2;
    this.bld1 = b1;
    this.bld2 = b2;
    this.t = 0;
        if (this.atk1 > this.atk2) {
            t = this.atk1 - this.atk2;
            this.t = t;
            this.bld2 = this.bld2 - this.t;
            return this.bld2;
        } else {
            t = this.atk2 - this.atk1;
            this.t = t;
            this.bld1 = this.bld1 - this.t;
            return this.bld1;
        }
    }
        
    
    

var result = new myVal(at1, at2, bl1, bl2);
var blood1 = result.bld1;
var blood2 = result.bld2;
document.getElementById('blood1').innerHTML = blood1;
document.getElementById('blood2').innerHTML = blood2;
document.getElementById('attack1').innerHTML = at1;
document.getElementById('attack2').innerHTML = at2;
