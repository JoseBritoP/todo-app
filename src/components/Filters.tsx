import React from 'react'
import {FILTERS_BUTTONS,FilterValue} from '../consts'

interface Props {
  filterSelected: FilterValue, //Acceder a todas las propiedades sin importar la cantidad
  onFilterChange: (filter:FilterValue)=>void
}

export const Filters: React.FC<Props> = ({filterSelected,onFilterChange}) => {
  return (
    <ul className='filters'>
      {
        Object.entries(FILTERS_BUTTONS).map(([key,{href,literal}])=>{
          const isSelect = key === filterSelected;
          const className = isSelect ? 'select' : ''
          return (
            <li key={key}>
              {/* Si el valor del filtro seleccionado es igual al de cada botón entonces se le asigna una clase */}
              <a href={href} className={className} onClick={(event)=>{
                event.preventDefault()
                onFilterChange(key as FilterValue)
              }}>
                {literal}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}