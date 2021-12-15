import React from "react";
import { parse } from "papaparse";

export default function App() {
  // will be used to highlight the dropzone area
  const [highlighted, setHighlighted] = React.useState(false);

  return (
    <div>
      <h1 className="text-center text-4xl">Contact Import</h1>
      <div
        className={`p-6 my-2 mx-auto max-w-md border-2 ${
          highlighted ? "border-green-600 bg-green-100" : "border-gray-600"
        }`}
        onDragEnter={() => {
          setHighlighted(true);
        }}
        onDragLeave={() => {
          setHighlighted(false);
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          setHighlighted(false);
          console.log(e.dataTransfer.files);
          //process files as array
          Array.from(e.dataTransfer.files)
            .filter((file) => file.type === "text/csv")
            .forEach((file) => {
              console.log(file);
            });
        }}
      >
        Drop Here
      </div>
    </div>
  );
}
