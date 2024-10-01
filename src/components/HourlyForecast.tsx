import { HourlyForecastProps } from '../types'

export const HourlyForecast = ({ weather, selectedDay }: HourlyForecastProps) => {
    return (
          <div className='mx-2 h-full overflow-y-auto space-y-2 '>
            {
              weather.forecast.forecastday[selectedDay].hour.map(function (item) {
                return (
                  <div className='flex flex-col items-center justify-items-center justify-between min-h-[150px] border-sky-600 border-b-4 bg-white rounded-xl'>
                    <div className='mt-2 text-xl'>
                      {item.time.split(" ")[1]}
                    </div>
                    <div className='text-2xl font-semibold'>
                      {item.temp_c}°
                    </div>
                    <div className='mb-2 text-center'>
                      {item.condition.text}
                    </div>
                  </div>
                )
              })
            }
          </div>
    )
}