import pathos from "./plant_images/pothos.jpg";
import monstera from "./plant_images/swiss-cheese-monstera.jpg";
import palm from "./plant_images/palm.jpg";
import snake from "./plant_images/snake-plant.jpeg";
import orchid from "./plant_images/orchid-plant.jpg";
import ficus from "./plant_images/ficus-plant.jpg";

const plantsdata = [
  {
    id: 1,
    name: "Pothos",
    description:
      "Basic pothos care is very easy. These plants enjoy a wide range of environments. They do well in bright, indirect light as well as low light and can be grown in dry soil or in vases of water. They will thrive in nutrient rich soil, but do almost as well in nutrient poor soil.",
    image: pathos,
    price: "$15",
    likes: 523,
  },
  {
    id: 2,
    name: "Swiss Cheese Monstera",
    description:
      "The Swiss cheese plant is notoriously easy to care for, and it loves to climb. The plant has aerial roots growing downward from the stem, which brace against the ground or any available support. In the wild, it will use these roots to push itself up onto an adjoining tree or woody vine. When growing it as a houseplant, you can simulate this by inserting a stake in the center of its pot.",
    image: monstera,
    price: "$9",
    likes: 487,
  },
  {
    id: 3,
    name: "Palm Plant",
    description:
      "Tropical landscape majesty Palm is an upright houseplant that's ideal for bright bedrooms, dens, and family rooms. Prefers a brightly lit spot, can tolerate low light for short periods of time, but not permanently. Water as the top inch of the soil dries to the touch",
    image: palm,
    price: "$11",
    likes: 365,
  },
  {
    id: 4,
    name: "Snake Plant",
    description:
      "Dracaena trifasciata, commonly known as the snake plant, is one of the most popular and hardy species of houseplants. Up until 2017, it was botanically classified as Sansevieria trifasciata, but its commonalities with Dracaena species were too many to overlook. The plant features stiff, sword-like leaves and can range anywhere from six inches to eight feet tall. Snake plants can vary in color although many have green-banded leaves and commonly feature a yellow border. These plants are easy to grow and, in many cases, are nearly indestructible. They will thrive in very bright light or almost dark corners of the house. Snake plants generally grow slowly in indoor light, but increasing its exposure to light will boost growth if it receives a few hours of direct sun. Planting and repotting is best done in the spring.",
    image: snake,
    price: "$12",
    likes: 229,
  },
  {
    id: 5,
    name: "Orchid",
    description:
      "Orchids (Orchidaceae) have a mystique that seems to set them apart from most other flowers: They are elegant and almost unreal in their perfection. Even though orchids are one of the largest flowering plant families, every orchid species has a unique look.",
    image: orchid,
    price: "$8",
    likes: 148,
  },
  {
    id: 6,
    name: "Ficus",
    description:
      "Ficus is a genus of about 850 species of woody trees, shrubs, vines, epiphytes and hemiepiphytes in the family Moraceae. Collectively known as fig trees or figs, they are native throughout the tropics with a few species extending into the semi-warm temperate",
    image: ficus,
    price: "$18",
    likes: 79,
  },
];

export { plantsdata };
