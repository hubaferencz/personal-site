import About from "./components/About";
import Resume from "./components/Resume";
import Hero from "./components/Hero";
import Info from "./components/Email";
import Learning from "./components/Learning";
import ProfilePic from "./components/ProfilePic";
import Projects from "./components/portfolio/Projects";
import Socials from "./components/socials/Socials";
import Stats from "./components/stats/Stats";

export default () => {
  return (
    <main className="max-w-screen-xl mx-auto ">
      <div className="flex flex-col p-4 sm:p-5 md:p-10">
        <div className="flex flex-col lg:flex-row mb-4">
          <div className="flex-grow flex flex-col lg:mr-4 mr-0 space-y-4">
            <Hero />
            <Stats />
          </div>
          <div className="flex-grow flex flex-col lg:mt-0 mt-4">
            <Info />
            <div className="flex flex-col sm:flex-row sm:h-96 justify-between flex-grow">
              <ProfilePic />
              <div className="w-full sm:w-1/2 flex flex-col">
                <Resume />
                <Learning />
                <Socials />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <Projects />
          <About />
        </div>
      </div>
    </main>
  );
};
