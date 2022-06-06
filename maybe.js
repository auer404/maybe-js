const maybe = function(){
            
            if (arguments.length == 0) {
                return maybe.true();
            } else {
                return maybe.return(arguments[0]);
            }
        }
        
        maybe.true = function(){
            return Math.random() >= 0.5;
        }
        
        maybe.do = function(function_to_try) {
            
            var return_object = new Object();
            return_object.else = function(){}
            
            if (this.true()) {
                function_to_try();
            } else {
                return_object.else = function(alternate_function){alternate_function();}
            }
            
            return return_object;
        }
        
        maybe.return = function(value_to_try_return) {
            
            var return_object = Object.assign(value_to_try_return,new Object());
            
            if (this.true()) { 
                
                return_object.else = function(){return value_to_try_return;}
                
                return return_object;
                
            } else {
                
                var else_return_object = Object.assign(maybe(),new Object());
                
                else_return_object.else = function(alternate_return_value){
                    if (alternate_return_value) {
                        return alternate_return_value;
                    } else {
                        return maybe.true();
                    }
                }
                
                return else_return_object;
            }
            
        }
