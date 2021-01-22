
$(document).ready(function(){
	$('#1').click(function(){
		$('.drop').slideToggle(300);      
		return false;
		});
});


$(function(){
  $('.language').click(function(){
    $('.language_menu').slideToggle(100, function(){
      if($(this).css('display') === 'none'){
      $(this).removeAttr('style');
  }
});
});
});


$(function(){
    $('.button').click(function(){
    $(`.container_head`).css(`opacity`, `0.5`)
    $(`.container`).css(`opacity`, `0.5`)
    $(`body`).css(`background-color`, `black`)
    $('.window_main').slideToggle(100, function(){
      if($(this).css('display') === 'none'){
      $(this).css('display',`flex`);
  }	
  		if($(this).css('display') === 'block'){
  			$(this).css('display',`flex`);
  		}

});
});
});

$(function(){
	$(`.cross`).click(function(){
		$(`.window_main`).css(`display`, `none`);
		$(`.container_head`).css(`opacity`, `1`)
    	$(`.container`).css(`opacity`, `1`)
    	$(`body`).css(`background-color`, `white`)
	});
});














function clickFun2 (){
	let m = document.getElementsByClassName("auto_mercedes");
	let b = document.getElementsByClassName("auto_bmw");	
		if(b[0].style.display == `block`){
			b[0].style.display='none';	
			m[0].style.display='block';
		}
		else{
			b[0].style.display='block';	
			m[0].style.display='none';
		}
};

if(document.getElementById(`date_from_top`).value == ` `){
	alert(11);
}

let days;

function checkForm (){
	
	let x = document.getElementById(`date_from_top`).value;
	let y = document.getElementById(`date_form_bot`).value;
	let date1 = new Date(x);
	let date2 = new Date(y);
	days =  (date2 - date1) / (60 * 60 * 24 * 1000);
		if(days === 0){
			days = 1;
		}
	console.log(days);
	
	
	
};




let BMWObj = {
	engine: ` 3.0`,
	year: ` 2019`,
	gearbox: ` AT`,
	power: ` 249 HP`,
	drive: ` Передний`,
	seats: ` 5`,
	value:  2000,
}
let MERCObj = {
	engine: ` 2.9`,
	year: ` 2018`,
	gearbox: ` AT`,
	power: ` 249 HP`,
	drive: ` Передний`,
	seats: ` 2`,
	value:  2000,
}
let GOLFObj = {
	engine: ` 1.2`,
	year: ` 2014`,
	gearbox: ` AT`,
	power: ` 105 HP`,
	drive: ` Передний`,
	seats: ` 5`,
	value:  1800,
}
let AUDIObj = {
	engine: ` 2.0`,
	year: ` 2014`,
	gearbox: ` AT`,
	power: ` 245 HP`,
	drive: ` Передний`,
	seats: ` 5`,
	value:  1900,
}
function specificGOLF (){

	document.getElementById('specific_img').src = "img/car1.png";
	
	eng.innerHTML += GOLFObj.engine;
	year.innerHTML += GOLFObj.year;
	gear.innerHTML += GOLFObj.gearbox;
	pow.innerHTML += GOLFObj.power;
	dri.innerHTML += GOLFObj.drive;
	seat.innerHTML += GOLFObj.seats;

	day.innerHTML += GOLFObj.value;
	innings.innerHTML += `500`;
	period.innerHTML +=  GOLFObj.value * days;
	cost_2.innerHTML += GOLFObj.value * days + 500;
	

	
	
};

function specificAUDI (){

	document.getElementById('specific_img').src = "img/car2.png";
	
	eng.innerHTML += AUDIObj.engine;
	year.innerHTML += AUDIObj.year;
	gear.innerHTML += AUDIObj.gearbox;
	pow.innerHTML += AUDIObj.power;
	dri.innerHTML += AUDIObj.drive;
	seat.innerHTML += AUDIObj.seats;

	day.innerHTML += AUDIObj.value;
	innings.innerHTML += `500`;
	period.innerHTML +=  AUDIObj.value * days;
	cost_2.innerHTML += AUDIObj.value * days + 500;

	
};

 
function specificBMW (){

	document.getElementById('specific_img').src = "img/car3.png";
	
	eng.innerHTML += BMWObj.engine;
	year.innerHTML += BMWObj.year;
	gear.innerHTML += BMWObj.gearbox;
	pow.innerHTML += BMWObj.power;
	dri.innerHTML += BMWObj.drive;
	seat.innerHTML += BMWObj.seats;

	day.innerHTML += BMWObj.value;
	innings.innerHTML += `500`;
	
	
	period.innerHTML +=  BMWObj.value * days;
	cost_2.innerHTML += BMWObj.value * days + 500;
	
	

	
};




function specificMERC (){
	 
	document.getElementById('specific_img').src = "img/car4.png";
	
	eng.innerHTML +=  MERCObj.engine;
	year.innerHTML += MERCObj.year;
	gear.innerHTML += MERCObj.gearbox;
	pow.innerHTML += MERCObj.power;
	dri.innerHTML += MERCObj.drive;
	seat.innerHTML += MERCObj.seats;

	day.innerHTML += MERCObj.value;
	innings.innerHTML += `500`;
	period.innerHTML +=  MERCObj.value * days;
	cost_2.innerHTML += MERCObj.value * days + 500;


};


function compare (value){
	retrieve ();
	if (value == 1){
		specificGOLF ();
	};
	if (value == 2){
		specificAUDI ();
	};
	if (value == 3){
		specificBMW ();
	};
	 if (value == 4){
		specificMERC ();
	};
	
};


function retrieve (){ // :-)
	
	eng.innerHTML = 'Двигатель:';
	year.innerHTML = `Год:`;
	gear.innerHTML = `КПП:`;
	pow.innerHTML = `Мощьность:`;
	dri.innerHTML = `Привод:`;
	seat.innerHTML = `Мест:`;

	cost.innerHTML = `Стоимость: `;
	day.innerHTML = `За сутки: `;
	period.innerHTML = `За весь период: `;
	innings.innerHTML = `Подача: `;
	cost_2.innerHTML = `Итого: `;

}
let eng = document.getElementById(`engine`),
	year = document.getElementById(`year`),
	gear = document.getElementById(`gearbox`),
	pow = document.getElementById(`power`),
	dri = document.getElementById(`drive`),
	seat = document.getElementById(`seats`),
	
	cost = document.getElementById(`cost_1`),
	day = document.getElementById(`day`),
	period = document.getElementById(`period`),
	innings = document.getElementById(`innings`),
	
	cost_2 = document.getElementById(`cost_2`);

	form_location = document.getElementById(`form_location`);
	

	

	