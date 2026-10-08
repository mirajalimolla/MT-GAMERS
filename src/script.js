func
try {
    const res = await fetch("https://mockend.com/api/mockend/demo/posts?limit=1");
    console.log(res.json());
} catch (error) {
    console.log(error);
}























// async function getUser(id) {
//   try {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//     if (!res.ok) throw new Error(`HTTP ${res.status}`);
//     return await res.json();
//   } catch (err) {
//     console.error("Request failed:", err);
//   }
// }
// let data = await getUser(1);
// console.log(data.email);