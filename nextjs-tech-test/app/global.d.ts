declare global {
    interface Window {
      gtag: (action: string, ...args: (string | number | object)[]) => void; // Specify more precise types
    }
  }
  
  export {};