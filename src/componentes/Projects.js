import React from 'react';

export default function Projects () {
  const projects = ['mister-cocktail-lewagon-bsb', 'traduz-facil',
                    'justicasimples', 'my-marvel-world'];


  return (<div className="m-5 p-5">
      <h1 className='text-white text-center mt-5'>My Projects</h1>

      <div className="pt-2 col-sm-12 d-flex flex-wrap justify-content-around">
      {projects.map(project => {
        return(<a href={`http://${project}.herokuapp.com`}
                  style={{textDecoration: "none"}}
                  target="_blank"
                  rel="noopener noreferrer">
          <img src={`/images/${project}.png`}
                    alt={project}
                    width="450"
                    height="260"
                    className='mx-4 mt-5'/>
                  <h5 className="text-white text-center my-5">{project}</h5>
                </a>)
      })}
      </div>

    </div>);
}
