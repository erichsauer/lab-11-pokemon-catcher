## THE PLAN

# GOALS
- present user with three random pokemon to start
- on click, present three new random pokemon
- after 10 rounds, show results

#HTML SETUP
- static design
    - div to hold pokemon
    - div to hold results and reset button

#JS SETUP
- functions
    - getThreePokemon
        - getRandomPokemon
            - generate random number between 0 and however many pokemon are in the database
            - retrieve that pokemon from database
            - find that pokemon's image & name data
        - findPokemonById
            - take in id
            - return array item with that id
        - renderPokemon
            - create the elements in the HTML that are the pokemon images
        - getPokemonStats (from localStorage)
            - get localStorage string if it exists
            - parse it out and return as array
        - setPokemonStats (from localStorage)
            - stringify an array
            - set to localStorage
        - incrementSeen
            - if pokemon shows up, seen++
        - incrementCaught
            - if pokemon is clicked, caught++

#CSS Setup
- fancy hover: stuff
- toggle display:none for visibility 
