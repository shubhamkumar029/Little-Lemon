import data from "../data";
import Card from "../components/Card";

const Menu = () => {
  return (
    <>
      <section className="container my-3">
        <h1>Menu</h1>
        <div className="my-5">
          <h2>Starter Packs</h2>
          <div className="special-body">
            {data.map((element, index) => {
              return element.type === "appetizer" ? <Card key={index} data={element} /> : "";
            })}
          </div>
        </div>

        <div className="my-5">
          <h2>Top Choices</h2>
          <div className="special-body">
            {data.map((element, index) => {
              return element.type === "main" ? <Card key={index} data={element} /> : "";
            })}
          </div>
        </div>

        <div className="my-5">
          <h2>Sweet Treats</h2>
          <div className="special-body">
            {data.map((element, index) => {
              return element.type === "dessert" ? <Card key={index} data={element} /> : "";
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
