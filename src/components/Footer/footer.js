import React,{Component} from 'react';

import Classify from 'src/classify'

import defaultClasses from './footer.css';
import logo from './Logo2019.png'
class Footer extends Component {
  render(){
    const {classes} = this.props;
    return(
      <footer className={classes.container}>
        <div className={classes.info}>
          <img className={classes.logo} src={logo} alt="logo welagon"/>
          <p >Sistemas de Información Intex es una empresa destinada a la venta de ordenadores de segunda mano, ordenadores portátiles baratos, monitores seminuevos y todo tipo de componentes informáticos.
            <br/><br/>    En nuestra web puede encontrar diferentes tipos de marcas, modelos, y mucho más.</p>
          </div >
          <div className={classes.navFooter}>
          <nav>
            <h6>Contacta</h6>
            <ul>
              <li>info@welagon.com</li>
              <li>927 500 832</li>
            </ul>
          </nav>
          <nav>
            <h6>Legal</h6>
            <ul>
              <li>Condiciones Generales</li>
              <li>Política de privacidad</li>
              <li>Cookies</li>
            </ul>
          </nav>
          <nav>
            <h6>Información</h6>
            <ul>
              <li>Sobre nosotros</li>
              <li>Mapa del Sitio</li>
              <li>Pedidos</li>
              <li>Devoluciones</li>
            </ul>
          </nav>
          </div>
        </footer>
      )
    }
  }

  export default Classify(defaultClasses)(Footer);
