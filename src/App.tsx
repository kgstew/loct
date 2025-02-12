function App() {
  return (
    <>
      <header className="sticky top-0 border border-gray-100 bg-white">
        <nav className="mx-auto flex content-center items-center justify-between py-4 xs:max-w-full xs:max-w-full xs:px-7 md:px-10 lg:max-w-screen-xl xl:items-center xl:px-24">
          <a className="text-lg font-semibold" href="#">
            League of Creative Technologists
          </a>
          {/* <ul className="hidden lg:ml-auto lg:mr-12 lg:flex lg:w-auto lg:items-center lg:space-x-12">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
                href="https://ravenbrightcss.com/docs/getting-started/overview"
              >
                
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
                href="https://ravenbrightcss.com/tokens"
              >
                Design tokens
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
                href="https://ravenbrightcss.com/components"
              >
                Components
              </a>
            </li>
          </ul> */}
          {/* <a
            role="button"
            href="https://ravenbrightcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit justify-center rounded-sm border border-green-700 bg-transparent px-6 py-3 text-sm font-medium text-green-700 hover:bg-green-100 sm:flex"
          >
            Get started
          </a> */}
        </nav>
      </header>
      <main>
        <section className="mx-auto flex bg-white xs:max-w-full xs:flex-col xs:py-6 xs:px-7 xs:py-12 md:px-10 md:py-16 lg:max-w-screen-xl lg:flex-row lg:py-24 xl:px-24">
          <div className="sm:max-mx-auto md:max-mx-auto flex flex-col justify-center xs:mb-6 lg:mr-8 lg:mb-0 lg:w-1/2 lg:max-w-2xl lg:py-6 xl:py-8">
            <div className="xs:text-left sm:text-center lg:text-left">
              <h1 className="tracking-tight mb-4 font-extrabold text-gray-900 xs:text-4xl sm:text-5xl md:text-6xl">
                An Inclusive Group of Artists and Technologists
              </h1>
              <p className="mb-8 flex text-md text-gray-600 sm:mx-auto sm:max-w-md md:max-w-xl md:text-center md:text-lg lg:mx-0 lg:text-left lg:text-xl">
                Meeting monthly to share projects, find collaborators, and build
                more art.
              </p>
              <div className="my-3 flex flex-col sm:justify-center md:mx-auto md:max-w-xl md:flex-row lg:mx-0 lg:justify-start">
                {/* <a
                  rel="noopener noreferrer"
                  href="https://github.com/ariqnrnns/tailwind-html-vite-ravenbrighttokens"
                  role="button"
                  className="flex justify-center rounded-sm bg-green-600 px-10 py-5 text-md font-medium text-white hover:bg-green-800 xs:mr-0 xs:mb-6 xs:w-full md:mr-6 md:mb-0 lg:w-fit"
                >
                  Get started
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://ravenbrightcss.com/docs/getting-started/overview"
                  role="button"
                  className="flex justify-center rounded-sm border border-green-700 bg-transparent px-10 py-5 text-md font-medium text-green-700 hover:bg-green-100 xs:w-full lg:w-fit"
                >
                  Read documentation
                </a> */}
              </div>
            </div>
          </div>
          <img
            className="background-cover h-[400px] rounded-lg object-cover lg:w-1/2"
            src="/teaching_art_with_light.jpg"
            alt="LOCT Host Teaching a class on LED's and microcontrollers"
          />
        </section>
        <section className="bg-gray-600">
          <div className="container mx-auto flex flex-row items-center py-8">
            <div className="mb-8 w-full flex flex-col items-center">
              <button>Facebook</button>
              <button>Discord</button>
              <button>Events</button>
            </div>
            <div className="mb-8 w-full flex flex-col">
              <p className="pb-2">
                Welcome to Denver's vibrant community where technology meets
                creativity! Whether you're a technical artist, an engineer with
                an artistic streak, or someone who simply loves the intersection
                of art and technology, you'll find your place here. We're a
                diverse group of makers, creators, and innovators who gather
                regularly in the Denver/Boulder area to share ideas, collaborate
                on projects, and inspire each other.
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
        <section className="bg-gray-100 py-24">
          <div className="mx-auto mb-6 flex flex-col items-center rounded-md bg-white px-6 py-8 xs:max-w-screen-lg md:max-w-screen-sm">
            <img
              className="mb-8 w-1/2"
              alt="Ravenbright CSS login Logo"
              src="/Ravenbright_CSS.png"
            />

            <h2 className="mb-2 text-2xl text-gray-800 xs:text-left xl:text-center">
              Sign up for event notifications.
            </h2>
            <div className="mb-6 w-full">
              <label
                htmlFor="input-label"
                className="mb-2 block text-sm font-medium dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="input-label"
                className="block w-full mx-auto rounded-sm border border-gray-300 py-3 px-4 text-sm focus:border-green-500 focus:ring-green-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                placeholder="yourusername@site.com"
              />
              <button className="mt-4">Sign Up</button>
            </div>
          </div>
        </section>
      </main>
      <footer className="mx-auto flex flex-col bg-green-50 pt-16 pb-16">
        <div className="mx-auto mb-6 flex flex-col content-center text-center xs:max-w-full xs:px-5 md:px-6 lg:max-w-screen-md lg:px-16 xl:items-center xl:px-24">
          <div className="mx-auto mb-6 flex flex-col">
            <a className="mx-auto mb-4 flex justify-center" href="/">
              <img
                className="w-1/2"
                alt="Ravenbright CSS footer Logo"
                src="/Ravenbright_CSS.png"
              />
            </a>
            <p className="mx-auto flex text-sm text-gray-600 sm:max-w-md md:max-w-xl md:text-center">
              Modern, zero-config & style agnostic CSS library with utility
              classes, reusable design tokens, minimal components & built-in
              dark mode to help you build static sites faster
            </p>
          </div>
          <div className="xs-m-b-8 lg-m-b-0 mx-auto grid w-fit grid-cols-3 items-center gap-10">
            <a
              href="https://github.com/ravenbrightdesign/ravenbrightcss"
              aria-label="GitHub link"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke-width="2"
                className="ai ai-GithubFill h-8 w-8 text-gray-700 hover:text-green-700"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.figma.com/@ariqnarasaputra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Figma link"
            >
              <svg
                role="img"
                className="h-8 w-8 text-gray-700 hover:text-green-700"
                aria-label="figma"
                width="24"
                height="24"
                stroke-width="2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6C6 5.20435 6.31607 4.44129 6.87868 3.87868C7.44129 3.31607 8.20435 3 9 3H12V9H9C8.20435 9 7.44129 8.68393 6.87868 8.12132C6.31607 7.55871 6 6.79565 6 6Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 3H15C15.394 3 15.7841 3.0776 16.1481 3.22836C16.512 3.37913 16.8427 3.6001 17.1213 3.87868C17.3999 4.15726 17.6209 4.48797 17.7716 4.85195C17.9224 5.21593 18 5.60603 18 6C18 6.39397 17.9224 6.78407 17.7716 7.14805C17.6209 7.51203 17.3999 7.84274 17.1213 8.12132C16.8427 8.3999 16.512 8.62087 16.1481 8.77164C15.7841 8.9224 15.394 9 15 9H12V3Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 12C12 11.606 12.0776 11.2159 12.2284 10.8519C12.3791 10.488 12.6001 10.1573 12.8787 9.87868C13.1573 9.6001 13.488 9.37913 13.8519 9.22836C14.2159 9.0776 14.606 9 15 9C15.394 9 15.7841 9.0776 16.1481 9.22836C16.512 9.37913 16.8427 9.6001 17.1213 9.87868C17.3999 10.1573 17.6209 10.488 17.7716 10.8519C17.9224 11.2159 18 11.606 18 12C18 12.394 17.9224 12.7841 17.7716 13.1481C17.6209 13.512 17.3999 13.8427 17.1213 14.1213C16.8427 14.3999 16.512 14.6209 16.1481 14.7716C15.7841 14.9224 15.394 15 15 15C14.606 15 14.2159 14.9224 13.8519 14.7716C13.488 14.6209 13.1573 14.3999 12.8787 14.1213C12.6001 13.8427 12.3791 13.512 12.2284 13.1481C12.0776 12.7841 12 12.394 12 12V12Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M6 18C6 17.2044 6.31607 16.4413 6.87868 15.8787C7.44129 15.3161 8.20435 15 9 15H12V18C12 18.7956 11.6839 19.5587 11.1213 20.1213C10.5587 20.6839 9.79565 21 9 21C8.20435 21 7.44129 20.6839 6.87868 20.1213C6.31607 19.5587 6 18.7956 6 18Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M6 12C6 11.2044 6.31607 10.4413 6.87868 9.87868C7.44129 9.31607 8.20435 9 9 9H12V15H9C8.20435 15 7.44129 14.6839 6.87868 14.1213C6.31607 13.5587 6 12.7956 6 12Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
            <a
              href="https://codepen.io/ariqnarasaputra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Codepen link"
              className=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke-width="1"
                className="ai ai-CodepenFill h-8 w-8 text-gray-700 hover:text-green-700"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.372.19c.38-.253.875-.253 1.256 0L23.492 7.4c.317.21.508.565.508.946v7.308c0 .38-.19.736-.508.947l-10.864 7.21c-.38.252-.875.252-1.256 0L.508 16.6A1.136 1.136 0 0 1 0 15.654V8.346c0-.38.19-.736.508-.947L11.372.19zm-9.1 10.273v3.058l2.288-1.54-2.288-1.518zm4.337 2.878L3.18 15.648l7.684 5.1v-4.583L6.61 13.341zm6.527 2.824v4.582l7.684-5.1-3.43-2.306-4.254 2.824zm6.303-4.183l2.29 1.54v-3.06l-2.29 1.52zm1.371-3.636l-3.41 2.263-4.264-2.868V3.253l7.674 5.093zm-9.946-5.093V7.74l-4.263 2.868L3.19 8.346l7.674-5.093zM12 9.715l-3.35 2.254L12 14.192l3.35-2.223L12 9.715z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
