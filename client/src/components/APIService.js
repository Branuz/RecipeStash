export default class APIService {
    static async UpdateRecipe(id, body) {
        const response = await fetch(`/update/${id}`, {
            "method": "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        return await response.json()
    }

    static async InsertRecipe(body) {
        const response = await fetch(`/add`, {
            "method": "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        return await response.json()
    }

    static DeleteRecipe(id, body) {
        console.log(body)
        return fetch(`/delete/${id}`, {
            "method" : "DELETE",
            headers: {
                "Content-Type":"application/json",
                "token":body
            },
        })
    }

    static async CreateAccount(body) {
        fetch(`/create-account`, {
            "method": "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        })
        .then(response => {
            if (response.redirected) {
                window.location.href = response.url;
            }
        })
    }

    static async VerifyAccount(body) {
       const response = await fetch("/get/user", {
            "method": "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
          })
          return await response
    }

    static async VerifyRecipeCreator(body) {
        const response = await fetch("/recipe/verify", {
             "method": "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify(body),
           })
           
           return await response
     }

    static async getAllRecipes() {
        const response = await fetch("/get", {
            "method":"GET",
            headers: {
              "Content-Type":"application/json"
            }
          })
          .then(response => {
            if(response.status === 200) {
              return response.json()
            }
          })
          
          return await response
    }

    static async getRecipeIngredients(id) {
        const response = await fetch(`/get/${id}`, {
            "method":"GET",
            headers: {
              "Content-Type":"application/json"
            }
          })
          .then(response => {
            if(response.status === 200) {
              return response.json()
            }
          })
          
          return await response
    }
}

