import { useState } from 'react'
import { SortDirection } from '@components/Table'

export const useTableSort = (columns: string[]) => {
  const [sortStates, setSortStates] = useState<Record<string, SortDirection>>(() => {
    const states: Record<string, SortDirection> = {}
    columns.forEach((column) => {
      states[column] = null
    })
    return states
  })

  const handleSort = (column: string) => {
    setSortStates((prev) => {
      const currentDirection = prev[column]
      
      if (currentDirection === null) {
        return { ...prev, [column]: column === 'id' ? 'desc' : 'asc' }
      } else if (currentDirection === 'asc') {
        return { ...prev, [column]: 'desc' }
      } else if (currentDirection === 'desc') {
        return { ...prev, [column]: null }
      }
      return prev
    })
  }

  const getSortDirection = (column: string): SortDirection => {
    return sortStates[column] || null
  }

  return {
    sortStates,
    handleSort,
    getSortDirection,
  }
}
