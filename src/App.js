import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import Sidebar from 'components/Sidebar';
import Content from 'components/Content';
import Form from 'components/Form';
import './App.scssm';

const title = 'CV';

class App extends PureComponent {
  render() {
    const sidebarProps = {
      photo: 'https://scontent.flim5-2.fna.fbcdn.net/v/t1.0-9/561970_546099155445914_2064219501_n.jpg?oh=a10b839add07d459c057605e8aaa6c7f&oe=5A69ACF4',
      name: 'Janet',
      lastname: 'Sarmiento Valdivia',
      labor: 'Desarrollador Web',
      mobile: '947314887',
      email: 'janet.sarmientov@gmail.com',
      objective: `Busco implementar soluciones tecnológicas que resuelvan uno o
        más problemas del usuario, a la par de mejorar su experiencia frente a esta necesidad`,
      nationality: 'Peruana',
      birthdate: '7 de Febrero',
      languages: [{
        name: 'Inglés',
        talking: 'Intermedio',
        writing: 'Intermedio',
      }],
      goals: [{
        id: 1,
        description: 'Ganador de la Hackaton ODS 2017 - Equipo Chatbot'
      }],
      activities: [{
        id: 1,
        description: 'Miembro del comité organizador de .ZIP - Organizadora General (2014)',
      }, {
        id: 2,
        description: 'Miembro de la Asociación de Alumnos de Ingeniería Informática (AAII) - Coordinadora Académica (2014)',
      }],
      interests: [{
        category: 'music',
        name: 'Música',
      }, {
        category: 'films',
        name: 'Películas'
      }, {
        category: 'design',
        name: 'Compras',
      }, {
        category: 'ux',
        name: 'UX',
      }],
    };

    const contentProps = {
      education: [{
        place: 'PONTIFICIA UNIVERSIDAD CATÓLICA DEL PERÚ',
        date: '2011 - 2016',
        description: 'Bachiller en Ingeniería Informática',
      }],
      experience: [{
        date: 'Ene 2017 - Presente',
        company: 'Tekton Labs',
        position: 'Desarrollador Web',
      }, {
        date: 'Ago 2017 - Presente',
        company: 'Pontificia Universidad Católica del Perú',
        position: 'Pre-Docente TPA. Curso: Sistemas de Información 1',
      }, {
        date: 'Ago 2016 - Dic 2016',
        company: 'Pontificia Universidad Católica del Perú',
        position: 'Instructor. Curso: Bases de Datos',
      }, {
        date: 'Ago 2016 - Dic 2016',
        company: 'Pontificia Universidad Católica del Perú',
        position: 'Instructor. Curso: Introducción a la Computación',
      }, {
        date: 'Ago 2015 - Ago 2016',
        company: 'Tekton Labs',
        position: 'Practicante de Desarrollo Web',
      }, {
        date: 'Mar 2014 - Set 2014',
        company: 'Programa Nacional de Conservación de Bosques',
        position: 'Practicante de Tecnologías de Información',
      }],
      courses: [{
        date: 'Jul 2017 - Set 2017',
        place: 'TOULOUSE LAUTREC',
        description: 'Diseño de Experiencia de Usuario'
      }, {
        date: 'Ene 2015 - Feb 2015',
        place: 'SISTEMAS UNI',
        description: 'Implementación en SQL Server Management Studio 2012'
      }],
      techSkills: [{
        name: 'HTML5',
        number: 9,
      }, {
        name: 'CSS3',
        number: 9,
      }, {
        name: 'Sass',
        number: 8,
      }, {
        name: 'ReactJS',
        number: 9,
      }, {
        name: 'VueJS',
        number: 7,
      }, {
        name: 'NodeJS',
        number: 6,
      }, {
        name: 'Redux',
        number: 3,
      }],
      skills: [{
        name: 'Trabajo en equipo.',
      }, {
        name: 'Buena disposición para aprender.',
      }]
    };

    return (
      <div>
        <Helmet>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>{title}</title>
        </Helmet>

        <div styleName="app" id="cv">
          <Sidebar {...sidebarProps} />
          <Content {...contentProps}/>
        </div>
      </div>
    );
  }
}

export default App;
