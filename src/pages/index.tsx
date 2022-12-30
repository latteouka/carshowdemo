import Carshow from '@/components/canvas/Carshow'
import Info from '@/components/dom/Info'

// Dom components go here
export default function Page(props) {
  return <Info />
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => <Carshow />

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
