import Link from "next/link"

import { DemoTitle } from "@/components/demo-title"
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
          <DemoTitle
            title="Popout"
            githubLink="https://github.com/superbridgeapp/widget-demo/blob/main/components/widget-popout.tsx"
            size="large"
          />
          <WidgetPopout />
        </div>
        <div className="flex flex-col gap-2">
          <DemoTitle
            title="Dialog"
            githubLink="https://github.com/superbridgeapp/widget-demo/blob/main/components/widget-dialog.tsx"
            size="large"
          />
          <WidgetDialog />
        </div>
      </div>

      {/* Embedded Examples Section */}
      <h2 className="text-2xl font-bold mt-8">Embedded Examples</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4">
          <DemoTitle
            title="Default"
            githubLink="https://github.com/superbridgeapp/widget-demo/blob/main/components/widget.tsx"
          />
          <Widget />
        </div>

        <div className="flex flex-col gap-4">
          <DemoTitle
            title="Theme override"
            githubLink="https://github.com/superbridgeapp/widget-demo/blob/main/components/widget-themed.tsx"
          />
          <WidgetThemed />
        </div>

        <div className="flex flex-col gap-4">
          <DemoTitle
            title="Injected Token"
            githubLink="https://github.com/superbridgeapp/widget-demo/blob/main/app/page.tsx#L108"
          />
          <Widget src="https://v3.superbridge.app?widget=true&fromChainId=8453&toChainId=10&tokenAddress=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" />
        </div>

        <div className="flex flex-col gap-4">
          <DemoTitle
            title="Token bridge (USDC)"
            githubLink="https://github.com/superbridgeapp/widget-demo/blob/main/app/page.tsx#L122"
          />
          <Widget src="https://a708991b-616a-406d-9318-c393803f684c.bridges.rollbridge.app" />
        </div>

        <div className="flex flex-col gap-4">
          <DemoTitle
            title="Rollup bridge (Cyber Testnet)"
            githubLink="https://github.com/superbridgeapp/widget-demo/blob/main/app/page.tsx#L136"
          />
          <Widget src="https://cyber-testnet.v3.testnets.rollbridge.app/?widget=true" />
        </div>
      </div>
    </section>
  )
}
