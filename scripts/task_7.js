	// Задание № 7
document.write("\n\r\n\rЗадание № 7\n\r");

let n = prompt("Введите число от 0 до 59", "");

switch (true) {
	case (n >= 0 && n < 15):
		document.write("&nbsp;&nbsp;&nbsp;Первая четверть часа");
		break;
	case (n >= 15 && n < 30):
		document.write("&nbsp;&nbsp;&nbsp;Вторая четверть часа");
		break;
	case (n >= 30 && n < 45):
		document.write("&nbsp;&nbsp;&nbsp;Третья четверть часа");
		break;
	case (n >= 45 && n < 60):
		document.write("&nbsp;&nbsp;&nbsp;Четверта четверть часа");
		break;
	default:
		document.write("&nbsp;&nbsp;&nbsp;Введенное число не из указанного диапазона\n\r");
}