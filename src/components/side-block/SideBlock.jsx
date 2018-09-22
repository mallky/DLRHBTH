import './SideBlock.scss';
import React from 'react';

import img from 'img/me.jpg';

export default function SideBlock() {
  return <div className="side-block">
    <h1>Web-web</h1>
    <h2>Мой блог о web-разработке</h2>
    <img src={img} alt="me"/>
    <div className="about">
      <strong>Макар Кузьмичев</strong>
      <p>
        Frontend-разработчик в компании Competentum, занимающейся e-learning.
        Опыт работы: 2 года.
      </p>
      <span>
        Решил начать вести блог, в котором писать различные статьи о web-технологиях, как старых, так и новых.
         Цель одна - не забыть старое и узнать новое. Возможно еще кому-то будет полезно.
      </span>
    </div>

    <h2>Контакты:</h2>
    <span>
      ВКонтакте: <a href='https://vk.com/id33600277'>Макар Кузьмичев</a>
    </span>
    <span>
      e-mail: <a href='mailto:makarkuz@yandex.ru'>makarkuz@yandex.ru</a>
    </span>
  </div>;
}