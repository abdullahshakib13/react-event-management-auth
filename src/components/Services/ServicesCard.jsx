

const ServicesCard = ({service}) => {
    const { id, name, image, price, short_description, button_text } = service;
    return (
        <div className="">
           <div className="card  bg-base-100 shadow-xl">
                <figure><img className="w-[330px] h-[200px]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title justify-center">{name}</h2>
                    <p>Price: { price}</p>
                    <p>{short_description }</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary">See Details</button>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default ServicesCard;