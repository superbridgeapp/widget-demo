import Link from "next/link"

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
            href="https://github.com/superbridgeapp/widget-demo?tab=readme-ov-file#superbridge-widget-demos"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            documentation
          </Link>{" "}
          for more info on how to configure the widget.
        </p>
      </div>

      {/* Popout and Dialog Section */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold flex justify-between items-center">
            <span>Popout</span>
            <Link
              href="https://github.com/superbridgeapp/widget-demo/blob/main/components/widget-popout.tsx"
              className="ml-2"
              target="_blank"
            >
              <Icons.gitHub className="h-5 w-5" />
            </Link>
          </h2>
          <WidgetPopout />
        </div>
        <div className="flex flex-col gap-2">
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
      </div>

      {/* Embedded Examples Section */}
      <h2 className="text-2xl font-bold mt-8">Embedded Examples</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Embedded Demo */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold flex justify-between items-center">
            <span>Default</span>
            <Link
              href="https://github.com/superbridgeapp/widget-demo/blob/main/components/widget.tsx"
              className="ml-2"
              target="_blank"
            >
              <Icons.gitHub className="h-5 w-5" />
            </Link>
          </h3>
          <Widget />
        </div>

        {/* Custom Theme Demo */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold flex justify-between items-center">
            <span>Theme override</span>
            <Link
              href="https://github.com/superbridgeapp/widget-demo/blob/main/components/widget-themed.tsx"
              className="ml-2"
              target="_blank"
            >
              <Icons.gitHub className="h-5 w-5" />
            </Link>
          </h3>
          <WidgetThemed />
        </div>

        {/* Custom Token Demo */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold flex justify-between items-center">
            <span>Injected Token</span>
            <Link
              href="https://github.com/superbridgeapp/widget-demo/blob/main/components/widget-themed.tsx"
              className="ml-2"
              target="_blank"
            >
              <Icons.gitHub className="h-5 w-5" />
            </Link>
          </h3>
          <Widget src="https://v3.superbridge.app?widget=true&fromChainId=8453&toChainId=10&tokenAddress=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold flex justify-between items-center">
            <span>Token bridge (USDC)</span>
            <Link
              href="https://github.com/superbridgeapp/widget-demo/blob/main/components/widget-themed.tsx"
              className="ml-2"
              target="_blank"
            >
              <Icons.gitHub className="h-5 w-5" />
            </Link>
          </h3>
          <Widget src="https://usdc.superbridge.app" />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold flex justify-between items-center">
            <span>Rollup bridge (Cyber Testnet)</span>
            <Link
              href="https://github.com/superbridgeapp/widget-demo/blob/main/components/widget-themed.tsx"
              className="ml-2"
              target="_blank"
            >
              <Icons.gitHub className="h-5 w-5" />
            </Link>
          </h3>
          <Widget src="https://cyber-testnet.v3.testnets.rollbridge.app/?widget=true" />
        </div>
      </div>
    </section>
  )
}
