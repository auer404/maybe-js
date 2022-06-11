# maybe.js
A small JavaScript library for maybe doing things

/*********** User Manual ***********/
        
        /*
        
        maybe()
        > Returns true or false
        
        maybe(value)
        > Returns either the passed value or maybe()
        
        maybe(value1).else(value2)
        > Returns value1 or value2
        
        */
        
        /*****/
        
        
        if (maybe()) {
            // This has a 50% chance to happen   
        } else {
            // This happens otherwise
        }
        
        
        /*****/
        
        
        maybe.do( function(){
            // This has a 50% chance to happen          
        }).else( function(){
            // This happens otherwise        
        });
        
        
        /*****/
        
        
        function function_A(){
            // This will have a 50% chance to happen
            // when this function is called by maybe.do
        }
        
        function function_B(){
            // This will happen otherwise
            // when this function is called by maybe.do().else
        }
        
        // Like this
        maybe.do(function_A).else(function_B);
        
        
        /*****/
