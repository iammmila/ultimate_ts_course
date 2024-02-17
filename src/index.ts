//https://mywebapp.com/api/users
//https://mywebapp.com/api/products
//if we want to fetch this api endpoints:

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface User {
  username: string;
}

interface Product {
  title: string;
}

let result = fetch<User>("url");
result.data?.username;
