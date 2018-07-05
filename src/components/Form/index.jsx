import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import './styles.scssm';

class Form extends PureComponent {
  static propTypes = {
  };

  state = {
    languages: [{},{}],
    interests: [],

  };

  deleteItem = (list, index) => {

  };

  loadImage = (e) => {
    const output = document.getElementById('image-output');
    output.src = URL.createObjectURL(e.target.files[0]);
  };

  render() {
    const {
      languages,
    } = this.state;

    return (
      <div styleName="container">
        <section styleName="section">
          <p styleName="section-title">Perfil</p>
          <div>
            <Input label="Nombre" name="name"/>
            <Input label="Apellidos" name="lastname"/>
            <Input label="Celular" name="mobile"/>
            <Input label="Teléfono" name="phone"/>
            <Input label="Email" name="email"/>
          </div>
        </section>
        <section styleName="section">
          <p styleName="section-title">General</p>
          <div>
            <Input label="Objetivo" name="objective" isTextArea={true}/>
            <Input label="Nacionalidad" name="nationality"/>
            <Input label="Cumpleaños" name="birthdate"/>
          </div>
        </section>
        <section styleName="section">
          <span styleName="add">+ Agregar otro</span>
          <p styleName="section-title">Idiomas</p>
            {languages.map((language, index) => (
              <div styleName="group">
                <span styleName="delete" onClick={() => {this.deleteItem(languages, index)}}>X</span>
                <Input label="Nombre idioma" name={`language-name-${index}`} />
                <Input label="Habla" name={`language-talking-${index}`} />
                <Input label="Escritura" name={`language-writing-${index}`} />
              </div>
            ))}
        </section>
      </div>
    );
  }
}

export default Form;