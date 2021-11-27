function getRatingStyle (rating: number): {width: string}{
  return {width: `${rating * 20}%`};
}

function setStateSelector (stateArray: boolean[], id: number): boolean[] {
  return [...stateArray.slice(0, id), true, ...stateArray.slice(id+1)];
}

function formatDateYYYYMMDD (date: Date): string {
  let dd = '00';
  let mm = '00';
  const d = date.getDate();
  dd = (d < 10) ? d.toString().padStart(2, '0') : d.toString();
  const m = date.getMonth() + 1;
  mm = (m < 10) ? m.toString().padStart(2, '0') : m.toString();
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

function formatDateMMMMYYYY (date: Date): string {
  return (
    new Date(date).toLocaleString('en', {
      year: 'numeric',
      month: 'long',
    })
  );
}

export {getRatingStyle, setStateSelector, formatDateYYYYMMDD, formatDateMMMMYYYY};

