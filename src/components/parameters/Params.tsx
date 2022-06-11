import { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { BiBroadcast } from "react-icons/bi";
import { useTheme } from "../../stores/settings";

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

    const [mode, setMode] = useState(false);

    const paramOptions = () => {
        return (!mode) ? <FetchParams /> : <LiveParams />
    }

    return (
        <Modal show={props.show} onHide={props.toggle}>
            <Modal.Header className={bgcolor + " border-0 flex justify-center"}>
                <Modal.Title className={icolor + " ml-12"}>Parameters</Modal.Title>
                <BiBroadcast className={icolor + " text-xl"} />
            </Modal.Header>
            <Modal.Body className={bgcolor + " flex justify-center"}>
                <Form className={icolor}>
                    <Form.Check
                        className="self-center"
                        type="switch"
                        id="mode"
                        label="Enable live stream"
                        onChange={() => setMode(!mode)}
                    />
                    <br />
                    {paramOptions()}
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default Params;
