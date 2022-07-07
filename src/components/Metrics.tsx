
interface MetricsProps {
    positive: number,
    neutral: number,
    negative: number,
}

const Metrics = (props: MetricsProps) => {
        return (
            <>
                <p>{props.positive} | {props.neutral} | {props.negative}</p>
            </>
        )
};

export default Metrics;
