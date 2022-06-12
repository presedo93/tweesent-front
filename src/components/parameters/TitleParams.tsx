import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { useTheme } from "../../stores/settings";
import Tooltip from 'react-bootstrap/Tooltip';
import { BiBroadcast } from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import { Modal } from "react-bootstrap";

interface TitleProps {
    live: boolean
    setLive: (live: boolean) => void;
}

const TitleParams = (props: TitleProps) => {
    const { dark } = useTheme();
    const icolor = dark ? "text-neutral-300" : "text-neutral-700";
    const bcolor = (props.live) ? "text-blue-300" : icolor;

    return (
        <>
            <Modal.Title className={icolor + " ml-6"}>Parameters</Modal.Title>
            <OverlayTrigger
                placement={"bottom"}
                overlay={
                    <Tooltip>
                        Enable Live Streaming
                    </Tooltip>
                }
            >
                <Button className="bg-transparent border-0 shadow-none" onClick={() => props.setLive(!props.live)}>
                    <BiBroadcast className={bcolor + " text-2xl hover:invert"} />
                </Button>
            </OverlayTrigger>
        </>
    )
};

export default TitleParams;
