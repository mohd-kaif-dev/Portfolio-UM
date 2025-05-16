import { useState, useEffect } from "react";
import Navbar from "./Components/common/Navbar";
import LandingPage from "./Components/LandingPage";
import About from "./Components/About";
import Slider from "./Components/Slider";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Works from "./Components/Works";
import Skills from "./Components/Skills";
import Loader from "./Components/ui/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Simulating a loading time
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black/70 backdrop-blur-lg">
        <Loader />
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen">
      <Navbar />
      <LandingPage />
      <Slider />
      <About />
      <Works />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
