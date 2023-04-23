import React from "react";

import Layout from "../../components/Layout";
import Container from "../../components/Container";
import ServiceForm from "./components/ServiceForm";

const Service = () => {
  return (
    <Layout>
      <Container className="flex flex-col items-center">
        <h1 className="text-primary text-lg md:text-2xl font-semibold my-5 md:my-10">
          Welcome to our Service Page!
        </h1>

        <p className="text-sm md:text-xl text-center md:px-20 mb-5 md:mb-10">
          <span className="text-primary">Realyfy</span> is commited to offer
          door step services for all your electroinics repair to installation of
          newly purchase items and much more. We have a highly talented and
          trained team, they will visit your address and will solve the issue.
        </p>

        <ServiceForm />
        </Container>

        <Container className="py-10">
          <h2 className="text-center text-2xl md:text-4xl font-semibold pb-10">
            How it works
          </h2>
          <div className="flex flex-col md:flex-row item-start justify-around gap-10">
            <div className="flex flex-col items-center">
              <div className="bg-primary rounded-full w-20 h-20 flex items-center justify-center text-white text-3xl font-semibold">
                1
              </div>
              <div>
                <h3 className="text-center text-xl font-semibold py-6">
                  Pick A Service
                </h3>
                <p className="text-center">
                  Find your service, check out the up-front prices and highly
                  reviewed Independent Service Pros.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-primary rounded-full w-20 h-20 flex items-center justify-center text-white text-3xl font-semibold">
                2
              </div>
              <div>
                <h3 className="text-center text-xl font-semibold py-6">
                  Book Online
                </h3>
                <p className="text-center">
                  Simply tell us what the problem is and when and where a Pro
                  should show up.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-primary rounded-full w-20 h-20 flex items-center justify-center text-white text-3xl font-semibold">
                3
              </div>
              <div>
                <h3 className="text-center text-xl font-semibold py-6">
                  Pay After Work is Done
                </h3>
                <p className="text-center">
                  We connect you to a Pro who will fix your problem — you pay
                  only after the work is done.
                </p>
              </div>
            </div>
          </div>
        </Container>
        
        <div className="bg-primary py-14">
          <Container className="grid grid-cols-12 text-white gap-y-10 md:gap-0">
            <div className="col-span-12 md:col-span-3 text-8xl text-white flex items-center justify-center">
              <i class="fa-regular fa-circle-check"></i>
            </div>
            <div className="col-span-12 md:col-span-9 my-auto text-center md:text-left">
              <h2 className="text-3xl font-semibold mb-6">Realyfy Guarantee</h2>
              <p className="text-lg">
                We stand behind the quality of our Pros. If you are not
                reasonably satisfied with the Pro who is sent to your home, we
                will seek to rectify the situation. This is our commitment to
                you.
              </p>
            </div>
          </Container>
        </div>
        {/* <Container>
         <div className="grid grid-cols-12 items-center gap-10 my-40">
           <div className="col-span-6">
             <h2 className="text-primary text-xl font-bold mb-1">Contact Us</h2>
             <h1 className="text-gray-700 text-6xl font-bold mb-5">
               Feel free to <span className="text-primary">get in touch</span>{" "}
               with us.
             </h1>
             <p className="text-xl text-gray-600 font-medium mb-5">
               Want to get in touch? We'd love to hear from you. Here's how you
               can reach us...
             </p>
             <ContsctForm />
           </div>
           <div className="col-span-6">
             <img src={EmailIllustration} alt="one-stop-solution" />
           </div>
         </div>
       </Container> */}
    </Layout>
  );
};

export default Service;
