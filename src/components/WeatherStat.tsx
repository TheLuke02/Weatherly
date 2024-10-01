import React from 'react'
import { WeatherStatProps } from '../types'
import { useState } from 'react'

export const WeatherStat = ({ weather }: WeatherStatProps) => {

  const [day, setDay] = useState(0)

  let date: string = weather.location.localtime.split(" ")[0]
  date = date.replaceAll("-", '.')

  const time: string = weather.location.localtime.split(" ")[1]

  let tomorrow: string = weather.forecast.forecastday[1].date.split(" ")[0]
  tomorrow = tomorrow.replaceAll("-", '.')

  let afterTomorrow: string = weather.forecast.forecastday[2].date.split(" ")[0]
  afterTomorrow = afterTomorrow.replaceAll("-", '.')



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
          <div className='flex flex-col h-5/6 mt-5'>
            <div className='flex mt-10 items-start justify-center font-semibold text-8xl'>
              {weather.current.temp_c}°
            </div>
            <div className='flex flex-row items-center mt-14 justify-center'>
              <div className='flex pb-2 mr-2 justify-center text-3xl'>
                {weather.current.condition.text}
              </div>

              <div className='flex w-14 h-14'>
                <img src={weather.current.condition.icon} alt="Condition Icon" />
              </div>
            </div>
            <div className='flex flex-col text-2xl ml-7 mt-10'>
              <div className='flex items-center space-x-7'>
                <div className='flex w-9 h-9 mr-3'>
                  <img src="/wind.png" alt="Condition Icon" />
                </div>
                {weather.current.wind_kph} km/h
              </div>
              <div className='flex items-center space-x-4'>
                <div className='flex w-9 h-9 mr-3'>
                  <img src="/humidity.png" alt="Condition Icon" />
                </div>
                {weather.current.humidity} %
              </div>
            </div>
          </div>
          <div className='flex flex-row h-1/6 space-x-2 rounded'>
            <button className='flex flex-1' onClick={() => { setDay(0) }}>
              <div className='flex flex-1 flex-col h-full items-center border-2 rounded-lg border-slate-500'>

                <div className='flex text-lg font-medium justify-center'>
                  Today
                </div>
                <div className='flex mt-3 font-semibold'>
                  {weather.forecast.forecastday[0].day.avgtemp_c}°
                </div>

              </div>
            </button>
            <button className='flex flex-1' onClick={() => { setDay(1) }}>
              <div className='flex flex-1 flex-col h-full items-center border-2 rounded-lg border-slate-500'>

                <div className='flex text-xs font-bold justify-center mt-2'>
                  {tomorrow}
                </div>
                <div className='flex mt-4 font-semibold'>
                  {weather.forecast.forecastday[1].day.avgtemp_c}°
                </div>

              </div>
            </button>
            <button className='flex flex-1' onClick={() => { setDay(2) }}>
              <div className='flex flex-1 flex-col h-full items-center border-2 rounded-lg border-slate-500'>

                <div className='flex text-xs font-bold justify-center mt-2'>
                  {afterTomorrow}
                </div>
                <div className='flex mt-4 font-semibold'>
                  {weather.forecast.forecastday[2].day.avgtemp_c}°
                </div>

              </div>
            </button>
          </div>
        </div>
        <div className='flex flex-col flex-nowrap h-full w-4/12 overflow-y-auto my-2 space-y-2 bg-slate-200'>
          {
            weather.forecast.forecastday[day].hour.map(function (item) {
              return (
                <div className='flex flex-col items-center justify-items-center justify-between min-h-[150px] bg-slate-400 rounded'>
                  <div className='flex mt-2'>
                    {item.time.split(" ")[1]}
                  </div>
                  <div className='flex'>
                    {item.temp_c}°
                  </div>
                  <div className='flex mb-2'>
                    {item.condition.text}
                  </div>
                </div>
              )
            })
          }


        </div>
      </div>
    </div>
  )
}