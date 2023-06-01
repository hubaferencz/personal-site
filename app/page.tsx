import About from "./components/About";
import Email from "./components/Email";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Learning from "./components/Learning";
import ProfilePic from "./components/ProfilePic";
import Projects from "./components/portfolio/Projects";
import Socials from "./components/socials/Socials";
import Stats from "./components/stats/Stats";

export default () => {
  return (
    <main className="max-w-screen-xl mx-auto ">
      <div className="flex flex-col h-screen p-10 ">
        <div className="flex flex-col lg:flex-row h-3/5 mb-4">
          <div className="flex-grow flex flex-col lg:mr-4 mr-0 space-y-4">
            <Hero />
            <Stats />
          </div>
          <div className="flex-grow flex flex-col lg:mt-0 mt-4">
            <Info />
            <div className="flex flex-col sm:flex-row justify-between flex-grow">
              <ProfilePic />
              <div className="w-full sm:w-1/2 flex flex-col">
                <Email />
                <Learning />
                <Socials />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row h-2/5">
          <Projects />
          <About />
        </div>
      </div>
    </main>
  );
};
