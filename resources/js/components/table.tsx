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

  if (loading) return <SkeletonLoader />;

    return (
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Booking No</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell className="font-medium">{booking.id}</TableCell>
              <TableCell>{booking.title}</TableCell>
              <TableCell>{booking.bookingNo}</TableCell>
              <TableCell className="text-right">{booking.bookingCostCurrency} {booking.bookingCost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  