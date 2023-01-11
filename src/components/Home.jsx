import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import NavBar from "./Navbar";
import { Api } from "./Api";

function Home(props) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    Api.then((res) => setItem(res.data)).catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavBar />

      <div className="container">
        {props.loggedIn ? (
          <h1 className="text-center mt-4">
            Welcome to the Shoppies, {props.loggedIn.email} !
          </h1>
        ) : null}

        <div className="mt-5 row justify-content-center gap-5 mb-5">
          {item.map((currentItem) => {
            return <Cards key={currentItem.id} {...currentItem} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
