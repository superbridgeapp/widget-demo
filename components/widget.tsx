export const Widget = ({ query = "" }: { query?: string }) => {
  return (
    <iframe
      src={`http://v3.superbridge.app/?widget=true${query ? `&${query}` : ""}`}
      className="w-full max-w-[420px] rounded-[24px] md:rounded-[32px] shadow-lg h-[606px]"
    />
  )
}
