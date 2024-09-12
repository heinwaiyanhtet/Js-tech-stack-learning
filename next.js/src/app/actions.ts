"use server"

import { redirect } from "next/navigation"

//create a function to create user using fetch , if not ok it will redirect to dashboard
export async function createUser(prevState:any,formData: FormData) {
    try {
        const res = await fetch('https://...')
    const json = await res.json()
   
    if (!res.ok) {
      return { message: 'Please enter a valid email' }
    }
   
    redirect('/dashboard')
    } catch (error) {
        redirect('/dashboard/settings/error');

    }
   
    

}

