/** @format */

import HeroSection from "./_internals/HeroSection";
import RecentActivities from "./_internals/RecentActivities";

const Home = () => {
  return (
    <>
      <div>
        <HeroSection />
      </div>
      <section>
        <RecentActivities />
      </section>
    </>
  );
};

export default Home;
