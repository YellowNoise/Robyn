'use client';

import Image from 'next/image'
import styles from './page.module.css'
import Iobutton from './iobutton'
import { useState } from 'react';

export default function Home() {
  const [stringState,setStringState] = useState("someString");
  return (
    <main className={styles.main}>
      <div>
        {stringState}
        <Iobutton input="arbitraryString" outputFn={setStringState} />
      </div>
    </main>
  )
}
