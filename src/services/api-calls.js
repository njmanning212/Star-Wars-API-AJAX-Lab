const baseUrl = 'https://swapi.dev/api/'

export async function getStarships() {

  const firstResponse = await fetch(`${baseUrl}starships/`);
  const firstData = await firstResponse.json()
  const firstStarships = firstData.results

  const secondResponse = await fetch('https://swapi.dev/api/starships/?page=2');
  const secondData = await secondResponse.json()
  const secondStarships = secondData.results

  const thirdResponse = await fetch('https://swapi.dev/api/starships/?page=3');
  const thirdData = await thirdResponse.json()
  const thirdStarships = thirdData.results

  const fourthResponse = await fetch('https://swapi.dev/api/starships/?page=4');
  const fourthData = await fourthResponse.json()
  const fourthStarships = fourthData.results

  const starships = [...firstStarships, ...secondStarships, ...thirdStarships, ...fourthStarships]
  return starships
}

export async function getStarship(starshipId) {
  const response = await fetch(`${baseUrl}starships/${starshipId}/`)
  const starship = await response.json()
  return starship
}