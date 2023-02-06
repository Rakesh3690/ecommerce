import Cart from "../components/Cart"
import Filter from "../components/Filters"
// import Shoes from "../components/Shoes"
import Cardsitems from "./Cardsitems"
import styled from "styled-components"
const Items = styled.div`
display:flex;
padding:20px;
justify-content:space-evenly;
`

function Store() {
    return (
        <Items>
            <Filter></Filter>
            <Cardsitems/>
            <Cart></Cart>
        </Items>
    )
}

export default Store
