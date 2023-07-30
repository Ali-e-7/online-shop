import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/home.components";
import Navigation from "./routes/Navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return (
    <div>
      <h1>I am Shop!</h1>  
    </div>
  );
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="Sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
