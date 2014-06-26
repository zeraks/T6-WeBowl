function strikeCountTest(ArrScores)
{
    var counter = 0;
    for (var i = 0; i < ArrScores.length; i++)
    {
        counter += ArrScores[i];
    }
    return counter;
//    alert(counter);
//    if (counter == 100)
//        return true;
//    else
//        return false;
}

var myScores1 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
var myScores2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var myScores3 = [2, 10, 1, 4, 0, 10, 10, 10, 10, 10];

var isAllStrikes = strikeCountTest(myScores1);
var assert = chai.assert;

describe('simple', function ()
{
    it('perfect score', function ()
    {
        alert(isAllStrikes);
        assert.equal(isAllStrikes, true);
    })
})



//alert("isAllStrikes? " + isAllStrikes);
