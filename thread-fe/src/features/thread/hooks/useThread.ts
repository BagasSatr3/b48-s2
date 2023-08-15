import { useState, ChangeEvent } from 'react';
import { IAddContent } from "@/interface/thread"
import { API } from '@/libs/api';

export function useThread() {
    const [form, setForm] = useState<IAddContent>({
        content: "",
        image: "",
    })
    
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    
    async function handleAddContent() {
        try {
            const response = await API.post('/threads', form, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            })
            console.log(response)
        } catch (err) {
            console.log(err)
        }
        
    }
    
    return {handleChange, handleAddContent}
}