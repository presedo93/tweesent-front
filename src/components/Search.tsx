import { useState, useEffect, useRef } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

import shallow from 'zustand/shallow'
import axios from 'axios'

import useParams from '../stores/params'
import '../styles/search.css'

import useTweets from '../stores/tweets'
import useMetrics from '../stores/metrics'

import { TweetBody } from '../types/tweets'

const Search = () => {
    // input data for the query
    const [input, setInput] = useState('')

    // Control if data is fetched or is via a websocket
    const live = useParams((state) => state.live)
    const { socket, setSocket } = useParams()

    // params to fetch data
    const params = useParams(
        (state) => ({
            numTweets: state.numTweets,
            allowRt: state.allowRt,
            allowRe: state.allowRe,
            interval: state.interval,
        }),
        shallow
    )

    // methods to store the tweets and log the metrics
    const { addPositives, addNeutrals, addNegatives } = useTweets()
    const { incPositives, incNeutrals, incNegatives, incTotals } = useMetrics()

    // handle the websocket
    const ws = useRef<WebSocket | null>(null)
    useEffect(() => {
        if (!socket && ws.current != null) {
            ws.current.close()
        }
    }, [socket])

    // process each tweet into one of the categories
    function processTweet(tweet: TweetBody): void {
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
        incTotals()
    }

    // process the data fetched
    function processFetch(tweets: Array<TweetBody>): void {
        for (let tweet of tweets) {
            processTweet(tweet)
        }
    }

    // process the data received via websocket
    function processWeb(e: any) {
        const tweet = JSON.parse(e.data)
        processTweet(tweet)
    }

    // method called to do the search
    const searchTweets = async (): Promise<void> => {
        if (!live) {
            const path = 'http://localhost:8000/search_tweets'
            const config = { ...params, Query: input }

            let res = await axios.post(path, config)
            processFetch(res.data.tweets)
        } else {
            const path =
                'ws://localhost:8000/stream_tweets/' + input + '/' + params.interval
            setSocket(true)

            ws.current = new WebSocket(path)
            ws.current.onmessage = processWeb
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
