import { PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext, Pagination } from '@/components/ui/pagination'
import React from 'react'

function Pagechange() {
  return (
    <div>

            {/* pagination */}

<div className=" flex items-center justify-center mt-28  ">
  <div className="inline-block border rounded-2xl border-black px-11 py-3 dark:border-slate-400 shadow-md shadow-black dark:shadow-slate-500">

<Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="/" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/Cards2" >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="/Cards2" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  </div>
</div>
    </div>
  )
}

export default Pagechange