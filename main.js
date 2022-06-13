const sekund1=document.getElementById("sekund1");
const minut1=document.getElementById("minut1");
const soat1=document.getElementById("soat1");
const sana1=document.getElementById("sana1");
function soatYurishi1(){
    const date=new Date();
    const sekundRation=(date.getSeconds()/60)*360;
    const minutRation=(sekundRation+date.getMinutes()/60)*360;
    const soatRation=(minutRation+date.getHours()/12)*360;

    setRation1(sekund1,sekundRation);
    setRation1(minut1,minutRation);
    setRation1(soat1,soatRation);

    sana1.innerHTML=date.getDate();
    var oyKuni1=date.getMonth();
    switch(oyKuni1){
        case 0: oy1.innerHTML="Yanvar";break;
        case 1: oy1.innerHTML="Fevral";break;
        case 2: oy1.innerHTML="Mart";break;
        case 3: oy1.innerHTML="Aprel";break;
        case 4: oy1.innerHTML="May";break;
        case 5: oy1.innerHTML="Iyun";break;
        case 6: oy1.innerHTML="Iyul";break;
        case 7: oy1.innerHTML="Avgust";break;
        case 8: oy1.innerHTML="Sentyabr";break;
        case 9: oy1.innerHTML="Oktyabr";break;
        case 10:oy1.innerHTML="Noyabr";break;
        case 11:oy1.innerHTML="Dekabr";break;       
    }
}
function setRation1(elem,gradus){
    elem.style.setProperty('--rotation',gradus);
}
setInterval(soatYurishi1,1000);


//London time
const sekund2=document.getElementById("sekund2");
const minut2=document.getElementById("minut2");
const soat2=document.getElementById("soat2");
const sana2=document.getElementById("sana2");
function soatYurishi2(){
    const date=new Date();
    const sekundRation=(date.getSeconds()/60)*360;
    const minutRation=(sekundRation+date.getMinutes()/60)*360;
    const soatRation=((minutRation+date.getHours()/12)*360)-150;

    setRation2(sekund2,sekundRation);
    setRation2(minut2,minutRation);
    setRation2(soat2,soatRation);

    sana2.innerHTML=date.getDate();
    var oyKuni2=date.getMonth();
    switch(oyKuni2){
        case 0: oy2.innerHTML="Yanvar";break;
        case 1: oy2.innerHTML="Fevral";break;
        case 2: oy2.innerHTML="Mart";break;
        case 3: oy2.innerHTML="Aprel";break;
        case 4: oy2.innerHTML="May";break;
        case 5: oy2.innerHTML="Iyun";break;
        case 6: oy2.innerHTML="Iyul";break;
        case 7: oy2.innerHTML="Avgust";break;
        case 8: oy2.innerHTML="Sentyabr";break;
        case 9: oy2.innerHTML="Oktyabr";break;
        case 10:oy2.innerHTML="Noyabr";break;
        case 11:oy2.innerHTML="Dekabr";break;
    }
}
function setRation2(elem,gradus){
    elem.style.setProperty('--rotation',gradus);
}
setInterval(soatYurishi2,1000);

//Nur-Sulton
const sekund3=document.getElementById("sekund3");
const minut3=document.getElementById("minut3");
const soat3=document.getElementById("soat3");
const sana3=document.getElementById("sana3");
function soatYurishi3(){
    const date=new Date();
    const sekundRation=(date.getSeconds()/60)*360;
    const minutRation=(sekundRation+date.getMinutes()/60)*360;
    const soatRation=((minutRation+date.getHours()/12)*360)+30;

    setRation3(sekund3,sekundRation);
    setRation3(minut3,minutRation);
    setRation3(soat3,soatRation);

    sana3.innerHTML=date.getDate();
    var oyKuni3=date.getMonth();
    switch(oyKuni3){
        case 0: oy3.innerHTML="Yanvar";break;
        case 1: oy3.innerHTML="Fevral";break;
        case 2: oy3.innerHTML="Mart";break;
        case 3: oy3.innerHTML="Aprel";break;
        case 4: oy3.innerHTML="May";break;
        case 5: oy3.innerHTML="Iyun";break;
        case 6: oy3.innerHTML="Iyul";break;
        case 7: oy3.innerHTML="Avgust";break;
        case 8: oy3.innerHTML="Sentyabr";break;
        case 9: oy3.innerHTML="Oktyabr";break;
        case 10:oy3.innerHTML="Noyabr";break;
        case 11:oy3.innerHTML="Dekabr";break;
    }
}
function setRation3(elem,gradus){
    elem.style.setProperty('--rotation',gradus);
}
setInterval(soatYurishi3,1000);

//Seul
const sekund4=document.getElementById("sekund4");
const minut4=document.getElementById("minut4");
const soat4=document.getElementById("soat4");
const sana4=document.getElementById("sana4");
function soatYurishi4(){
    const date=new Date();
    const sekundRation=(date.getSeconds()/60)*360;
    const minutRation=(sekundRation+date.getMinutes()/60)*360;
    const soatRation=((minutRation+date.getHours()/12)*360)+120;

    setRation4(sekund4,sekundRation);
    setRation4(minut4,minutRation);
    setRation4(soat4,soatRation);

    sana4.innerHTML=date.getDate();
    var oyKuni4=date.getMonth();
    switch(oyKuni4){
        case 0: oy4.innerHTML="Yanvar";break;
        case 1: oy4.innerHTML="Fevral";break;
        case 2: oy4.innerHTML="Mart";break;
        case 3: oy4.innerHTML="Aprel";break;
        case 4: oy4.innerHTML="May";break;
        case 5: oy4.innerHTML="Iyun";break;
        case 6: oy4.innerHTML="Iyul";break;
        case 7: oy4.innerHTML="Avgust";break;
        case 8: oy4.innerHTML="Sentyabr";break;
        case 9: oy4.innerHTML="Oktyabr";break;
        case 10:oy4.innerHTML="Noyabr";break;
        case 11:oy4.innerHTML="Dekabr";break;
    }
}
function setRation4(elem,gradus){
    elem.style.setProperty('--rotation',gradus);
}
setInterval(soatYurishi4,1000);