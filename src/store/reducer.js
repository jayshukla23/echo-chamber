import initialState from './initState';

const reducer = (state = initialState, action) => {
  switch(action.type) {    
    case 'SET_HERO_NAME':     
      const heroName = action.heroName;      
      return {
        ...state,
        hero: {
          ...state.hero,
          name: heroName
        }
      };
    
    case 'SET_HERO_AVATAR':     
      const avatar = action.avatar;      
      return {
        ...state,
        hero: {
          ...state.hero,
          avatar
        }
      };

    case 'ADD_POST':
      const post = action.post;      
      const posts = [...state.posts];
      posts.push(post);
      return {
        ...state,
        posts
      };      

    case 'LOG_OFF':
      return {
        ...initialState,
        posts: state.posts,
      };

    default: 
      return state;
  }
}

export default reducer;