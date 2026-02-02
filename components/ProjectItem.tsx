type Props = {
  item: any
  onClick: () => void
}

export default function ProjectItem({ item, onClick }: Props) {
  const sizeMap: Record<number, string> = {
  1: 'max-w-[150px]',
  2: 'max-w-[200px]',
  3: 'max-w-[250px]',
  4: 'max-w-[300px]',
  5: 'max-w-[350px]',
  6: 'max-w-[400px]',
  7: 'max-w-[450px]',
  8: 'max-w-[500px]',
  9: 'max-w-[550px]',
  10: 'max-w-[700px]',
  }

  const sizeClass = sizeMap[item.size || 3]

  // 🔒 Fixierte Werte (keine Neuberechnung)
const offsetX = item.offsetX ?? 0
const spacing = item.spacing ?? 24


  return (
    <div
      className="relative flex justify-center"
      style={{ marginTop: `${spacing}px` }}
    >
      <div
        className={`relative ${sizeClass}`}
        style={{ transform: `translateX(${offsetX}px)` }}
        onClick={onClick}
      >
        {item.image?.asset?.url && (
          <img
            src={item.image.asset.url}
            className="w-full h-auto block cursor-pointer"
          />
        )}

        {/* Titel */}
        <div className="absolute bottom-0 left-1 text-white text-sm">
          {item.project?.title}
        </div>
      </div>
    </div>
  )
}
