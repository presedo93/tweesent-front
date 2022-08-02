import create from 'zustand'
import { TweetBody } from '../types/tweets'

interface TweetsState {
    positives: Array<TweetBody>
    addPositives: (tweet: TweetBody) => void

    neutrals: Array<TweetBody>
    addNeutrals: (tweet: TweetBody) => void

    negatives: Array<TweetBody>
    addNegatives: (tweet: TweetBody) => void
}

const useTweets = create<TweetsState>()((set) => ({
    positives: [],
    neutrals: [],
    negatives: [],

    addPositives: (tweet: TweetBody) =>
        set((state) => ({ positives: [...state.positives, tweet] })),

    addNeutrals: (tweet: TweetBody) =>
        set((state) => ({ neutrals: [...state.neutrals, tweet] })),

    addNegatives: (tweet: TweetBody) =>
        set((state) => ({ negatives: [...state.negatives, tweet] })),
}))

export default useTweets
