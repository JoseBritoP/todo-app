export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
} as const

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]:{
    literal:'Todos',
    href: `/?filters=${TODO_FILTERS.ALL}`
  },
  [TODO_FILTERS.ACTIVE]:{
    literal:"Activos",
    href:`/?filters=${TODO_FILTERS.ACTIVE}`,
  },
  [TODO_FILTERS.COMPLETED] :{
    literal :"Completados" ,
    href:`/?filters=${TODO_FILTERS.COMPLETED}`,
  }
} as const

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS] //Acceder a todas las propiedades sin importar la cantidad
// Cualquier key del objeto TODO_FILTERS