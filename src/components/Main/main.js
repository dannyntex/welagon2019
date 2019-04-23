import React, {Component
} from 'react';
import Header from './../Header'
import Banner from'./../Banner'
import CatHomepage from './../CatHomepage'

class Main extends Component {
  render() {
    return (
      <main>
        <Header/>
        <Banner/>
        <CatHomepage/>
      </main>
    )
  }
}
export default Main;
