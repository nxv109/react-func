import React, { useContext, useCallback, useMemo } from "react";
import Weather from "../Weather";
import { CTX } from "../../Store";

const Home = () => {
  const [appState, dispatch] = useContext(CTX);

  console.log(appState);

  const handleChangeCity = useCallback(() => {

    console.log("changed city");

    dispatch({ type: "ANGE_CITY", payload: "danang" });

  }, []);

  const NewWeather = useMemo(() => {
    return <Weather weather={appState?.weather} />;

  }, [appState?.weather]);

  return (
    <>
      {NewWeather}
      <button onClick={handleChangeCity}>Change city</button>
    </>
  );
};

export default Home;
