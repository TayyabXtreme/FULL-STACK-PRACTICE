import { Button } from '@/components/ui/button'
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useNavigate } from 'react-router-dom'
import { useGetCreatorCourseQuery } from '@/features/api/courseApi'
import { Edit } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const CourseTable = () => {

    const {data,isLoading,error}=useGetCreatorCourseQuery()
    console.log(data)
    const invoices = [
        {
          invoice: "INV001",
          paymentStatus: "Paid",
          totalAmount: "$250.00",
          paymentMethod: "Credit Card",
        },
        {
          invoice: "INV002",
          paymentStatus: "Pending",
          totalAmount: "$150.00",
          paymentMethod: "PayPal",
        },
        
      ]
      const navigate=useNavigate()

      if(isLoading){
        return <CoursesSkeleton/>
      }

  return (
    <div>
        <Button
        onClick={()=>navigate('create')}
        >Create a new Course</Button>

        <Table>
      <TableCaption>A list of your recent courses.</TableCaption>
      <TableHeader>
        <TableRow>
        <TableHead>Title</TableHead>
          <TableHead className="w-[100px]">Price</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data && data?.courses.map((course) => (
          <TableRow key={course._id}>
            <TableCell>{course?.courseTitle}</TableCell>
            <TableCell>{course?.price || 'NA'  }</TableCell>
           
            <TableCell className="font-medium text-black">
                <Badge> {course.isPublished  ? 'Published' :'Draft' }</Badge>
               </TableCell>
            <TableCell className="text-right"><Button size='sm' variant='ghost'
            onClick={()=>navigate(`${course._id}`)}
            ><Edit/> </Button> </TableCell>
          </TableRow>
        ))}
      </TableBody>
      
    </Table>

    </div>
  )
}

export default CourseTable


const CoursesSkeleton=()=>{
    return (
        <div>
  <Button disabled className="animate-pulse">
    Loading...
  </Button>

  <Table>
    <TableCaption className="animate-pulse bg-gray-200 h-4 w-1/3 rounded-md">
      &nbsp;
    </TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="animate-pulse bg-gray-200 h-4 w-16 rounded-md">
          &nbsp;
        </TableHead>
        <TableHead className="animate-pulse bg-gray-200 h-4 w-[100px] rounded-md">
          &nbsp;
        </TableHead>
        <TableHead className="animate-pulse bg-gray-200 h-4 w-20 rounded-md">
          &nbsp;
        </TableHead>
        <TableHead className="animate-pulse bg-gray-200 h-4 w-20 rounded-md text-right">
          &nbsp;
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {Array.from({ length: 5 }).map((_, idx) => (
        <TableRow key={idx}>
          <TableCell className="animate-pulse bg-gray-200 h-6 w-24 rounded-md">
            &nbsp;
          </TableCell>
          <TableCell className="animate-pulse bg-gray-200 h-6 w-16 rounded-md">
            &nbsp;
          </TableCell>
          <TableCell className="animate-pulse bg-gray-200 h-6 w-32 rounded-md">
            &nbsp;
          </TableCell>
          <TableCell className="animate-pulse bg-gray-200 h-6 w-20 rounded-md text-right">
            &nbsp;
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell
          colSpan={3}
          className="animate-pulse bg-gray-200 h-6 w-32 rounded-md"
        >
          &nbsp;
        </TableCell>
        <TableCell className="animate-pulse bg-gray-200 h-6 w-20 rounded-md text-right">
          &nbsp;
        </TableCell>
      </TableRow>
    </TableFooter>
  </Table>
</div>


    )
}