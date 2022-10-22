import"./header.css"
import { InputGroup,Input,Button} from "reactstrap"

const Header = () => {
    return ( 
        <div className="header">
            <h4>iCoordinator</h4>
            <div>
            <InputGroup>
                <Input />
                    <Button>
                        search
                    </Button>
            </InputGroup>
  </div>
            </div>
     );
}
 
export default Header;