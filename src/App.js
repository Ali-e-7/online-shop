import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/home.components";
import Navigation from "./routes/Navigation/navigation.component";
import Authentication from "./routes/Authentication/authentication.component";
import Shop from "./routes/Shop/shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
