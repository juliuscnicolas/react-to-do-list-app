import { SET_TODOITEM_INFO } from '../types'

const initialState = {
  info: {
    name: 'Julius',
    items: []
    // items: [
    //     {
    //       id: 'e1',
    //       title: 'Pay Bill',
    //       date: new Date(2022, 7, 1, 12, 0, 0),
    //       details: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
    //     },
    //     { id: 'e2', 
    //       title: 'Read Book', 
    //       date: new Date(2022, 7, 1, 13, 0, 0),
    //       details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
    //     },
    //     {
    //       id: 'e3',
    //       title: 'Exercise',
    //       date: new Date(2022, 7, 2, 9, 30, 0), 
    //       details: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue' 
    //     },
    //     {
    //       id: 'e4',
    //       title: 'Lunch w/ Friends',
    //       date: new Date(2022, 7, 2, 11, 0, 0),
    //       details: 'sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur'
    //     }
    //   ]
  }
}

const usersReducers = (state = initialState, action = {}) => {
  console.log(action.type, 'test');
  switch (action.type) {
    case SET_TODOITEM_INFO:
      return {
        ...state,
        info: {
          ...state.info,
          ...action.payload
        }
      }
    default: return state
  }
}

export default usersReducers