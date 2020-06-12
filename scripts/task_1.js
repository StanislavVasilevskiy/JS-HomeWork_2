	// Задание № 1
document.write("Задание № 1\n\r");

let name = prompt("Введите ваше имя", "Стас"),
	age = prompt("Введите ваш возраст", "24"),
	city = prompt("Введите ваш город", "Минск"),
	phone = prompt("Введите номер вашего телефона", "+375(29)806-98-91"),
	email = prompt("Введите ваш email", "wildflameshaper@gmail.com"),
	company = prompt("Введите название вашей компании", "\"БЕЛНИПИЭНЕРГОПРОМ\"");

document.write("&nbsp;&nbsp;&nbsp;Меня зовут " + name + ".", "\n\r&nbsp;&nbsp;&nbsp;Мне " + age + " лет.", "\n\r&nbsp;&nbsp;&nbsp;Я проживаю в городе " + city + " и работаю в компании " + company + ".", "\n\r&nbsp;&nbsp;&nbsp;Мои контактные данные: " + phone + ", " + email + ".");