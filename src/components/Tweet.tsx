import { useTheme } from "../stores/themes";
import { TweetBody } from "../types/tweets";

interface TweetProps {
    body: TweetBody,
}

const Tweet = (props: TweetProps) => {
    const url = "https://twitter.com/" + props.body.username + "/status/" + props.body.id;

    const { dark } = useTheme();
    const theme = (dark) ? "dark" : "light";

    return (
        <>
            <a href={url} className="no-underline">
                <div className="rounded-lg  bg-black mt-2">
                    <div className="grid grid-rows-1 grid-flow-col">
                        <div className="row-span-1 col-span-1 flex justify-center mt-2">
                            <img src={props.body.image} className="rounded-full" />
                        </div>
                        <div className="row-span-1 mt-2">
                            <p className="mb-0 text-white text-sm font-bold">{props.body.name}</p>
                            <p className="mb-0 text-gray-300 text-xs">@{props.body.username}</p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <p className="text-white text-sm ml-2 mb-0">{props.body.text}</p>
                        <p className="text-sm text-gray-300 ml-2">{props.body.created_at}</p>
                    </div>
                    <hr className="text-white ml-2 mr-2" />
                    <div>
                    </div>
                </div>
            </a>
        </>
    )
};

export default Tweet;
