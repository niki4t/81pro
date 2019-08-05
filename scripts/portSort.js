var wrapPortS = document.querySelectorAll(".port__wrap");
var dottS = document.querySelectorAll(".port-pt-item");

var t = 1;
show2(t);

function category(b) {
    show2(t = b);
}
function show2(b) {
	for (j = 0; j < wrapPortS.length; j++) {
        wrapPortS[j].setAttribute("style", "display: none");
    }
	for (j = 0; j < wrapPortS.length; j++) {
        wrapPortS[j].classList.remove("port__wrap--active");
    }
    for (j = 0; j < dottS.length; j++) {
        dottS[j].classList.remove("filterActive");
    }
    wrapPortS[t - 1].setAttribute("style", "display: flex");
    wrapPortS[t - 1].classList.add("port__wrap--active");
    dottS[t - 1].classList.add("filterActive");


    var wrapPort = document.querySelector(".port__wrap--active");
	var btnPort = wrapPort.querySelector(".port__wrap-link");
	var btnPortBack = wrapPort.querySelector(".port__wrap-linkBack");
	var item = wrapPort.querySelectorAll(".port__wrap-item");

	if(window.innerWidth > 1149) {
		var num = 11; //видно блоков
		var sosed = 4; //блоков в строке
	    var sl = Math.ceil(item.length / num); //количество слайдов с фото

		var k = 0;
		showSlide(k);
		btnPort.onclick = function () {
			showSlide(k += 1);
		}
		btnPortBack.onclick = function () {
			showSlide(k -= 1);
		}
		
		function showSlide(k) {
			console.log(k);

			if ( k === 0 ) {
				btnPortBack.setAttribute("style", "display: none");
				btnPort.setAttribute("style", "display: block");
			}
			if ( k === sl-1 ) {
				btnPortBack.setAttribute("style", "display: block");
				btnPort.setAttribute("style", "display: none");
			}
			if (item.length < num) {
		    	btnPortBack.setAttribute("style", "display: none");
				btnPort.setAttribute("style", "display: none");
		    }

			for (j = 1; j <= item.length; j++) {
			item[j-1].setAttribute("style", "display: none");
			}
			for (j = (num * k + 1); j <= Math.min(item.length, (num * (k + 1))); j++) {
			item[j-1].setAttribute("style", "display: flex");
			}
		} 
	} 
	else if(window.innerWidth > 767) {
		var num = 12; //видно блоков
		var sosed = 4; //блоков в строке
		
	    var sl = Math.ceil(item.length / num);
	    var vhCount = Math.ceil((item.length - num) / sosed);
	    var vhHeight = 25;
	    var vhTotal = Math.round(vhHeight * vhCount);
	    btnPort.setAttribute("style", "display: block");
	    if (item.length <= num) {
	    	btnPortBack.setAttribute("style", "display: none");
			btnPort.setAttribute("style", "display: none");
	    }

		for (j = num + 1; j <= item.length; j++) {
		item[j-1].setAttribute("style", "display: none");
		}
		btnPortBack.setAttribute("style", "display: none");

		btnPort.onclick = function () {
			for (j = num + 1; j <= item.length; j++) {
			item[j-1].setAttribute("style", "display: flex");
			}
			wrapPort.style.paddingBottom = vhTotal + "vh";
			btnPort.setAttribute("style", "display: none");
			btnPortBack.setAttribute("style", "display: block");
		}
		btnPortBack.onclick = function () {
			for (j = num + 1; j <= item.length; j++) {
			item[j-1].setAttribute("style", "display: none");
			}
			wrapPort.style.paddingBottom = 0 + "vh";
			btnPortBack.setAttribute("style", "display: none");
			btnPort.setAttribute("style", "display: block");
		}
	} else {
		var num = 6; //видно блоков
		var sosed = 2; //блоков в строке
	    var sl = Math.ceil(item.length / num);
	    var vhCount = Math.ceil((item.length - num) / sosed);
	    var vhHeight = 26.66667;
	    var vhTotal = Math.round(vhHeight * vhCount);
	    btnPort.setAttribute("style", "display: block");
	    if (item.length <= num) {
	    	btnPortBack.setAttribute("style", "display: none");
			btnPort.setAttribute("style", "display: none");
	    }

		for (j = num + 1; j <= item.length; j++) {
		item[j-1].setAttribute("style", "display: none");
		}
		btnPortBack.setAttribute("style", "display: none");

		btnPort.onclick = function () {
			for (j = num + 1; j <= item.length; j++) {
			item[j-1].setAttribute("style", "display: flex");
			}
			wrapPort.style.paddingBottom = vhTotal + "vh";
			btnPort.setAttribute("style", "display: none");
			btnPortBack.setAttribute("style", "display: block");
		}
		btnPortBack.onclick = function () {
			for (j = num + 1; j <= item.length; j++) {
			item[j-1].setAttribute("style", "display: none");
			}
			wrapPort.style.paddingBottom = 0 + "vh";
			btnPortBack.setAttribute("style", "display: none");
			btnPort.setAttribute("style", "display: block");
		}
	}
}
