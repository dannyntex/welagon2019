import React, {Component
} from 'react';
import ReactResizeDetector from 'react-resize-detector';

import Header from './../Header';
import AppBarFooter from './../AppBarFooter'
import Footer from './../Footer'
import Navigation from 'src/components/Navigation';

class Main extends Component {
  render() {
    const {children} = this.props;
    return (
      <main>
        <Header/>
        <div >{children}</div>
        <AppBarFooter/>
        <Footer/>
        <Navigation/>
      </main>
    )
  }
}
export default Main;
