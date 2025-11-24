import { FaNodeJs, FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiMongodb } from 'react-icons/si'

export function Icons_React() {
  return (
    <a
      target="_blank"
      class="inline-flex items-center text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white"
      href="https://react.dev/"
    >
      <div class="size-4 flex-shrink-0">
        <FaReact color="rgb(0, 255, 255)" />
      </div>
      <p class="ml-1 text-sm font-bold">React</p>
    </a>
  )
}

export function Icons_node() {
  return (
    <a
      target="_blank"
      class="inline-flex items-center text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white"
      href="https://nodejs.org/en"
    >
      <div class="size-4 flex-shrink-0">
        <FaNodeJs color="#237520" />
      </div>
      <p class="ml-1 text-sm font-bold">Node.js</p>
    </a>
  )
}

export function Icons_express() {
  return (
    <a
      target="_blank"
      class="inline-flex items-center text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white"
      href="https://nodejs.org/en"
    >
      <div class="size-4 flex-shrink-0">
        <SiExpress color="white" />
      </div>
      <p class="ml-1 text-sm font-bold">Express</p>
    </a>
  )
}

export function Icons_mongoDb() {
  return (
    <a
      target="_blank"
      class="inline-flex items-center text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white"
      href="https://nodejs.org/en"
    >
      <div class="size-4 flex-shrink-0">
        <SiMongodb color="green" />
      </div>
      <p class="ml-1 text-sm font-bold">MongoDB</p>
    </a>
  )
}

export function Icons_tailwind() {
  return (
    <a
      target="_blank"
      class="inline-flex items-center text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white"
      href="https://tailwindcss.com/"
    >
      <div class="size-4 flex-shrink-0">
        <RiTailwindCssFill color="rgb(0, 255, 255)" />
      </div>
      <p class="ml-1 text-sm font-bold">tailwindcss</p>
    </a>
  )
}
