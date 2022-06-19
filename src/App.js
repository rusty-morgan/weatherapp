import "./App.css";

import useLocalStorage from "./hooks/useLocalStorage";
import AppContext from "./context/AppContext";
import { useEffect, useState } from "react";
import DarkModeSwitch from "./components/DarkModeSwitch/DarkModeSwitch";
// import TopMenu from "./components/TopMenu";
import { Inputs } from "./components/Inputs";
import TimeAndLocation from "./components/TimeLocation";
import getFormattedWeatherData from "./services/weatherService";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import Alert from "./components/Alert";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("app-mode", "");

  const [query, setQuery] = useState({ q: "" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    setDarkMode(darkMode);
  }, [darkMode, setDarkMode]);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);
  return (
    <AppContext.Provider
      value={{ darkMode, setDarkMode, query, setQuery, units, setUnits }}
    >
      <div className={`app-wrapper ${darkMode}`}>
        <div className="app-container bg-slate-100 dark:bg-slate-800 transition-all">
          <div className="relative mx-auto max-w-screen-md mt-4 py-5 px-32 h-fit shadow-md shadow-gray-400 dark:shadow-slate-900 bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-500 dark:to-slate-700">
            {/* <TopMenu /> */}
            <Inputs />
            <DarkModeSwitch />
            {weather && (
              <div>
                <TimeAndLocation weather={weather} />
                {weather.alerts && <Alert alerts={weather.alerts} />}
                <TemperatureAndDetails weather={weather} />

                <Forecast title="hourly forecast" items={weather.hourly} />
                <Forecast title="daily forecast" items={weather.daily} />
              </div>
            )}
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
