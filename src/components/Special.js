import Card from "./Card";

const Special = ({ data }) => {
  return (
    <section id="special" className="container mb-3">
      <h2>Trending Items!</h2>
      <div className="special-body">
        {data.map((element, index) => {
          return <Card key={index} data={element} />;
        })}
      </div>
    </section>
  );
};

export default Special;
