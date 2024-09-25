import React from 'react'


export const Loading = () => {

  return (
    <div className="h-full">
        <div className='flex flex-col animate-pulse'>
            <div className='flex flex-row justify-center mt-10'>
                <div className="h-20 w-1/2 bg-slate-400 rounded"></div>
            </div>
            <div className='flex flex-row justify-center h-16 space-x-6 mt-5 px-10'>
                <div className="w-full bg-slate-400 rounded"></div>
                <div className="w-full bg-slate-400 rounded"></div>
                <div className="w-full bg-slate-400 rounded"></div>
                <div className="w-full bg-slate-400 rounded"></div>
            </div>
            <div className='flex flex-row justify-center h-14 mt-5 px-10 space-x-6'>
                <div className="w-full bg-slate-400 rounded"></div>
                <div className="w-full bg-slate-400 rounded"></div>
                <div className="w-full bg-slate-400 rounded"></div>
            </div>
            <div className='border-2 flex flex-row justify-center mt-14 h-48 mx-10 md:mt-20 md:h-96'>
                <div className="mx-5 my-5 w-full bg-slate-400 rounded"></div>
            </div>
        </div>
    </div>
  )
}

/**
 * <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
  <div className="animate-pulse flex space-x-4">
    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-slate-700 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
  </div>
</div>
 */