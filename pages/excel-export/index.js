import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function ExcelPage ({}) {
const router = useRouter()
useEffect(() => {
    router.push("/")
}, [])

  return (
    <>
    </>
  );
};


