import React from 'react'

export const Footer = () => {
  return (
    <>
    <footer className="bg-hir py-24">
        <div className="container mx-auto flex items-center gap-9 flex-col md:flex-row">
            <div className="space-y-5 md:w-1/3 md:text-left text-center">
                <h1 className="text-4xl font-bold opacity-70 hover:text-white">THINK</h1>
                <p className="line-clamp-1 capitalize font-serif hover:text-white">Thoughtful marketing for growing dental practices</p>
            </div>
            <div className="space-y-5 md:w-1/3 text-center">
                <h4 className="line-clamp-2 capitalize opacity-70 hover:text-white">DENTAL MARKETING INSIGHTS FOR CLEVER DENTISTS DIRECT YOU INBOX</h4>
                <div class="relative mt-6">
  <input
    type="email"
    placeholder="Email address"
    autocomplete="email"
    aria-label="Email address"
    class="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
  />
  <div class="absolute inset-y-1 right-1 flex justify-end">
    <button
      type="submit"
      aria-label="Submit"
      class="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
    >
      <svg viewBox="0 0 16 6" aria-hidden="true" class="w-4">
        <path
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 3 10 .5v2H0v1h10v2L16 3Z"
        ></path>
      </svg>
    </button>
  </div>
                </div>
            </div>
            <div className="space-y-5 md:w-1/3 text-center">
                <h1 className="font-bold text-4xl hover:text-white opacity-70">CALL US</h1>
                <p className="text-2xl line-clamp-1 hover:text-white opacity-85">+(128)382736</p>
            </div>
        </div>
    </footer>
    </>
  )
}
