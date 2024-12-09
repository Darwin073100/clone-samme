import React from "react";
import '../styles/main.css';

function Main({children}) {
  return (
    <main className="main">
        {children}
    </main>
  );
}

export { Main };
