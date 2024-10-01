import { HourlyForecastProps } from '../types'

export const CurrentForecast = ({ weather, selectedDay }: HourlyForecastProps) => {
    return (
        <>
            <div className='flex flex-row w-auto h-[7%] space-x-2 rounded'>
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
            </div></>
    )
}