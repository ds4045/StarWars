# StarWars
1)При первичном запуске необходимо указать свой логин в базе данных бекенда,затем этот логин сохранится в localStorage и повторно его вводить уже не надо
2)Если логина нет,то придумайте логин и он сохранится в базе данных
3)Рекомендуется использовать один и тот же логин,дабы не создавать постоянно новые сущности на бекенде
4)При нажатии кнопки logout localStorage полностью удаляется и при повторном заходе потребуется опять ввести логин
5)При возникновении ошибок связанных с localStorage(а такое возможно если данные с бекенда меняются где-то в другом месте)есть 2 рекомендации:
---Нажать кнопку "Все герои",так данные с сервера обновятся
---В самом начале файла script.js прописать команду localStorage.clear(),обновить приложение и потом эту команду удалить
