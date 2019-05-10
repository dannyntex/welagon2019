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
    const {children} = this.props;
    return (
      <main>
        <Header/>
        <div >{children}</div>
        <Footer/>
        <Navigation/>
      </main>
    )
  }
}
export default Main;
