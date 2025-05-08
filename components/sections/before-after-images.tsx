import Image from "next/image"

const transformations = [
  {
    id: 1,
    name: "John D.",
    beforeImage: "https://i.imgur.com/QGGp8Oz.png?height=400&width=300",
    afterImage: "https://i.imgur.com/PmSQd39.png?height=400&width=300",
    days: 30,
    weightLoss: "18 lbs",
  },
  {
    id: 2,
    name: "Emma S.",
    beforeImage: "https://i.imgur.com/lILpVDi.png?height=400&width=300",
    afterImage: "https://i.imgur.com/ftPmv24.png?height=400&width=300",
    days: 30,
    weightLoss: "15 lbs",
  },
  {
    id: 3,
    name: "Mark T.",
    beforeImage: "https://i.imgur.com/qqDoHfH.png?height=400&width=300",
    afterImage: "https://i.imgur.com/g69Hn46.png?height=400&width=300",
    days: 30,
    weightLoss: "22 lbs",
  },
]

export default function BeforeAfterImages() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {transformations.map((transformation) => (
        <div key={transformation.id} className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={transformation.beforeImage || "/placeholder.svg"}
                  alt={`${transformation.name} before`}
                  width={300}
                  height={400}
                  className="aspect-[3/4] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-center text-white">Before</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={transformation.afterImage || "/placeholder.svg"}
                  alt={`${transformation.name} after`}
                  width={300}
                  height={400}
                  className="aspect-[3/4] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-blue-600/70 p-2 text-center text-white">After</div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-medium">{transformation.name}</h3>
            <p className="text-sm text-gray-500">
              Lost {transformation.weightLoss} in {transformation.days} days
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
