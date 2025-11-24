import { SiAmericanexpress } from 'react-icons/si'

export function AmericanExpress() {
  return (
    <a
      target="_blank"
      class="inline-flex items-center text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white"
      href="https://react.dev/"
    >
      <div class="size-4 flex-shrink-0">
        <SiAmericanexpress color="white" />
      </div>
      <p class="ml-1 text-sm font-bold">React</p>
    </a>
  )
}
