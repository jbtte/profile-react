import React from 'react';

export default function Projects () {
  const projects = ['mister-cocktail-lewagon-bsb', 'traduz-facil',
                    'justicasimples', 'my-marvel-world'];

  const ProjectsImage = (site, name, image) => {
    return (
    <a href={site}
        style={{textDecoration: "none"}}
        target="_blank"
        rel="noopener noreferrer">
      <img src={image}
                alt={name}
                width="450"
                height="260"
                className='mx-4 mt-5'/>
      <h5 className="text-white text-center my-5">{name}</h5>
      </a>)

  }

  return (<div className="m-5 p-5">
      <h1 className='text-white text-center mt-5'>Things I did</h1>

      <div className="pt-2 col-sm-12 d-flex flex-wrap justify-content-around">
      {ProjectsImage (`http://mister-cocktail-lewagon-bsb.herokuapp.com/`, 'Mister Cocktail', `/images/mister-cocktail-lewagon-bsb.jpg`)}
      {ProjectsImage (`http://traduz-facil.herokuapp.com/`, 'Traduz Fácil', `/images/traduz-facil.jpg`)}
      {ProjectsImage (`http://justicasimples.herokuapp.com/`, 'Justiça Simples', `/images/justicasimples.png`)}
      {ProjectsImage (`http://my-marvel-world.herokuapp.com/`, 'My Marvel World', `/images/my-marvel-world.png`)}
      {ProjectsImage (`https://agitated-aryabhata-2a9178.netlify.app/`, 'Weather App', `/images/react-weather.png`)}
      {ProjectsImage (`https://nutrigestante.vercel.app/`, 'Nutrigestante', `/images/nutrigestante.jpg`)}
      </div>

    </div>);
}
