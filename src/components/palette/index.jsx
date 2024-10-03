import React from 'react';
import './style.css';
import { SchemeColor } from '../schemeColor';


export const Palette = ({name, description,image,url,nameAtr,direction,idx,data}) => { 
      return (
        <div className="palette">
            <div className={`palette-scheme palette-scheme--${direction}`}>
                <img className="scheme-image" src={image} alt={name} />
                <div className="scheme-colors">
                  {data[idx].colors.map(item =>(
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
    