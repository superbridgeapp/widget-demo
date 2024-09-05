"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Widget } from "@/components/widget"

export function WidgetDialog() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Open Widget Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Widget Dialog</DialogTitle>
          <DialogDescription>
            This is an example of the widget in a dialog.
          </DialogDescription>
        </DialogHeader>
        <Widget />
      </DialogContent>
    </Dialog>
  )
}
