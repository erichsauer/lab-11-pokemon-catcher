// IMPORT MODULES under test here:
import { mungeSeen, mungeCaught, mungeNames, mungePics } from '../charts/mungeUtils.js';
const test = QUnit.test;

const currentStats = [
    { 'pokemon':'bulbasaur', 'seen':2, 'caught':1 },
    { 'pokemon':'wartortle', 'seen':5, 'caught':2 },
    { 'pokemon':'blastoise', 'seen':4, 'caught':1 }];

const pokeArray = [
    {
        '_id':'5cef3501ef6005a77cd4fd17',
        'pokemon':'bulbasaur',
        'id':1,
        'species_id':1,
        'height':7,
        'weight':69,
        'base_experience':64,
        'type_1':'grass',
        'type_2':'poison',
        'attack':49,
        'defense':49,
        'hp':45,
        'special_attack':65,
        'special_defense':65,
        'speed':45,
        'ability_1':'overgrow',
        'ability_2':'NA',
        'ability_hidden':'chlorophyll',
        'color_1':'#78C850',
        'color_2':'#A040A0',
        'color_f':'#81A763',
        'egg_group_1':'monster',
        'egg_group_2':'plant',
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'generation_id':1,
        'evolves_from_species_id':'NA',
        'evolution_chain_id':1,
        'shape_id':8,
        'shape':'quadruped',
        'pokebase':'bulbasaur',
        'pokedex':'http://www.pokemon.com/us/pokedex/bulbasaur'
    },
    {
        '_id':'5cef3501ef6005a77cd4fd19',
        'pokemon':'ivysaur',
        'id':2,
        'species_id':2,
        'height':10,
        'weight':130,
        'base_experience':142,
        'type_1':'grass',
        'type_2':'poison',
        'attack':62,
        'defense':63,
        'hp':60,
        'special_attack':80,
        'special_defense':80,
        'speed':60,
        'ability_1':'overgrow',
        'ability_2':'NA',
        'ability_hidden':'chlorophyll',
        'color_1':'#78C850',
        'color_2':'#A040A0',
        'color_f':'#81A763',
        'egg_group_1':'monster',
        'egg_group_2':'plant',
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
        'generation_id':1,
        'evolves_from_species_id':'1',
        'evolution_chain_id':1,
        'shape_id':8,
        'shape':'quadruped',
        'pokebase':'ivysaur',
        'pokedex':'http://www.pokemon.com/us/pokedex/ivysaur'
    },
    {
        '_id':'5cef3501ef6005a77cd4fd1a',
        'pokemon':'charmander',
        'id':5,
        'species_id':4,
        'height':6,
        'weight':85,
        'base_experience':62,
        'type_1':'fire',
        'type_2':'NA',
        'attack':52,
        'defense':43,
        'hp':39,
        'special_attack':60,
        'special_defense':50,
        'speed':65,
        'ability_1':'blaze',
        'ability_2':'NA',
        'ability_hidden':'solar-power',
        'color_1':'#F08030',
        'color_2':'NA',
        'color_f':'NA',
        'egg_group_1':'monster',
        'egg_group_2':'dragon',
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        'generation_id':1,
        'evolves_from_species_id':'NA',
        'evolution_chain_id':2,
        'shape_id':6,
        'shape':'upright',
        'pokebase':'charmander',
        'pokedex':'http://www.pokemon.com/us/pokedex/charmander'
    }];

test('takes in an array of objects and returns an array of the "seen" values', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = [2, 5, 4];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = mungeSeen(currentStats);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('takes in an array of objects and returns an array of the "caught" values', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = [1, 2, 1];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = mungeCaught(currentStats);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('takes in an array of objects and returns an array of the "pokemon" values', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = ['bulbasaur', 'wartortle', 'blastoise'];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = mungeNames(currentStats);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('takes in an array of objects and returns an array of the "url_image" values', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = ['http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png', 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png', 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = mungePics(pokeArray);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
