// //DB
const starWarsHeroes = [
  {
    id: 1,
    image:
      'https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_fb34a1ff.jpeg?region=131%2C0%2C951%2C536',
    name: 'Люк Скайуокер',
    age: 88,
    rate: 10,
    description:
      'Люк Скайуокер персонаж вселенной Звездных Войн. Он был сыном Анакина Скайуокера и Падме Амидалы, родился на планете Татуин и стал одним из последних джедаев, учеником Оби-Вана Кеноби.',
    favorite: true,
  },
  {
    id: 2,
    image:
      'https://lumiere-a.akamaihd.net/v1/images/leia-organa-feature-image_d0f5e9_056d9177.jpeg?region=0%2C0%2C1280%2C720',
    name: 'Принцесса Лея Органа',
    age: 54,
    rate: 7,
    description:
      'Принцесса Лея Органа персонаж вселенной Звездных Войн. Она была лидером Альянса повстанцев, а затем Новой Республики, а также жена Хана Соло и мать Бена Скайуокера.',
    favorite: false,
  },
  {
    id: 3,
    image:
      'https://lumiere-a.akamaihd.net/v1/images/han-solo-main_a4c8ff79.jpeg?region=0%2C0%2C1920%2C1080',
    name: 'Хан Соло',
    age: 73,
    rate: 8,
    description:
      'Хан Соло персонаж вселенной Звездных Войн. Он был контрабандистом и пилотом Милениума Фалькон, а также одним из главных героев в борьбе против Империи.',
    favorite: false,
  },
  {
    id: 4,
    image:
      'https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720',
    name: 'Дарт Вейдер',
    age: 95,
    rate: 10,
    description:
      'Дарт Вейдер персонаж вселенной Звездных Войн. Он был темным лордом Ситхов, учеником Императора Палпатина, а также отцом Люка Скайуокера и Леи Органы.',
    favorite: true,
  },
  {
    id: 5,
    image:
      'https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=0%2C0%2C1536%2C864',
    name: 'Йода',
    age: 98,
    rate: 9,
    description:
      'Йода персонаж вселенной Звездных Войн. Он бывеликим мастером джедаев и советником канцлера Республики. Йода был одним из последних джедаев, оставшимся в живых после того, как Империя уничтожила орден джедаев.',
    favorite: true,
  },
  {
    id: 6,
    image:
      'https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721',
    name: 'Оби-Ван Кеноби',
    age: 87,
    rate: 9,
    description:
      'Оби-Ван Кеноби персонаж вселенной Звездных Войн. Он был мастером джедаев и учеником Квай-Гон Джинна, а затем сам стал учителем Анакина Скайуокера и Люка Скайуокера. Оби-Ван был также одним из основных героев борьбы против Империи.',
    favorite: true,
  },
  {
    id: 7,
    image:
      'https://lumiere-a.akamaihd.net/v1/images/Padme-Amidala_05d50c8a.jpeg?region=0%2C0%2C1536%2C864',
    name: 'Падме Амидала',
    age: 45,
    rate: 4,
    description:
      'Падме Амидала персонаж вселенной Звездных Войн. Она была королевой и затем сенатором планеты Набу, а также матерью Люка Скайуокера и Леи Органы.',
    favorite: false,
  },
  {
    id: 8,
    image:
      'https://lumiere-a.akamaihd.net/v1/images/boba-fett-main_a8fade4d.jpeg?region=203%2C34%2C1077%2C606',
    name: 'Боба Фетт',
    age: 76,
    rate: 7,
    description:
      'Боба Фетт персонаж вселенной Звездных Войн. Он был наемным охотником за головами и одним из самых известных персонажей вселенной Звездных Войн.',
    favorite: true,
  },
  {
    id: 9,
    image:
      'https://lumiere-a.akamaihd.net/v1/images/rey-main_ca4bb0d7.jpeg?region=180%2C0%2C951%2C536',
    name: 'Рей',
    age: 85,
    rate: 7,
    description:
      'Рей персонаж вселенной Звездных Войн. Она была пилотом и бывшей скавенджершей на планете Яку, а затем стала ученицей Люка Скайуокера в борьбе против Первого Ордена.',
    favorite: false,
  },
  {
    id: 10,
    image: 'https://lumiere-a.akamaihd.net/v1/images/image_c0d20b99.jpeg?region=158,0,1244,700',
    name: 'Дарт Мол',
    age: 78,
    rate: 5,
    description:
      'Дарт Мол персонаж вселенной Звездных Войн. Он был ситхом-учеником Дарта Сидиуса и был известен своей двухлезвийной красной саблей.',
    favorite: false,
  },
  {
    id: 11,
    image:
      'https://lumiere-a.akamaihd.net/v1/images/lando-main_a207290e.jpeg?region=147%2C0%2C951%2C536',
    name: 'Лэндо Калриссиан',
    age: 44,
    rate: 2,
    description:
      'Лэндо Калриссиан персонаж вселенной Звездных Войн. Он был шахтером в облаках на планете Беспин, а затем стал главой города-облака, где Хан Соло был захвачен Империей.',
    favorite: false,
  },
  {
    id: 12,
    image: 'https://www.centax.ru/images/movies/solo/solo-chewbacca-sm.jpg',
    name: 'Чубакка',
    age: 70,
    rate: 9,
    description:
      'Чубакка персонаж вселенной Звездных Войн. Он был вуки-вуки (волосатым инопланетным существом) и верным другом Хана Соло.',
    favorite: true,
  },
  {
    id: 13,
    image:
      'https://lumiere-a.akamaihd.net/v1/images/qui-gon-jinn-main_3386f119.jpeg?region=296%2C3%2C937%2C527',
    name: 'Квай-Гон Джинн',
    age: 80,
    rate: 5,
    description:
      'Квай-Гон Джинн персонаж вселенной Звездных Войн. Он был мастером джедаев и учеником Цианн Блоодхаунд, а также учителем Оби-Вана Кеноби.',
    favorite: false,
  },
  {
    id: 14,
    image:
      'https://lumiere-a.akamaihd.net/v1/images/databank_jangofett_01_169_884cefab.jpeg?region=0%2C0%2C1560%2C878',
    name: 'Джанго Фетт',
    age: 74,
    rate: 6,
    description:
      'Джанго Фетт персонаж вселенной Звездных Войн. Он был наемным охотником за головами и отцом Бобы Фетта.',
    favorite: false,
  },
  {
    id: 15,
    image:
      'https://lumiere-a.akamaihd.net/v1/images/poe-main_611e1021.jpeg?region=0%2C0%2C1280%2C720',
    name: 'По Дамерон',
    age: 52,
    rate: 3,
    description:
      'По Дамерон персонаж вселенной Звездных Войн. Он был летчиком сопротивления и одним из главных героев сиквелов.',
    favorite: false,
  },
  {
    id: 16,
    image:
      'https://lumiere-a.akamaihd.net/v1/images/databank_admiralmotti_01_169_f01d2570.jpeg?region=0%2C0%2C1560%2C878',
    name: 'Адиралл Тор',
    age: 54,
    rate: 7,
    description:
      'Адмиралл Тор персонаж вселенной Звездных Войн. Он был адмиралом Империи и командовал Издателем - мощным звездным разрушителем, который был уничтожен в битве при Эндоре.',
    favorite: false,
  },
  {
    id: 17,
    image:
      'https://lumiere-a.akamaihd.net/v1/images/chirrut-imwe_5ed7457a.jpeg?region=395%2C0%2C1165%2C654',
    name: 'Чиррут Имве',
    age: 62,
    rate: 3,
    description:
      'Чиррут Имве персонаж вселенной Звездных Войн. Он был слепым монахом-воином и верил в Силу.',
    favorite: false,
  },
  {
    id: 18,
    image:
      'https://lumiere-a.akamaihd.net/v1/images/Count-Dooku_4f552149.jpeg?region=0%2C0%2C1436%2C808',
    name: 'Граф Дуку',
    age: 53,
    rate: 6,
    description:
      'Граф Дуку персонаж вселенной Звездных Войн. Он был ситхом и учеником Дарта Сидиуса, а затем стал лидером Конфедерации Независимых Систем.',
    favorite: false,
  },
  {
    id: 19,
    image:
      'https://lumiere-a.akamaihd.net/v1/images/din-djarin-main_a3810794.jpeg?region=143%2C37%2C1150%2C646',
    name: 'Мандалорец',
    age: 83,
    rate: 8,
    description:
      'Мандалорец, известный некоторым как Динг Дарлинг, - потрепанный в боях охотник за головами, пробирающийся через опасную галактику в неопределенную эпоху. Воссоединившись с Роугом, Джарин предпринимает новые поиски, чтобы вернуть себе место в мандалорианском обществе, поскольку его разрозненный народ объединяется, чтобы выступить против остатков Империи.',
    favorite: true,
  },
  {
    id: 20,
    image:
      'https://lumiere-a.akamaihd.net/v1/images/cassian-andor-main_d583d3b2.jpeg?region=415%2C17%2C1217%2C683',
    name: 'Кассиан Андор',
    age: 42,
    rate: 3,
    description:
      'Андор — пилот, офицер-разведчик из Повстанческого Альянса и лидер «Изгоя-один», группировки повстанцев, которая похищает чертежи «Звезды Смерти», оружия, способного уничтожить планету',
    favorite: false,
  },
];
//API CLASS
class Api {
  constructor(login) {
    this.baseURL = 'https://cats.petiteweb.dev/api/single/' + login + '/';
  }
  getAllHeroes = async () => {
    try {
      const res = await fetch(this.baseURL + 'show');
      return res.json();
    } catch (err) {
      console.log(err);
    }
  };
  //НЕ ИСПОЛЬЗУЕТСЯ
  getAllIDHeroes = async () => {
    try {
      const res = await fetch(this.baseURL + 'ids');
      return res.json();
    } catch (err) {
      console.log(err);
    }
  };
  //НЕ ИСПОЛЬЗУЕТСЯ
  getHeroForId = async (id) => {
    try {
      const res = await fetch(this.baseURL + 'show/' + id);
      return res.json();
    } catch (err) {
      console.log(err);
    }
  };
  deleteHero = async (id) => {
    try {
      const res = await fetch(this.baseURL + 'delete/' + id, {
        method: 'DELETE',
      });
      return res.json();
    } catch (err) {
      console.log(err);
    }
  };
  addHero = async (hero) => {
    try {
      const res = await fetch(this.baseURL + 'add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hero),
      });
      return res.json();
    } catch (err) {
      console.log(err);
    }
  };
  changeHero = async (hero, id) => {
    if (id === undefined) return;
    try {
      const res = await fetch(this.baseURL + 'update/' + id.toString(), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hero),
      });
      return res.json();
    } catch (err) {
      console.log(err);
    }
  };
}
//LOGIN
let MY_LOGIN = null;
//api экземпляр
let api = null;
//НАЧАЛЬНОЕ ОКНО
const starWarsModalOnload = document.getElementById('star_wars_modal_onload');

//КНОПКИ В ХЕДЕРЕ
const openAddFormBtn = document.getElementById('open_form');
const findHeroInput = document.getElementById('search_hero_input');
const getAllHeroes = document.getElementById('all_heroes');
//НАСТРОЙКА КНОПКИ СОРТИРОВКИ ГЕРОЕВ
const sortButton = document.getElementById('sort_button');
const sortOptions = document.getElementById('sort_options');
const sortBtnInsideOptions = document.querySelectorAll('.nav_btn_inside_select');
const rateBtn = document.getElementById('rate_btn');
const powerBtn = document.getElementById('power_btn');
const alphabetBtn = document.getElementById('alphabet_btn');
const favoriteHeroes = document.getElementById('favorite_btn');

//кнопка PLAY
const playStartModal = document.getElementById('play_btn_for_start');
//LOGIN INPUT
const inputLogin = document.getElementById('login_input');
inputLogin.addEventListener('input', (e) => {
  MY_LOGIN = e.target.value;
  if (MY_LOGIN) playStartModal.classList.add('fa-beat-fade');
  else playStartModal.classList.remove('fa-beat-fade');
});
//LOGOUT
const logout = document.getElementById('logout');
logout.addEventListener('click', () => {
  localStorage.clear();
  location.reload();
});
//ОБЕРТКА КОНТЕНТА
const bodyWrapper = document.getElementById('body_wrapper');
//MAIN ГДЕ ОТОБРАЖАЮТСЯ ГЕРОИ
const main = document.getElementById('main');
//МАССИВ ГЕРОЕВ
let renderHero = null;
//ПРОВЕРЯЕМ ЛОГИН
if (localStorage.getItem('login') !== null) {
  MY_LOGIN = localStorage.getItem('login');
  inputLogin.remove();
  playStartModal.classList.add('fa-beat-fade');
  starWarsModalOnload.insertAdjacentHTML(
    'afterbegin',
    `<p id="welcome">Да прибудет с тобой сила ${MY_LOGIN}</p>`,
  );
}
//ЗВУК ДОБАВЛЕНИЯ НОВОГО ГЕРОЯ
const soundAddHero = document.getElementById('audio_lazer_blade');
function playSoundAddHero() {
  soundAddHero.play();
}
//ФУНКЦИЯ СОЗДАНИЯ ЭЛЕМЕНТА ЗАСТАВКИ С НАЧАЛЬНЫМ ТЕКСТОМ
function createStartModal() {
  return `<div class="star_wars_modal_onload-content">
  <div class="crawl-text">
    <p id="scroll_text">
      Давным-давно, в далекой-далекой галактике... <br/> В Галактическом Сенате смятение. Несколько
      тысяч солнечных систем заявило о намерении выйти из состава республики. Это
      сепаратистское движение, возглавляемое таинственным графом Дуку, сильно осложняет
      немногочисленным силам рыцарей Джедаев попытки сохранить мир и порядок в галактике.
      Сенатор Амидала, бывшая королева Набу, возвращается в Галактический Сенат, чтобы
      участвовать в голосовании по спорному вопросу создания РЕСПУБЛИКАНСКОЙ АРМИИ- в помощь
      оставшимся Джедаям.
    </p>
  </div>
</div>`;
}
//НАЧАЛЬНАЯ ЗАСТАВКА
//АУДИО
const soundStartMusic = document.getElementById('audio_start_music');
//начать аудио с начальной музыкой
function playSoundStartMusic() {
  soundStartMusic.play();
}

//Функция удаления всех слушателей и аудио элемента
const removeStartModal = function () {
  starWarsModalOnload.remove();
  soundStartMusic.remove();
};
//ЗАПУСТИТЬ НАЧАЛЬНУЮ ЗАСТАВКУ
playStartModal.addEventListener('click', () => {
  if (MY_LOGIN === null || MY_LOGIN.trim() === '') return;
  logout.innerHTML = `<span id="my_login_text">${MY_LOGIN}</span>`;
  api = new Api(MY_LOGIN);
  localStorage.setItem('login', MY_LOGIN);
  playSoundStartMusic();
  starWarsModalOnload.innerHTML = createStartModal();
  setTimeout(() => window.addEventListener('click', removeStartModal));
  setTimeout(() => {
    starWarsModalOnload.remove();
    removeStartModal();
    window.removeEventListener('click', removeStartModal);
  }, 25000);
  init();
});
//ФУНКЦИЯ РЕРЕНДЕРА ГЕРОЕВ И ДОБАВЛЕНИЯ ИХ В ХРАНИЛИЩЕ
function rerender(heroes) {
  const totalRenderHeroAsString = heroes.reduce(
    (total, current) => total + createHero(current),
    '',
  );
  main.innerHTML = totalRenderHeroAsString;
  localStorage.setItem(MY_LOGIN, JSON.stringify([...heroes]));
}
//УДАЛЕНИЕ ГЕРОЯ
function deleteHero(id) {
  api.deleteHero(id).then((res) => {
    if (res?.message === `Кот c id «${id}» успешно удален`) {
      openInfoModal('delete', true);
      renderHero = renderHero.filter((el) => el.id !== id);
      rerender([...renderHero]);
    } else {
      openInfoModal('delete', false);
    }
  });
}
//ТОГЛ ЛЮБИМОГО ГЕРОЯ
function toggleFavorite(idx) {
  const hero = renderHero.find((el) => el.id === idx);
  hero.favorite = !hero.favorite;
  api.changeHero(hero, idx).then((res) => {
    if (res?.message === 'Данные о коте успешно изменены') {
      renderHero = renderHero.map((el) => (el.id === idx ? hero : el));
      rerender([...renderHero]);
    } else {
      alert('Что-то сломалось');
    }
  });
}
//ОТКРЫТИЕ МОДАЛЬНОГО ОКНА С ОПИСАНИЕМ
function toggleModal(id) {
  const hero = renderHero.find((hero) => hero.id === id);
  const modal = ` <div id="modal_container">
  <div id="modal_content">
  <span id="close_modal">&times;</span>
  <div class="modal_description">
  <p class="field_inside_modal">Имя героя:<br/> <span class="field_span">${hero.name}</span></p>
  <p class="field_inside_modal">Сила героя:<br/>  <span class="field_span ${gradeByPower(
    hero.age,
  )}">${hero.age}</span></p>
  <p class="field_description">Описание героя:<br/> ${hero.description}</p>
  </div>
  <div class="img_modal" style="background-image: url('${
    hero.image || 'assets/default.png'
  }')"></div>
  </div>
  </div>`;
  //МОНТИРОВАНИЕ И РАЗМОНИТОРВАНИЕ МОДАЛЬНОГО ОКНА
  bodyWrapper.insertAdjacentHTML('beforebegin', modal);
  const modalContainer = document.getElementById('modal_container');
  const closeModalButton = document.getElementById('close_modal');
  closeModalButton.addEventListener('click', () => {
    modalContainer.remove();
  });
  document.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
      modalContainer.remove();
    }
  });
}
//СОЗДАНИЕ ГЕРОЯ
function createHero(obj) {
  return `        <div class="hero">
    <div class="background_img" style="background-image: url('${
      obj.image || 'assets/default.png'
    }')"></div>
    <div title="Рейтинг" class="rating ${gradeByRate(obj.rate)}">${obj.rate}</div>
    <i title="Избранный" onclick="toggleFavorite(${obj.id})" class="fa-solid fa-heart ${
    obj.favorite ? 'fa-beat favorite_hero' : 'not_favorite_hero'
  }"></i>
    <div class="hero_options">
      <div class="create_hero_fields">
        <p class="hero_field">
          <img src="/assets/villain.png" alt="" class="img_title" title="Имя героя" />
          <span class="hero_field_name">${obj.name}</span>
        </p>
        <p class="hero_field">
          <img src="/assets/light-saber.png" alt="" class="img_title" title="Сила героя" />
          <span class="hero_field_power ${gradeByPower(obj.age)}">${obj.age}</span>
        </p>
      </div>
      <div class="hero_btn_group">
        <button class="hero_btn" onclick="toggleModal(${obj.id})" >Посмотреть</button>
        <i class="fa-solid fa-pen" title="Изменить" onclick="openNewForm('change',${
          obj.id
        })" id="open-updateForm"></i>
        <i class="fa-regular fa-trash-can" title="Удалить" onclick="deleteHero(${obj.id})"></i>
      </div>
    </div>
  </div>`;
}
//СОЗДАНИЕ ФОРМЫ
function fromCreator(type, idx = null) {
  const hero = renderHero.find((el) => el.id === idx);
  return `
<div id="form_container">
<form id="form">
  <div class="form_field_wrapper">
    <label for="name_input">Имя героя</label>
    <input
    value="${idx ? hero.name : ''}"
      type="text"
      placeholder="Введите имя героя"
      required
      id="name_input"
      name="name" />
  </div>
  <div class="form_field_wrapper">
    <label for="rate_input">Рейтинг героя </label>
    <span id="rate_input_value">1</span>
    <input
    value="${idx ? hero.rate : ''}"
      type="range"
      placeholder="Укажите рейтинг"
      required
      min="1"
      max="10"
      id="rate_input"
      name="rate" />
  </div>
  <div class="form_field_wrapper">
    <label for="power_input">Сила героя </label>
    <span id="power_input_value">1</span>
    <input
    value="${idx ? hero.age : ''}"
      required
      type="range"
      placeholder="Укажите силу"
      min="1"
      max="100"
      value="1"
      id="power_input"
      name="age" />
  </div>
  <div class="form_field_wrapper">
    <label for="description_input">Опишите вашего героя</label>
    <input
      type="text"
    value="${idx ? hero.description : ''}"

      placeholder="Опишите вашего героя"
      id="description_input"
      name="description" />
  </div>
  <div class="form_field_wrapper">
    <label for="url_input">Ссылка на изображение</label>
    <input type="text" placeholder="Ссылка на изображение" id="url_input" name="image" value="${
      idx ? hero.image : ''
    }"/>
  </div>
  <div class="form_field_wrapper">
    <label for="favorite_input">Добавить в избранное</label>
    <input type="checkbox" id="favorite_input" name="favorite" ${
      idx && hero.favorite ? 'checked' : ''
    }/>
  </div>
  <div class="form_btn_group">
  ${
    type === 'add'
      ? '<button type="button" class="submit_btn" id="random_btn">Мне повезет</button>'
      : ''
  }
    <button type="submit" class="submit_btn">${type === 'add' ? 'Создать' : 'Изменить'}</button>
    <button type="button" class="submit_btn" id="close_form">Отменить</button>
  </div>
</form>
</div>`;
}
//ФУНКЦИЯ ОТКРЫТИЯ ФОРМЫ
function openNewForm(type, idx) {
  const formHTML = fromCreator(type, idx);
  //МОНТИРОВАНИЕ ФОРМЫ
  bodyWrapper.insertAdjacentHTML('beforebegin', formHTML);
  //НАСТРОЙКА ИНПУТА RAGE
  const inputPower = document.getElementById('power_input');
  const inputPowerValue = document.getElementById('power_input_value');
  inputPowerValue.innerHTML = inputPower.value;
  inputPower.addEventListener('input', function () {
    inputPowerValue.innerHTML = this.value;
  });
  const inputRate = document.getElementById('rate_input');
  const inputRateValue = document.getElementById('rate_input_value');
  inputRateValue.innerHTML = inputRate.value;
  inputRate.addEventListener('input', function () {
    inputRateValue.innerHTML = this.value;
  });
  //ЗАКРЫТИЕ И ОБРАБООТКА ФОРМЫ
  const closeForm = document.getElementById('close_form');
  const form = document.getElementById('form_container');
  closeForm.addEventListener('click', () => form.remove());
  form.addEventListener('submit', (event) => submitHandler(event, type, idx, form));
  //РАНДОМНЫЙ ГЕРОЙ
  const fetchRandomHeroBtn = document.getElementById('random_btn');
  fetchRandomHeroBtn?.addEventListener('click', () => randomFetchHero(form));
}
//УНИВЕРСАЛЬНАЯ ФУНКЦИЯ ОБРАБОТКИ ФОРМЫ В ЗАВИСИМОСТИ ОТ ТИПА ФОРМЫ
function submitHandler(event, type, idx, form) {
  let apiHandler = () => {};
  switch (type) {
    case 'add': {
      apiHandler = api.addHero;
      break;
    }
    case 'change': {
      apiHandler = api.changeHero;
      break;
    }
    default:
      alert('Неправильный тип формы: ' + type);
      return;
  }
  event.preventDefault();
  //ДАННЫЕ ИЗ ФОРМЫ
  const formData = new FormData(event.target);
  const body = Object.fromEntries(formData.entries());
  body.favorite ? (body.favorite = true) : (body.favorite = false);
  idx ? (body.id = idx) : (body.id = Date.now());
  body.age = Number(body.age);
  body.rate = Number(body.rate);
  //ЗАПРОС НА СЕРВЕР
  apiHandler(body, idx).then((res) => {
    if (res?.message.includes('успешно')) {
      if (type === 'add') {
        openInfoModal('add', true);
        renderHero = [...renderHero, body];
        rerender([...renderHero]);
      } else {
        openInfoModal('change', true);
        renderHero = renderHero.map((el) => (el.id === idx ? body : el));
        rerender([...renderHero]);
      }
    } else {
      type === 'add' ? openInfoModal('add', false) : openInfoModal('change', false);
    }
    form.remove();
  });
}
//ПОЛУЧЕНИЕ И ОТПРАВКА РАНДОМНОГО ГЕРОЯ ИЗ DB
function randomFetchHero(form) {
  const body = { ...starWarsHeroes[Math.floor(Math.random() * 21)] };
  if (Object.keys(body).length === 0) {
    openInfoModal('add', false);
    form.remove();
    return;
  }
  body.id = Date.now();
  api.addHero(body).then((res) => {
    if (res?.message.includes('успешно')) {
      openInfoModal('add', true);
      renderHero = [...renderHero, body];
      rerender([...renderHero]);
    } else {
      openInfoModal('add', false);
    }
    form.remove();
  });
}
//функции градации параметров
function gradeByRate(num) {
  if (num >= 7) return 'rating_green';
  else if (num >= 5) return 'rating_orange';
  else return 'rating_red';
}
function gradeByPower(num) {
  if (num >= 80) return 'hight';
  else if (num >= 50) return 'medium';
  else return 'low';
}
//ПОЯВЛЕНИЕ ИНФО ОКНА
//хелпер функция для сокращения
function shortForModalInfoElem(elem, text, success) {
  if (elem.firstElementChild.innerText === '') {
    elem.firstElementChild.innerText = success ? `Герой успешно ${text}` : `Герой не ${text}`;
  }
}
function openInfoModal(action, success) {
  let modal = `<div id="modal_info" class="slide_in modals_info">
  <p class="modal_info_text"></p>
  <i class="fa-solid ${success ? 'fa-circle-check' : 'fa-ban'} fa-beat-fade" id="icon_info"></i>
  </div>`;
  bodyWrapper.insertAdjacentHTML('beforebegin', modal);
  const modals = document.querySelectorAll('.modals_info');
  switch (action) {
    case 'add': {
      playSoundAddHero();
      modals.forEach((el) => shortForModalInfoElem(el, 'добавлен', success));
      break;
    }
    case 'change': {
      modals.forEach((el) => shortForModalInfoElem(el, 'изменен', success));
      break;
    }
    case 'delete': {
      modals.forEach((el) => shortForModalInfoElem(el, 'удален', success));
      break;
    }
    default: {
      return alert(`Не правильный action :${action}`);
    }
  }
  const removeModal = (elem) => {
    elem.classList.add('slide_out');
    elem.addEventListener('animationend', () => {
      elem.remove();
    });
  };
  modals.forEach((elem) => {
    setTimeout(() => {
      removeModal(elem);
    }, 2000);
  });
}

//ДОБАВЛЕНИЕ ОБРАБОТЧИКОВ НА КНОПКИ В ХЕДЕРЕ
//открыть форму добавления
openAddFormBtn.addEventListener('click', () => openNewForm('add'));
//избранные герои
favoriteHeroes.addEventListener('click', () => {
  renderHero = renderHero.filter((hero) => hero.favorite);
  rerender([...renderHero]);
});
//все герои
getAllHeroes.addEventListener('click', () => {
  api.getAllHeroes().then((res) => {
    renderHero = [...res];
    rerender([...renderHero]);
  });
});
//сортировка по рейтингу
rateBtn.addEventListener('click', () => {
  renderHero.sort((a, b) => b.rate - a.rate);
  rerender([...renderHero]);
});
//сортировка по алфавиту
alphabetBtn.addEventListener('click', () => {
  renderHero.sort((a, b) => a.name.localeCompare(b.name));
  rerender([...renderHero]);
});
//сортировка по силе
powerBtn.addEventListener('click', () => {
  renderHero.sort((a, b) => b.age - a.age);
  rerender([...renderHero]);
});
sortButton.addEventListener('click', () => {
  sortOptions.classList.toggle('show');
});
document.addEventListener('click', (event) => {
  if (!sortOptions.contains(event.target) && event.target != sortButton) {
    sortOptions.classList.remove('show');
  }
});
sortBtnInsideOptions.forEach((el) =>
  el.addEventListener('click', () => {
    sortOptions.classList.toggle('show');
    sortButton.innerText = el.innerText + ' ▼';
  }),
);
//INPUT ПОИСКА ГЕРОЕВ
//debounce для инпута
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
const useDebounce = debounce((event) => {
  const heroes = renderHero.filter((hero) =>
    hero.name.toLowerCase().includes(event.target.value.toLowerCase()),
  );
  rerender([...heroes]);
}, 500);
//поиск в инпуте обработчик
findHeroInput.addEventListener('input', useDebounce);
//ФУНКЦИЯ ЗАПУСКА ПРИЛОЖЕНИЯ
function init() {
  //ПРИ ПЕРВОМ РЕНДЕРЕ ПОЛУЧЕНИЕ ГЕРОЕВ ИЗ ХРАНИЛИЩЕ ЕСЛИ ОНИ ТАМ ЕСТЬ
  renderHero = JSON.parse(localStorage.getItem(MY_LOGIN));
  if (renderHero === null) {
    api.getAllHeroes().then((res) => {
      renderHero = [...res];
      rerender([...renderHero]);
    });
  } else rerender([...renderHero]);
}
