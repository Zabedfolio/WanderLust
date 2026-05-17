"use client";

import { authClient } from "@/lib/auth-client";
import {AlertDialog, Button} from "@heroui/react";
import { Trash2 } from "lucide-react";

export function BookingDeleteAlert({dataId}) {


    
    

    const handleCancelBooking= async() => {

        const {data:tokenData} = await authClient.token()
        
        const res = await fetch(`http://localhost:5000/booking/${dataId}`,{
            method: 'DELETE',
            headers: {
                "content-type": 'application/json',
                 authorization: `Bearer ${tokenData?.token}`
            }
        })

        const data = await res.json();
        // console.log(data)
        window.location.reload()
    }

  return (
    <AlertDialog className="rounded-none">
      <Button variant="danger" className="rounded-none"><Trash2></Trash2>Cancel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px] rounded-none">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" className="rounded-none" />
              <AlertDialog.Heading>Cancel booking permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary" className="rounded-none">
                I don't want to cancel
              </Button>
              <Button onClick={handleCancelBooking} slot="close" variant="danger" className="rounded-none">
                Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}