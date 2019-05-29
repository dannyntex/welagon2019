import React, {Component
} from 'react';

import {Header,Footer, AppBarFooter, Navigation ,RenderPageBySize  } from 'src/components';


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
