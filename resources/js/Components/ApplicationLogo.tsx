import React from 'react';

export default function ApplicationLogo({ className }: { className?: string }) {
  return (
    <img className={className} src='/logo.png' />
  );
}
