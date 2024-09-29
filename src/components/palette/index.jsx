import './style.css';
import { palettes } from './palettes';
import { SchemeColor } from '../schemeColor';




export const Palette = ({name, description,image,url,nameAtr,direction,idx}) => { 
      return (
        <div className="palette">
            <div className={`palette-scheme palette-scheme--${direction}`}>
                <img className="scheme-image" src={image} alt={name} />
                <div className="scheme-colors">
                  {palettes[idx].colors.map(item =>(
                      <SchemeColor
                      key={item}
                      color={item}/>
                  ))}
                </div>
            </div>
            <div className="palette-info">
                <h2>{name}</h2>
                <p>{description}</p>
                <p>Photo by <a href={url} target="_blank">{nameAtr}</a>.</p>
            </div>
        </div>
    )}
    