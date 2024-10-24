const Banner = () => {
  return (
    <div className="container mx-auto px-16 mt-12">
      <div className="carousel w-full  ">
        {banners.map((banner, index) => (
          <div
            style={{
              backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${
                index + 1
              }.jpg)`,
            }}
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full bg-cover bg-top h-[90vh] rounded-xl "
          >
            <div className="flex items-center  h-full pl-14 mx-auto">
              <div>
                <h1 className="text-white text-5xl mb-4">{banner.title}</h1>
                <p className="text-white text-lg">{banner.description}</p>
                <div className="flex gap-4 mt-10">
                  <button className="btn btn-primary">Discover More</button>
                  <button className="btn btn-primary btn-outline text-white">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
            <div className="flex absolute bottom-12 right-12 gap-4 ">
              <a href={banner.prev} className="btn btn-circle bg-slate-400">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle btn-primary">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const banners = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide1",
    prev: "#slide3",
  },
];

export default Banner;
