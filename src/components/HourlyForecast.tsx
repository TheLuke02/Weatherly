import { HourlyForecastProps } from '../types'

export const HourlyForecast = ({ weather, selectedDay }: HourlyForecastProps) => {
    return (
          <div className='mx-2 h-full overflow-y-auto space-y-2 '>
            {
              weather.forecast.forecastday[selectedDay].hour.map(function (item) {
                return (
                  <div className='flex flex-col items-center justify-items-center justify-between min-h-[150px] border-sky-600 border-b-2 bg-white rounded-xl'>
                    <div className='mt-4 text-xl font-bold'>
                      {item.time.split(" ")[1]}
                    </div>
                    <div className='text-lg font-semibold'>
                      {item.temp_c}°
                    </div>
                    <div className='mb-4 text-center'>
                      {item.condition.text}
                    </div>
                  </div>
                )
              })
            }
          </div>
    )
}