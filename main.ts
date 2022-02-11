function displayMenu (menuNumber: number) {
    if (menuNumber == 1) {
        for (let index = 0; index < 2; index++) {
            veganRecommendation = veganCourses._pickRandom()
            game.splash(veganRecommendation)
            veganCourses.removeAt(veganCourses.indexOf(veganRecommendation))
        }
    } else if (menuNumber == 2) {
    	
    } else if (menuNumber == 3) {
    	
    }
}
let veganRecommendation = ""
let veganCourses: string[] = []
game.showLongText("Hi! Welcome to Viva la Special! We offer inclusive options for those with dietary restrictions!", DialogLayout.Bottom)
let dietaryRestrictions = game.askForNumber("", 3)
let chef = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 3 3 3 3 3 3 3 . 
    . . . . 3 3 3 3 3 3 3 . . 3 3 . 
    . 3 2 3 . 3 3 . 3 3 . 3 3 . . . 
    3 . . . . 3 . 3 3 3 2 . . 7 . . 
    3 . . . . 3 3 3 3 3 . . . . . . 
    3 . . . . 7 3 . . 3 . . . . . . 
    3 3 . . . 3 3 2 . . 3 3 3 7 . . 
    . 7 3 3 3 3 3 . 3 3 3 3 3 3 . . 
    . . . . 3 3 3 3 3 . . . 3 3 . . 
    . . . 2 3 3 3 . 3 . . . . 3 . . 
    . . . 3 3 3 . 7 . 3 3 2 3 3 . . 
    . . . 3 . . . 3 . . . . . 3 . . 
    . 7 . 3 . . . 3 3 3 3 3 3 . . . 
    . . . 3 . 2 . . . 7 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
veganCourses = [
"Vegan Chicken Nuggets",
"Tofu Power Bowl",
"Veggie Burger with side of fries",
"Vegan Curry",
"Red leaf"
]
let normalCourses = [
"Grilled Swordfish",
"Blackened Salmon",
"Tuna Tartare",
"Nigiri",
"Scallop salad"
]
normalCourses = [
"Mac & Cheese",
"Burger & Fries",
"Chicken Parmesian",
"Turkey Sandwich",
"Steak & Potatoes"
]
displayMenu(dietaryRestrictions)
