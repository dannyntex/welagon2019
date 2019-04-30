import React,{Component} from 'react';

import BannerImg from './auriculares_regalo_facebook_A0_Rectangle_50_pattern.png';
import Classyfi from 'src/classify';
import defaultClasses from './Banner.css';
class Banner extends Component {

  static defaultProps = {
    size : 375
  }
  render(){
    return (
      <section>
        <img
            src={BannerImg}
            width={this.props.size}
          />
      </section>
    )
  }
}
export default Classyfi(defaultClasses)(Banner);
