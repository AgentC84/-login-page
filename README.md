<h1>Страница авторизации/регистрации через Firebase</h1>

## Технологии
![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

<div align="center">
  <img height="300" width="600" src="./assets/preview-app.gif"  />
</div>



## Запуск проекта:
* Склонировать проект на ваш компьютер с Github с помощью команды:
```
git clone https://github.com/AgentC84/login-page.git
```

* Установить зависимости с помощью команды:
```
npm install
```
* Создать файл для подключения к Firebase:
  - в корневой папке создать файл .env.local со структурой 
  ```
  REACT_APP_FIREBASE_API_KEY = ...
  REACT_APP_FIREBASE_AUTH_DOMAIN = ...
  REACT_APP_FIREBASE_PROJECT_ID = ...
  REACT_APP_FIREBASE_STORAGE_BUCKET = ...
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID = ...
  REACT_APP_FIREBASE_APP_ID = ...
  REACT_APP_FIREBASE_MEASUREMENT_ID = ...
  ```
  - Зайти на официальный сайт Google Firebase и создать новый проект.
  - В настройках проекта скопировать данные для инициализации Firebase и подставить в соответствующие переменные в .env.local
  
* Запустить проект с помощью команды:
```
npm start
```
