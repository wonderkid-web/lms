import Container from '@/components/layout/Container'
import Header from '@/components/layout/Header'
import { UploadSoalGuru } from '@/components/pages/guru/UploadSoalGuru'

import React from 'react'

function page() {
  return (
    <Container>
      <Header text='Buat Soal' />

      <UploadSoalGuru />
    </Container>
  )
}

export default page
