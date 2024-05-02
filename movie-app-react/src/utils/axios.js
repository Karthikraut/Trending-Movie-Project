import axios from 'axios'
const OPTIONS =axios.create ({
  base_url: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2QxYjZjMTZlZjQ0MzJhNDBlZjViMzQ0NjFhMDA0OCIsInN1YiI6IjY2MmJjMTc0YzFmZmJkMDExZTZjMmZjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oskMkKziBQv9AJdGdK_oByPoOqHa3hc1zKNu80sAeQA'
  }
})
export default OPTIONS;

