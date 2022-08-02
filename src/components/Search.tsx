import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

import shallow from 'zustand/shallow'
import axios from 'axios'

import useParams from '../stores/params'
import '../styles/search.css'

// import { processFetch } from '../functions/fetch'
import useTweets from '../stores/tweets'
import useMetrics from '../stores/metrics'

const Search = () => {
    const [input, setInput] = useState('')
    const live = useParams((state) => state.live)
    const params = useParams(
        (state) => ({
            numTweets: state.numTweets,
            allowRt: state.allowRt,
            allowRe: state.allowRe,
        }),
        shallow
    )
    const { addPositives, addNeutrals, addNegatives } = useTweets()
    const { incPositives, incNeutrals, incNegatives } = useMetrics()

    function processFetch(tweets: Array<TweetBody>): void {
        // Process every tweet
        for (let tweet of tweets) {
            if (tweet.sentiment === 'positive') {
                addPositives(tweet)
                incPositives()
            } else if (tweet.sentiment === 'neutral') {
                addNeutrals(tweet)
                incNeutrals()
            } else {
                addNegatives(tweet)
                incNegatives()
            }
        }

        // Get the percetange of each sentiment
        /* sentiment.metrics.negatives = Math.floor(
                        (sentiment.metrics.negatives / tweetsCount) * 100
                    ) */
    }

    const searchTweets = async (): Promise<void> => {
        if (!live) {
            const path = 'http://localhost:8000/search_tweets'
            const config = { ...params, Query: input }

            let res = await axios.post(path, config)
            processFetch(res.data.tweets)
        } else {
            console.log('Not live!')
        }
    }

    return (
        <div className='searchBox'>
            <input
                className='searchInput'
                type='text'
                placeholder='Search...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className='searchButton' onClick={searchTweets}>
                <AiOutlineSearch />
            </button>
        </div>
    )
}

export default Search
