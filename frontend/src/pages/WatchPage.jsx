import { useParams } from "react-router-dom"

export default function WatchPage() {
    const params = useParams();
    console.log(params)
  return (
    <div>WatchPage</div>
  )
}