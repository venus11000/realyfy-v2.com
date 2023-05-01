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

export const faqs = [
  {
    question: "What kind of properties do you offer for sale or rent?",
    answer:
      "We offer a wide variety of properties for sale or rent, including single-family homes, condos, townhouses, and apartments.",
  },
  {
    question: "How can I list my property for sale or rent with your company?",
    answer:
      "You can contact us to schedule a consultation and we will guide you through the process of listing your property.",
  },
  {
    question:
      "What are your fees or commissions for buying, selling, or renting a property?",
    answer:
      "Our fees and commissions vary depending on the specific service and property, but we are committed to offering competitive rates and value to our clients.",
  },
  {
    question:
      "Can you help me find a property that meets my specific needs and budget?",
    answer:
      "Yes, we have experienced agents who can assist you in finding a property that meets your specific needs and budget.",
  },
  {
    question:
      "Do you offer home staging or interior design services to help me prepare my property for sale?",
    answer:
      "Yes, we offer home staging and interior design services to help you prepare your property for sale.",
  },
  {
    question: "Can you assist me with securing a home loan or mortgage?",
    answer:
      "Yes, we have partnerships with trusted lenders and can assist you in securing a home loan or mortgage.",
  },
  {
    question:
      "Do you offer any warranty or guarantee on the properties you sell?",
    answer:
      "While we cannot guarantee the condition of the property, we work to ensure that all properties we sell are in compliance with local laws and regulations.",
  },
  {
    question:
      "What are your hours of operation and how can I contact you if I have questions or concerns?",
    answer:
      "Our hours of operation vary by location, but we are typically available during normal business hours and can be reached by phone, email, or in-person appointment.",
  },
  {
    question:
      "How long does it typically take to sell a property with your company?",
    answer:
      "The time it takes to sell a property can vary depending on various factors such as location, condition, and market demand, but we work to sell properties as quickly and efficiently as possible.",
  },
  {
    question: "What sets your company apart from other real estate agencies?",
    answer:
      "We pride ourselves on providing exceptional customer service, personalized attention, and a full range of services to meet our clients' needs, from buying and selling to financing and home services.",
  },
];
