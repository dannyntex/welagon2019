import React, {Component
} from 'react';
import Header from './../Header'
import Banner from'./../Banner'
import CatHomepage from './../CatHomepage'
import FeaturedProducts from './../FeaturedProducts'

class Main extends Component {
  render() {
    return (
      <main>
        <Header/>
        <Banner/>
        <CatHomepage/>
        <FeaturedProducts/>
      </main>
    )
  }
}
export default Main;
