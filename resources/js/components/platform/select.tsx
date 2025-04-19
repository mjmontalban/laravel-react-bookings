import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function PlatformSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Search by status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Statuses</SelectLabel>
          <SelectItem value="REQUEST">REQUEST</SelectItem>
          <SelectItem value="ASSIGNED">ASSIGNED</SelectItem>
          <SelectItem value="COMPLETED_PENDINGREVIEW">PENDINGREVIEW</SelectItem>
          <SelectItem value="COMPLETED">COMPLETED</SelectItem>
          <SelectItem value="REQUEST_REVISION">REQUEST REVISION</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
