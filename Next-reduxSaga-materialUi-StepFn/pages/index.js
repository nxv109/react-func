import Head from 'next/head'
import useSWR from 'swr'
import { useSelector } from 'react-redux'

import { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  const appState = useSelector(state => state)
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/todos', fetcher)
  if (!error && !data) return <div>Loading...</div>

  console.log('index page', appState)

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Hi there, I am Vinh, App Developer it's Me]</p>
        {
          data.map(v => (
            <Link href={`/profiles/[id]`} as={`/profiles/${v.id}`} key={v.id} style={{ display: "block" }}>
              {v.title}
            </Link>
          ))
        } 
      </section>
    </>
  )
}

// export async function getStaticProps() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos', { method: 'GET' });
//   const data = await response.json();

//   return {
//     props: { todos: data }
//   }
// }