import type { Post } from './_util/newt-client'
import Link from 'next/link'
import { client } from './_util/newt-client'

export default async function Page() {
  const data = await client.getContents<Post>({
    appUid: 'blog',
    modelUid: 'post',
  })

  return (
    <div className="p-4">
      <div>記事一覧</div>
      <ul className="list-disc">
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
    </div>
  )
}
