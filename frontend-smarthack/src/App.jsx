import Landing from "./pages/Landing.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import UserStatistics from "./pages/UserStatistics.jsx";
import Organization from "./pages/Organization.jsx";
import OrganizationStatistics from "./pages/OrganizationStatistics.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/appContext.jsx";

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<Landing />}></Route>
          <Route path="/register" element={<Register />}></Route>

          <Route path="/user/:userId" element={<Home />}></Route>
          <Route
            path="/user/statistics/:userId"
            element={<UserStatistics />}
          ></Route>

          <Route
            path="/organization/:organizationId"
            element={<Organization />}
          ></Route>
          <Route
            path="/organization/statistics/:organizationId"
            element={<OrganizationStatistics />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
