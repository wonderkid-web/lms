import Container from '@/component/layout/Container'
import Header from '@/component/layout/Header'
import { EssayExamSectionTeacher } from '@/component/pages/class/ExamSection'
import React from 'react'

function page() {
  return (
    <Container>
      <Header text='Buat Soal' />

      <EssayExamSectionTeacher id='1' />
    </Container>
  )
}

export default page
