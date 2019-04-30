import React,{Component} from 'react';

import classify from 'src/classify'
import defaultClasses from './cathomepage.css';

import ImgMonitor from './pantallas_macro_A0_Group_43_pattern.png';
import ImgComp from './componentes_marco_A0_Group_41_pattern.png';
import ImgPort from './portatil_marco_A0_Group_44_pattern.png';
import ImgSobrem from './Pc_macro_A0_Group_43_pattern.png';

class CatHomepage extends Component {
  catBanner(classes){
    const imagescat = [ImgMonitor, ImgComp, ImgPort ,ImgSobrem];
    const namesCat = ['Monitores','Componentes','Portatiles','Sobremesas'];
    const imagenCat = imagescat.map((imagen,index)=> {
      return (
        <div key={index} className={classes.container}>
          <a className={classes.imageBack} style={{backgroundImage: `url(${imagen})`}}>{namesCat[index]}</a>
        </div>
      )
    } )
    return imagenCat
  }
  render(){
    const {classes} = this.props
    return (
      <section>
        {this.catBanner(classes)}
      </section>

    )
  }
}

export default classify(defaultClasses)(CatHomepage);
