import { Container } from "react-bootstrap";

import Bar from "./components/Bar";
import Search from "./components/Search";
import { useTheme } from "./stores/settings";

export default function App() {
    const { dark } = useTheme();
    const bgcolor = dark ? "bg-zinc-600" : "bg-gray-300";

    return (
        <>
            <Bar />
            <Container className={"h-screen " + bgcolor} fluid>
                <Search />
            </Container>
        </>
    );
}
