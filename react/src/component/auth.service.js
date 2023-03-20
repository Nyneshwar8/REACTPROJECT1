
export async function doLogin(e, p) {
    return await fetch("http://localhost:8080/auth/login", {
      method: "post",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email:e, password: p})
    });
  }
  
  
  export function greet() {
      return fetch("http://localhost:8080/greet", {
        method: "get",
        headers: { 'Content-Type': 'text/html' }
       
      });
    }