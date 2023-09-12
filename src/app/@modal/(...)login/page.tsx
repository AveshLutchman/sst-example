"use client"

import React from 'react'
import {
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

const LoginModalForm = () => {

  return (
    <DialogContent className='flex p-0 gap-0 overflow-hidden max-w-3xl'>
      <DialogTitle className="w-[600px]  text-secondary-light-2 text-7xl font-bold text-center">
        <span>Login Modal</span>
      </DialogTitle>
    </DialogContent>
  );
}

export default LoginModalForm