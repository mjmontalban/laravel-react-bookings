import { useEffect, useState } from "react";
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type User } from '@/types';
import { Head } from '@inertiajs/react';
import api from "@/axios/config";


const breadcrumbs : BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/users',
    }
];

export default function Users() {

    const [users, setUsers] = useState<User[]>([]);
    const limit = 15;
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        api.get("/users", {
            params: {
                limit: limit,
                offset: offset
            }
        })
          .then(response => {
            setUsers(response.data);
          })
          .catch(error => {
            console.error("Error fetching users:", error);
          });
    }, []);
    
    
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
            <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                <div className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20"></div>
                </div>
            </div>
        </AppLayout>
    );
}