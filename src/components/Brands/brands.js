import React,{Component} from 'react';

import Classify from 'src/classify'
import defaultClasses from './brands.css'
import dell from './dell.png';
import hp from './hp.png';
import lenovo from './lenovo.png';

class Brands extends Component {
  render(){
    const {classes} = this.props;
    return(
      <div className={classes.container}>
        <h6>Principales Marcas</h6>
        <div className={classes.boxLogos}>
          <img className={classes.brandLogo} src={dell} alt="Dell"/>
          <img className={classes.brandLogo} src={hp} alt="HP"/>
          <img className={classes.brandLogo} src={lenovo} alt="Lenovo"/>
        </div>
      </div>
    )
  }
}

export default Classify(defaultClasses)(Brands);
