let d1 = document.getElementById("d1")
let jkr1 = document.getElementsByClassName("jkr")[0]
let jkr2 = document.getElementsByClassName("jkr")[1]
let jkr3 = document.getElementsByClassName("jkr")[2]

let b1 = document.getElementById("b1")
let b3 = document.getElementById("b2")
let b2 = document.getElementById("b3")
let b4 = document.getElementById("b4")
let basla = document.getElementById("basla")
let sayac = document.getElementById("sayac")

let cvp1 = document.getElementsByClassName("cvp")[0]
let cvp2 = document.getElementsByClassName("cvp")[2]
let cvp3 = document.getElementsByClassName("cvp")[1]
let cvp4 = document.getElementsByClassName("cvp")[3]
b1.onclick=doru_a
b3.onclick=doru_b
b2.onclick=doru_c
b4.onclick=doru_d
basla.onclick=q1
function q1(){
    d1.textContent=("suyun kimyasal formülü nedir")
    cvp1.textContent=("c10 h15 n")
    cvp2.textContent=("mg")
    cvp3.textContent=("h2o")
    cvp4.textContent=("mgCL")
    sayac.innerText="1"
}

function doru_a(){
     //1.soru
     if(sayac.innerText=="1"){
        alert("yanlıs cvp")
    }
    //2.soru
    else if(sayac.innerText=="2"){
        alert("yanlıs cvp")
        
    }
    //3.soru
    else if(sayac.innerText=="3"){
        d1.textContent="sirinler C.filminde hangi karakter yoktur"
        cvp1.textContent="guclu sirin"
        cvp2.textContent="gozlulu sirin"
        cvp3.textContent="sair sirin"
        cvp4.textContent="sirine"
        sayac.innerText="4"
    }
    //4.soru
    else if(sayac.innerText=="4"){
        alert("yanlıs cvp")
        
    }
    //5.soru
    else if(sayac.innerText=="5"){
        alert("yanlıs cvp")
        
    }
    //6.soru
    else if(sayac.innerText=="6"){
        alert("yanlıs cvp")
        
    }
    //7.soru
    else if(sayac.innerText=="7"){
        d1.textContent="turkiyede hapis cezası olan ilk bilgisyar korsanı kimdir"
        cvp1.textContent="Kerem karatepe"
        cvp2.textContent="Oguzhan Or** "
        cvp3.textContent="Tamer Sahin"
        cvp4.textContent="Bülent Ersoy"
        sayac.innerText="8"
    }
    //8.soru
    else if(sayac.innerText=="8"){
        alert("yanlıs cvp")
        
    }
    //9.soru
    else if(sayac.innerText=="9"){
        alert("yanlıs cvp")
        
    }
    //10.soru
    else if(sayac.innerText=="10"){
        alert("yanlıs cvp")
        
    }
    //11.soru
    else if(sayac.innerText=="11"){
        alert("yanlıs cvp")
        
    }
    //12.soru
    else if(sayac.innerText=="12"){
        alert("yanlıs cvp")
        
    }
}
function doru_b(){
 //1.soru
 if(sayac.innerText=="1"){
    alert("yanlıs cvp")
    
}
//2.soru
else if(sayac.innerText=="2"){
    d1.textContent="yavuz S.selim kac sene tahta kaldı"
    cvp1.textContent="8"
    cvp2.textContent="12"
    cvp3.textContent="10"
    cvp4.textContent="4"
    sayac.innerText="3"
}
//3.soru
else if(sayac.innerText=="3"){
    alert("yanlıs cvp")
    
}
//4.soru
else if(sayac.innerText=="4"){
    alert("yanlıs cvp")
    
}
//5.soru
else if(sayac.innerText=="5"){
    alert("yanlıs cvp")
    
}
//6.soru
else if(sayac.innerText=="6"){
    alert("yanlıs cvp")
    
}
//7.soru
else if(sayac.innerText=="7"){
    alert("yanlıs cvp")
    
}
//8.soru
else if(sayac.innerText=="8"){
    alert("yanlıs cvp")
    
}
//9.soru
else if(sayac.innerText=="9"){
    d1.textContent="masa tenisinde her set kac sayıdan olusur"
    cvp1.textContent="10"
    cvp2.textContent="11"
    cvp3.textContent="21"
    cvp4.textContent="7"
    sayac.innerText="10"
}
//10.soru
else if(sayac.innerText=="10"){
    d1.textContent="oğul vermek hangisiyle alakalıdır"
    cvp1.textContent="madencilik"
    cvp2.textContent="esnaflık"
    cvp3.textContent="arıcılık"
    cvp4.textContent="hayvancılık"
    sayac.innerText="11"
}
//11.soru
else if(sayac.innerText=="11"){
    alert("yanlıs cvp")
    
}
//12.soru
else if(sayac.innerText=="12"){
    alert("yanlıs cvp")
}
}
function doru_c(){
 //1.soru
 if(sayac.innerText=="1"){
    d1.textContent="breaking bad toplam kac bolumdur"
    cvp1.textContent="52"
    cvp2.textContent="62"
    cvp3.textContent="48"
    cvp4.textContent="75"
    sayac.innerText="2"
}
//2.soru
else if(sayac.innerText=="2"){
    alert("yanlıs cvp")
}
//3.soru
else if(sayac.innerText=="3"){
     alert("yanlıs cvp")
    
}

//4.soru
else if(sayac.innerText=="4"){
    d1.textContent="TÜRK kelimesi ilk nerede karsımıza cıkmaktadır"
    cvp1.textContent="çin kaynakları"
    cvp2.textContent="incil"
    cvp3.textContent="divan-ı lügati-türk"
    cvp4.textContent="orhun abideleri"
    sayac.innerText="5"
}
//5.soru
else if(sayac.innerText=="5"){
    alert("yanlıs cvp")
    
}
//6.soru
else if(sayac.innerText=="6"){
    alert("yanlıs cvp")
    
}
//7.soru
else if(sayac.innerText=="7"){
    alert("yanlıs cvp")
    
}
//8.soru
else if(sayac.innerText=="8"){
    d1.textContent="macellan nerede öldürüldü"
    cvp1.textContent="rusya açıklarında"
    cvp2.textContent="flipinlerde"
    cvp3.textContent="bahama adalarında"
    cvp4.textContent="kızıl denizde"
    sayac.innerText="9"
}
//9.soru
else if(sayac.innerText=="9"){
    alert("yanlıs cvp")
   
}
//10.soru
else if(sayac.innerText=="10"){
     alert("yanlıs cvp")
    
}
//11.soru
else if(sayac.innerText=="11"){
    d1.textContent="denedigin icin sagol <3"
    cvp1.textContent=""
    cvp2.textContent=""
    cvp3.textContent=""
    cvp4.textContent=""
    sayac.innerText="12"
}
//12.soru
else if(sayac.innerText=="12"){
    alert("yanlıs cvp")
}
}
function doru_d(){
 //1.soru
 if(sayac.innerText=="1"){
    alert("yanlıs cvp")
}
//2.soru
else if(sayac.innerText=="2"){
    alert("yanlıs cvp")

}
//3.soru
else if(sayac.innerText=="3"){
    alert("yanlıs cvp")

}
//4.soru
else if(sayac.innerText=="4"){
    alert("yanlıs cvp")

}
//5.soru
else if(sayac.innerText=="5"){
    d1.textContent="hangisi universite mezunu deildir"
    cvp1.textContent="elon musk"
    cvp2.textContent="cagrı mert bakırcı"
    cvp3.textContent="Kerem Karatepe"
    cvp4.textContent="R**** T**ip Er*****"
    sayac.innerText="6"
}
//6.soru
else if(sayac.innerText=="6"){
    d1.textContent="gok kusagının ortasında hangi renk vardır"
    cvp1.textContent="yesil"
    cvp2.textContent="turuncu"
    cvp3.textContent="mavi"
    cvp4.textContent="mor"
    sayac.innerText="7"
}
//7.soru
else if(sayac.innerText=="7"){
    alert("yanlıs cvp")

}
//8.soru
else if(sayac.innerText=="8"){
    alert("yanlıs cvp")

}
//9.soru
else if(sayac.innerText=="9"){
    alert("yanlıs cvp")

}
//10.soru
else if(sayac.innerText=="10"){
    alert("yanlıs cvp")

}
//11.soru
else if(sayac.innerText=="11"){
    alert("yanlıs cvp")

}
//12.soru
else if(sayac.innerText=="12"){
    sayac.innerText="bitti"
}
}