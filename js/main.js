// Собираем все кнопки
const chooseColor = document.querySelectorAll(".section__color-content-button");
//console.log(buttonsList);

// Собираем все изображения
const contentImages = document.querySelectorAll(".content-image");
//console.log(contentImages);


chooseColor.forEach(function(element) {
	element.addEventListener("click", open);
});


function open(event) {
	// Убираем у кнопки класс active, если он есть
	chooseColor.forEach(function(element) {
		element.classList.remove("section__color-content-button--active");
	});
	
	// Определяем кнопку, с которой произошло взаимодействие (клик)
	const target = event.currentTarget;
	
	// Присваиваем этой кнопке active (скрываем на странице)
	target.classList.add("section__color-content-button--active");
	
	// Убираем класс active у текущих изображений
	contentImages.forEach(function(image) {
		image.classList.remove("content-image--active");
	});
	
	// Определяем изображения с классом, название которого соответствует data-button кликнутой кнопки
	const contentImageActive = document.querySelectorAll(`.${target.dataset.button}`);
	
	//Добавляем этим определённым ранее изображениям класс active
	contentImageActive.forEach(function(image) {
		image.classList.add("content-image--active");
	});
};