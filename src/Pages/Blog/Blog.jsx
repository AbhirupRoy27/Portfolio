const Blogs = [
  { id: 1, name: 'Abc', desc: 'desf', date: '12-09-2025' },
  {
    id: 2,
    name: 'AbcAbcAbcAbcAbcAbcAb',
    desc: 'desf',
    date: '10-12-2025',
  },
]

function Blog() {
  return (
    <div className="text-white animate-slide-in-up py-4 px-2 sm:px-10 w-screen min-w-[354px]">
      <h1 className="text-3xl capitalize">
        Abhirup's <span className="text-gray-400">Blog.</span>
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
        {Blogs.map((b) => (
          <div
            key={b.id}
            className="bg-gray-50/10 p-2 rounded-lg flex flex-col"
          >
            <img
              src="https://res.cloudinary.com/dfuhnqbap/image/upload/v1765263682/samples/cup-on-a-table.jpg"
              alt="Loading.."
              className="rounded-md shadow-lg shadow-white/10 h-[40%]"
            />
            <section className="flex flex-col gap-2 py-2 px-1 overflow-hidden">
              <h1 className="text-gray-50 text-xl line-clamp-1">{b.name}</h1>
              <p className="text-sm text-gray-50/50 capitalize text-wrap">
                {b.desc}
              </p>
              <h3 className="text-md text-end ">{b.date}</h3>
            </section>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
