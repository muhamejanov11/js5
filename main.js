let strPrompt = prompt('Напишите что-то(на русском)')
let latterPrompt = prompt('Напишите любую букву(на русском)')
if (strPrompt.includes(latterPrompt) === true) {
    console.log('Есть такая буква');
}

else if(strPrompt.includes(latterPrompt) === false){
    console.log('Нет такой буквы.Пошли вон.');
}