import React, { useState, useEffect } from "react";

const GreetingComponent = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const getCurrentGreeting = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 6 && currentHour < 12) {
        setGreeting("Bom dia,  Início");
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting("Boa tarde,  Início");
      } else {
        setGreeting("Boa noite,  Início");
      }
    };

    getCurrentGreeting();

    // Update greeting every minute
    const interval = setInterval(getCurrentGreeting, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{greeting}</p>
    </div>
  );
};
