import './SideBlock.scss';
import React from 'react';

import Button from 'common/button/Button.jsx';
import arrowLeft from '@fortawesome/fontawesome-free-solid/faAngleDoubleLeft';
import arrowRight from '@fortawesome/fontawesome-free-solid/faAngleDoubleRight';
import arrowTop from '@fortawesome/fontawesome-free-solid/faAngleDoubleUp';
import arrowBottom from '@fortawesome/fontawesome-free-solid/faAngleDoubleDown';

import utils from 'utils';
import img from 'img/me.jpg';

export default class SideBlock extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.state = {
      isOpen: true
    };
  }

  componentDidMount() {
    utils.mobileCheck() && this.setState({ isOpen: false });
  }

  onClick() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    const closeIcon = utils.mobileCheck() ? arrowBottom : arrowRight;
    const openIcon = utils.mobileCheck() ? arrowTop : arrowLeft;
    const icon = this.state.isOpen ? openIcon : closeIcon;

    return <div className={`side-block ${this.state.isOpen ? 'open' : 'close'}`}>
      <Button icon={icon} className="sideblock-btn round-button" onClick={this.onClick} />
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
}