import { Row} from "antd"
import { Header } from "antd/lib/layout/layout"
import { FunctionComponent, useEffect } from "react"
import { UseActions } from "./hooks/UseActions";

export const Navbar: FunctionComponent = () => {
    const {logout} = UseActions();
    
    return (
        <Header>
            <Row justify="end">
                    <button onClick={()=> logout()}> Выйти</button>
            </Row>
        </Header>
    )
}