"use client";

import { createBoard } from '@/actions/create-board/index';
import { Button } from '@/components/ui/button';
import React from 'react'
import { useFormState } from 'react-dom';


import { useAction } from '@/hooks/use-action';
import { FormInput } from '@/components/form/form-input';
import { FormSubmit } from '@/components/form/form-submit';

const Form = () => {
  const {execute, fieldErrors} = useAction(createBoard, {
    onSuccess: (data) =>{
      console.log(data, "success")
    },
    onError: (error)=>{
      console.error(error)
    }
  })

  const onSubmit = (formData: FormData)=>{
    const title = formData.get("title") as string;
    

    execute({title})
  }
  return (
    <div className="flex flex-col space-y-4">
      <form action={onSubmit}>
        <div className='flex flex-col space-y-2'>

        <FormInput errors={fieldErrors} id="title" label='Board title'/>
        </div>
        <FormSubmit> Save</FormSubmit>
      </form>
      
    </div>
  )
}

export default Form