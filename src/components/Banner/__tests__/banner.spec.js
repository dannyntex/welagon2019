import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Banner from '../banner';
import getCmsBlocks from '../../../queries/getCmsBlocks.graphql';
import LoadingIndicator from 'src/components/LoadingIndicator';

const withRouterAndApolloClient = (mocks, renderFn) => (
  <MemoryRouter initialIndex={0} initialEntries={['/']}>
    <MockedProvider mocks={mocks} addTypename={false}>
      {renderFn()}
    </MockedProvider>
  </MemoryRouter>
);
const props = {
classes:{
  banner:"a"
}

}
describe('Banner',()=>{
  let wrapper;
    let root;
    it('should render loading state initially',  () => {

      wrapper = renderer.create(
        withRouterAndApolloClient([],()=>(
          <Banner  {...props}/>
        ))
      );
      root = wrapper.root;
      expect(root.findByType(LoadingIndicator)).toBeTruthy();

    });
  it('should ')

})
