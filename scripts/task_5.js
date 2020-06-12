	// Задание № 5
document.write("\n\r\n\rЗадание № 5\n\r");

let a_5 = 10,
	b_5 = 2,
	sum = a_5 + b_5,
	razn = a_5 - b_5,
	proiz = a_5 * b_5,
	chastn = a_5 / b_5;

document.write("&nbsp;&nbsp;&nbsp;Сумма: " + sum + ".\n\r", "&nbsp;&nbsp;&nbsp;Разность: " + razn + ".\n\r", "&nbsp;&nbsp;&nbsp;Произведение: " + proiz + ".\n\r", "&nbsp;&nbsp;&nbsp;Частное: " + chastn + ".\n\r");

if (sum > 1) {
	document.write("&nbsp;&nbsp;&nbsp;Т.к. сумма больше 1, то возведем ее в квадрат: " + (sum ** 2) + ".");
} else {
	document.write("&nbsp;&nbsp;&nbsp;Т.к. сумма меньше 1, то оставим ее без изменений: " + sum + ".");
}