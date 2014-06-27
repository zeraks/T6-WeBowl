function calculateScore(ArrScores)
{
    var counter = 0;
    for (var i = 0; i < ArrScores.length; i++)
    {
        counter += ArrScores[i];
    }
    return counter;

}

var myScores1 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
var myScores2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var myScores3 = [2, 10, 1, 4, 0, 10, 10, 10, 10, 10];


var assert = chai.assert;

describe('simple', function ()
{
    it('0 score', function ()
    {
        var myScores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var score = calculateScore(myScores);
        assert.equal(score, 0);
    })

    it('Last srike and two extra', function ()
    {
        var myScores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 1, 1];
        var score = calculateScore(myScores);
        assert.equal(score, 12);
    })

    it('Last spare and one extra', function ()
    {
        var myScores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 9, 2];
        var score = calculateScore(myScores);
        assert.equal(score, 12);
    })

    xit('Perfect', function ()
    {
        var myScores = [10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 10 ,10];
        var score = calculateScore(myScores);
        assert.equal(score, 300);
    })
})



//alert("isAllStrikes? " + isAllStrikes);
