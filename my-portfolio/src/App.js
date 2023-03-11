import React from "react";
import Header from "./componenets/header";
import Footer from "./componenets/footer";
import Profile from "./componenets/profile";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;