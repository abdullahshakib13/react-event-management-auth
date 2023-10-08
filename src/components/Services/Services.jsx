import ServicesCard from "./ServicesCard";

const Services = ({ services }) => {
  console.log(services);
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
          {
          services.map(service=><ServicesCard key={service.id} service={service}></ServicesCard>)
            }
        </div>
        </div>
    );
};

export default Services;