// app/upload-success/page.tsx
"use client"; // Mark this component as a Client Component
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function UploadSuccess() {
  const router = useRouter();

  // Optional: Redirect back to the home page after a few seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 2000); // Redirect after 5 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <h1>Upload Successful!</h1>
      <p>Your video has been uploaded successfully.</p>
      <p>You will be redirected to the home page shortly.</p>
    </div>
  );
}