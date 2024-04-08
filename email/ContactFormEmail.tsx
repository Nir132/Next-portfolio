import React from 'react'
import { Html,Body, Head,Heading 
    ,Hr,Container,Preview
    , Section, Text} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'


type ContactFormEmailProps = {
    message:string;
    senderEmail:string;
}

export default function ContactFormEmail({message,senderEmail}:ContactFormEmailProps) {
  return (
    <Html>
        <Head/>
        <Preview>New message From portfilo site</Preview>
        <Tailwind>
            <Body className="bg-gray-100 text-black">
                <Container>
                    <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                        <Heading className="leading-tight">
                          You recived the folloeing message from this contact form 
                        </Heading>
                        <Text>{message}</Text>
                        <Hr/>
                        <Text>The email was sent from: {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}
