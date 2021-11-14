type getRatingStyleProperty = {
  width: string,
}

function getRatingStyle (rating: number): getRatingStyleProperty {
  return {width: `${rating * 20}%`};
}

export {getRatingStyle};
