import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from 'react-apollo/test-utils';
import waitForExpect from 'wait-for-expect';
import renderer from 'react-test-renderer';

import CatHomepage from '../catHomepage'
import categoryList from '../../../queries/getCategoryList.graphql';
import loadingIndicator from 'src/components/LoadingIndicator';


const withRouterAndApolloClient = (mocks, renderFn) => (
  <MemoryRouter initialIndex={0} initialEntries={['/']}>
    <MockedProvider mocks={mocks} addTypename={false}>
      {renderFn()}
    </MockedProvider>
  </MemoryRouter>
);

const props = {
  rootId :9,
  classes:{
    a:1,
    b:2
  }
}

describe('CatHomepage', ()=>{
  let wrapper;
  let root;
  it('should render loading state initially',  () => {

    wrapper = renderer.create(
      withRouterAndApolloClient([],()=>(
        <CatHomepage  />
      ))
    );
    root = wrapper.root;

    expect(root.findByType(loadingIndicator)).toBeTruthy();

  });
  const mocks = [
    {
      request:{
        query: categoryList,
        variables:{
          id: 9
        },
      },
      result:{
        data: {
          "category": {
    "id": 9,
    "children": [
      {
        "id": 4,
        "name": "Portátiles",
        "url_key": "portatiles",
        "url_path": "portatiles",
        "image": "portatil_marco_A0_Group_44_pattern.png",
        "include_in_menu": 1,
        "__typename": "CategoryTree"
      },
      {
        "id": 5,
        "name": "Ordenadores",
        "url_key": "ordenadores",
        "url_path": "ordenadores",
        "image": "Pc_macro_A0_Group_43_pattern.png",
        "include_in_menu": 1,
        "__typename": "CategoryTree"
      },
      {
        "id": 10,
        "name": "Monitores",
        "url_key": "monitores",
        "url_path": "monitores",
        "image": "pantallas_macro_A0_Group_43_pattern.png",
        "include_in_menu": 1,
        "__typename": "CategoryTree"
      },
      {
        "id": 25,
        "name": "Servidores",
        "url_key": "servidores",
        "url_path": "servidores",
        "image": null,
        "include_in_menu": 0,
        "__typename": "CategoryTree"
      },
      {
        "id": 76,
        "name": "Componentes",
        "url_key": "componentes",
        "url_path": "componentes",
        "image": "componentes_marco_A0_Group_41_pattern.png",
        "include_in_menu": 1,
        "__typename": "CategoryTree"
      },
      {
        "id": 152,
        "name": "Accesorios",
        "url_key": "accesorios",
        "url_path": "accesorios",
        "image": null,
        "include_in_menu": 0,
      }
    ]
  }
        }
      }
    }
  ];
  beforeEach(()=>{
      wrapper = renderer.create(
        withRouterAndApolloClient(mocks,()=>(
          <CatHomepage {...props}/>
        ))
      );

          root = wrapper.root;
              })
    it('should loading category 2',async () =>{


        await waitForExpect(() => {

          const json = wrapper.toJSON();
          console.log(json.children)



          expect(json.children).toHaveLength(4);

      });
    })

})
