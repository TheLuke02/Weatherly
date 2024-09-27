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
            <div className='flex flex-1 items-center justify-center px-1 bg-slate-400 rounded'>
                {weather.location.name}
            </div>
            <div className='flex flex-1 items-center justify-center px-1 bg-slate-400 rounded'>
                {time}
            </div>
            <div className='flex flex-1 items-center justify-center px-1 bg-slate-400 rounded'>
                {date}
            </div>
          </div>
          <div className='flex h-5/6 bg-slate-400 rounded'>
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