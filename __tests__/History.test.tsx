import { render } from "@testing-library/react-native"
import History from "../src/components/History"

const props={
    route:{
        params:{}
    }
}

test("history",()=>{
render(<History {...props} />)
})