import React,{Component} from 'react';

import classify from 'src/classify'
import defaultClasses from './featured.css';

import portatilhp from './imgeporthp.png'
import monitor from './monitor01.jpg'
import pc from './pc.jpg'

class featured extends Component{
  render(){
    const {classes} = this.props;
    return(
      <div className={classes.container}>
      <section>
        <h4>Destacados</h4>
        <div className={classes.boxesFeatured}>
          <div className={classes.box}>
            <p className={classes.price} >150€</p>
            <div>
              <img className={classes.imagen} src={portatilhp} alt="ordenadores"/>
            </div>
            <p className={classes.info} >i5 3º Generación</p>
          </div>
          <div className={classes.box}>
            <p className={classes.price} >150€</p>
            <div>
              <img className={classes.imagen} src={portatilhp} alt="ordenadores"/>
            </div>
            <p className={classes.info} >i5 3º Generación</p>
          </div>
        </div>

      </section>
      <section>
        <h4>Destacados Monitores</h4>
        <div className={classes.boxesFeatured}>
          <div className={classes.box}>
            <p className={classes.price} >150€</p>
            <div>
              <img className={classes.imagen} src={monitor} alt="ordenadores"/>
            </div>
            <p className={classes.info} >19,5"</p>
          </div>
          <div className={classes.box}>
            <p className={classes.price} >150€</p>
            <div>
              <img className={classes.imagen} src={monitor} alt="ordenadores"/>
            </div>
            <p className={classes.info} >24"</p>
          </div>
        </div>

      </section>
      <section>
        <h4>Destacados PC'S</h4>
        <div className={classes.boxesFeatured}>
          <div className={classes.box}>
            <p className={classes.price} >150€</p>
            <div>
              <img className={classes.imagen} src={pc} alt="ordenadores"/>
            </div>
            <p className={classes.info} >i5 3º Generación</p>
          </div>
          <div className={classes.box}>
            <p className={classes.price} >150€</p>
            <div>
              <img className={classes.imagen} src={pc} alt="ordenadores"/>
            </div>
            <p className={classes.info} >i5 34º Generación</p>
          </div>
        </div>

      </section>
      </div>
    )
  }
}

export default classify(defaultClasses)(featured);
