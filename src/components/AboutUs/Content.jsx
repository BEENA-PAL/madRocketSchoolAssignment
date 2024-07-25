import AboutUsCarousel from "./AboutUsCarousel";

export default function Content() {
  const data = [
    {
      image: "./modern_classrooms.jpg",
      heading: "Spacious and well-equipped classrooms",
      para: "Our modern classrooms are equipped with the latest technology to facilitate an interactive and engaging learning environment.",
    },
    {
      image: "./well_stocked_libraries.jpg",
      heading: " Library with a vast collection of books and digital resources",
      para: "Our library offers a wide range of books, digital resources, and comfortable study spaces for our students",
    },
    {
      image: "./sports_facilities.jpg",
      heading:
        " Sports facilities including a playground, gymnasium, and  swimming pool",
      para: " We provide extensive sports facilities, including playgrounds and gymnasiums, to support the physical development of our  students.",
    },
    {
      image: "./science_lab.avif",
      heading: " State-of-the-art science and computer labs",
      para: " Our science and computer labs are equipped with the latest equipment and resources to provide hands-on learning experiences.",
    },
    {
      image: "./music_room.webp",
      heading: " Art and Music Room",
      para: "Our dedicated art and music rooms provide students with the space and resources to explore their creative talents.",
    },
    {
      image: "./cafeteria.jpeg",
      heading: "Spacious Cafeteria",
      para: " Our cafeteria offers a variety of healthy meal options and provides a comfortable dining area for students.",
    },
  ];

  return (
    <div className="w-full pt-10 flex justify-center bg-gray-300">
      <div className="flex flex-col w-5/6">
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-900">
            About Springdale Public School
          </h3>
          <p className="mt-2 text-gray-500 leading-relaxed">
            Welcome to Springdale Public School, a place where we nurture and
            educate young minds to become the leaders of tomorrow. Established
            in 1985, our school has a rich history of academic excellence and a
            commitment to fostering a supportive and inclusive learning
            environment.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
          <p className="mt-2 text-gray-500 leading-relaxed">
            To empower students with the knowledge, skills, and values needed to
            thrive in a dynamic world.
          </p>
        </div>

        <div className="mt-10 mb-10">
          <h3 className="text-2xl font-semibold text-gray-900">Our Vision</h3>
          <p className="mt-2 text-gray-500 leading-relaxed">
            To create a learning environment that fosters academic excellence,
            critical thinking, and ethical values.
          </p>
        </div>

        <AboutUsCarousel />

        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-900">Our Values</h3>
          <ul className="mt-2 text-gray-500 list-disc list-inside">
            <li className="mt-3">
              Excellence: We strive for the highest standards in everything we
              do.
            </li>
            <li className="mt-3">
              Integrity: We act with honesty and integrity in all our actions.
            </li>
            <li className="mt-3">
              Respect: We respect the diverse backgrounds and perspectives of
              our students, staff, and community.
            </li>
            <li className="mt-3">
              Collaboration: We believe in the power of working together to
              achieve common goals.
            </li>
            <li className="mt-3">
              Innovation: We encourage creativity and innovation in our teaching
              and learning practices.
            </li>
          </ul>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-900">Our History</h3>
          <p className="mt-2 text-gray-500 leading-relaxed">
            Founded in 1985, Springdale Public School has been dedicated to
            providing quality education and holistic development to students.
          </p>
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900">
            Message from the Principal
          </h3>
          <img
            src="./johndoe.jpeg"
            alt=""
            loading="lazy"
            className="rounded-full mt-8 mb-8"
          />
          <p className="mt-2 text-gray-500 leading-relaxed">
            At Springdale, we believe in nurturing the potential of every
            student and guiding them towards a successful future.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-900">
            Our Infrastructure and Facilities
          </h3>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {data.map((data) => {
              return (
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img
                    src={`${data.image}`}
                    loading="lazy"
                    alt="Classroom"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h4 className="mt-4 text-lg font-semibold text-gray-900">
                    {data.heading}
                  </h4>
                  <p className="mt-2 text-gray-600">{data.para}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
