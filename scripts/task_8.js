	// Задание № 8
document.write("\n\r\n\rЗадание № 8\n\r");

let day = prompt("Введите число от 1 до 31 (от 1 до 366 для задания № 10)", "");

switch (true) {
	case (day >= 1 && day < 11):
		document.write("&nbsp;&nbsp;&nbsp;Первая декада месяца");
		break;
	case (day >= 11 && day < 21):
		document.write("&nbsp;&nbsp;&nbsp;Вторая декада месяца");
		break;
	case (day >= 21 && day < 32):
		document.write("&nbsp;&nbsp;&nbsp;Третья декада месяца");
		break;
	default:
		document.write("&nbsp;&nbsp;&nbsp;Введенное число не из указанного диапазона\n\r");
}