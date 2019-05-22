import React, {Component
} from 'react';

import Header from './../Header';
import Footer from './../Footer'
import Navigation from 'src/components/Navigation';
import AppBarFooter from './../AppBarFooter'
import RenderPageBySize from './../RenderPageBySize'

class Main extends Component {
  render() {
    const {children} = this.props;
    return (
      <main>
        <Header/>
        <div>{children}</div>
        <Footer/>
        <RenderPageBySize>
          <AppBarFooter/>
          <Navigation/>
        </RenderPageBySize>
      </main>
    )
  }
}

export default Main;
