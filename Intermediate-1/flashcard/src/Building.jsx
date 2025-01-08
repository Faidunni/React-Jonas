import bungalow from "./assets/house1.jpg";
import skyscrapper from "./assets/house2.jpg";
import store from "./assets/house3.jpg";

const description = [
  {
    id: 1,
    img: bungalow,
    content:
      "A sleek, multi-story office building featuring reflective glass panels, minimalist design, and eco-friendly construction materials.",
  },
  {
    id: 2,
    img: skyscrapper,
    content:
      "A towering, state-of-the-art hotel with panoramic views, rooftop infinity pool, and premium amenities catering to high-end travelers.",
  },
  {
    id: 3,
    img: store,
    content:
      "A charming countryside cottage built with natural stone, wooden beams, and surrounded by lush greenery and vibrant flowers.",
  },
];

function Buildings() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="buildings">
      {description.map((des) => (
        <div
          key={des.id}
          onClick={() => handleClick(des.id)}
          className="building"
        >
          <img src={des.img} alt={des.id} />
          {des.id === selectedId && <div className="select">{des.content}</div>}
        </div>
      ))}
    </div>
  );
}

export default Buildings;
