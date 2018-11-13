import Link from 'next/link'

const Index = () => (
  <div>
    <Link href="/about">
      <button style={{ fontSize: 20 }}>Go to About page</button>
    </Link>
      <p>Hello Next.js</p>
  </div>
)

export default Index
