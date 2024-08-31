'use client'
import Link from "next/link";
import React from "react";


const PinwheelLanding = () => {
  return (
    <div>
      <header className="header bg-slate-400 shadow-xl">
        <nav className="navbar container">
          {/* logo */}
          <div className="order-0">
            <a href="index.html">
              <img src="images/logo.svg" height={30} width={147} alt="logo" />
            </a>
          </div>
          {/* navbar toggler */}
          <input id="nav-toggle" type="checkbox" className="hidden" />
          <label
            id="show-button"
            htmlFor="nav-toggle"
            className="order-1 flex cursor-pointer items-center lg:order-1 lg:hidden"
          >
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
          </label>
          <label
            id="hide-button"
            htmlFor="nav-toggle"
            className="order-2 hidden cursor-pointer items-center lg:order-1"
          >
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          </label>
          {/* /navbar toggler */}
          <ul
            id="nav-menu"
            className="navbar-nav order-2 hidden w-full flex-[0_0_100%] lg:order-1 lg:flex lg:w-auto lg:flex-auto lg:justify-center lg:space-x-5"
          >
            <li className="nav-item">
              <a href="http://localhost:3000/dashboard" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="about.html" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="blog.html" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="features.html" className="nav-link">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="how-it-works.html" className="nav-link">
                How It Works
              </a>
            </li>
            {/* <li className="nav-item nav-dropdown group relative">
              <span className="nav-link inline-flex items-center">
                Pages
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
              <ul className="nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100">
                <li className="nav-dropdown-item">
                  <a href="career.html" className="nav-dropdown-link">
                    Career
                  </a>
                </li>
                <li className="nav-dropdown-item">
                  <a href="career-single.html" className="nav-dropdown-link">
                    Career Single
                  </a>
                </li>
                <li className="nav-dropdown-item">
                  <a href="integrations.html" className="nav-dropdown-link">
                    Integrations
                  </a>
                </li>
                <li className="nav-dropdown-item">
                  <a
                    href="integration-single.html"
                    className="nav-dropdown-link"
                  >
                    Integration Single
                  </a>
                </li>
                <li className="nav-dropdown-item">
                  <a href="pricing.html" className="nav-dropdown-link">
                    Pricing
                  </a>
                </li>
                <li className="nav-dropdown-item">
                  <a href="changelogs.html" className="nav-dropdown-link">
                    Changelogs
                  </a>
                </li>
                <li className="nav-dropdown-item">
                  <a href="terms-conditions.html" className="nav-dropdown-link">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </li> */}
            <li className="nav-item">
              <a href="contact.html" className="nav-link">
                Contact
              </a>
            </li>
            {/* <li className="nav-item mt-3.5 lg:hidden">
              <a
                className="btn btn-white btn-sm border-border"
                href="signin.html"
              >
                Sing Up Now
              </a>
            </li> */}
          </ul>
          <div className="order-1 ml-auto hidden items-center md:order-2 md:ml-0 lg:flex">
            <Link href="/signin" className="btn btn-white btn-sm">
              Sing Up Now
            </Link>
          </div>
        </nav>
      </header>

      <section className="section banner relative">
        <div className="container">
          <div className="row items-center">
            <div className="lg:col-6">
              <h1 className="banner-title">
                Revolutionize teamwork with our collaborative spreadsheet
                platform
              </h1>
              <p className="mt-6">
                Experience seamless collaboration in real-time. Our intuitive
                platform removes the hassle of sharing files and tracking
                changes, allowing your team to focus on what matters most.
              </p>
              <a className="btn btn-white mt-8" href="#">
                Start Collaborating Now
              </a>
            </div>
            <div className="lg:col-6">
              <img
                className="w-full object-contain"
                src="images/banner-img.png"
                width={603}
                height={396}
                alt="Team collaborating on a spreadsheet"
              />
            </div>
          </div>
        </div>
        <img
          className="banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[30%]"
          src="images/banner-shape.svg"
          alt=""
        />
      </section>
      <section className="section key-feature relative">
        <img
          className="absolute left-0 top-0 -z-[1] -translate-y-1/2"
          src="images/icons/feature-shape.svg"
          alt=""
        />
        <div className="container">
          <div className="row justify-between text-center lg:text-start">
            <div className="lg:col-5">
              <h2>Key Features of Our Collaborative Spreadsheet Solution</h2>
            </div>
            <div className="mt-6 lg:col-5 lg:mt-0">
              <p>
                Experience the power of real-time collaboration with our
                innovative spreadsheet platform. Our solution offers seamless
                teamwork, advanced data analysis, and intuitive features
                designed to enhance your productivity.
              </p>
            </div>
          </div>
          <div className="key-feature-grid mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4">
            <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
              <div>
                <h3 className="h4 text-xl lg:text-2xl">Real-Time Editing</h3>
                <p>
                  Collaborate with your team in real-time, seeing changes
                  instantly as they happen.
                </p>
              </div>
              <span className="icon mt-4">
                <img
                  className="objec-contain"
                  src="images/icons/feature-icon-1.svg"
                  alt=""
                />
              </span>
            </div>
            <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
              <div>
                <h3 className="h4 text-xl lg:text-2xl">Smart Formulas</h3>
                <p>
                  Leverage intelligent formula suggestions to streamline your
                  calculations.
                </p>
              </div>
              <span className="icon mt-4">
                <img
                  className="objec-contain"
                  src="images/icons/feature-icon-2.svg"
                  alt=""
                />
              </span>
            </div>
            <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
              <div>
                <h3 className="h4 text-xl lg:text-2xl">Data Visualization</h3>
                <p>
                  Create stunning charts and graphs to visualize your data
                  effectively.
                </p>
              </div>
              <span className="icon mt-4">
                <img
                  className="objec-contain"
                  src="images/icons/feature-icon-3.svg"
                  alt=""
                />
              </span>
            </div>
            <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
              <div>
                <h3 className="h4 text-xl lg:text-2xl">Version History</h3>
                <p>Track changes and revert to previous versions with ease.</p>
              </div>
              <span className="icon mt-4">
                <img
                  className="objec-contain"
                  src="images/icons/feature-icon-4.svg"
                  alt=""
                />
              </span>
            </div>
            <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
              <div>
                <h3 className="h4 text-xl lg:text-2xl">Dark Mode</h3>
                <p>
                  Reduce eye strain with our sleek dark mode option for
                  late-night work sessions.
                </p>
              </div>
              <span className="icon mt-4">
                <img
                  className="objec-contain"
                  src="images/icons/feature-icon-5.svg"
                  alt=""
                />
              </span>
            </div>
            <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
              <div>
                <h3 className="h4 text-xl lg:text-2xl">Advanced Permissions</h3>
                <p>
                  Control access and editing rights for enhanced data security
                  and collaboration.
                </p>
              </div>
              <span className="icon mt-4">
                <img
                  className="objec-contain"
                  src="images/icons/feature-icon-6.svg"
                  alt=""
                />
              </span>
            </div>
            <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
              <div>
                <h3 className="h4 text-xl lg:text-2xl">Mobile Access</h3>
                <p>
                  Access and edit your spreadsheets on-the-go with our
                  mobile-friendly interface.
                </p>
              </div>
              <span className="icon mt-4">
                <img
                  className="objec-contain"
                  src="images/icons/feature-icon-7.svg"
                  alt=""
                />
              </span>
            </div>
            <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
              <div>
                <h3 className="h4 text-xl lg:text-2xl">Automated Backups</h3>
                <p>
                  Never lose your work with our automatic backup and recovery
                  system.
                </p>
              </div>
              <span className="icon mt-4">
                <img
                  className="objec-contain"
                  src="images/icons/feature-icon-8.svg"
                  alt=""
                />
              </span>
            </div>
            <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
              <div>
                <h3 className="h4 text-xl lg:text-2xl">Focus Mode</h3>
                <p>
                  Boost productivity by minimizing distractions with our focus
                  mode feature.
                </p>
              </div>
              <span className="icon mt-4">
                <img
                  className="objec-contain"
                  src="images/icons/feature-icon-9.svg"
                  alt=""
                />
              </span>
            </div>
            <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
              <div>
                <h3 className="h4 text-xl lg:text-2xl">Team Collaboration</h3>
                <p>
                  Seamlessly work together with integrated comments, mentions,
                  and task assignments.
                </p>
              </div>
              <span className="icon mt-4">
                <img
                  className="objec-contain"
                  src="images/icons/feature-icon-10.svg"
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section services">
        <div className="container">
          <div
            className="tab row gx-5 items-center"
            data-tab-group="integration-tab"
          >
            <div className="lg:col-7 lg:order-2">
              <div className="tab-content" data-tab-content="">
                <div className="tab-content-panel active" data-tab-panel={0}>
                  <img
                    className="w-full object-contain"
                    src="images/sells-by-country.png"
                  />
                </div>
                <div className="tab-content-panel" data-tab-panel={1}>
                  <img
                    className="w-full object-contain"
                    src="images/collaboration.png"
                  />
                </div>
                <div className="tab-content-panel" data-tab-panel={2}>
                  <img
                    className="w-full object-contain"
                    src="images/sells-by-country.png"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 lg:col-5 lg:order-1 lg:mt-0">
              <div className="text-container">
                <h2 className="lg:text-4xl">
                  Enhance team productivity with seamless collaboration
                </h2>
                <p className="mt-4">
                  Our platform empowers your team to create, edit, and share
                  spreadsheets in real-time. With robust features and intuitive
                  design, we ensure your collaborative experience is smooth and
                  efficient.
                </p>
                <ul className="tab-nav -ml-4 mt-8 border-b-0" data-tab-nav="">
                  <li className="tab-nav-item active" data-tab={0}>
                    <img className="mr-3" src="images/icons/drop.svg" alt="" />
                    Real-time editing and commenting
                  </li>
                  <li className="tab-nav-item" data-tab={1}>
                    <img className="mr-3" src="images/icons/brain.svg" alt="" />
                    Version history and change tracking
                  </li>
                  <li className="tab-nav-item" data-tab={2}>
                    <img className="mr-3" src="images/icons/timer.svg" alt="" />
                    Customizable permissions and sharing
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row gx-5 mt-12 items-center lg:mt-0">
            <div className="lg:col-7">
              <div className="relative">
                <img
                  className="w-full object-contain"
                  src="images/collaboration.png"
                />
                <img
                  className="absolute bottom-6 left-1/2 -z-[1] -translate-x-1/2"
                  src="images/shape.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-6 lg:col-5 lg:mt-0">
              <div className="text-container">
                <h2 className="lg:text-4xl">
                  Collaborate across borders with our global platform
                </h2>
                <p className="mt-4">
                  Our collaborative spreadsheet solution breaks down
                  geographical barriers, allowing teams to work together
                  seamlessly, no matter where they are in the world.
                </p>
                <ul className="mt-6 text-dark lg:-ml-4">
                  <li className="mb-2 flex items-center rounded px-4">
                    <img
                      className="mr-3"
                      src="images/icons/checkmark-circle.svg"
                      alt=""
                    />
                    Support for over 100 countries worldwide
                  </li>
                  <li className="mb-2 flex items-center rounded px-4">
                    <img
                      className="mr-3"
                      src="images/icons/checkmark-circle.svg"
                      alt=""
                    />
                    Multiple currency and date format support
                  </li>
                  <li className="flex items-center rounded px-4">
                    <img
                      className="mr-3"
                      src="images/icons/checkmark-circle.svg"
                      alt=""
                    />
                    24/7 customer support in 30+ languages
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row gx-5 mt-12 items-center lg:mt-0">
            <div className="lg:col-7 lg:order-2">
              <div className="video pb-5 pr-9">
                <div className="video-thumbnail overflow-hidden rounded-2xl">
                  <img
                    className="w-full object-contain"
                    src="images/intro-thumbnail.png"
                    alt=""
                  />
                  <button className="video-play-btn">
                    <img src="images/icons/play-icon.svg" alt="" />
                  </button>
                </div>
                <div className="video-player absolute left-0 top-0 z-10 hidden h-full w-full">
                  <iframe
                    className="h-full w-full"
                    allowFullScreen=""
                    src="https://www.youtube.com/embed/g3-VxLQO7do?autoplay=1"
                  />
                </div>
                <img
                  className="intro-shape absolute bottom-0 right-0 -z-[1]"
                  src="images/shape.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-6 lg:col-5 lg:order-1 lg:mt-0">
              <div className="text-container">
                <h2 className="lg:text-4xl">
                  Powerful features to supercharge your teamwork
                </h2>
                <p className="mt-4">
                  Discover how our collaborative spreadsheet platform can
                  transform your team's productivity. From real-time editing to
                  advanced data analysis tools, we've got everything you need to
                  excel.
                </p>
                <button className="btn btn-white mt-6">Explore Features</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer bg-theme-light/50">
        <div className="container">
          <div className="row gx-5 pb-10 pt-[52px]">
            <div className="col-12 mt-12 md:col-6 lg:col-3">
              <a href="index.html">
                <img src="images/logo.svg" alt="CollabSheet Logo" />
              </a>
              <p className="mt-6">
                Empowering teams with real-time collaborative spreadsheets.
                Streamline your workflow and boost productivity with
                CollabSheet.
              </p>
            </div>
            <div className="col-12 mt-12 md:col-6 lg:col-3">
              <h6>Connect With Us</h6>
              <p>support@collabsheet.com</p>
              <ul className="social-icons mt-4 lg:mt-6">
                <li>
                  <a href="#" aria-label="Facebook">
                    <svg
                      width={19}
                      height={21}
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.1056 10.4495C19.1056 5.09642 15 0.759277 9.9327 0.759277C4.86539 0.759277 0.759766 5.09642 0.759766 10.4495C0.759766 15.2946 4.08865 19.3191 8.49018 20.0224V13.2627H6.15996V10.4495H8.49018V8.33951C8.49018 5.91696 9.85872 4.54939 11.93 4.54939C12.9657 4.54939 14.0013 4.74476 14.0013 4.74476V7.12823H12.8547C11.7081 7.12823 11.3382 7.87063 11.3382 8.65209V10.4495H13.8904L13.4835 13.2627H11.3382V20.0224C15.7398 19.3191 19.1056 15.2946 19.1056 10.4495Z"
                        fill="#222222"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Twitter">
                    <svg
                      width={19}
                      height={15}
                      viewBox="0 0 19 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.3308 3.92621C17.0129 3.42889 17.6269 2.83209 18.1044 2.13583C17.4904 2.40108 16.7742 2.60001 16.0579 2.66632C16.8083 2.2353 17.354 1.5722 17.6269 0.743317C16.9447 1.14118 16.1603 1.43958 15.3758 1.60535C14.6937 0.909093 13.7728 0.51123 12.7496 0.51123C10.7714 0.51123 9.16837 2.06952 9.16837 3.99252C9.16837 4.25777 9.20248 4.52301 9.27069 4.78825C6.3034 4.62247 3.64307 3.22995 1.86952 1.14118C1.56256 1.63851 1.39202 2.2353 1.39202 2.8984C1.39202 4.09199 2.00595 5.15296 2.99504 5.7829C2.41523 5.74975 1.83541 5.61713 1.35792 5.35189V5.38504C1.35792 7.07596 2.58576 8.46847 4.22289 8.80002C3.95003 8.86633 3.60897 8.93265 3.302 8.93265C3.06326 8.93265 2.85862 8.89949 2.61987 8.86633C3.06326 10.2589 4.39342 11.2535 5.96233 11.2867C4.73449 12.215 3.19968 12.7786 1.52845 12.7786C1.22149 12.7786 0.948636 12.7455 0.675781 12.7123C2.24469 13.707 4.12057 14.2706 6.16698 14.2706C12.7496 14.2706 16.3308 8.99896 16.3308 4.39039C16.3308 4.22461 16.3308 4.09199 16.3308 3.92621Z"
                        fill="#222222"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="LinkedIn">
                    <svg
                      width={19}
                      height={16}
                      viewBox="0 0 19 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.56609 15.2704V5.45315H0.948103V15.2704H4.56609ZM2.73764 4.1398C3.90474 4.1398 4.83841 3.31895 4.83841 2.33394C4.83841 1.38176 3.90474 0.59375 2.73764 0.59375C1.60945 0.59375 0.675781 1.38176 0.675781 2.33394C0.675781 3.31895 1.60945 4.1398 2.73764 4.1398ZM18.0654 15.2704H18.1044V9.8857C18.1044 7.259 17.4041 5.22331 13.7472 5.22331C11.9966 5.22331 10.8295 6.04415 10.3237 6.79933H10.2848V5.45315H6.82246V15.2704H10.4404V10.411C10.4404 9.13053 10.7128 7.91568 12.5801 7.91568C14.4475 7.91568 14.4864 9.36036 14.4864 10.5095V15.2704H18.0654Z"
                        fill="#222222"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Skype">
                    <svg
                      width={19}
                      height={18}
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3829 10.554C15.4875 10.0381 15.5573 9.48523 15.5573 8.9324C15.5573 4.76772 12.3483 1.37701 8.40687 1.37701C7.88367 1.37701 7.36047 1.45072 6.87215 1.56129C6.20943 1.00846 5.37231 0.676758 4.50031 0.676758C2.33775 0.676758 0.59375 2.55639 0.59375 4.80458C0.59375 5.76282 0.87279 6.64735 1.39599 7.34761C1.29135 7.86359 1.22159 8.41642 1.22159 8.9324C1.22159 13.1339 4.43055 16.5246 8.37199 16.5246C8.89518 16.5246 9.41838 16.4509 9.9067 16.3404C10.5694 16.8932 11.4065 17.188 12.2785 17.188C14.4411 17.188 16.1851 15.3453 16.1851 13.0602C16.22 12.1388 15.9061 11.2543 15.3829 10.554ZM8.61615 13.9447C6.31407 13.9447 4.39567 12.8759 4.39567 11.5491C4.39567 10.9595 4.70959 10.4066 5.44207 10.4066C6.52335 10.4066 6.62799 12.0651 8.51151 12.0651C9.3835 12.0651 9.97646 11.6597 9.97646 11.1069C9.97646 10.4066 9.41838 10.2961 8.51151 10.0749C6.34895 9.48523 4.39567 9.2641 4.39567 6.86849C4.39567 4.65716 6.45359 3.84633 8.19759 3.84633C10.116 3.84633 12.0693 4.65716 12.0693 5.91024C12.0693 6.53679 11.6856 7.08962 11.0229 7.08962C10.0462 7.08962 10.0113 5.83653 8.40687 5.83653C7.49999 5.83653 6.94191 6.09452 6.94191 6.68421C6.94191 7.38446 7.67439 7.45818 9.34862 7.90044C10.7787 8.23214 12.5227 8.85869 12.5227 10.7383C12.5227 12.9128 10.5345 13.9447 8.61615 13.9447Z"
                        fill="#222222"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 mt-12 md:col-6 lg:col-3">
              <h6>Quick Links</h6>
              <ul>
                <li>
                  <a href="features.html">Features</a>
                </li>
                <li>
                  <a href="pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="testimonials.html">Testimonials</a>
                </li>
                <li>
                  <a href="contact.html">Support</a>
                </li>
              </ul>
            </div>
            <div className="col-12 mt-12 md:col-6 lg:col-3">
              <h6>Contact Us</h6>
              <p>123 Collaboration Avenue, Tech Valley, CA 94123</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        <div className="container max-w-[1440px]">
          <div className="footer-copyright mx-auto border-t border-border pb-10 pt-7 text-center">
            <p>
              © 2024 CollabSheet. All rights reserved. |{" "}
              <a href="privacy-policy.html" target="_blank">
                Privacy Policy
              </a>
              {" | "}
              <a href="terms-of-service.html" target="_blank">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PinwheelLanding;
