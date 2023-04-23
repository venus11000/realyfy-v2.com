import React, { useEffect, useState } from "react";
import ServiceForm1 from "./Form1";
import ServiceForm2 from "./Form2";
import ServiceForm3 from "./Form3";
import { createServiceRequestAction } from "../../../../store/common/ServiceRequest/actions";
import { useDispatch, useSelector } from "react-redux";

const ServiceForm = () => {
  const [activeForm, setActiveForm] = useState(1);
  const [data, setData] = useState({
    form1Data: null,
    form2Data: null,
    form3Data: null,
  });
  const [alert, setAlert] = useState("");

  const { createServiceRequest } = useSelector((state) => state.serviceRequest);
  const dispatch = useDispatch();

  const handleNext = (formData) => {
    setActiveForm(activeForm + 1);
    setData({
      ...data,
      [`form${activeForm}Data`]: formData,
    });
  };

  const handleSubmit = (form3Data) => {
    const payload = {
      serviceId: data?.form1Data?.service,
      comments: form3Data.comments,
      customerDetails: {
        name: form3Data.name,
        mobile: form3Data.mobile,
        email: form3Data.email,
      },
      addressDetails: data?.form2Data,
    };
    dispatch(createServiceRequestAction(payload));
  };

  useEffect(() => {
    if (createServiceRequest.data) {
      setActiveForm(1);
      setData({
        form1Data: null,
        form2Data: null,
        form3Data: null,
      });
      setAlert(createServiceRequest?.data?.message);
    }
  }, [createServiceRequest]);

  return (
    <div className="mb-10 w-full md:w-[600px]">
      <h1 className="text-lg md:text-2xl text-primary font-semibold text-center mb-5 md:mb-10">
        Let's get stated!
      </h1>
      {activeForm === 1 ? (
        <ServiceForm1 handleNext={handleNext} />
      ) : activeForm === 2 ? (
        <ServiceForm2
          data={{ pincode: data?.form1Data?.pincode }}
          handleNext={handleNext}
        />
      ) : activeForm === 3 ? (
        <ServiceForm3
          loading={createServiceRequest.loading}
          handleSubmit={handleSubmit}
        />
      ) : null}
      {alert && (
        <div className="flex items-center justify-between bg-primary px-5 text-white rounded-sm">
          <span className="py-3">{alert}</span>
          <button
            className="text-lg text-white p-3"
            onClick={() => setAlert("")}
          >
            x
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceForm;
