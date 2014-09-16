/*
  Christian Castaneda
  September 16th,2014
  SDI
  Lab 6 arrays 
*/

// Function
    
    var array = function()
    {
        var footballTeams = new Array ( "Jets", "Packers",    "49ers", "Seahawks", "Patriots",
                                       "Bears", "Broncos",   "Saints",   "Eagles",   "Cowboys");
                                         
        var teamCitys = new Array ("New York", "Green Bay", "San Francisco",      "Seattle", "New England",
                                    "Chicago",    "Denver",   "New Orleans", "Philadelphia",       "Dallas");  
                                    
        for (i = 0; i < footballTeams.length; i++)
        {
           console.log("The " + footballTeams[i] + " are a football team in the National Football League and their hometown is " + teamCitys[i] + ".");
        };    
        
        footballTeams.push("Chiefs");
        teamCitys.push("Kansas City");
        
        console.log("Another team in the NFL is the " + teamCitys[10] + " " + footballTeams[10] + ".\nSo, ");
        
         for (i = 0; i < footballTeams.length; i++)
        {
           console.log("The " + footballTeams[i] + " are a football team in the National Football League and their hometown is " + teamCitys[i] + ".");
        };    
                                        
    };

        

// MAIN

array();

