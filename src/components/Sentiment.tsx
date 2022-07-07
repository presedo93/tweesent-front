
interface SentimentProps {
    sentiment: string,
}

const Sentiment = (props: SentimentProps) => {
    const bg = () : string => {
        if (props.sentiment === "negative")
            return "bg-red-700";
        else if (props.sentiment === "positive")
            return "bg-green-700";
        return "bg-blue-700";
    }

    return (
        <div className="flex justify-center">
            <div className={"h-16 w-9/12 rounded-lg flex justify-center items-center " + bg()}>
                <p>{props.sentiment}</p>
            </div>
        </div>
    )
};

export default Sentiment;
