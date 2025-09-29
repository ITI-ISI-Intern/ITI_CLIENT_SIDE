export default class DataFetcher{
    async getUser(id) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await res.json();
        return data
    }
}