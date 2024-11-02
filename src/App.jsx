import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";

function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </>
  );
}

export default App;
