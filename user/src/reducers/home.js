export default (state={announcement: []}, action) => {
  switch(action.type) {
    case 'PAGE_LOADED':
      return {
        ...state,
        announcement: action.data.announcement,
      };
    case 'SUBMIT_ARTICLE':
      return {
        ...state,
        announcement: ([action.data.article]).concat(state.announcement),
      };
    case 'DELETE_ARTICLE':
      return {
        ...state,
        announcement: state.announcement.filter((article) => article._id !== action.id),
      };
    case 'SET_EDIT':
      return {
        ...state,
        articleToEdit: action.article,
      };
    case 'EDIT_ARTICLE':
      return {
        ...state,
        announcement: state.announcement.map((article) => {
          if(article._id === action.data.article._id) {
            return {
              ...action.data.article,
            }
          }
          return article;
        }),
      }
    default:
      return state;
  }
};
