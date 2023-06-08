import React from "react";
import BookCard from "../../components/BookCard.compo";
import Contact from "../../components/Contact.compo";
import Header from "../../components/Header.compo";

const Home = () => {
  return (
    <>
      <section className="w-[100vw] h-full flex flex-col items-center justify-center relative">
        <Contact />
        <Header />
        <BookCard />
        <footer className="bg-light text-center text-lg-start">
        <br />
          <div
            className="text-center p-3"
            
          >
            © 2020 Copyright
          </div>
        </footer>
      </section>
    </>
  );
};

export default Home;
