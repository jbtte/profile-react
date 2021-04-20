import React from 'react';
import Contact from './Contact.js'

export default function Hobbies () {

  return (<div>
    <h1 className='text-white text-center'>Something About Me</h1>
    <div className='d-flex justify-content-around row m-5'>
      <div className='col-5 border-top border-bottom border-white'>
        <h3 className='text-white text-center'>Me</h3>
        <p className='text-white text-center'>
        I am Full-Stack developer with a law degree. I split my time working on my
        daytime job, on ocassional freelance, personal tech projects and my family.
        I tell you something, a 7 days week most of the times isn't enough. I truly
        enjoy learning new skills, specially tech innovations so I am usually reading
        some book or practicing a new skill on the computer.
        I am father of three boys and husband of a truly uber-active-non-stop-best-mother wife.</p>

      </div>

      <div className='col-sm-9 col-md-5 border-top border-bottom border-white'>
        <h3 className='text-white text-center'>Off time </h3>
        <ul className="text-white my-4" style={{listStyleType: 'none'}}>
          <li className='my-3'>Voracious reader 📚</li>
          <li className='my-3'>Football ... the American one 🏈 ... (a bit an odd ball here)</li>
          <li className='my-3'>Playing my guitar 🎸</li>
          <li className='my-3'>Spending time with wifey and kids 👨‍👩‍👦‍👦. Love my family ❤️</li>
        </ul>
      </div>
    </div>
    <div>
      <Contact size={30} text={"Hey, how about we get in touch, just to throw some ideas around, just for fun?"}/>
    </div>
  </div>)
}
