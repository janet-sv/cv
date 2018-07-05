import React,  { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Photo from 'components/Photo';
import './styles.scssm';

class Sidebar extends PureComponent {
  render() {
    const {
      photo,
      name,
      lastname,
      labor,
      mobile,
      email,
      objective,
      nationality,
      birthdate,
      languages,
      goals,
      activities,
      interests,
    } = this.props;

    return (
      <div styleName="sidebar">
        <Photo image={photo} />
        <div styleName="name">
          {name} <span styleName="lastname">{lastname}</span>
        </div>
        <div styleName="labor">
          {labor}
        </div>
        <div styleName="contact">
          <div styleName="contact-element">
            <span className="icon-mobile"></span> {mobile}
          </div>
          <div styleName="contact-element">
            <span className="icon-email"></span> {email}
          </div>
        </div>
        <div styleName="objective-container">
          <div styleName="title">
            <span className="icon-plus"></span> Objetivo
          </div>
          <div styleName="objective">
            {objective}
          </div>
        </div>
        <div styleName="information-container">
          <div styleName="title">
            <span className="icon-i"></span> Info. General
          </div>
          <div styleName="information-element">
            <div styleName="subtitle">
              PERSONAL
            </div>
            <ul styleName="list">
              <li styleName="list-item">Nacionalidad  :   {nationality}</li>
              <li styleName="list-item">Cumpleaños   :   {birthdate}</li>
            </ul>
          </div>
          <div styleName="information-element">
            <div styleName="subtitle">
              IDIOMAS
            </div>
            {languages.map(language => (
              <ul key={`language-${language.name}`} styleName="list">
                <li styleName="list-item is-bold">{language.name}</li>
                <li styleName="list-item">Habla                :   {language.talking}</li>
                <li styleName="list-item">Escritura           :   {language.writing}</li>
              </ul>
            ))}
          </div>
          <div styleName="information-element">
            <div styleName="subtitle">
              PREMIOS Y RECONOCIMIENTOS
            </div>
            <ul styleName="items">
              {goals.map(goal => (
                <li key={`goal-${goal.id}`} styleName="item">
                  <span className="icon-star" styleName="dot"></span> {goal.description}
                </li>
              ))}
            </ul>
          </div>
          <div styleName="information-element">
            <div styleName="subtitle">
              ACTIVIDADES
            </div>
            <ul styleName="items">
              {activities.map(activity => (
                <li key={`activity-${activity.id}`} styleName="item">
                  <span className="icon-star" styleName="dot"></span> {activity.description}
                </li>
              ))}
            </ul>
          </div>
          <div styleName="information-element">
            <div styleName="subtitle">
              INTERESES
            </div>
            <div styleName="interests">
              {interests.map(interest => (
                <div key={`interest-${interest.name}`} styleName="interest">
                  <span className="icon-star"></span> {interest.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;