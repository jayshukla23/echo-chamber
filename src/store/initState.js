import dummyMessages from '../util/dummyMessages';

const initState = {
  hero: {
    name: '',
    avatar: {
      id: null,
      character: '',
      image: ''
    }
  },
  posts: [...dummyMessages],
}

export default initState;