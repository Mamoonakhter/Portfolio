import "./App.css";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Project from "./components/projects/Project";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Project />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
