import { useTheme } from "../stores/themes";
import { TweetBody } from "../types/tweets";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";

interface TweetProps {
    body: TweetBody,
}

const Tweet = (props: TweetProps) => {
    const url = "https://twitter.com/" + props.body.username + "/status/" + props.body.id;

    const { dark } = useTheme();
    const bg = (dark) ? "bg-black" : "bg-white";
    const tx = (dark) ? "text-white" : "test-dark";

    return (
        <>
            <a href={url} className="no-underline" target="_blank" rel="noopener noreferrer">
                <div className={"rounded-lg bg-black mt-2 " + bg}>
                    <div className="grid grid-rows-1 grid-flow-col">
                        <div className="row-span-1 col-span-1 flex justify-center mt-2">
                            <img src={props.body.image} className="rounded-full" />
                        </div>
                        <div className="row-span-1 mt-2">
                            <p className={"mb-0 text-sm font-bold " + tx}>{props.body.name}</p>
                            <p className="mb-0 text-gray-300 text-xs">@{props.body.username}</p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <p className={"text-sm ml-2 mb-0 " + tx}>{props.body.text}</p>
                        <p className="text-sm text-gray-300 ml-2">{props.body.created_at}</p>
                    </div>
                    <hr className={"ml-2 mr-2 " + tx} />
                    <div className="grid grid-rows-1 grid-cols-2">
                        <div className="ml-6 flex">
                            <AiOutlineRetweet className="text-zinc-500 mt-1" />
                            <p className="text-zinc-500 ml-2">{props.body.retweets}</p>
                        </div>
                        <div className="flex">
                            <AiOutlineHeart className="text-zinc-500 mt-1" />
                            <p className="text-zinc-500 ml-2">{props.body.likes}</p>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
};

export default Tweet;
