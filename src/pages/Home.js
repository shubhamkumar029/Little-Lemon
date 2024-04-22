import Hero from "../components/Hero";
import Special from "../components/Special";
import Testimonials from "../components/Testimonials";

const data = [
  {
    "name": "Classic Cheeseburger",
    "price": "$9.99",
    "image": "https://cdn.pixabay.com/photo/2023/05/07/17/31/ai-generated-7976795_1280.jpg",
    "description": "Juicy beef patty topped with melted cheese, lettuce, tomato, and pickles, served on a toasted bun."
  },
  {
    "name": "Margherita Pizza",
    "price": "$11.99",
    "image": "https://cdn.pixabay.com/photo/2023/05/28/14/13/ai-generated-8023787_1280.jpg",
    "description": "Traditional Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves."
  },
  {
    "name": "Vegetarian Buddha Bowl",
    "price": "$9.99",
    "image": "https://cdn.pixabay.com/photo/2018/04/13/17/12/vegetable-skewer-3317055_960_720.jpg",
    "description": "A nourishing bowl filled with quinoa, roasted vegetables, avocado slices, and tahini dressing."
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <Special data={data} />
      <Testimonials />
    </>
  );
};

export default Home;
