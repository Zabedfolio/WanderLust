"use client";

import { AlertDialog, Button } from "@heroui/react";
import { FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";

export function DeleteAlertDialog({ destination }) {
    const { _id, destinationName } = destination;
    const router = useRouter();

    const handleDelete = async () => {
        const res = await fetch(`http://localhost:5000/destination/${_id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        });

        const data = await res.json();
        console.log(data);
        router.push("/destinations"); // redirect after delete
    };

    return (
        <AlertDialog>
            {/* Trigger — no onClick here, AlertDialog handles opening */}
            <Button variant="danger" className="rounded flex items-center gap-2">
                <FiTrash2 />
                <span className="hidden sm:inline">Delete</span>
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px] rounded-none">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{destinationName}</strong> and
                                all of its data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary" className="rounded-none">
                                Cancel
                            </Button>
                            {/* handleDelete fires only on confirm */}
                            <Button
                                slot="close"
                                variant="danger"
                                className="rounded-none"
                                onClick={handleDelete}
                            >
                                Delete Destination
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}