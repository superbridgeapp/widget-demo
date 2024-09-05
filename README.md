# Superbridge Widget Demos

A collection of demos showcasing Superbridge as a widget.

## What is Superbridge?

[Superbridge](https://superbridge.app) is a bridge provider, hosting customisable bridge UIs for a number of rollups, tokens and ecosystems.

A few of our solutions include,

- [Superbridge](https://superbridge.app), the official Superchain gateway
- [Rollies](https://superbridge.app/rollies), no-code Bridge-as-a-Service for rollups
- Token specific bridges
  - [Renzo's ezETH bridge](renzo.superbridge.app)
  - [Elixir's deUSD bridge](elixir.superbridge.app)
  - [USDC bridge](usdc.superbridge.app)

## Getting Started

1. Get a bridge URL to embed

   - If you want to enable Superchain bridging, you can use the Superbridge `https://v3.superbridge.app?widget=true` link

   - If you're a [Rollies](https://superbridge.app/rollies) customer, you can get a bridge URL from the [Rollies dashboard](https://dashboard.superbridge.app)

   - If you have any other valid Superbridge bridge URL, you can use that with the `?widget=true` query parameter

1. Checkout the [live site](https://widget-demo-gray.vercel.app/) and determine which kind of widget integration you want to try

1. Add the widget to your codebase, a simple iframe embed is all that's needed

```
    <iframe
      src={`http://v3.superbridge.app/?widget=true`} // use your bridge URL here
    />
```

## Configuration

After you've added the widget to your codebase, you can customise the widget's appearance and behaviour using a few available props. Everything is passed in as query parameters to the provided URL.

- `fromChainId` - The chain ID of the chain you want to bridge from
- `toChainId` - The chain ID of the chain you want to bridge to
- `tokenAddress` - The address of the token you want to bridge, this should be the address of the token on the `fromChainId` network
- `recipient` - Prefill the recipient of the bridge operation, will default to the users connected wallet address if not provided
- `theme` - Customise the theme of the widget via a stringified JSON object, refer to the [object](https://github.com/superbridgeapp/superbridge-app/blob/main/apps/bridge/codegen/model/themeDto.ts) to see the available options
