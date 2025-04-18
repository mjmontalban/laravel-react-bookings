import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  import { Loader2 } from "lucide-react";
  import { useState } from 'react';
  type AlertConfirmationProps = {
    id: number;
    // onConfirm?: (id: number) => void;
  };

  import api from "@/axios/config";

  export default function AlertConfirmation(props: AlertConfirmationProps) {

    const [ loading, setLoading ] = useState(false);
    const [ disable, setDisable ] = useState(false);

    const handleDelete = (id: number) => {
        setLoading(true);
        setDisable(true);

        api.delete('/delete_booking', {
            data: {id: id}
        }).then((response) => {
            setLoading(false);
            setDisable(false);
        }).catch((error) => {
            console.error("Error deleting booking:", error);
        });
    }

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete Booking</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure to delete this booking?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              booking and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button disabled={disable} variant={'outline'}>Cancel</Button>
            <Button variant={'outline'} onClick={ () => handleDelete(props.id)}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {loading ? "Please wait" : "Continue"}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  