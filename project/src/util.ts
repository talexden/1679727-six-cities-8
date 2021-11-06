type getRatingStyleType = {
  width: string;
}

export function getRatingStyle(rating: number): getRatingStyleType {
  return {width: `${rating * 20}%`};
}
