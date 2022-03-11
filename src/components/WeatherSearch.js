import React, {useContext} from 'react'
import WeatherContext from '../context/WeatherContext'

function WeatherSearch() {
    const {getData}=useContext(WeatherContext)
  return (
    <div>
        <form onSubmit={getData}>
            <input className='input' placeholder='Şehir ismi giriniz' name='location' type="text"  />
            <div>
                <button className='btn'>Ara</button>
            </div>
        </form>
    </div>
  )
}

export default WeatherSearch