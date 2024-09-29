import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
// import { palettes } from './palettes';
import { Palette } from './components/palette';

// const SchemeColor = ({color}) => (
//   <div className="scheme-color" style={{ backgroundColor: color }} >{color}</div>
// )

// export const Palette = ({name, description,image,url,nameAtr,direction,idx}) => { 
//   return (
//     <div className="palette">
//         <div className={`palette-scheme palette-scheme--${direction}`}>
//             <img className="scheme-image" src={image} alt={name} />
//             <div className="scheme-colors">
//               {palettes[idx].colors.map(item =>(
//                   <SchemeColor
//                   key={item}
//                   color={item}/>
//               ))}
//             </div>
//         </div>
//         <div className="palette-info">
//             <h2>{name}</h2>
//             <p>{description}</p>
//             <p>Photo by <a href={url} target="_blank">{nameAtr}</a>.</p>
//         </div>
//     </div>
// )}


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
