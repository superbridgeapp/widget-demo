"use client"

import { useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { Widget } from "@/components/widget"

export function WidgetPopout() {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <div className="relative">
      <Button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close Widget" : "Open Widget"}
      </Button>
      {isOpen && (
        <div className="absolute z-50 mt-2 w-[420px]">
          <Widget />
        </div>
      )}
    </div>
  )
}
