Flatten Object
--------------


### Usage

    var flatten= require("flatten-js-object")

    var obj = {
        ABC:123
        DEF:{
            GEF:4321
        }
    }

    var simpleObj= flatten(obj);
    /*
     {
      ABC:123
      DEF.GEF:4321
     }
    */