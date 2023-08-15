import React from "react"
import { Filters } from "./Filters"
import { FilterValue } from "../consts"
interface Props {
  activeCount: number,
  completedCount: number
  filterSelected: FilterValue
  handleFilterChange: (filter:FilterValue)=> void
  onClearCompleted: ()=>void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  onClearCompleted 
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> tareas pendientes
      </span>
      <Filters
        filterSelected = {filterSelected}
        onFilterChange={()=>{}}
      />
    </footer>
  )
}
