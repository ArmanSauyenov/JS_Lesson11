//Практика
//1. Создать на каждое подзадание кнопку, назвать соответственно номеру задания(1.1, 1.2 и т.д.).
//Одну кнопку для очистки всех подсветок(удаления класса "h").Подсветка в любом случае должна
//сама удалиться, через 10 секунд после того как добавилась.

//В каждом поздадании условие, по которому нужно найти элемент и присвоить ему класс "h"
//Подзадания:
//1.1 Все элементы li, которые находятся вне списка #list2 и содержат класс item
//1.2 Первый элемент в последнем списке(список - ul)
//1.3 Все элементы li, в тексте которых содержиться ".2"
//1.4 Все третие элементы каждого списка
//1.5 Следующий элемент после поля ввода(input[type = text]) со значением 2(value = 2)
//1.6 Все поля ввода, в тексте которых содержится число 12
//1.7 Текстовый блок P, который лежит на глубине 3 div элементов
//1.8 Все четные элементы в первом списке и нечетные во втором и третьем
//1.9 Все input элементы, значение которых ровно 12 или содержит 34

//2. При выборе radio - кнопки "Вкл", из всех 4 текстовых полей должно взяться значение,
//    каждое это значение должно использоваться как отдельный селектор("div", "#list", и т.д.)
//и всем элементам подходящим под селектор 1 поля должен добавиться класс h1, 2 поля h2, и т.д. 


function hi(selector) {
    var element = $(selector);
    console.log(element);
    element.addClass('h');
    setTimeout(function () {
        element.removeClass('h');
    },
        1000);
}

$('input[type=button][value="1.1"]').on('click',
    function (e) {
        hi('ul:not(#list2) li.item');
    });

$('input[type=button][value="1.2"]').on('click',
    function (e) {
        hi('ul:last-child li:first');
    });

$('input[type=button][value="1.3"]').on('click',
    function (e) {
        hi('ul li:contains(.2)');
    });

$('input[type=button][value="1.4"]').on('click',
    function (e) {
        hi('ul li:nth-child(3)');
    });
$('input[type=button][value="1.5"]').on('click',
    function (e) {
        var t = $('input[type = text][value="2"]').next();
        hi(t);
    });

$('input[type=button][value="1.6"]').on('click',
    function (e) {
        hi('input[type = text][value *= "12"]');
    });

$('input[type=button][value="1.7"]').on('click',
    function (e) {

        hi('div > div > div > p');
    });

$('input[type=button][value="1.8"]').on('click',
    function (e) {

        hi('ul:first li:odd, ul:not(#list) li:even');
    });

$('input[type=button][value="1.9"]').on('click',
    function (e) {
        var t = $('input[value = "12"], input[value *= "34"]');
        hi(t);
    });