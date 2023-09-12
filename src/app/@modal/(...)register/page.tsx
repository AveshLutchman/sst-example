"use client"

import React from 'react'
import {
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

export default function RegisterModal() {

  return (
    <DialogContent className='flex p-0 gap-0 overflow-hidden max-w-3xl'>
      <DialogTitle className="w-[600px] bg-secondary-light text-secondary-light-2 text-7xl font-bold text-center">
        <span>Register Modal</span>
      </DialogTitle>
    </DialogContent>
  )
}