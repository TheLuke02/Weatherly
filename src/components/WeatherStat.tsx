import React from 'react'
import { WeatherStatProps } from '../types'
import { useState } from 'react'
import { HourlyForecast } from './HourlyForecast'
import { DailyForecast } from './DailyForecast'
import { CurrentForecast } from './CurrentForecast'

export const WeatherStat = ({ weather }: WeatherStatProps) => {

  const [day, setDay] = useState(0)

  return (
    <div className="h-full">
      <div className='flex flex-row h-full ml-2 space-x-2'>
        <div className='flex flex-col h-auto w-8/12 my-2 space-y-2  rounded'>
        
          <CurrentForecast weather={weather} selectedDay={day} />
          <DailyForecast weather={weather} dayChange={setDay} />

        </div>
        <div className='py-2 w-4/12 bg-slate-200'>
          <HourlyForecast weather={weather} selectedDay={day} />
        </div>
      </div>
    </div>
  )
}