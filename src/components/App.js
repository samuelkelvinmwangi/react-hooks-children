import React from "react";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <Container header="Name" direction="horizontal">
        <div>Jimmy!</div>
        <div>Cindy!</div>
        <div>sam!</div>
        <div>Jane!</div>
        <div>Janet!</div>
        <div>Love!</div>
        <div>Tom!</div>
      </Container>
      <Container header="Face" textPosition="center">
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
      </Container>
    </div>
  );
}

export default App;
