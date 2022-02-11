function displayMenu (menuNumber: number) {
    if (menuNumber == 1) {
        for (let index = 0; index < 2; index++) {
            veganRecommendation = veganCourses._pickRandom()
            game.splash(veganRecommendation)
            veganCourses.removeAt(veganCourses.indexOf(veganRecommendation))
        }
    } else if (menuNumber == 2) {
        for (let index = 0; index < 2; index++) {
            pescatarianRecommendation = pescatarianCourses._pickRandom()
            game.splash(pescatarianRecommendation)
            pescatarianCourses.removeAt(pescatarianCourses.indexOf(pescatarianRecommendation))
        }
    } else if (menuNumber == 3) {
        for (let index = 0; index < 2; index++) {
            normalRecommendation = normalCourses._pickRandom()
            game.splash(normalRecommendation)
            normalCourses.removeAt(normalCourses.indexOf(normalRecommendation))
        }
    } else {
    	
    }
}
let normalRecommendation = ""
let pescatarianRecommendation = ""
let veganRecommendation = ""
let normalCourses: string[] = []
let pescatarianCourses: string[] = []
let veganCourses: string[] = []
game.showLongText("Hi! Welcome to Viva la Special! We offer inclusive options for those with dietary restrictions!", DialogLayout.Bottom)
let dietaryRestrictions = game.askForNumber("(1) Vegan (2) Pescatarian (3) No restrictions", 3)
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
pescatarianCourses = [
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
