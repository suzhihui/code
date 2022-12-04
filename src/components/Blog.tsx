import { createSignal } from "solid-js";
export function Blog() {
  const { count, setCount } = createSignal(false);

  return (
    <div class="isolae bg-white">
      <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu">

      </div>
      <div class="px-6 pt-6 lg:px-8">
        <div>
          <nav class="flex h-9 items-center justify-between" aria-label="Global">
            <div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="#" class="-m-1.5 p-1.5 text-center">
                <img class="h-8" src="https://avatars.githubusercontent.com/u/6262887?v=4"/>
                <span class="text-base text-ellipsis text-grey-700">邵东老苏</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
      <main>
        <div class="relative px-6 lg:px-8">
          <div class="mx-auto max-w-3xl pb-20 sm:pt-48 sm:pb-40">
            <div>
              <div class="hideen sm:mb-8 sm:flex sm:justify-center">
                <div class="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span class="text-gray-600">
                    Announcing our next round of funding.{' '} 
                    <a href="#" class="font-semibold text-indigo-600">
                      <span class="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true" onClick={() => setCount(!count())}>&rarr;</span>
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