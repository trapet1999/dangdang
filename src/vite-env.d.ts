/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
// 2.接口合并
interface ImportMetaEnv {
  VITE_username: string,
  VITE_age:number
}
