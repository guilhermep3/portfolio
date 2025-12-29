type props = {
  opacity?: number;
}
export const SeparatorLine = ({opacity}: props) => {

  return (
    <div className={`relative`}
      style={{opacity: opacity ? opacity / 100 : 1}}
    >
      <span className="separatorLinePrimary"></span>
      <span className="separatorLineSecondary"></span>
    </div>
  )
}