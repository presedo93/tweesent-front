import { Modal, Form } from "react-bootstrap";
import { useTheme } from "../../stores/settings";
import useParams from "../../stores/params";

import TitleParams from "./TitleParams";
import FetchParams from "./FetchParams";
import LiveParams from "./LiveParams";

interface ParamsProps {
    show: boolean;
    toggle: () => void;
}

const Params = (props: ParamsProps) => {
    const { dark } = useTheme();
    const bgcolor = dark ? "bg-zinc-700" : "bg-gray-400";
    const icolor = dark ? "text-neutral-300" : "text-neutral-700";
    let { live, setLive } = useParams();

    const paramOptions = () => {
        return (!live) ? <FetchParams /> : <LiveParams />
    }

    return (
        <Modal show={props.show} onHide={props.toggle}>
            <Modal.Header className={bgcolor + " border-0 flex justify-center"}>
                <TitleParams live={live} setLive={setLive}/>
            </Modal.Header>
            <Modal.Body className={bgcolor + " flex justify-center"}>
                <Form className={icolor}>
                    {paramOptions()}
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default Params;
