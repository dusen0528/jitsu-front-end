import { useParams } from 'react-router-dom'

export default function PlaceholderPage({ name }) {
  const params = useParams()
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{name}</h1>
      {Object.keys(params).length > 0 && (
        <pre>{JSON.stringify(params, null, 2)}</pre>
      )}
    </div>
  )
}
