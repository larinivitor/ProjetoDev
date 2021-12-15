export const getOngs = () => fetch("http://localhost:3333/instituicoes").then(res => res.json())

export const createOng = (ong) => fetch("http://localhost:3333/instituicoes", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(ong)
})  

export const updateOng = (ong, id) => fetch(`http://localhost:3333/instituicoes/${id}`, {
  method: "PUT",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(ong)
})  

export const getOng = (id) => fetch(`http://localhost:3333/instituicoes/${id}`).then(res => res.json())