'use strict';

const btnRegister = document.getElementById('register'), // кнопка зарегистрировать
    buttonControl = document.querySelector('.button-control'), // форма
    userlist = document.querySelector('.user-list'); // блок для вывода
    

let  arr = [], dataBase =[];

if (localStorage.getItem('dataBase') && localStorage.getItem('dataBase') !== null) {
    dataBase = JSON.parse(localStorage.getItem('dataBase'));
    const li = document.createElement('li');
    dataBase.forEach((elem) => {
        const li = document.createElement('li');
        li.textContent = 'Имя: ' + elem.firstName + ', Фамилия: ' + elem.lastName + ', дата регистрации: ' + elem.dataReg;
        userlist.append(li);
    });
}

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
       
        const obj = {
            firstName: arr[0],
            lastName: arr[1],
            dataReg: dataReg,
            login: userlogin,
            password: userPassword,
        };
        
        const li = document.createElement('li');
        li.textContent = 'Имя: ' + obj.firstName + ', Фамилия: ' + obj.lastName + ', дата регистрации: ' + obj.dataReg;

        userlist.append(li);
        
        dataBase.push(obj);

        localStorage.setItem('dataBase', JSON.stringify(dataBase));
              
    };

    btnRegister.addEventListener('click' , function() {
        const userText = prompt('Введите через пробел имя и фамилию пользователя ', 'Пилюшенко Елена');
        
        arr = userText.split(' ');
             
        if (arr.length === 2) {
            addUser();
        } else {
            alert('Ошибка, введите корректные данные');
            return;
        }    
    });

};

buttonControl.addEventListener('submit' , function (event) {
    event.preventDefault();
    
});

render();

