'use strict';

const { Question } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Question.bulkCreate([
      {
        theme_id: 1,
        question: 'Не можем не спросить про сериалы. Нет, эту раскадровку рисовали не шоураннеры и не режиссеры, а профессиональные художники. Героиню, правда, узнать трудновато, но мы уверены, вы справитесь.',
        question_pic: 'Игра престолов.png',
        answer: 'Игра престолов',
        points: 100,
        picForAnswer: 'Игра престолов_ответ.jfif'
      },
      {
        theme_id: 1,
        question: 'Вы можете удивиться, но это раскадровки, сделанные одним из главных режиссеров современности. Узнаете фильм?',
        question_pic: 'Таксист.jfif',
        answer: 'Таксист',
        points: 200,
        picForAnswer: 'Таксист_ответ.jfif',
        infoForAnswer: 'Это раскадровки Мартина Скорсезе к «Таксисту» с Робертом Де Ниро в главной роли. Сам режиссер говорил, что такие зарисовки простым карандашом — его первый этап работы над каждым фильмом.',
      },
      {
        theme_id: 1,
        question: 'Вопрос для очень внимательных зрителей. Где есть похожий кадр?',
        question_pic: 'Стражи Галактики.png',
        answer: 'Стражи Галактики',
        points: 300,
        picForAnswer: 'Стражи Галактики_ответ.jfif',
        infoForAnswer: 'Это раскадровка Джеймса Ганна для одной из первых сцен «Стражей Галактики», с титрами, где Звездный Лорд идет в наушниках.',
      },
      {
        theme_id: 1,
        question: 'А эту грустную девушку в цветах нарисовали для какого фильма?',
        question_pic: 'Солнцестояние',
        answer: 'Солнцестояние.jfif',
        points: 400,
        picForAnswer: 'Солнцестояние_ответ.jfif',
        infoForAnswer: 'Это набросок Ари Астера к хоррору «Солнцестояние». Режиссер не только детально нарисовал костюм королевы мая, но и изобразил, с каким лицом должна появляться героиня в этой сцене.',
      },
      {
        theme_id: 1,
        question: 'Что-то знакомое… Или нет?',
        question_pic: 'Начало.jfif',
        answer: 'Начало',
        points: 500,
        picForAnswer: 'Начало_ответ.jfif',
        infoForAnswer: 'Это волчок из «Начала» Кристофера Нолана. Правда, режиссер не сам рисует раскадровки к своим фильмам, за него это делают художники. В этом случае — Гэбриел Хардман.',
      },
      {
        theme_id: 2,
        question: 'Самая длинная горная система Земли?',
        answer: 'Анды',
        points: 100,
      },
      {
        theme_id: 2,
        question: 'Где находятся Русские горы?',
        answer: 'В Антарктиде',
        points: 200,
      },
      {
        theme_id: 2,
        question: 'Где находится Арарат?',
        answer: 'В Турции',
        points: 300,
      },
      {
        theme_id: 2,
        question: 'На какое количество гор-восьмитысячников нужно взойти, чтобы завоевать "Корону Земли"?',
        answer: '14',
        points: 400,
      },
      {
        theme_id: 2,
        question: 'В какой стране находится самая опасная пешеходная горная тропа в мире, в конце которой всех посетителей ждет чайный домик?',
        answer: 'В Китае',
        points: 500,
      },
      {
        theme_id: 3,
        question: 'Лучший танцор Эльбруса из нынешних студентов?',
        answer: 'Максим Дорофеев',
        points: 100,
      },
      {
        theme_id: 3,
        question: 'Сколько истинных "бобров" сейчас в группе "Бобры"?',
        answer: '1',
        points: 200,
      },
      {
        theme_id: 3,
        question: 'Что Аня просит передавать соседнему столику, за которым тупят?',
        answer: 'Чапалах',
        points: 300,
      },
      {
        theme_id: 3,
        question: 'Продолжите фразу Керима: "Это...',
        answer: 'раз**б',
        points: 400,
      },
      {
        theme_id: 3,
        question: 'Самый классный студент Эльбруса?',
        answer: 'Я',
        points: 5000,
      },
    ]);
  },

  async down() {
    await Question.destroy({ truncate: { cascade: true } });
  },
};
