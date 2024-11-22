import Container from '@/components/layout/Container'
import Header from '@/components/layout/Header'
import { EssayExamSection } from '@/components/pages/class/ExamSection'
import React from 'react'

function page() {
  return (
    <Container>
        <Header text='Buat Soal' />

        <EssayExamSection id='1' />
    </Container>
  )
}

export default page
