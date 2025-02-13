import FacebookLogo from "/src/assets/facebook.svg?react";
import DiscordLogo from "/src/assets/discord.svg?react";
import CalendarLogo from "/src/assets/calendar-days.svg?react";

const links = [
  {
    title: "Facebook",
    url: "https://www.facebook.com/share/g/1WMWBcYJ7Y/",
    img: <FacebookLogo className="fill-[#FFCB00] h-[25px] w-[25px]" />,
  },
  {
    title: "Discord",
    url: "https://discord.gg/VhkgQ4W2SP", // Set to never expire but only allow 100 users. Create a new one if we get more than 100 signups.
    img: <DiscordLogo className="fill-[#FFCB00] h-[25px] w-[25px]" />,
  },
  {
    title: "Events",
    url: "https://www.meetup.com/League-of-Creative-Technologists/",
    img: <CalendarLogo className="stroke-[#FFCB00] h-[25px] w-[25px]" />,
  },
];

function App() {
  return (
    <>
      <header className="sticky top-0 border border-gray-100 bg-white">
        <nav className="mx-auto flex content-center items-center justify-between py-4 px-4 lg:px-8">
          <a className="text-lg font-semibold text-gray-600" href="#">
            <img className="w-[150px]" src="/logo.png" />
          </a>
        </nav>
      </header>
      <main>
        <section className="bg-white p-4 lg:p-8">
          <div className="mx-auto md:flex w-full">
            <div className="w-[354px] flex flex-col justify-center">
              <h1 className="tracking-tight mb-4 font-extrabold text-gray-900">
                A Creative Community Merging Art and Tech
              </h1>
              <p className="mb-8 flex text-md text-gray-600">
                The League of Creative Technologists meets monthly to share
                projects, find collaborators, and build more art.
              </p>
            </div>
            <div className="ml-auto">
              <img
                className="background-cover md:max-h-[300px] lg:max-h-[500px] rounded-lg object-cover"
                src="/teaching_art_with_light.jpg"
                alt="LOCT Host Teaching a class on LED's and microcontrollers"
              />
            </div>
          </div>
        </section>
        <section className="bg-[#ffefd4] lg:px-4">
          <div className="container mx-auto items-center py-4 md:flex">
            <div className="md:w-1/3">
              <div className="mx-auto mb-4 p-4 w-full max-w-96 grid grid-cols-1 items-center gap-4">
                {links.map((link) => {
                  const { title, url, img } = link;
                  return (
                    <a
                      href={url}
                      className="pt-2 pb-3 text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  focus:outline-none"
                    >
                      <span className="display: inline-block position: relative top-[6px]">
                        {img}
                      </span>
                      <span className="pl-2">{title}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="mb-8 w-full p-4 md:w-2/3 text-gray-800">
              <p className="pb-2">
                Welcome to a community where technology meets creativity!
                Whether you're a technical artist, an engineer with an artistic
                streak, or someone who simply loves the intersection of art and
                technology, you'll find your place here. We're a diverse group
                of makers, creators, and innovators who gather regularly in the
                Denver/Boulder area to share ideas, collaborate on projects, and
                inspire each other.
              </p>
              <p>
                Our monthly meetups and regular workshops are the perfect
                opportunity to showcase your latest work, learn new skills, or
                simply connect with like-minded individuals. From seasoned
                professionals to curious newcomers, everyone is welcome to join
                our growing community. Bring your projects, your questions, and
                your enthusiasm – we're excited to see what this year has in
                store for all of us!
              </p>
            </div>
          </div>
        </section>
        <section className="bg-white py-8">
          <div className="mx-auto flex flex-col items-center bg-white px-6 md:w-1/2">
            <h2 className="mb-2 text-2xl text-gray-800 text-center">
              Sign up for event notifications
            </h2>
            <input
              type="email"
              id="input-label"
              className="max-w-96 mx-auto rounded-md border border-gray-300 py-3 px-4 text-sm bg-gray-100 text-gray-900"
              placeholder="Enter your email..."
            />
            <a
              href=""
              className="mt-2 py-3 px-6 text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  focus:outline-none"
            >
              Sign Up
            </a>
          </div>
        </section>
      </main>
      <footer className="mx-auto flex flex-col bg-[#FFCB00] py-8">
        <div className="mx-auto mb-6 flex flex-col text-center max-w-full items-center">
          <p className="mx-auto flex text-sm text-gray-600 text-center">
            Copyright League of Creative Technologists, 2025
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
