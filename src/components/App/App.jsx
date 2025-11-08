import FloatingBackground from "../FloatingBackground/FloatingBackground";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.css";
function App() {
  return (
    <>
      <div
        className="page"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <FloatingBackground />
        <div
          className="page__content"
          style={{ position: "relative", zIndex: 2 }}
        >
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}
export default App;
