import React,  { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Rate from 'components/Rate';
import './styles.scssm';

class Content extends PureComponent {
  render() {
    const {
      education,
      experience,
      courses,
      techSkills,
      skills,
    } = this.props;

    return (
      <div styleName="content">
        <section styleName="section">
          <div styleName="title">
            <span className="icon-graduate"></span> Educación
          </div>
          <div>
            {education.map((item, index) => (
              <div key={`item-${index}`} styleName="content-detail">
                <div styleName="detail-date">{item.date}</div>
                <div styleName="detail">
                  <div styleName="detail-place">{item.place}</div>
                  <div styleName="detail-description">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section styleName="section">
          <div styleName="title">
            <span className="icon-briefcase"></span> Experiencia
          </div>
          {experience.map((item, index) => (
            <div key={`item-${index}`} styleName="content-detail">
              <div styleName="detail-date">{item.date}</div>
              <div styleName="detail">
                <div styleName="detail-place">{item.company}</div>
                <div styleName="detail-description">{item.position}</div>
              </div>
            </div>
          ))}
        </section>
        <section styleName="section">
          <div styleName="title">
            <span className="icon-tech"></span> Habilidades Técnicas
          </div>
          {techSkills.map((item, index) => (
            <div key={`item-${index}`} styleName="content-detail has-rate">
              <div styleName="detail-date">{item.name}</div>
              <Rate number={item.number} />
            </div>
          ))}
        </section>
        <section styleName="section">
          <div styleName="title">
            <span className="icon-books"></span> Cursos Adicionales
          </div>
          {courses.map((item, index) => (
            <div key={`item-${index}`} styleName="content-detail">
              <div styleName="detail-date">{item.date}</div>
              <div styleName="detail">
                <div styleName="detail-place">{item.place}</div>
                <div styleName="detail-description">{item.description}</div>
              </div>
            </div>
          ))}
        </section>
        <section styleName="section">
          <div styleName="title">
            <span className="icon-skills"></span> Habilidades Comunicativas
          </div>
          {skills.map((item, index) => (
            <div key={`item-${index}`} styleName="content-detail has-rate">
              <div style={{width: '100%'}}><span className="icon-star"></span> {item.name}</div>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default Content;