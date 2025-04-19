import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  import { Button } from "@/components/ui/button"


  interface DatatableProps<T> {
    items: T[];
    onLoadMore: () => void;
    renderRow: (item: T) => React.ReactNode;
  }

  export default function DataTable<T>(props: DatatableProps<T>) {

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
        {props.items.map((item, index) => (
          <TableRow key={index}>
            {props.renderRow(item)}
          </TableRow>
        ))}
        </TableBody>
      </Table>
    )
  }
  