// Your tests here
import {pointsForWord} from '../utils'

describe("pointsForWord", ()=>{
    it("Calculates the total points for a word( 1 point per vowel, 2 per constant)", ()=>{
        const word= 'tEsT'
        const points = pointsForWord(word);
        expect(points).toBe(7);
    });
});
