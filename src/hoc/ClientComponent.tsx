'use client';

import React, { useState } from 'react';

export default function ExampleClientComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);

  return <>{children}</>;
}
