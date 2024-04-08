"use server"

import { getErrorMessage, validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/ContactFormEmail";
import { Resend } from "resend"; 
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY)



export const sendEmail = async (formData:FormData)=>{   
    const senderEmail = formData.get('senderEmail');
    const message = formData.get("message");

    if (!validateString(senderEmail,500)){
        return{
            Error:'Invalid email'
        }
    }
    if (!validateString(senderEmail,5000)){
        return{
            Error:'Invalid message'
        }
    }

    try{
        await resend.emails.send({
            from: "protfolio contact form <onboarding@resend.dev>",
            to: "nirleibler91@gmail.com",
            reply_to: senderEmail as string, 
            subject:"message from contact form",
            react:React.createElement(ContactFormEmail,{
                message:message as string,
                senderEmail:senderEmail as string
            })
        })
    }catch(error: unknown){
        return {
            error:getErrorMessage(error)    
        }
    }
  }
