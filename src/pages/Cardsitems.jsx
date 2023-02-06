import Card from "../components/Card";
import DataItem from "./DataItem";
//console.log(DataItem)

export default function Cardsitems() {
    const cards = DataItem.map(item => {
        return (
            <div>
                <Card
                    img={item.img}
                    rating={item.stats.rating}
                    title={item.tilte}
                    price={item.price}
                />
            </div>
        )
    })
    return (
        <div className="box">
            <h3>cards</h3>
            {cards}
        </div>
    )
}