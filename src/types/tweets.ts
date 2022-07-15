export interface TweetMetrics {
    positives: number,
    neutral: number,
    negatives: number,
}

export interface TweetBody {
    id: string,
    text: string,
    created_at: string,
    retweets: number,
    likes: number,
    username: string,
    name: string,
    image: string,
    sentiment: string
}

export interface TweetSentiments {
    positives: Array<TweetBody>,
    neutral: Array<TweetBody>,
    negatives: Array<TweetBody>

    metrics: TweetMetrics,
}
