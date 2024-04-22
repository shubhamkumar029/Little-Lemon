import "./About.css";

const About = () => {
  return (
    <>
      <section className="container my-3">
        <div className="row justify-center">
          <div className="col-md-6 col-sm-12 align-self-start pd">
            <h2 className="lemon-primary-lemon-about">Little Lemon</h2>
            <p>
            Little Lemon Restaurant is a cozy and inviting dining establishment known for its fresh and flavorful cuisine. Located in the heart of the city, it offers a diverse menu featuring a blend of modern and traditional dishes crafted with locally sourced ingredients. From appetizers bursting with vibrant flavors to hearty main courses and decadent desserts, Little Lemon Restaurant caters to a variety of tastes and preferences. The warm and friendly ambiance makes it an ideal spot for casual gatherings with friends and family, while attentive service ensures a memorable dining experience for every guest. 
            </p>
            <p>
            Whether you're craving a light lunch, a leisurely dinner, or simply a refreshing beverage, Little Lemon Restaurant welcomes you to savor delicious food in a relaxed atmosphere.
            </p>
          </div>
          <div className="col-md-6 col-sm-12 text-center align-self-center">
            <div className="my-3">
              <img className="about-pic img-fluid" src={"https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="About us 1" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
