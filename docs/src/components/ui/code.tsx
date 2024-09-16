'use client'

import { useToast } from '@/hooks/use-toast';
import { Copy } from 'lucide-react'
import React, { useState } from 'react'

export default function Code({className, children} : {className?: string, children: string}) {
  
  const [showCopyButton, setShowCopyButton] = useState(false);
  const {toast} = useToast()
  
  return (
    <div 
      className="bg-secondary rounded-lg p-4 relative my-1"
      onMouseEnter={()=>setShowCopyButton(true)}
      onMouseLeave={()=>setShowCopyButton(false)}
    >
      <div className={`font-mono whitespace-pre-wrap ${className}`}>
        {children}
      </div>
      <div className={`${showCopyButton? '' : 'hidden'} absolute top-2 right-2`}>
        <Copy 
          className='stroke-zinc-500 hover:stroke-zinc-600 hover:cursor-pointer' 
          onClick={()=>{
            navigator.clipboard.writeText(children);
            toast({description: "Copied to clipboard!", duration: 1000})
          }}
        />
      </div>
    </div>
  )
}
