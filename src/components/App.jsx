import React from 'react';
import imagen from '../imagen.jpg';

const App = () => {
  const CopyPlugin = 'new CopyPlugin({from:path.resolve(__dirname,"src", "assets/images"),to:"assets/images"})';
  return (
    <div>
      <h1>
        Bienvenido a Reactsdf
      </h1>
      <p>Para copia de archivos, me imagino video</p>
      <p> copy-webpack-plugin -D</p>
      <p>{CopyPlugin}</p>
      <div className='Link'>
        <a href='http://google-webfonts-helper.herokuapp.com/fonts/ubuntu?subsets=cyrillic,latin'>Descargar Fuentes</a>
      </div>
      <figure>
        <img src={imagen} alt='Andres' />
      </figure>
    </div>
  );
};

export default App;
