export interface TweetMetrics {
    positives: number,
    neutral: number,
    negatives: number,
}

export interface TweetSentiments {
    positives: Array<any>,
    neutral: Array<any>,
    negatives: Array<any>

    metrics: TweetMetrics,
}
