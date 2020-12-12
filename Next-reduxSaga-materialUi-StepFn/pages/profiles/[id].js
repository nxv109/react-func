import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Layout from '../../components/layout'

export default function MyProfile({ todo, avatar_url }) {
  const router = useRouter()

  console.log(avatar_url) // pageProps ===> avatar_url

  return (
    <Layout>
      <h1>This is my profile: id - {router.query.id}</h1>
      <p>Title: {todo.title}</p>
      <a href={avatar_url}>avatar_url</a>
    </Layout>
  )
}

MyProfile.propTypes = {
  todo: PropTypes.object
}

MyProfile.defaultProps = {
  todo: {
    completed: false,
    id: 1,
    title: 'This is default title',
    userId: 1
  }
}

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', { method: 'GET' });
  const todos = await response.json();
  const mapTodosToParams = todos.map(v => {
    return {
      params: { id: v.id + '' }
    }
  })

  return {
    paths: mapTodosToParams,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`, { method: 'GET' });
  const todo = await response.json();

  return {
    props: { todo }
  }
}