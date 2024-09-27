import React from 'react'


export const Loading = () => {

  return (
    <div className="h-full">
      <div className='flex flex-row h-full mx-2 animate-pulse space-x-2'>
        <div className='flex flex-col h-auto w-8/12 my-2 space-y-2  rounded'>
          <div className='flex flex-row w-auto h-[7%] space-x-2 rounded'>
            <div className='flex flex-1 bg-slate-400 rounded'>
            </div>
            <div className='flex flex-1 bg-slate-400 rounded'>
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
        <div className='flex flex-col min-h-fit w-4/12 my-2 space-y-2'>
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
