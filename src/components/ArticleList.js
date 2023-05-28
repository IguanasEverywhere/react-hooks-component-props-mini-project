import React from "react";
import Article from './Article';

function ArticleList({posts}) {
  let arts = posts.map(art => {
    return <Article key={art.id} title={art.title} date={art.date} preview={art.preview} minutes={art.minutes} />
  })

  return (
    <main>
      {arts}
    </main>
  )

}

export default ArticleList;