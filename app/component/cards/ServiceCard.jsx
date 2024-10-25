import Image from "next/image";

const ServiceCard = ({ service }) => {
  const { title, img,price } = service || {};
  return (
    //     <div className="card bg-base-100 w-96 shadow-xl">
    //   <figure>
    //     <Image src={img} width={200} height={200} alt={title}></Image>
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">{title}</h2>
    //     {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
    //     <div className="card-actions justify-end">
    //       <button className="btn btn-primary">Buy Now</button>
    //     </div>
    //   </div>
    // </div>
    <div className="card container shadow-xl rounded-xl bg-base-100 flex flex-grow space-y-4">
      <figure className="rounded-2xl m-4">
        <Image  src={img} width={500} height={500} alt={title}></Image>
      </figure>
      <p className="text-2xl text-center font-bold ml-6">{title}</p>
      

      <div className="flex justify-between items-center mx-4 pb-3">
        <p className="text-red-600 font-bold">Price:${price}</p>
      <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
};

export default ServiceCard;
