import React from 'react'
import { WeatherStatProps } from '../types'


export const WeatherStat = ({weather}: WeatherStatProps) => {
    let date: string = weather.location.localtime.split(" ")[0]
    date = date.replaceAll("-", '.')
    const time: string = weather.location.localtime.split(" ")[1]
    return (
<div className="h-full">
      <div className='flex flex-row h-full mx-2 space-x-2'>
        <div className='flex flex-col h-auto w-8/12 my-2 space-y-2  rounded'>
          <div className='flex flex-row w-auto h-[7%] space-x-2 rounded'>
            <div className='flex flex-1 items-center justify-center px-1 font-bold'>
                {weather.location.name}
            </div>
            <div className='flex flex-1 items-center justify-center px-1 font-bold'>
                {time}
            </div>
            <div className='flex flex-1 items-center justify-center px-1 font-bold'>
                {date}
            </div>
          </div>
          <div className='flex flex-col h-5/6 mt-5 bg-slate-400 rounded'>
            <div className='flex mt-5 items-start justify-center font-semibold text-8xl'>
              {weather.current.temp_c}°
            </div>
            <div className='flex flex-row items-center mt-10 justify-center'>
              <div className='flex pb-2 mr-2 justify-center text-2xl'>
                {weather.current.condition.text}
              </div>
              
              <div className='flex w-14 h-14'>
                <img src={weather.current.condition.icon} alt="Condition Icon" />
              </div>
            </div>
            <div className='flex flex-col items-center text-2xl'>
              <div className='flex'>
                {weather.current.wind_kph} km/h
              </div>
              <div className='flex'>
                {weather.current.humidity} %
              </div>
            </div>
          </div>
          <div className='flex flex-row h-1/6 space-x-2 rounded'>
            <div className='flex flex-1 h-full bg-slate-400 rounded'>
            </div>
            <div className='flex flex-1 h-full bg-slate-400 rounded'>
            </div>
            <div className='flex flex-1 h-full bg-slate-400 rounded'>
            </div>
          </div>
        </div>
        <div className='flex flex-col min-h-fit w-4/12 my-2 space-y-2 bg-slate-200'>
          <div className='flex flex-1 bg-slate-400 rounded'>
          </div>
          <div className='flex flex-1 bg-slate-400 rounded'>

          </div>
          <div className='flex flex-1 bg-slate-400 rounded'>

          </div>
          <div className='flex flex-1 bg-slate-400 rounded'>

          </div>
          <div className='flex flex-1 bg-slate-400 rounded'>

          </div>
          <div className='flex flex-1 bg-slate-400 rounded'>

          </div>

        </div>
      </div>
    </div>
    )
}