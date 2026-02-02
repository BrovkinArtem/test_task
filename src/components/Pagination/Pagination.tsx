import { useState, useEffect } from 'react'
import { PaginationButton } from './PaginationButton'
import './Pagination.scss'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  totalItems: number
  itemsPerPage: number
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
}: PaginationProps) => {
  const [isSmallScreen, setIsSmallScreen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768
    }
    return false
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    
    setIsSmallScreen(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsSmallScreen(e.matches)
    }

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
    } else {
      mediaQuery.addListener(handleChange)
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange)
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(handleChange)
      }
    }
  }, [])

  const startItem = (currentPage - 1) * itemsPerPage + 1
  const endItem = Math.min(currentPage * itemsPerPage, totalItems)

  const getVisiblePages = () => {
    const pages: (number | 'ellipsis')[] = []

    if (isSmallScreen) {
      if (totalPages <= 4) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        pages.push(1)
        
        if (currentPage <= 3) {
          pages.push(2)
          pages.push(3)
          pages.push('ellipsis')
          pages.push(totalPages)
        } else if (currentPage >= totalPages - 2) {
          pages.push('ellipsis')
          pages.push(totalPages - 1)
          pages.push(totalPages)
        } else {
          pages.push('ellipsis')
          pages.push(currentPage)
          pages.push('ellipsis')
          pages.push(totalPages)
        }
      }
    } else {
      const maxVisible = 5

      if (totalPages <= maxVisible + 2) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        pages.push(1)

        if (currentPage <= 3) {
          for (let i = 2; i <= 5; i++) {
            pages.push(i)
          }
          pages.push('ellipsis')
          pages.push(totalPages)
        } else if (currentPage >= totalPages - 2) {
          pages.push('ellipsis')
          for (let i = totalPages - 4; i <= totalPages; i++) {
            pages.push(i)
          }
        } else {
          pages.push('ellipsis')
          for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            pages.push(i)
          }
          pages.push('ellipsis')
          pages.push(totalPages)
        }
      }
    }

    return pages
  }

  return (
    <div className="pagination">
      <div className="pagination__buttons">
        <PaginationButton
          type="previous"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        />
        {getVisiblePages().map((page, index) => {
          if (page === 'ellipsis') {
            return (
              <PaginationButton
                key={`ellipsis-${index}`}
                type="ellipsis"
                disabled
              />
            )
          }
          return (
            <PaginationButton
              key={page}
              type="number"
              page={page}
              isActive={page === currentPage}
              onClick={() => onPageChange(page)}
            />
          )
        })}
        <PaginationButton
          type="next"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        />
      </div>
      <div className="pagination__text">
        Показано {startItem}-{endItem} из {totalItems} пользователей
      </div>
    </div>
  )
}
