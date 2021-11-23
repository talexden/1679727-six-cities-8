function getRatingStyle (rating: number): {width: string}{
  return {width: `${rating * 20}%`};
}

function setStateSelector (stateArray: boolean[], id: number) {
  return [...stateArray.slice(0, id), true, ...stateArray.slice(id+1)]
}



export {getRatingStyle, setStateSelector};
