import axios from 'axios'


  
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));

export const fetchFromTMDB = async (url)=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjQ3ZDFhNzAwNWQ4Yjc2NGI0NjE5YWIxYmU3YTVhMyIsIm5iZiI6MTczNDcyNTk4MS43Niwic3ViIjoiNjc2NWQxNWRhZmY1YTdkNjQxNzRiMWQ3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.CVCbknyeLGk4Otyhj6rjVlNOkJysqHU7hCHwlg0acwg'
        }
      };
}