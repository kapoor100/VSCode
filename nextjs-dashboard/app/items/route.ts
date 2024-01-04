export const dynamic = 'force-dynamic' // defaults to auto
export async function GET() {
    const res = await fetch('https://data.mongodb-api.com/...', {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    })
    const data = await res.json()
   
    return Response.json(data)
  }
  export async function POST() {
    const res = await fetch('https://data.mongodb-api.com/...', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'API-Key': process.env.DATA_API_KEY!,
      },
      body: JSON.stringify({ time: new Date().toISOString() }),
    })
   
    const data = await res.json()
   
    return Response.json(data)
  }
  

