import product1 from "@/assets/Products/product1.jpg";
import services from "@/assets/Products/services.jpg";

export const product = {
  id: 1,
  title: "Samsung Charger Adapter Fast Charging USB-C",
  image: product1,
  ratingsCount: 309,
  brand: "Samsung",
  price: "Rs. 940",
  oldPrice: "Rs. 1,200",
  discount: "-22%",
  location: "Nashville 37217",
  deliveryFee: "Rs. 120",
  pickupFee: "Rs. 80",
};

export const relatedProducts = [
  {
    id: 1,
    name: "Compact 25W Fast Charger",
    price: "Rs. 1,150",
    image: product1,
  },
  {
    id: 2,
    name: "USB-C Wall Adapter Travel Edition",
    price: "Rs. 1,320",
    image: services,
  },
  {
    id: 3,
    name: "Dual Port Charging Plug",
    price: "Rs. 1,499",
    image: product1,
  },
  {
    id: 4,
    name: "Cable and Charger Bundle",
    price: "Rs. 1,780",
    image: services,
  },
];
