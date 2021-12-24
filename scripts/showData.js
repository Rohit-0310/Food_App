//getData()
//append()

// For Home Page index.html
async function getData(url){

    let res = await fetch (url)
    let data = await res.json()

    return data

}


function append(data, container){

    //let categories = document.createElement("p")
    data.categories.forEach(({strCategory, strCategoryThumb}) => {

        let div = document.createElement('div')
        let p = document.createElement('p')

        p.innerText = strCategory


        let img = document.createElement('img')
        img.src = strCategoryThumb

        div.append(img,p,p)

        container.append(div)
    });

}

export {getData,append}


//-----------------------------//

// For Receipe page

async function getMealsData(url){

    let res = await fetch (url)
    let data = await res.json()

    return data

}

function appendMeals(data, container){

    //let meals = document.createElement("p")
    data.meals.forEach(({strMeal, strMealThumb}) => {

        let div = document.createElement('div')
        let p = document.createElement('p')

        p.innerText = strMeal


        let img = document.createElement('img')
        img.src = strMealThumb

        div.append(img,p,)

        container.append(div)
    });

}
export {getMealsData,appendMeals}









/*
function append(data, container){

    
    data.forEach((el){

        let div = document.createElement('div')
        let p = document.createElement('p')

        p.innerText = el.strMeal

        let img = document.createElement('img')

        innerHeight.src = el.strMealThumb

        div.append(img,p)

    })



}
*/