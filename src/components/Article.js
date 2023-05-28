import React from "react";


function Article({title, date="January 1, 1970", preview, minutes}) {

  let minutesEmojis = '';

  if (minutes < 30) {
    minutesEmojis += '☕️'
    let divByFive = Math.floor(minutes / 5);
    for (let i = 0; i < divByFive; i++) {
      minutesEmojis += '☕️'
    }
  } else if (minutes >= 30) {
    let divByTen = Math.ceil(minutes / 10);
    for (let i = 0; i < divByTen; i++) {
      minutesEmojis += '🍱';
    }

  }
  return (
    <article>
      <h3>{title}</h3>
      <small>{date} {minutesEmojis} {minutes} min read</small>
      <p>{preview}</p>
    </article>

  )
}

export default Article;