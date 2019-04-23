import React,{Component,Fragment} from 'react';

import classify from 'src/classify'
import defaultClasses from './cathomepage.css';

import ImgMonitor from './pantallas_macro_A0_Group_43_pattern.png';
import ImgComp from './componentes_marco_A0_Group_41_pattern.png';
import ImgPort from './portatil_marco_A0_Group_44_pattern.png';
import ImgSobrem from './Pc_macro_A0_Group_43_pattern.png';

class CatHomepage extends Component {


  render(){
    const {classes} = this.props
    return (
      <Fragment>
        <div className={classes.container}>
        <img
            src={ImgMonitor}
            className={classes.catHomepage}
          />
        <div className={classes.centered}>Monitores</div>
        </div>
        <div className={classes.container}>
        <img
            src={ImgPort}
            className={classes.catHomepage}
          />
        <div className={classes.centered}>Portatiles</div>
        </div>
        <div className={classes.container}>
        <img
            src={ImgSobrem}
            className={classes.catHomepage}
          />
        <div className={classes.centered}>Sobremesas</div>
        </div>
        <div className={classes.container}>
        <img
            src={ImgComp}
            className={classes.catHomepage}
          />
        <div className={classes.centered}>Componentes</div>
        </div>
      </Fragment>

    )
  }
}

export default classify(defaultClasses)(CatHomepage);
