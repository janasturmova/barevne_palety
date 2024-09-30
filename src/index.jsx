import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { palettes } from './palettes';
import { Palette } from './components/palette';


const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>
        {palettes.map((item,index) => (
          <Palette 
          key={palettes[index].name}
          name={palettes[index].name}
          description={palettes[index].description}
          image={palettes[index].image}
          url={palettes[index].attribution.url}
          nameAtr={palettes[index].attribution.name}
          direction={palettes[index].direction}
          idx={index}
          />
        ))}
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
