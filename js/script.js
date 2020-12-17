'use strict';

const btnRegister = document.getElementById('register'), // кнопка зарегистрировать
    buttonControl = document.querySelector('.button-control'), // форма
    userlist = document.querySelector('.user-list'), // блок для вывода
    obj = {};

let  arr = [], dataBase =[];

const render = function() {

    const addUser = () => {

        const userlogin = prompt('Введите логин', 'login');
        const userPassword = prompt('Введите пароль' , 'pass');

        const date = new Date();
        const options = {          
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
        
        const dataReg = date.toLocaleString("ru", options);
       
        obj.firstName = arr[0];
        obj.lastName = arr[1];
        obj.dataReg = dataReg;
        obj.login = userlogin;
        obj.password = userPassword;

        
        
        
        console.log('obj: ', obj);
        dataBase.push(obj);
        
        console.log('dataBase: ', dataBase);
      
    };

    

    btnRegister.addEventListener('click' , function() {
        const userText = prompt('Введите через пробел имя и фамилию пользователя ', 'Пилюшенко Елена');
        console.log('userText: ', userText);

        arr = userText.split(' ');
        console.log('arr.length: ', arr.length);
      
        if (arr.length === 2) {
            addUser();
        } else {
            alert('Ошибка, введите корректные данные');
            return;
        }
    
        // userlist.append(userText);

    });

};

buttonControl.addEventListener('submit' , function (event) {
    event.preventDefault();
    
});

render();

