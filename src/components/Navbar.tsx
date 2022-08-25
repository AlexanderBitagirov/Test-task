import { Row} from "antd"
import { Header } from "antd/lib/layout/layout"
import { FunctionComponent } from "react"
import { useNavigate } from "react-router-dom"

export const Navbar: FunctionComponent = () => {
    const navigate = useNavigate();
    

    return (
        <Header>
            <Row justify="end">
                    <button onClick={()=> navigate('/')}>Выйти</button>
            </Row>
        </Header>
    )
}