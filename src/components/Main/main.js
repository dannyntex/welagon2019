import React, {Component
} from 'react';
import Header from './../Header';
import Banner from'./../Banner';
import CatHomepage from './../CatHomepage';
import FeaturedProducts from './../FeaturedProducts';
import Brands from './../Brands';
import Footer from './../Footer'
import Navigation from 'src/components/Navigation';

class Main extends Component {
  render() {
    return (
      <main>
        <Header/>

        <Banner/>
        <CatHomepage/>
        <FeaturedProducts/>
        <Brands/>
        <Footer/>
        <Navigation/>
      </main>
    )
  }
}
export default Main;
