import { dispatch, getState } from 'src/store';
import actions from '../actions';
import mockData from '../mockData';
import {
    getAllCategories,
    setCurrentPage,
    setPrevPageTotal,
    setPrevCategory,
    getTitleCategory
} from '../asyncActions';

jest.mock('src/store');

const thunkArgs = [dispatch, getState];

afterEach(() => {
    dispatch.mockClear();
});
describe('setPrevCategory',()=>{
    const PAYLOAD = 9;
      it('it returns a thunk', () => {
          expect(setPrevCategory(PAYLOAD,"add")).toBeInstanceOf(Function);
      });
      it('its thunk returns undefined', async () => {
          const result = await setPrevCategory(PAYLOAD)(...thunkArgs);

          expect(result).toBeUndefined();
      });
      test('its thunk dispatches actions add', async () => {
          await setPrevCategory(PAYLOAD,"add")(...thunkArgs);

          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenNthCalledWith(
              1,
              actions.setPrevCategory.add(PAYLOAD)
          );
      });
      test('its thunk dispatches actions remove', async () => {
          await setPrevCategory(PAYLOAD)(...thunkArgs);

          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenNthCalledWith(
              1,
              actions.setPrevCategory.remove(PAYLOAD)
          );
      });
})

describe('getTitleCategory',()=>{
    const PAYLOAD = "Titulo";
      it('it returns a thunk', () => {
          expect(getTitleCategory(PAYLOAD)).toBeInstanceOf(Function);
      });
      it('its thunk returns undefined', async () => {
          const result = await getTitleCategory(PAYLOAD)(...thunkArgs);

          expect(result).toBeUndefined();
      });

      test('its thunk dispatches actions', async () => {
          await getTitleCategory(PAYLOAD)(...thunkArgs);

          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenNthCalledWith(
              1,
              actions.setTitleCategory.modify(PAYLOAD)
          );
      });
})
// describe('getAllCategories', () => {
//     test('it returns a thunk', () => {
//         expect(getAllCategories()).toBeInstanceOf(Function);
//     });
//
//     test('its thunk returns undefined', async () => {
//         const result = await getAllCategories()(...thunkArgs);
//
//         expect(result).toBeUndefined();
//     });
//
//     test('its thunk dispatches actions', async () => {
//         await getAllCategories()(...thunkArgs);
//
//         expect(dispatch).toHaveBeenCalledTimes(2);
//         expect(dispatch).toHaveBeenNthCalledWith(
//             1,
//             actions.getAllCategories.request()
//         );
//         expect(dispatch).toHaveBeenNthCalledWith(
//             2,
//             actions.getAllCategories.receive(mockData)
//         );
//     });
// });

describe('setCurrentPage', () => {
    const PAYLOAD = 2;

    test('it returns a thunk', () => {
        expect(setCurrentPage(PAYLOAD)).toBeInstanceOf(Function);
    });

    test('its thunk returns undefined', async () => {
        const result = await setCurrentPage(PAYLOAD)(...thunkArgs);

        expect(result).toBeUndefined();
    });

    test('its thunk dispatches actions', async () => {
        await setCurrentPage(PAYLOAD)(...thunkArgs);

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(
            1,
            actions.setCurrentPage.receive(PAYLOAD)
        );
    });
});

describe('setPrevPageTotal', () => {
    const PAYLOAD = 10;

    test('it returns a thunk', () => {
        expect(setPrevPageTotal(PAYLOAD)).toBeInstanceOf(Function);
    });

    test('its thunk returns undefined', async () => {
        const result = await setPrevPageTotal(PAYLOAD)(...thunkArgs);

        expect(result).toBeUndefined();
    });

    test('its thunk dispatches actions', async () => {
        await setPrevPageTotal(PAYLOAD)(...thunkArgs);

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(
            1,
            actions.setPrevPageTotal.receive(PAYLOAD)
        );
    });
});
