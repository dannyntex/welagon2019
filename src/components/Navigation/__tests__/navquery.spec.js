import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import waitForExpect from 'wait-for-expect';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import NavQuery from '../navQuery';
import getNavigationMenu from '../../../queries/getNavigationMenu.graphql';
import LoadingIndicator from 'src/components/LoadingIndicator';



const withRouterAndApolloClient = (mocks, renderFn) => (
  <MemoryRouter initialIndex={0} initialEntries={['/']}>
  <MockedProvider mocks={mocks} addTypename={false}>
  {renderFn()}
  </MockedProvider>
  </MemoryRouter>
);

const props = {
  getTitleCategory : jest.fn(),
  setPrevCategory : jest.fn(),
  toggleDrawer : jest.fn(),
  prevCategory: [],
  rootId:9
}



describe('NavQuery', ()=>{
  let wrapper;
  let root;

  it('should render loading state initially',  () => {

    wrapper = renderer.create(
      withRouterAndApolloClient([],()=>(
        <NavQuery {...props}/>
      ))
    );
    root = wrapper.root;

    expect(root.findByType(LoadingIndicator)).toBeTruthy();

  });




  it('shoul loading category',async ()=>{
    const mocks =[
      {
        request:{
          query: getNavigationMenu,
          variables:{
            id: 9
          },
        },
        result:{
          data: {
            "category": {
              "id": 9,
              "name": "Welagon",
              "product_count": 1274,
              "path": "1/9",
              "children": [
                {
                  "id": 4,
                  "name": "Portátiles",
                  "position": 2,
                  "level": 2,
                  "url_key": "portatiles",
                  "url_path": "portatiles",
                  "product_count": 2,
                  "children_count": "3",
                  "path": "1/9/4",
                  "include_in_menu": 1,
                  "image": "portatiles.png"
                },
                {
                  "id": 5,
                  "name": "Ordenadores",
                  "position": 3,
                  "level": 2,
                  "url_key": "ordenadores",
                  "url_path": "ordenadores",
                  "product_count": 24,
                  "children_count": "1",
                  "path": "1/9/5",
                  "include_in_menu": 1,
                  "image": "pc-sobremesa-estacion-de-trabajo-hp-prodesk-600-g1-sff_1_.jpg"
                },
                {
                  "id": 10,
                  "name": "Monitores",
                  "position": 5,
                  "level": 2,
                  "url_key": "monitores",
                  "url_path": "monitores",
                  "product_count": 16,
                  "children_count": "3",
                  "path": "1/9/10",
                  "include_in_menu": 1,
                  "image": "monitores_ocasion.png"
                },
                {
                  "id": 25,
                  "name": "Servidores",
                  "position": 7,
                  "level": 2,
                  "url_key": "servidores",
                  "url_path": "servidores",
                  "product_count": 0,
                  "children_count": "1",
                  "path": "1/9/25",
                  "include_in_menu": 0,
                  "image": null
                },
                {
                  "id": 76,
                  "name": "Componentes",
                  "position": 10,
                  "level": 2,
                  "url_key": "componentes",
                  "url_path": "componentes",
                  "product_count": 2,
                  "children_count": "23",
                  "path": "1/9/76",
                  "include_in_menu": 1,
                  "image": "componentes_pc.png"
                },
                {
                  "id": 152,
                  "name": "Accesorios",
                  "position": 11,
                  "level": 2,
                  "url_key": "accesorios",
                  "url_path": "accesorios",
                  "product_count": 4,
                  "children_count": "5",
                  "path": "1/9/152",
                  "include_in_menu": 0,
                  "image": null
                }
              ]
            }
          }

        }
      },

    ]
    wrapper = renderer.create(
      withRouterAndApolloClient(mocks,()=>(
        <NavQuery {...props}/>
      ))
    );
    root = wrapper.root;
    await waitForExpect(() => {
      const json = wrapper.toJSON();
      const items = json.find (
        (el) => el.type == "ul"
      );
      expect(items.children).toHaveLength(4);
    })
  });

})
