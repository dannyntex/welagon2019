import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import waitForExpect from 'wait-for-expect';
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
  let json;

  let found = false
  it('should render loading state initially',   () => {

    wrapper = renderer.create(
      withRouterAndApolloClient([],()=>(
        <Banner  {...props}/>
      ))
    );
    root = wrapper.root;
    expect(root.findByType(LoadingIndicator)).toBeTruthy();

  });
  const mocks = [
    {
      request:{
        query: getCmsBlocks,
        variables:{
          identifiers:'banner_homepage_movil'
        },
      },
      result:{
        data:{
          "cmsBlocks": {
            "items": [
              {
                "content": "<p>&nbsp;<a href=\"http://magento23.local/portatiles.html\"><img src=\"http://magento23.local/pub/media/auriculares-regalo-facebook.jpg\" alt=\"Oferta auriculares\" width=\"500\" height=\"504\"></a></p>",
                "identifier": "banner_homepage_movil"
              }
            ]
          }
        }
      }
    }

  ]


  it('should exist type `a` ', async()=>{
    wrapper = renderer.create(
      withRouterAndApolloClient(mocks,()=>(
        <Banner  {...props}/>
      ))
    );

    await waitForExpect(() => {

      json = wrapper.toJSON();
      if(json.children[0].type === "a") {
        return { f : () => {
          found = true
        }}
      }
      expect(found).toBe(true);

    })
  })

  it('should exist type `img` ', async()=>{
    wrapper = renderer.create(
      withRouterAndApolloClient(mocks,()=>(
        <Banner  {...props}/>
      ))
    );
    await waitForExpect(() => {
      json = wrapper.toJSON();
      found = false
      if(json.children[0].children[0].type === "img") {
        found = true
      }
      expect(found).toBe(true);
    })
  })

})
