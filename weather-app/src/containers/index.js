import React, { useContext, useEffect } from "react";
import { Container } from "../styles/elements";
import { CTX } from "../Store";

const apiKey = "4d8fb5b93d4af21d66a2948710284366";

export default function Ctn({ children }) {
  const [appState, dispatch] = useContext(CTX);

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${appState?.city}&appid=${apiKey}&units=metric`
      )
        .then((result) => result.json())
        .then((result) => {
          const { main, name, sys, weather } = result;
          const weatherDescription = weather[0]?.description;
          const icon = weather[0]?.icon;
          const data = {
            temp: main.temp,
            city: name,
            country: sys.country,
            icon: icon,
            description: weatherDescription,
          };
          dispatch({ type: "FETCH_WEATHER", payload: data });
        });
    };
    fetchData();
  }, [apiKey, appState?.city]);

  return <Container>{children}</Container>;
}
