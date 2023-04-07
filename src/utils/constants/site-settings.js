import RealEstate from "../../assets/images/explore/real-estate.jpg";
import Interiros from "../../assets/images/explore/interiors.jpg";
import HomeServices from "../../assets/images/explore/home-services.jpg";
import Finance from "../../assets/images/explore/finance.jpg";

export const keyFeatures = [
  {
    heading: "Experienced agents",
    description:
      "realyfy has a team of experienced agents who can provide personalized attention and guidance to clients throughout the buying or selling process.",
    icon: <i class="fa-solid fa-user"></i>,
  },
  {
    // heading: "Competitive rates",
    // description:
    //   "realyfy is committed to offering competitive rates and value to clients for all of their real estate needs.",
    heading: "0% brokerage",
    description:
      "realyfy is commited to offer you 0% brokerage on your proerty purchase.",
    icon: <i class="fa-solid fa-percent"></i>,
  },
  {
    heading: "Quality properties",
    description:
      "realyfy offers quality properties for sale or rent that are in compliance with local laws and regulations.",
    icon: <i class="fa-solid fa-house"></i>,
  },
  {
    heading: "Interior design",
    description:
      "realyfy offers interior design services to help clients prepare their properties for sale.",
    icon: <i class="fa-solid fa-couch"></i>,
  },
  {
    heading: "Trusted lenders",
    description:
      "realyfy has partnerships with trusted lenders who can assist clients in securing home loans or mortgages.",
    icon: <i class="fa-solid fa-handshake"></i>,
  },
  {
    heading: "Exceptional customer service",
    description:
      "realyfy is dedicated to providing exceptional customer service to all clients, with prompt communication and attention to their individual needs.",
    icon: <i class="fa-solid fa-headset"></i>,
  },
];

export const exploreSite = [
  {
    link: "/real-estate",
    image: RealEstate,
    label: "Real Estate",
  },
  {
    link: "/interiors",
    image: Interiros,
    label: "Interiors",
  },
  {
    link: "/home-services",
    image: HomeServices,
    label: "Home Services",
  },
  {
    link: "/finance",
    image: Finance,
    label: "Finance",
  },
];

export const LOCAL_STORAGE_KEYS = {
  AUTH_TOKEN: "AUTH_TOKEN",
};
