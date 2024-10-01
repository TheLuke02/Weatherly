import { DailyForecastProps } from '../types'

export const DailyForecast = ({ weather, dayChange }: DailyForecastProps) => {

    let tomorrow: string = weather.forecast.forecastday[1].date.split(" ")[0]
    tomorrow = tomorrow.replaceAll("-", '.')
  
    let afterTomorrow: string = weather.forecast.forecastday[2].date.split(" ")[0]
    afterTomorrow = afterTomorrow.replaceAll("-", '.')

    return (
        <div className='flex flex-row h-1/6 space-x-2 rounded'>
            
            <button className='flex flex-1' onClick={() => { dayChange(0) }}>
              <div className='flex flex-1 flex-col h-full items-center border-2 rounded-xl border-sky-600'>

                <div className='flex text-lg font-medium justify-center px-1'>
                  Today
                </div>
                <div className='flex mt-3 font-semibold'>
                  {weather.forecast.forecastday[0].day.avgtemp_c}°
                </div>

              </div>
            </button>
            <button className='flex flex-1' onClick={() => { dayChange(1) }}>
              <div className='flex flex-1 flex-col h-full items-center border-2 rounded-xl border-sky-600'>

                <div className='flex text-xs font-bold justify-center mt-2 px-1'>
                  {tomorrow}
                </div>
                <div className='flex mt-4 font-semibold'>
                  {weather.forecast.forecastday[1].day.avgtemp_c}°
                </div>

              </div>
            </button>
            <button className='flex flex-1' onClick={() => { dayChange(2) }}>
              <div className='flex flex-1 flex-col h-full items-center border-2 rounded-xl border-sky-600'>

                <div className='flex text-xs font-bold justify-center mt-2 px-1'>
                  {afterTomorrow}
                </div>
                <div className='flex mt-4 font-semibold'>
                  {weather.forecast.forecastday[2].day.avgtemp_c}°
                </div>

              </div>
            </button>
          </div>
    )
}