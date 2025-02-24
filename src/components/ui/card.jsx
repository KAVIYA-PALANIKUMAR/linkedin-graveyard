export function Card({ children }) {
    return <div className="bg-gray-900 p-4 rounded-lg shadow-md">{children}</div>;
  }
  
  export function CardContent({ children }) {
    return <div>{children}</div>;
  }
  