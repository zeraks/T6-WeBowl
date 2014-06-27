var assert = chai.assert;

describe('simple', function ()
{
    it('a literal string hello should equal the literal string hello', function ()
    {
        assert.equal("hello", "hello");
    })
})

function ButtonPlay_onclick()
{
    //allStrike();
    //allGutter();
    randomScore();
}

function ButtonNewGame_onclick()
{
    for (var i = 1; i <= 10; i++)
    {
        document.getElementById("Img" + i).style.visibility = "visible";
    }
}

function allStrike()
{
    var arr = new Array();
    
    for (var i = 1; i <= 20; i++)
        arr[i] = 10;

    for (var i = 1; i <= 10; i++)
    {
        document.getElementById("Img" + i).style.visibility = "hidden";
    }
}

function allGutter()
{
    var arr = new Array();

    for (var i = 1; i <= 20; i++)
        arr[i] = 0;


}

function randomScore()
{
    var num = Math.floor((Math.random() * 10) + 1);
    var arr = new Array();

    for (var i = 1; i < 20; i++)
        arr[i] = 10;

    for (var i = 1; i < num; i++)
    {
        document.getElementById("Img" + i).style.visibility = "hidden";
    }
}

