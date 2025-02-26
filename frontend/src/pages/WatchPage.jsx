import { useState } from "react";
import { useParams } from "react-router-dom";
import {useContentStore} from "../store/ContentStore";

export default function WatchPage() {
  const { id } = useParams();
  const [trailers, setTrailers] = useState([]);
  const [currentTrailerIds, setCurrentTrailerIds] = useState(0);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null);
  const {contentType}=useContentStore()
  return <div>WatchPage</div>;
}
