	// Задание № 9
document.write("\n\r\n\rЗадание № 9\n\r");

let day_9 = prompt("Введите день (от 1 до 365)", ""),
	year_9 = day_9 / 365,
	month_9 = day_9 / 31,
	week_9 = day_9 / 7,
	hour_9 = day_9 * 24,
	minute_9 = hour_9 * 60,
	second_9 = minute_9 * 60;

switch (true) {
	case (year_9 < 1):
		document.write("&nbsp;&nbsp;&nbsp;Меньше года.\n\r");
		break;
	default:
		document.write("&nbsp;&nbsp;&nbsp;Лет: " + year_9 + ".\n\r");
}

switch (true) {
	case (month_9 < 1):
		document.write("&nbsp;&nbsp;&nbsp;Меньше месяца.\n\r");
		break;
	default:
		document.write("&nbsp;&nbsp;&nbsp;Месяцев: " + month_9 + ".\n\r");
}

switch (true) {
	case (week_9 < 1):
		document.write("&nbsp;&nbsp;&nbsp;Меньше недели.\n\r");
		break;
	default:
		document.write("&nbsp;&nbsp;&nbsp;Недель: " + week_9 + ".\n\r");
}

document.write("&nbsp;&nbsp;&nbsp;Дней: " + day_9 + ".\n\r", "&nbsp;&nbsp;&nbsp;Часов: " + hour_9 + ".\n\r", "&nbsp;&nbsp;&nbsp;Минут: " + minute_9 + ".\n\r", "&nbsp;&nbsp;&nbsp;Секунд: " + second_9 + ".");