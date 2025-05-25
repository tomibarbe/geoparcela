'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form 
      ref={formRef}
      className="flex gap-2"
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;

        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.error || 'Something went wrong');
          }

          // Clear the form using the ref
          formRef.current?.reset();
          
          // Show success message
          alert(data.message);
        } catch (error) {
          alert(error instanceof Error ? error.message : 'Something went wrong');
        }
      }}
    >
      <Input
        name="email"
        type="email"
        placeholder="Tu email"
        required
        className="max-w-lg flex-1 bg-white/10 border-white/20 text-white placeholder:text-emerald-100"
      />
      <Button type="submit" variant="secondary" className="bg-white text-emerald-600 hover:bg-emerald-50">
        Unirme
      </Button>
    </form>
  );
} 