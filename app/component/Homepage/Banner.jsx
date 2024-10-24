const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        {banners.map((banner, index) => (
          <div
          style={{ 
            backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index+1}.jpg)`,
          }}
           key={index} id="slide1" className="carousel-item relative w-full h-screen">
            <div>
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
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
    title: "",
    description: "",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "",
    description: "",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "",
    description: "",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "",
    description: "",
    next: "#slide1",
    prev: "#slide3",
  },
];

export default Banner;
