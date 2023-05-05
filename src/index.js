import React from 'react';
import ReactDOM from 'react-dom';

// svaki podatak je objekt koji sadrzi 4 svojstva (sadrzaj, 
// datum stvaranja, bool oznaku za vaznost i id)
const poruke = [
  {
    id: 1,
    sadrzaj: 'HTML je jednostavan',
    datum: '2019-05-30T17:30:31.098Z',
    vazno: true
  },
  {
    id: 2,
    sadrzaj: 'React koristi JSX sintaksu',
    datum: '2019-05-30T18:39:34.091Z',
    vazno: false
  },
  {
    id: 3,
    sadrzaj: 'GET i POST su najvaznije metode HTTP protokola',
    datum: '2019-05-30T19:20:14.298Z',
    vazno: true
  }
]

// niz poruke proslijeden je kao svojstvo
const App = (props) => {
  const { poruke } = props

  return (
    <div>
      <h1>Poruke</h1>
      <ul>
        {poruke.map( poruka => <li>{poruka.sadrzaj}</li> )}
      </ul>
    </div>
  )
}

ReactDOM.render(<App poruke={poruke} />,document.getElementById('root'))