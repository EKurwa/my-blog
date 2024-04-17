/// <reference types="vite/client" />
// global.d.ts 或类似的地方
declare namespace JSX {
  interface IntrinsicElements {
    div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
      style?: React.CSSProperties & {
        '--order-number'?: number
      }
    }
  }
}
