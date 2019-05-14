import React, {Component
} from 'react';

import Header from './../Header';
import Footer from './../Footer'
import GetSizePage from './../GetSizePage'

class Main extends Component {
  render() {
    const {children} = this.props;
    return (
      <main>
        <Header/>
        <div>{children}</div>
        <Footer/>
        <GetSizePage/>
      </main>
    )
  }
}

export default Main;
