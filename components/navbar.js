function navbar() {

    return `<div id="navbar">
        <h3><a href="/">Home</a></h3>

        <div id="options">
            <h3><a href="receipe_of_the_day.html">Receipe of the day</a></h3>
            <h3><a href="latest_receipe.html">Latest Receipe</a></h3>
            <input type="text" id="meals_Search" placeholder="Search Meals" />
            <button onclick="meals_Search()">Search Meals</button>
            <h3><a href="#">Sign In</a></h3>
            <h3><a href="signup.html">Sign Up</a></h3>
        </div>
    </div>`

}


export default navbar