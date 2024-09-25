import React from 'react'


export const Loading = () => {

  return (
    <div className='flex flex-col h-full bg-orange-300'>
        <div className='flex flex-row bg-orange-500 mt-5'>
            <div>Nome</div>
        </div>
        <div className='flex flex-row bg-orange-700'>
            <div>Citta</div>
            <div>Regione</div>
            <div>Nazione</div>
            <div>Continente</div>
        </div>
        <div className='flex flex-row bg-orange-500'>
            <div>Oggi</div>
            <div>Domani</div>
            <div>Dopodomani</div>
        </div>
        <div className='flex flex-row my-10 bg-orange-700'>
            <div>Robe</div>
        </div>
    </div>
  )
}