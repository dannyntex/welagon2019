import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from 'react-apollo/test-utils';
import waitForExpect from 'wait-for-expect';
import renderer from 'react-test-renderer';

import ProductQueries from '../productQueries'
import productDetailByCategoryLastUpdate from 'src/queries/getProductDetailByCategoryLastUpdate.graphql';
import { loadingIndicator } from 'src/components/LoadingIndicator';


const withRouterAndApolloClient = (mocks, renderFn) => (
  <MemoryRouter initialIndex={0} initialEntries={['/']}>
    <MockedProvider mocks={mocks} addTypename={false}>
      {renderFn()}
    </MockedProvider>
  </MemoryRouter>
);
const props = {

  classes:{
    a:1,
    b:2
  }
}
describe('productQueries',()=>{
  let wrapper;
  let root;
  it('should render loading state initially',  () => {

    wrapper = renderer.create(
      withRouterAndApolloClient([],()=>(
        <ProductQueries  />
      ))
    );

    root = wrapper.root;

    expect(root.findAllByType(loadingIndicator)).toBeTruthy();

  });
  const mocks = [
    {
      request:{
        query: productDetailByCategoryLastUpdate,
        variables:{
          categoryId:"4",
          onServer:false
        },
      },
      result:{
        data: {
          "products": {
      "items": [
        {
          "id": 2849,
          "sku": "Ref 4420",
          "name": "DELL LATITUDE E5440 14\" Intel Core i3-4030U (4ªGen) 320Gb  4GB (ampliable a 8GB )",
          "url_path": "dell-latitude-e5440-14-intel-core-i5-4030u-4-gen-320gb-4gb-ampliable-a-8gb",
          "price": {
            "regularPrice": {
              "amount": {
                "value": 309,
                "currency": "EUR"
              }
            }
          },
          "image": {
            "label": "DELL LATITUDE E5440 14\" Intel Core i3-4030U (4ªGen) 320Gb  4GB (ampliable a 8GB )",
            "url": "http://magento23.local/pub/media/catalog/product/cache/a71269b86ad1285e2ccdb33e77d8f38d/m/o/monitor.jpg"
          },
          "small_image": {
            "label": "DELL LATITUDE E5440 14\" Intel Core i3-4030U (4ªGen) 320Gb  4GB (ampliable a 8GB )",
            "url": "http://magento23.local/pub/media/catalog/product/cache/6719de552b83fa35b1c2da023f67688d/m/o/monitor.jpg"
          }
        },
        {
          "id": 3141,
          "sku": "Ref 4726",
          "name": "Lenovo ThinKpad T460 Core i5-6200U 14\" 128Gb Ssd 4Gb (Ampliable a 8Gb) W10",
          "url_path": "lenovo-thinkpad-t460-core-i5-6200u-14-128gb-ssd-4gb-ampliable-a-8gb",
          "price": {
            "regularPrice": {
              "amount": {
                "value": 429,
                "currency": "EUR"
              }
            }
          },
          "image": {
            "label": "portatil",
            "url": "http://magento23.local/pub/media/catalog/product/cache/a71269b86ad1285e2ccdb33e77d8f38d/i/m/img_7858_7_2.jpg"
          },
          "small_image": {
            "label": "portatil",
            "url": "http://magento23.local/pub/media/catalog/product/cache/6719de552b83fa35b1c2da023f67688d/i/m/img_7858_7_2.jpg"
          }
        },
        {
          "id": 3385,
          "sku": "Ref 4989",
          "name": "Lenovo Tiny THINKCENTRE M93p i5-4590T 8GB 500GB Windows 10 home",
          "url_path": "lenovo-tiny-thinkcentre-m93p-core-i5-4590t-8gb-500gb-w10-pro",
          "price": {
            "regularPrice": {
              "amount": {
                "value": 249,
                "currency": "EUR"
              }
            }
          },
          "image": {
            "label": "Lenovo Tiny THINKCENTRE M93p i5-4590T 8GB 500GB Windows 10 home",
            "url": "http://magento23.local/pub/media/catalog/product/cache/a71269b86ad1285e2ccdb33e77d8f38d/s/-/s-l640.jpg"
          },
          "small_image": {
            "label": "Lenovo Tiny THINKCENTRE M93p i5-4590T 8GB 500GB Windows 10 home",
            "url": "http://magento23.local/pub/media/catalog/product/cache/6719de552b83fa35b1c2da023f67688d/s/-/s-l640.jpg"
          }
        }
      ]
    }
        }
      }
    }
  ]
  beforeEach(()=>{
      wrapper = renderer.create(
        withRouterAndApolloClient(mocks,()=>(
          <  ProductQueries   {...props}/>
        ))
      );

          root = wrapper.root;
              })
              it('Ejecuta el compenentes carousel',async () =>{


                  await waitForExpect(() => {

                    const json = wrapper.root;
                            ul = json.findByType("ul");





                    expect(json.findAllByType("ul")).toBeTruthy();

                });
              })
})
