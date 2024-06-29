var endpoint = 'http://localhost:3000/api'

export async function getCalls() {
  const data = await fetch(`${endpoint}/calls`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}

export async function getTickets() {
  const data = await fetch(`${endpoint}/tickets`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}
