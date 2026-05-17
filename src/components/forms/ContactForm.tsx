'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { contactInfo } from '@/data/contact';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [mailtoLink, setMailtoLink] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const mailSubject = encodeURIComponent(values.subject || `Contact from ${values.name}`);
    const mailBody = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`,
    );
    setMailtoLink(`mailto:${contactInfo.generalEmail}?subject=${mailSubject}&body=${mailBody}`);
  }

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (mailtoLink) {
      window.location.href = mailtoLink;
      // Clear mailtoLink after navigation in a defer, to avoid cascading renders
      timer = setTimeout(() => setMailtoLink(null), 0);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  },
    [mailtoLink]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Controller
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#002147] font-bold uppercase tracking-widest text-[10px]">Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your full name"
                  {...field}
                  className="rounded-none border-gray-200 focus:border-[#002147] focus:ring-0 transition-colors"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Controller
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#002147] font-bold uppercase tracking-widest text-[10px]">Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="your.email@example.com"
                  {...field}
                  className="rounded-none border-gray-200 focus:border-[#002147] focus:ring-0 transition-colors"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Controller
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#002147] font-bold uppercase tracking-widest text-[10px]">Subject</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="flex h-10 w-full rounded-none border border-gray-200 bg-background px-3 py-2 text-sm focus:border-[#002147] focus:outline-none focus:ring-0 transition-colors cursor-pointer"
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="hackathon">Hackathon</option>
                  <option value="participation">Participation</option>
                  <option value="sponsor">Sponsor</option>
                  <option value="call for paper">Call for Paper</option>
                  <option value="call for workshop">Call for Workshop</option>
                  <option value="call for poster presentation">Call for Poster Presentation</option>
                  <option value="general query">General Query</option>
                  <option value="registration">Registration</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Controller
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#002147] font-bold uppercase tracking-widest text-[10px]">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message..."
                  className="resize-none rounded-none border-gray-200 focus:border-[#002147] focus:ring-0 transition-colors min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-[#002147] hover:bg-[#003366] text-white rounded-none py-6 uppercase tracking-[0.2em] font-bold text-xs transition-all duration-300"
        >
          Send Message
        </Button>
      </form>
    </Form>
  );
}
