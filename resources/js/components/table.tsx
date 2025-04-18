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

  import 
    AlertConfirmation
   from "@/components/ui/confirmation/dialog"

  import { Trash2 } from 'lucide-react';

  import { useState, useEffect } from "react"

  import api from "@/axios/config";

  import SkeletonLoader from "@/components/ui/loader/skeleton";
  import { type Booking } from '@/types';

  export default function DataTable() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

      api.get('/get_bookings').then((response) => {
        setBookings(response.data.data);
        setLoading(false);
      }).catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });

  }, []);


  const onDelete = (id: number) => {
   

    api.delete('/delete_booking', {
        data: {id: id}
    }).then((response) => {
      setBookings((prevRows) => prevRows.filter((row) => row.id !== id));
    }).catch((error) => {
        console.error("Error deleting booking:", error);
    });
}
  

  if (loading) return <SkeletonLoader />;

    return (
      <Table>
        <TableCaption>A list of your recent bookings.</TableCaption>
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
          {bookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell className="font-medium">{booking.id}</TableCell>
              <TableCell>{booking.bookingNo}</TableCell>
              <TableCell>{booking.user.name}</TableCell>
              <TableCell>{booking.title}</TableCell>
              <TableCell>{booking.bookingCostCurrency} {booking.bookingCost}</TableCell>
              <TableCell>{booking.status}</TableCell>
              <TableCell className="text-right">
                <AlertConfirmation id={booking.id} onDelete={onDelete}  />
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
  