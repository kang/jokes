export const upVote = joke => {
  fetch('/jokes/up-vote', {
    method: 'POST',
    body: JSON.stringify(joke),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
};

export const downVote = joke => {
  fetch('/jokes/down-vote', {
    method: 'POST',
    body: JSON.stringify(joke),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
};
