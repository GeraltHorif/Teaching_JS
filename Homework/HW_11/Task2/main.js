const recipesDiv = document.getElementById('recipes');

fetch('https://dummyjson.com/recipes')
    .then(value => value.json())
    .then(recipesObject => {
        const {recipes} = recipesObject;
        console.log(recipes);
        for (const recipe of recipes) {
            const div = document.createElement('div');
            div.classList.add('recipe-container');

            const divWithInfo = document.createElement('div');
            div.classList.add('recipe-info');
            divWithInfo.innerText = `
        "id": ${recipe.id},
            "name": "${recipe.name}",
            "difficulty": "${recipe.difficulty}",
            "prepTimeMinutes": ${recipe.prepTimeMinutes},
            "cookTimeMinutes": ${recipe.cookTimeMinutes},
            "caloriesPerServing": ${recipe.caloriesPerServing},
            "rating": ${recipe.rating}
        `;
            const ul = document.createElement('ul');
            for (const ingredient of recipe.ingredients) {
                const li = document.createElement('li');
                li.classList.add('ingredient');
                li.textContent = ingredient;
                ul.appendChild(li);
            }
            const img = document.createElement('img');
            img.src = recipe.image;
            img.classList.add('recipe-img');
            img.alt = recipe.name;
            div.append(divWithInfo, ul, img);
            recipesDiv.appendChild(div);
        }
    });
