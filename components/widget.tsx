export const Widget = ({
  src = "https://superbridge.app?widget=true",
}: {
  src?: string
}) => {
  return (
    <iframe
      src={src}
      className="w-full max-w-[420px] rounded-[24px] md:rounded-[32px] shadow-lg h-[606px]"
    />
  )
}
