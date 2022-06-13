const $menu = document.querySelector('.menu')
	
	const $btnMenu1 = document.querySelector('.btnMenu1')
	const $btnMenu2 = document.querySelector('.btnMenu2')
	const $btnMenu3 = document.querySelector('.btnMenu3')
	

	const $btnMenu_Open = document.querySelector('.btnMenu_Open')

	$btnMenu1.addEventListener('click',function() {
		$menu.classList.remove('in')
	})

	$btnMenu2.addEventListener('click',function() {
		$menu.classList.remove('in')
	})

	$btnMenu3.addEventListener('click',function() {
		$menu.classList.remove('in')
	})
