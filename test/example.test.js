// IMPORT MODULES under test here:
import { mungeSeen, mungeCaught, mungeNames } from '../charts/mungeUtils.js';
const test = QUnit.test;

const currentStats = [
    { 'pokemon':'bulbasaur', 'seen':2, 'caught':1 },
    { 'pokemon':'wartortle', 'seen':5, 'caught':2 },
    { 'pokemon':'blastoise', 'seen':4, 'caught':1 }];

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
