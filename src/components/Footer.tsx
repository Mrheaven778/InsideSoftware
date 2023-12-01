import React, { useState, useEffect } from "react";

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      const year = new Date().getFullYear();

      if (year !== currentYear) {
        setCurrentYear(year);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentYear]);

  return (
    <footer className="bg-slate-800 py-6 mx-auto mt-14 rounded-xl ">
      <div className="flex md:flex-row  justify-center md:gap-0 gap-3  items-center">
        <h2 className="md:ml-16">Copyright © {currentYear}</h2>
      </div>
    </footer>
  );
}

export default Footer;
