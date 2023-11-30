"use client";

import { useState } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

import Form from '@component/Form';

const CreatePrompt = () => {
    const [submitting, setSubmitting] = useState(false);
    
  return (
    <div>CreatePrompt</div>
  )
}

export default CreatePrompt