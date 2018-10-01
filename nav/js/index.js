toggle = document.querySelectorAll(".toggle")[0];
nav = document.querySelectorAll("nav")[0];
toggle_open_text = 'Menu';
toggle_close_text = 'Close';
open1 = document.getElementsByClassName("bottom-right");

toggle.addEventListener('click', function() {
	nav.classList.toggle('open');
	open1[0].classList.toggle('rotating');
  if (nav.classList.contains('open')) {
  	//open1.className+=("rotating");
    toggle.innerHTML = toggle_close_text;
  } else {
    toggle.innerHTML = toggle_open_text;
    //open1.classList.add("rotating");
  }
}, false);

setTimeout(function(){
	nav.classList.toggle('open');	
}, 800);