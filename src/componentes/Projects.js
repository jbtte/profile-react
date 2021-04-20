import React from 'react';

export default function Projects () {
  const projects = ['mister-cocktail-lewagon-bsb', 'traduz-facil',
                    'justicasimples', 'my-marvel-world'];

  const logo = '/assets/justicasimples.png';

  return (<div className="m-5 p-5">
      <h1 className='text-white text-center'>My Projects</h1>

      <div className="pt-2" style={{columnCount: 2}}>
      {projects.map(project => {
        return(<><img src={`/images/${project}.png`}
                    alt={project}
                    width="450"
                    height="270"
                    className='mx-4 mt-5'/>
                  <h5 className="text-white text-center my-5">{project}</h5>
                </>)
      })}
      </div>

    </div>);
}
