var wrapPort = document.querySelector(".port__wrap");
var btnPort = document.querySelector(".port__wrap-link");
var btnPortBack = document.querySelector(".port__wrap-linkBack");
var item = document.querySelectorAll(".port__wrap-item");

if(window.innerWidth > 1149) {
	var num = 11; //видно блоков
	var sosed = 4; //блоков в строке
    var sl = Math.ceil(item.length / num); //количество слайдов с фото

	var k = 0;
	showSlide(k);

	function port() {
        showSlide(k += 1);
    }
    function portBack() {
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

} else if(window.innerWidth > 767) {
	var num = 12; //видно блоков
	var sosed = 4; //блоков в строке
	
    var sl = Math.ceil(item.length / num);
    var vhCount = Math.ceil((item.length - num) / sosed);
    var vhHeight = 25;
    var vhTotal = Math.round(vhHeight * vhCount);

    if (item.length < num) {
    	btnPortBack.setAttribute("style", "display: none");
		btnPort.setAttribute("style", "display: none");
    }

	for (j = num + 1; j <= item.length; j++) {
	item[j-1].setAttribute("style", "display: none");
	}
	btnPortBack.setAttribute("style", "display: none");

	function port() {
		for (j = num + 1; j <= item.length; j++) {
		item[j-1].setAttribute("style", "display: flex");
		}
		wrapPort.style.paddingBottom = vhTotal + "vh";
		btnPort.setAttribute("style", "display: none");
		btnPortBack.setAttribute("style", "display: block");
	}
	function portBack() {
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

    if (item.length < num) {
    	btnPortBack.setAttribute("style", "display: none");
		btnPort.setAttribute("style", "display: none");
    }

	for (j = num + 1; j <= item.length; j++) {
	item[j-1].setAttribute("style", "display: none");
	}
	btnPortBack.setAttribute("style", "display: none");

	function port() {
		for (j = num + 1; j <= item.length; j++) {
		item[j-1].setAttribute("style", "display: flex");
		}
		wrapPort.style.paddingBottom = vhTotal + "vh";
		btnPort.setAttribute("style", "display: none");
		btnPortBack.setAttribute("style", "display: block");
	}
	function portBack() {
		for (j = num + 1; j <= item.length; j++) {
		item[j-1].setAttribute("style", "display: none");
		}
		wrapPort.style.paddingBottom = 0 + "vh";
		btnPortBack.setAttribute("style", "display: none");
		btnPort.setAttribute("style", "display: block");
	}
}