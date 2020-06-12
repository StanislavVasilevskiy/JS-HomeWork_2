	// Задание № 10
document.write("\n\r\n\rЗадание № 10\n\r");

let month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
	season = ["Зима", "Весна", "Лето", "Осень"];

switch (true) {
	case (day >= 1 && day < 32):
		document.write("&nbsp;&nbsp;&nbsp; " + month[0] + "&nbsp;" + season[0]);
		break;
	case (day >= 32 && day < 61):
		document.write("&nbsp;&nbsp;&nbsp; " + month[1] + "&nbsp;" + season[0]);
		break;
	case (day >= 61 && day < 92):
		document.write("&nbsp;&nbsp;&nbsp; " + month[2] + "&nbsp;" + season[1]);
		break;
	case (day >= 92 && day < 122):
		document.write("&nbsp;&nbsp;&nbsp; " + month[3] + "&nbsp;" + season[1]);
		break;
	case (day >= 122 && day < 153):
		document.write("&nbsp;&nbsp;&nbsp; " + month[4] + "&nbsp;" + season[1]);
		break;
	case (day >= 153 && day < 183):
		document.write("&nbsp;&nbsp;&nbsp; " + month[5] + "&nbsp;" + season[2]);
		break;
	case (day >= 183 && day < 214):
		document.write("&nbsp;&nbsp;&nbsp; " + month[6] + "&nbsp;" + season[2]);
		break;
	case (day >= 214 && day < 245):
		document.write("&nbsp;&nbsp;&nbsp; " + month[7] + "&nbsp;" + season[2]);
		break;
	case (day >= 245 && day < 275):
		document.write("&nbsp;&nbsp;&nbsp; " + month[8] + "&nbsp;" + season[3]);
		break;
	case (day >= 275 && day < 306):
		document.write("&nbsp;&nbsp;&nbsp; " + month[9] + "&nbsp;" + season[3]);
		break;
	case (day >= 306 && day < 336):
		document.write("&nbsp;&nbsp;&nbsp; " + month[10] + "&nbsp;" + season[3]);
		break;
	case (day >= 336 && day < 367):
		document.write("&nbsp;&nbsp;&nbsp; " + month[11] + "&nbsp;" + season[0]);
		break;
	default:
		document.write("&nbsp;&nbsp;&nbsp;Введенное число не из указанного диапазона\n\r");
}