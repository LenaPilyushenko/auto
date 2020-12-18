'use strict';

const btnRegister = document.getElementById('register'), // кнопка зарегистрировать
    buttonControl = document.querySelector('.button-control'), // форма
    userlist = document.querySelector('.user-list'),
    text = document.querySelector('.text'),
    btnLogin = document.getElementById('login'); // кнопка зарегистрировать; // блок для вывода
    
let  arr = [], dataBase =[];

if (localStorage.getItem('dataBase') && localStorage.getItem('dataBase') !== null) {
    dataBase = JSON.parse(localStorage.getItem('dataBase'));
    const li = document.createElement('li');
    dataBase.forEach((elem) => {
        const li = document.createElement('li');
        li.innerHTML = 'Имя: ' + elem.firstName + ', Фамилия: ' + elem.lastName +
         ', дата регистрации: ' + elem.dataReg + ' <button class="user-remove">×</button>';
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
        li.innerHTML = 'Имя: ' + obj.firstName + ', Фамилия: ' + obj.lastName +
         ', дата регистрации: ' + obj.dataReg + ' <button class="user-remove">×</button>';

        userlist.append(li);
        
        dataBase.push(obj);
    
        localStorage.setItem('dataBase', JSON.stringify(dataBase));

    };

    btnRegister.addEventListener('click' , () => {
        const userText = prompt('Введите через пробел имя и фамилию пользователя ', 'Пилюшенко Елена');
        
        arr = userText.split(' ');
             
        if (arr.length === 2) {
            addUser();
        } else {
            alert('Ошибка, введите корректные данные');
            return;
        }    
    });

    btnLogin.addEventListener('click' , () => {
        const loginName = prompt('Введите логин');
        const loginPass = prompt('Введите пароль');
        let flag, 
            count;
      
        dataBase.forEach((elem, i) => {
            if (elem.login === loginName && elem.password === loginPass ) {
                flag = true;   
                count = i;          
            } else {
                return;              
            }
        });

        if (flag) {
            text.textContent = 'Привет, ' + dataBase[count].firstName; 
           
        } else {
            alert('Пользователь с таким именем не найден');
        }
       
    });

    
    userlist.addEventListener('click', (event) => {
        
        const target = event.target.closest('li');
      
        const deleteUser = (elem) => {

            const myArr = elem.textContent.split(','),
                myArr2= myArr[0].split(':'),
                index = myArr2[1];
                
            let indexUserDel;

            elem.remove();
           
            dataBase.forEach((item, i) => {
                if (item.firstName.trim() === index.trim()) {
                    indexUserDel = i;           
                }           
            });
            dataBase.splice(indexUserDel, 1);
            localStorage.setItem('dataBase', JSON.stringify(dataBase));

        };


        if (target) {
            deleteUser(target);
        }
        
    });


};

buttonControl.addEventListener('submit' , function (event) {
    event.preventDefault();
});

render();

