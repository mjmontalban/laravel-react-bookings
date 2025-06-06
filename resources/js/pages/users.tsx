import { useEffect, useState } from "react";
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type User } from '@/types';
import { Head } from '@inertiajs/react';

import { type Listing } from '@/types';
import DataTable from '@/components/table';
import api from "@/axios/config";

import AlertConfirmation from "@/components/ui/confirmation/dialog"
import SkeletonLoader from "@/components/ui/loader/skeleton";
import { TableCell, TableHead } from "@/components/ui/table"

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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get("/users", {
            params: {
                limit: limit,
                offset: offset
            }
        })
          .then(response => {
            setUsers(response.data.data);
            setLoading(false);
          })
          .catch(error => {
            console.error("Error fetching users:", error);
            setLoading(false);

          });
    }, []);
    

    if(loading) return <SkeletonLoader />;
    
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                        <div className="absolute inset-0 size-full overflow-auto p-4 stroke-neutral-900/20 dark:stroke-neutral-100/20">
                            <DataTable<Listing> 
                                items={users} 
                                onLoadMore={() => {}} 
                                renderRow={(item) => (
                                    <>
                                      <TableCell className="font-medium">{item.id}</TableCell>
                                      <TableCell>{item.id}</TableCell>
                                      <TableCell>{item.name}</TableCell>
                                  
                                      <TableCell className="text-right">
                                        <AlertConfirmation id={item.id} onDelete={()=>{}} />
                                      </TableCell>
                                    </>
                                )}
                                renderHead={() => (
                                    <>
                                        <TableHead className="w-[100px]">ID</TableHead>
                                        <TableHead>Name</TableHead>
                                        <TableHead className="text-right">Action</TableHead>
                                    </>
                                )}
                            />
                        </div>
                    </div>
            </div>
        </AppLayout>
    );
}