import { Page } from "./Page";
import { ParamsContext, useParamsState } from "../contexts/ParamsContext";

export function App() {
  const [paramsState, setParams] = useParamsState();

  return (
    <ParamsContext.Provider value={{ params: paramsState, setParams }}>
      <Page />
    </ParamsContext.Provider>
  );
}
