const cartsDiv = document.getElementById('carts');

fetch("https://dummyjson.com/carts")
    .then(value => value.json())
    .then(cartsObject => {
        const {carts} = cartsObject;
        console.log(carts);

        for (const cart of carts) {
            const div = document.createElement('div');
            div.classList.add('cart-container');
            const divWithInfo = document.createElement('div');
            divWithInfo.innerText = `
            "discountedTotal": ${cart.discountedTotal};
            "total": ${cart.total},
            "totalProducts": ${cart.totalProducts};
            "totalQuantity": ${cart.totalQuantity};: 
            "userId": ${cart.userId}; 
            `
            const ol = document.createElement('ol');
            for (const product of cart.products) {
                const li = document.createElement('li');
                const p = document.createElement('p');
                li.innerText = `
                    "id":  ${product.id},
                    "title": ${product.title},
                    "discountPercentage": ${product.discountPercentage}, 
                    "discountedTotal": ${product.discountedTotal}
                    "price": ${product.price}
                    "quantity": ${product.quantity}
                    "total":${product.total}
                `
                const img = document.createElement('img');
                img.src = product.thumbnail;
                li.append(img, p);
                ol.appendChild(li)
            }
            div.append(divWithInfo, ol);
            cartsDiv.appendChild(div);
        }
    });

