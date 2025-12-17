const Blogs = [
  {
    id: 1,
    name: 'Blog 1 Title',
    desc: 'Blog 1 Description',
    date: '12-09-2025',
    cover:
      'https://res.cloudinary.com/dfuhnqbap/image/upload/v1765263682/samples/cup-on-a-table.jpg',
  },
  {
    id: 2,
    name: 'Blog 2 Title',
    desc: 'Blog 2 Description',
    date: '10-12-2025',
    cover:
      'https://res.cloudinary.com/dfuhnqbap/image/upload/v1765263682/samples/coffee.jpg',
  },
]

function Blog() {
  return (
    <div className="text-white animate-slide-in-up py-4 sm:py-10 px-2 sm:px-15  w-screen min-w-[354px]">
      <h1 className="text-3xl capitalize text-center mb-10">
        Abhirup's <span className="text-gray-400">Blog.</span>
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
        {Blogs.map((b) => (
          <div
            key={b.id}
            className="bg-gray-50/10 p-3 rounded-lg flex flex-col hover:scale-102 hover:shadow-lg transition-all duration-300 ease-in-out shadow-white/10 border-b border-white/10"
          >
            <div>
              <img
                src={b.cover}
                alt="Loading.."
                className="rounded-md shadow-lg shadow-white/10 w-full object-cover"
              />
              <section className="flex flex-col gap-2 py-2 px-1 overflow-hidden">
                <h1 className="text-gray-50 text-lg line-clamp-1">{b.name}</h1>
                <p className="text-sm text-gray-50/50 capitalize text-wrap min-h-[50px]">
                  {b.desc}
                </p>
                <h3 className="text-sm text-end text-gray-50/50">{b.date}</h3>
              </section>
            </div>

            <button className="bg-yellow-50/10 hover:bg-amber-50/20 hover:scale-102 transition-all duration-300 ease-in-out border-b-2 border-white/10 rounded-lg py-2 tracking-wider font-semibold">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
