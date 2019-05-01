import React, {Component
} from 'react';
import Header from './../Header';
import Banner from'./../Banner';
import CatHomepage from './../CatHomepage';
import FeaturedProducts from './../FeaturedProducts';
import Brands from './../Brands';

class Main extends Component {
  render() {
    return (
      <main>
        <Header/>
        <Banner/>
        <CatHomepage/>
        <FeaturedProducts/>
        <Brands/>
      </main>
    )
  }
}
export default Main;
