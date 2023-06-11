import ResumeHeader from './ResumeHeader'

const MyDocument: React.FC = () => {
  return (
    <>
      <ResumeHeader />
      <main className="flex p-10">
        <section className="bg-red">Side</section>
        <section className="bg-green">Main</section>
      </main>
    </>
  )
}

export default MyDocument
