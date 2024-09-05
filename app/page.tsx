import Link from "next/link"

import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { Widget } from "@/components/widget"
import { WidgetDialog } from "@/components/widget-dialog"
import { WidgetPopout } from "@/components/widget-popout"
import { WidgetThemed } from "@/components/widget-themed"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Superbridge Widget Demos
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Explore different ways to integrate our widget into your application.
        </p>
        <p className="max-w-[700px] text-sm text-muted-foreground">
          See our{" "}
          <Link
            href="https://github.com/superbridgeapp/widget-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            documentation
          </Link>{" "}
          for more info on how to configure the widget.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Embedded Demo */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold flex justify-between items-center">
            <span>Embedded</span>
            <Link
              href="https://github.com/superbridgeapp/widget-demo/blob/main/components/widget.tsx"
              className="ml-2"
              target="_blank"
            >
              <Icons.gitHub className="h-5 w-5" />
            </Link>
          </h2>
          <Widget />
        </div>

        {/* Popout Demo */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold flex justify-between items-center">
            <span>Popout</span>
            <Link
              href="https://github.com/superbridgeapp/widget-demo/blob/main/components/widget-popout.tsx"
              className="ml-2"
            >
              <Icons.gitHub className="h-5 w-5" />
            </Link>
          </h2>
          <WidgetPopout />
        </div>

        {/* Dialog Demo */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold flex justify-between items-center">
            <span>Dialog</span>
            <Link
              href="https://github.com/superbridgeapp/widget-demo/blob/main/components/widget-dialog.tsx"
              className="ml-2"
              target="_blank"
            >
              <Icons.gitHub className="h-5 w-5" />
            </Link>
          </h2>
          <WidgetDialog />
        </div>

        {/* Custom Theme Demo */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold flex justify-between items-center">
            <span>Custom Theme</span>
            <Link
              href="https://github.com/superbridgeapp/widget-demo/blob/main/components/widget-themed.tsx"
              className="ml-2"
              target="_blank"
            >
              <Icons.gitHub className="h-5 w-5" />
            </Link>
          </h2>
          <WidgetThemed />
        </div>
      </div>
    </section>
  )
}
