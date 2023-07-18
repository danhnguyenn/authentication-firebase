import { useRoutes } from "react-router-dom";
import "./index.css";
import routes from "./routes";

function App() {
  const routing = useRoutes(routes);
  return <>{routing}</>;
}

export default App;
