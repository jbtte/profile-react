import React from 'react';

function TechStack () {
  const stack = ['rails', 'ruby', 'react', 'css-3', 'github-octocat',
                  'heroku-icon', 'javascript', 'html-5', 'postgresql',
                 'python']

  return (<div className='mb-5'>
    <h1 className='text-white text-center'>Tech Stack</h1>

    <div className='mx-5' style={{columnCount: 5}}>
    {stack.map((language) => {
      return (<img src={`https://cdn.svgporn.com/logos/${language}.svg`}
           alt={language}
           width="100"
           height="120"
           className='mx-4 my-2'/>)
    })}
    </div>
  </div>);
}

export default TechStack
