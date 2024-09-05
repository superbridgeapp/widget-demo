export const WidgetThemed = () => {
  return (
    <iframe
      src={`http://v3.superbridge.app/?widget=true&theme={"primary":"green"}`}
      className="w-full max-w-[420px] rounded-[24px] md:rounded-[32px] shadow-lg h-[606px]"
    />
  )
}
