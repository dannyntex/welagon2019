import React,{Component} from 'react';

import BannerImg from './auriculares_regalo_facebook_A0_Rectangle_50_pattern.png';
import Classyfi from 'src/classify';
import defaultClasses from './Banner.css';
class Banner extends Component {

  static defaultProps = {
    size : "auto"
  }
  render(){
    const {classes} = this.props;
    return (
      <section>
        <img
            src={BannerImg}
            className={classes.banner}
          />
      </section>
    )
  }
}
export default Classyfi(defaultClasses)(Banner);
