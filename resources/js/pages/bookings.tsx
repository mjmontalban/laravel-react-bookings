import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import DataTable from '@/components/table';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { PlatformDatePicker } from "@/components/platform/datepicker"
import { PlatformSelect } from "@/components/platform/select"


const breadcrumbs : BreadcrumbItem[] = [
    {
        title: 'Bookings',
        href: '/bookings',
    }
];


export default function Bookings() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
                    <Head title="Bookings" />
                    <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                
                        <div className="flex w-full max-w-7xl items-center gap-2 px-4xx">
                            <Input type="text" placeholder="Input any keyword" className="flex-1" />
                            <PlatformSelect />
                            <PlatformDatePicker />
                            <Button type="button">Search</Button>
                        </div>
                        <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                            <div className="absolute inset-0 size-full overflow-auto p-4 stroke-neutral-900/20 dark:stroke-neutral-100/20">
                                <DataTable />
                            </div>
                        </div>
                    </div>
                </AppLayout>
    );
}