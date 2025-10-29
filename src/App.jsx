import "./App.css";
import ButtonExamples from "./templates/buttons/ButtonExamples";
import CircularCard from "./templates/cards/CircularCard";
import RectangularCard from "./templates/cards/RectangularCard";
import VerticalCard from "./templates/cards/VerticalCard";
import Footer from "./templates/footer/Footer";
import Contact from "./templates/forms/Contact";
import SearchBar from "./templates/forms/SearchBar";
import SignIn from "./templates/forms/SignIn";
import SignUp from "./templates/forms/SingUp";
import HomeSections from "./templates/home/HomeSections";
import MenuNav from "./templates/navbar/MenuNav";
import UserProfile from "./templates/profile/UserProfile";
import Carrousel from "./templates/sliders/Carrousel";

function App() {
  const sliderImages = [
    {
      src: "https://picsum.photos/id/237/800/400",
      alt: "Un lindo perrito",
      caption: "Explora el mundo a través de la fotografía",
    },
    {
      src: "https://picsum.photos/id/238/800/400",
      alt: "Un paisaje impresionante",
      caption: "Naturaleza en su máxima expresión",
    },
    {
      src: "https://picsum.photos/id/239/800/400",
      alt: "Arquitectura moderna",
      caption: "Innovación en cada detalle",
    },
    {
      src: "https://picsum.photos/id/240/800/400",
      alt: "Comida deliciosa",
      caption: "Sabores que inspiran",
    },
  ];

  const miPerfil = {
    name: "Andrés Santamarina",
    title: "Arquitecto de Software",
    imageUrl: "https://placehold.co/600x400",
    bio: "Especialista en desarrollo con React y la arquitectura de microservicios. Me gusta el código limpio y eficiente.",
    email: "mail@prueba.com",
    phone: "+56 9 12345678",
    location: "Tucumán, Argentina",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Python",
      "React Router Dom",
      "Axios",
    ],
    projects: 12,
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <MenuNav />
        <main className="flex-grow">
          <div className="my-3">
            <HomeSections />
          </div>
          <div className="my-3">
            <RectangularCard />
          </div>
          <div className="my-3">
            <VerticalCard />
          </div>
          <div className="my-3">
            <CircularCard />
          </div>
          <div className="my-3">
            <SignIn />
          </div>
          <div className="my-3">
            <SignUp />
          </div>
          <div className="my-3">
            <Contact />
          </div>
          <div className="my-3">
            <SearchBar />
          </div>
          <div className="my-3">
            <Carrousel images={sliderImages} interval={4000} />
          </div>
          <div className="my-3">
            <ButtonExamples />
          </div>

          <div className="my-3">
            <UserProfile user={miPerfil} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
