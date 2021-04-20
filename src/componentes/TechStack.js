import React from 'react';

function TechStack () {
  const stack = ['rails', 'ruby', 'react', 'css-3', 'github-octocat',
                  'heroku-icon', 'javascript', 'html-5', 'postgresql',
                 'python']

  return (<div className='mb-5 row'>
    <h1 className='text-white text-center'>Tech Stack</h1>

    <div className='mx-auto mt-5 col-sm-4 col-md-8 d-flex flex-wrap justify-content-around'>
    {stack.map((language) => {
      return (<img src={`https://cdn.svgporn.com/logos/${language}.svg`}
           alt={language}
           width="100"
           height="120"
           className='mx-4 my-4'/>)
    })}
    </div>
  </div>);
}

export default TechStack
