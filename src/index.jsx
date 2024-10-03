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
          key={item.name}
          name={item.name}
          description={item.description}
          image={item.image}
          url={item.attribution.url}
          nameAtr={item.attribution.name}
          direction={item.direction}
          idx={index}
          data={palettes}
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
