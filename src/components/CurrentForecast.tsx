import { HourlyForecastProps } from '../types'

export const CurrentForecast = ({ weather, selectedDay }: HourlyForecastProps) => {
    return (
        <>
            <div className='flex flex-row w-auto h-[7%] space-x-2 items-center justify-center rounded'>
                <div className='flex flex-1 items-center justify-center px-1 font-bold'>
                    {weather.location.name}
                </div>
                <div className='flex flex-1 items-center justify-center px-1 font-bold'>
                    {weather.location.localtime.split(" ")[1]}
                </div>
                <div className='flex flex-1 items-center justify-center px-1 font-bold'>
                    {weather.forecast.forecastday[selectedDay].date.split(" ")[0].replaceAll("-", '.')}
                </div>
            </div>
            <div className='flex flex-col h-5/6 items-center justify-center'>
                <div className='flex justify-center items-center font-semibold text-8xl'>
                    {weather.forecast.forecastday[selectedDay].day.avgtemp_c}°
                </div>
                <div className='flex flex-row items-center justify-center'>
                    <div className='flex mr-2 justify-center text-lg'>
                        {weather.forecast.forecastday[selectedDay].day.condition.text}
                    </div>

                    <div className='flex w-14 h-14'>
                        <img src={weather.forecast.forecastday[selectedDay].day.condition.icon} alt="Condition Icon" />
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center  space-x-7 text-base text-slate-800'>
                        
                        {weather.forecast.forecastday[selectedDay].day.avgvis_km} km/h
                        <div className='flex w-8 h-8'>
                            <img src="/wind.png" alt="Condition Icon" />
                        </div>
                    </div>
                    <div className='flex items-center space-x-4 text-base text-slate-800'>
                        
                        {weather.forecast.forecastday[selectedDay].day.avghumidity} %
                        <div className='flex w-8 h-8'>
                            <img src="/humidity.png" alt="Condition Icon" />
                        </div>
                    </div>
                </div>
            </div></>
    )
}