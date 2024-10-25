import { services } from "../../lib/services";
import ServiceCard from "../cards/serviceCard";

const Services = () => {
//   console.log(services);
  return (
    <div className="mt-16 px-16 ">
      <div className="space-y-4" >
        
        <p className="text-red-600 font-extrabold text-center text-xl">
          Our Services
        </p>
        <h1 className="font-extrabold text-center text-5xl">
          Our Service Area
        </h1>
        <p className="text-center text-xl">
          The majority have suffered alteration in some form, by injected
          humour, or randomised
        </p>
        <p className="text-center text-xl">
          Words which do not look even slightly believable.{" "}
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10 ">
        
        {
            services.map((service)=>(<ServiceCard key={service._id} service={service}></ServiceCard>

            ))
        }
      </div>
    </div>
  );
};

export default Services;
