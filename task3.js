// Обычно, когда вы что-то покупаете, вас спрашивают, верен ли номер вашей кредитной карты, номер телефона или ответ на ваш самый секретный вопрос.
// Однако, поскольку кто-то может заглянуть вам через плечо, вы не хотите, чтобы это отображалось на вашем экране. Вместо этого мы маскируем это.
// Ваша задача - написать функцию maskify, которая преобразует все символы, кроме последних четырех, в '#'.

function maskify(cc) {
    return cc.replace(/.(?=.{4})/g, "#");
}
