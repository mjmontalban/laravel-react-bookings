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

  import { type Booking } from '@/types';
  import { Button } from "@/components/ui/button"
  import 
    AlertConfirmation
   from "@/components/ui/confirmation/dialog"

  interface DatatableProps {
    bookings: Booking[];
    onLoadMore: () => void;
    onDelete: (id: number) => void;
  }
  
  export default function DataTable(props: DatatableProps) {

    return (
      <Table>
        <TableCaption>
            <Button variant="default" onClick={props.onLoadMore}> Load More </Button>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Booking No</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
          {props.bookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell className="font-medium">{booking.id}</TableCell>
              <TableCell>{booking.bookingNo}</TableCell>
              <TableCell>{booking.user.name}</TableCell>
              <TableCell>{booking.title}</TableCell>
              <TableCell>{booking.bookingCostCurrency} {booking.bookingCost}</TableCell>
              <TableCell>{booking.status}</TableCell>
              <TableCell className="text-right">
                <AlertConfirmation id={booking.id} onDelete={props.onDelete}  />
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>

        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    )
  }
  