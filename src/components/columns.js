// eslint-disable-next-line no-unused-vars
import { format } from 'date-fns'
import {ColumnFilter} from './ColumnFilter'
export const COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
    Filter:ColumnFilter,
    disableFilters:true
  },
  { 
    Header: 'WareHouse Name',
    Footer: 'WareHouse Name',
    accessor: 'name',
    Filter:ColumnFilter
  },
  {
    Header: 'City',
    Footer: 'City',
    accessor: 'city',
    Filter:ColumnFilter
  },
  {
    Header: 'Cluster',
    Footer: 'Cluster',
    accessor: 'cluster',
    Filter:ColumnFilter,
  },
  {
    Header: 'Space Available',
    Footer: 'Space Available',
    accessor: 'space_available',
    Filter:ColumnFilter
  },
  {
    Header: 'Edit',
    Footer: 'Edit',
    //accessor: 'space_available',
    Filter:ColumnFilter,disableFilters:true
  }
]