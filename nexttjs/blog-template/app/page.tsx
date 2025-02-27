import process from 'node:process'
import { type Content, createClient } from 'newt-client-js'
import Link from 'next/link'

const client = createClient({
  spaceUid: 'blog-216815',
  token: process.env.API_KEY as string,
  apiType: 'cdn', // You can specify "cdn" or "api".
})

interface Post extends Content {
  title: string
  body: string
}

export default async function Page() {
  const data = await client.getContents<Post>({
    appUid: 'blog',
    modelUid: 'post',
  })

  return (
    <div>
      <header>
        <div className="bg-red-200 p-4 text-4xl font-bold text-red-900">
          hello
        </div>
      </header>
      <main>
        <ul className="list-inside list-disc">
          {data.items.map(item => (
            <li key={item._id}>
              <h1>
                <Link href={`/post/${item._id}`} className="underline">
                  {item.title}
                </Link>
              </h1>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
