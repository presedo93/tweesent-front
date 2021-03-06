import { createStore } from "vuex";

export interface TweetData {
  id: string;
  created_at: string;
  username: string;
  name: string;
  image: string;
  likes: string;
  retweets: string;
  text: string;
  sentiment: string;
}

export default createStore({
  state: {
    theme: "dark",
    tweets: [] as TweetData[],
    showLoading: false
  },
  getters: {
    theme: state => state.theme,
    tweets: state => state.tweets,
    showLoading: state => state.showLoading
  },
  mutations: {
    changeTheme(state) {
      if (state.theme === "dark") {
        state.theme = "light";
      } else {
        state.theme = "dark";
      }
    },
    addTweet(state, newTweets: TweetData) {
      const a = newTweets as TweetData;
      state.tweets.push(a);
    },
    changeLoading(state) {
      state.showLoading = !state.showLoading;
    }
  },
  actions: {},
  modules: {}
});
