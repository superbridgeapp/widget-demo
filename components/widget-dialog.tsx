"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Widget } from "@/components/widget"

export function WidgetDialog() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Open Widget Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Widget />
      </DialogContent>
    </Dialog>
  )
}
