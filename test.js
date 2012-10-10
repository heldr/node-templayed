(function( templayed , assert ){

    var template  = "<p>{{name}}</p><ul>{{#names}}<li>{{name}}</li>{{/names}}</ul>{{^names}}Sorry, no people to list!{{/names}}<p>{{name}}</p>",
        variables = {name: "Chunk Norris", names: [{name: "Paul Engel"}, {name: "Clint Eastwood"}]},
        expected  = "<p>Chunk Norris</p><ul><li>Paul Engel</li><li>Clint Eastwood</li></ul><p>Chunk Norris</p>";

    assert.equal( templayed(template)(variables) , expected );

})( require('./templayed') , require('assert') );