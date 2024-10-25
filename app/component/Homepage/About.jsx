import Image from "next/image";

const About = () => {
  return (
    <div className="mt-20 px-16">
      <div className="flex justify-between  gap-10">
        <div className="relative">
          <Image
            alt="Person Image"
            src="/assets/images/about_us/person.jpg"
            height={900}
            width={900}
            className="w-full  h-auto rounded-lg"
          ></Image>
          <Image
            alt="Parts Image"
            src="/assets/images/about_us/parts.jpg"
            height={200}
            width={200}
            className="absolute bottom-0 right-0  w-250 h-250  border-white border-l-8 border-t-8 rounded-t-lg rounded-l-lg"
          ></Image>
        </div>
        <div className="space-y-5">
          <p className="text-red-600 font-extrabold text-center">About Us</p>
          <h1 className="text-4xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="space-y-8">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{" "}
          </p>
          <p className="space-y-2">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{" "}
          </p>
          <button className="btn btn-primary text-right">Get More info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
