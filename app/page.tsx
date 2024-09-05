import Link from "next/link"

import { Button, buttonVariants } from "@/components/ui/button"
import { Widget } from "@/components/widget"
import { WidgetDialog } from "@/components/widget-dialog"
import { WidgetPopout } from "@/components/widget-popout"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Widget Demos
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Explore different ways to integrate our widget into your application.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Embedded Demo */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Embedded Widget</h2>
          <Widget />
        </div>

        {/* Popout Demo */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Popout Widget</h2>
          <WidgetPopout />
        </div>

        {/* Dialog Demo */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Dialog Widget</h2>
          <WidgetDialog />
        </div>
      </div>

      <div className="flex gap-4">
        <Link href="/docs" className={buttonVariants()}>
          Documentation
        </Link>
        <Link
          href="/examples"
          className={buttonVariants({ variant: "outline" })}
        >
          More Examples
        </Link>
      </div>
    </section>
  )
}
