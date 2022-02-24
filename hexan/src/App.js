
import './App.css';
import Service from "./component/service"
import Home from "./component/home"
import Header from "./component/header"
import Contact from "./component/contact"
import Footer from "./component/footer"

 export default function App() {
  return (
    <div>
      <Header />
      <Service />
      <Home />
      <Contact />
      <Footer />
    </div>
  );
}

