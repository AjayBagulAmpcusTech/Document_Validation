"use client"

import { useRef, useEffect } from "react"

interface AadhaarCardEditorProps {
  name: string
  aadhaarNumber: string
  dob: string
}

export function AadhaarCardEditor({ name, aadhaarNumber, dob }: AadhaarCardEditorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const image = new Image()
    image.crossOrigin = "anonymous" // Important for drawing images from different origins
    image.src = "/images/emptyadhaar.png" // Use the generated placeholder image

    image.onload = () => {
      canvas.width = image.width
      canvas.height = image.height

      // Draw Aadhaar image
      ctx.drawImage(image, 0, 0)

      // Common text style
      ctx.font = "24px Arial" // Slightly larger font for readability
      ctx.fillStyle = "#000"
      ctx.textAlign = "left"

      // Dynamically add text with improved alignment
      // These coordinates are estimates based on a typical Aadhaar layout.
      // You may need to fine-tune them based on the exact 'emptyadhaar.jpg' you use.
      ctx.fillText(`Name: ${name}`, 200, 200) // Adjust X/Y as needed
      ctx.fillText(`DOB: ${dob}`, 200, 240)
      ctx.fillText(`Aadhaar No: ${aadhaarNumber.replace(/(\d{4})(\d{4})(\d{4})/, "$1 $2 $3")}`, 200, 280)
    }
  }, [name, dob, aadhaarNumber])

  return (
    <div className="flex flex-col items-center space-y-4 p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
      <h3 className="text-lg font-semibold text-gray-800">Aadhaar Card Preview (Editable)</h3>
      <canvas ref={canvasRef} className="border border-gray-300 rounded-md" />
      <div className="w-full max-w-md space-y-2 text-sm text-gray-700">
        <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
          <span className="font-medium">Name:</span>
          <span className="font-bold text-gray-900">{name || "N/A"}</span>
        </div>
        <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
          <span className="font-medium">DOB:</span>
          <span className="font-bold text-gray-900">{dob || "N/A"}</span>
        </div>
        <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
          <span className="font-medium">Aadhaar Number:</span>
          <span className="font-bold text-gray-900">
            {aadhaarNumber.replace(/(\d{4})(\d{4})(\d{4})/, "$1 $2 $3") || "N/A"}
          </span>
        </div>
      </div>
      <p className="text-xs text-gray-500 italic">
        Note: Text positions are estimates. Fine-tune coordinates in the component for exact alignment.
      </p>
    </div>
  )
}
