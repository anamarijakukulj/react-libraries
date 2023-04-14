import tour1 from "./assets/tour-1.jpeg";
import tour2 from "./assets/tour-2.jpeg";
import tour3 from "./assets/tour-3.jpeg";

export const pageLinks = [
  { id: 1, href: "/", text: "home" },
  { id: 2, href: "about/", text: "about" },
  { id: 3, href: "tours/", text: "tours" },
  { id: 4, href: "contact/", text: "contact" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "icon"},
  { id: 2, href: "https://www.twitter.com", icon: "icon"},
  { id: 3, href: "https://www.instagram.com", icon: "icon"},
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "china",
    duration: 6,
    price: 2100,
  },

  {
    id: 2,
    image: tour2,
    date: "october 1th, 2020",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "indonesia",
    duration: 11,
    price: 1400,
  },

  {
    id: 3,
    image: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "hong kong",
    duration: 8,
    price: 5000,
  },
];
