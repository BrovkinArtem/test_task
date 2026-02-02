import { useState } from 'react'
import { Header } from '@components/Header'
import { UsersTable } from '@components/UsersTable'
import { Footer } from '@components/Footer'
import { Pagination } from '@components/Pagination'
import './App.scss'

function App() {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="app">
      <div className="app__container">
        <Header />

        <UsersTable />

        <div className="app__pagination-wrapper">
          <Pagination
            currentPage={currentPage}
            totalPages={30000}
            onPageChange={setCurrentPage}
            totalItems={30000}
            itemsPerPage={20}
          />
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default App
