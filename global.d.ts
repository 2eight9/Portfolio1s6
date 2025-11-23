// custom.d.ts atau global.d.ts

declare module '*.css' {
  // Deklarasi ini memberi tahu TypeScript bahwa mengimpor file .css 
  // adalah hal yang valid, meskipun tidak ada nilai yang diekspor (side-effect import).
  // Next.js (dan Webpack) akan menangani impor CSS ini.
  export {}; 
}

// Anda mungkin juga perlu menambahkan ini jika menggunakan modul CSS
// declare module '*.module.css' {
//   const classes: { [key: string]: string };
//   export default classes;
// }