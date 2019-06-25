import React, { Component,Fragment} from 'react';

import Banner from 'src/components/Banner';
import CatHomepage from 'src/components/CatHomepage';
import FeaturedProducts from 'src/components/FeaturedProducts';
import Brands from 'src/components/Brands';


export default class CMS extends Component {
  render() {
    return (
      <Fragment>
        <Banner/>
        <CatHomepage/>
        <FeaturedProducts/>
        <Brands/>
      </Fragment>

    );
  }
}
