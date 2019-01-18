import React from 'react'
import { withRouteData } from 'react-static'

type Article = {
  category: string
  date: Date
  image: string
  title: string
}
export default withRouteData(({ articles }: { articles: Article[] }) => (
  <div className="mb-8">
    <div className="flex items-baseline justify-between border-b-2 border-grey-light mb-10">
      <h2 className="text-base font-display font-bold tracking-wide uppercase py-4 border-b-2 border-indigo -mb-2px">
        Articles
      </h2>
      <a
        href="https://medium.com/@refactoringui"
        className="font-semibold text-indigo-dark hover:underline no-underline"
      >
        View All
      </a>
    </div>
    <div className="flex flex-wrap -mx-3">
      {articles.map((article: Article) => (
        <Card key={article.title} article={article} />
      ))}
    </div>
  </div>
))

function Card({ article }: { article: Article }) {
  console.log({ article })
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-3 flex flex-col mb-8">
      <a
        href="https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886"
        className="no-underline bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition flex-1 flex flex-col overflow-hidden"
      >
        <div>
          <div
            className="bg-cover aspect-16x9"
            style={{
              // backgroundImage: `url('${article.image}')`,
              backgroundImage:
                "url('https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/homepage/article-tips.png')",
            }}
          />
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between">
          <h3 className="font-display text-black no-underline mb-4">
            {article.title}
          </h3>
          <div>
            <p className="inline-flex items-center">
              <span className="text-grey-dark text-sm mr-2">medium.com</span>
              <svg
                className="h-4 w-4 text-grey fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path d="M14 3.41l-7.3 7.3a1 1 0 0 1-1.4-1.42L12.58 2H9a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V3.41zM12 11a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h3a1 1 0 1 1 0 2H2v10h10v-3z" />
              </svg>
            </p>
          </div>
        </div>
      </a>
    </div>
  )
}
