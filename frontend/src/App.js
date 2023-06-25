import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages
import HomeView from "./pages/Home";
import NotFound from "./pages/404Not-Found";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const AquaRoutes = [
    {
      path: "/",
      name: "Home",
      component: <HomeView />,
    },
    {
      path: "/shop",
      name: "Shop",
      component: <HomeView />,
    },
    {
      path: "/compare",
      name: "Compare",
      component: <HomeView />,
    },
    {
      path: "*",
      name: "Not-Found",
      component: <NotFound />,
    },
  ];
  return (
    <Router>
      <Routes>
        {AquaRoutes.map((r, i) => (
          <Route path={r.path} key={r.name} element={r.component} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
