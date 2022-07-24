import "./App.scss";
import {
  Header,
  TopTextAndImage,
  MiddleSection,
  BottomSection,
} from "./Components";
import buildingsHorizontalImage from "./assets/buildingsHorizontal.png";

function App() {
  return (
    <div className="App">
      <Header />
      <TopTextAndImage
        image={buildingsHorizontalImage}
        text="Lorem ipsum elsdolor sit amet, adipiscing elit. Donec interdum pharetra"
      />
      <MiddleSection />
      <BottomSection />
    </div>
  );
}

export default App;
