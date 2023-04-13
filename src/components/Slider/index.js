import Card from "../Card";
import phrases from "./phrases"
const Slider = () => {
    return (
        <div className="mt-24 px-20 align-middle gap-6 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5">
            {phrases.map((card, index) =>
                <Card key={index} src={card.src} phrase={card.phrase} author={card.author} description={card.description} />)}
        </div>
    );
};

export default Slider;
