import { createSignal } from "solid-js";
export default function Blog() {
  const [count, setCount] = createSignal(false);
  const show = () => {
    console.log('count() => ', count())
    setCount(!count())
  };
  return (
    <div className="isolae bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu">

      </div>
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav className="flex h-9 items-center justify-between" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="#" className="-m-1.5 p-1.5 text-center">
                <img className="h-8" src="https://avatars.githubusercontent.com/u/6262887?v=4"/>
                <span className="text-base text-ellipsis text-grey-700">邵东老苏 {}</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pb-20 sm:pt-48 sm:pb-40">
            <div>
              <div className="hideen sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-600">
                    Announcing our next round of funding.{' '} -- {count().toString()}
                    <a href="#" className="font-semibold text-indigo-600">
                      <span className="absolute inset-0" aria-hidden="true" onClick={() => setCount(!count())} />
                      Read more <span aria-hidden="true" >&rarr;</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}