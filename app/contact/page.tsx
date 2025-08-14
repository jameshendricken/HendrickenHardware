'use-client';
import React from 'react'

import UserForm from '../components/ContactUsForm'

const ContactPage = () => {
  return (
    <div className="min-h[80vh]">
        <h1 className="text-2xl pb-4">
            Contact us
        </h1>

        <p className='pb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit saepe natus voluptas, aut, nobis ea ullam nostrum architecto voluptates rem officiis reprehenderit iusto odit fuga at omnis veritatis iste? Expedita!</p>
        <p className='pb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt hic explicabo itaque mollitia, quidem quas obcaecati voluptate dolores quibusdam maiores repellendus laborum nostrum ad officia repellat quod fugiat in inventore?</p>
        <UserForm />
    </div>
  )
}

export default ContactPage
