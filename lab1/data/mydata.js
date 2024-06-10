const data = {
    "website": "Hrana",
    "categories": [
        { 
            "name" : "Alat",
            "image" : "meat.jpg",
            "products" : [
                { 
                    "name" : "Čekić", "image" : "hammer.png"
                },
                { 
                    "name" : "Odvijač", "image" : "screwdriver.png"
                },
                { 
                    "name" : "Pomična mjerka", "image" : "calipers.jpg"
                },                
                { 
                    "name" : "Francuski ključ", "image" : "wrench.png"
                },              
                { 
                    "name" : "Bušilica", "image" : "drill.png"
                } 
            ]
        },
        { 
            "name" : "Kamen",
            "image" : "candy.jpg",
            "products" : [
                { 
                    "name" : "Pjesak", "image" : "sand.png"
                },         
                { 
                    "name" : "Šljunak", "image" : "gravel.png"
                },          
                { 
                    "name" : "Deko kamen", "image" : "deco_stone.png"
                },        
                { 
                    "name" : "Kamen za zid", "image" : "stone_wall.png"
                },
                { 
                    "name" : "Cigle", "image" : "brick_wall.png"
                },      
            ]
        },
        { 
            "name" : "Vijci",
            "image" : "candy.jpg",
            "products" : [
                { 
                    "name" : "Vijak za metal", "image" : "bolt.png"
                },                
                { 
                    "name" : "Vijak za drvo", "image" : "screw.png"
                },                
                { 
                    "name" : "Matica", "image" : "nut.png"
                },                
                { 
                    "name" : "Podloška", "image" : "washers.png"
                },                
                { 
                    "name" : "Ojačani vijci", "image" : "screws.png"
                }
            ]
        },
        { 
            "name" : "Metal",
            "image" : "candy.jpg",
            "products" : [          
                { 
                    "name" : "Lim za krovove", "image" : "metal_rod.png"
                },         
      
                { 
                    "name" : "Čelična armatura", "image" : "rebar.png"
                },                

                { 
                    "name" : "Čelični 'I' profil", "image" : "steel_beam.png"
                },                

                { 
                    "name" : "Čelična šipka", "image" : "steel_rod.png"
                },       
   
                { 
                    "name" : "Teksturirani lim", "image" : "textured_metal.png"
                }
            ]
        },
        { 
            "name" : "Strojevi",
            "image" : "candy.jpg",
            "products" : [               
                { 
                    "name" : "Bager široki", "image" : "bulldozer.png"
                }, 
               
                { 
                    "name" : "Dizalica", "image" : "crane.png"
                },
           
                { 
                    "name" : "Kopač", "image" : "digger.png"
                },   
                                  
                { 
                    "name" : "Traktor", "image" : "tractor.png"
                },   
                { 
                    "name" : "Mješalica", "image" : "cement_mixer.png"
                }        
            ]
        },
        { 
            "name" : "Projektiranje",
            "image" : "candy.jpg",
            "products" : [        
                { 
                    "name" : "Gumica za brisanje", "image" : "eraser.png"
                },             
             
                { 
                    "name" : "Papir za nacrte", "image" : "paper.png"
                },                
                { 
                    "name" : "Olovka HB", "image" : "pencil.png"
                },          
       
                { 
                    "name" : "Ravnalo", "image" : "ruler.png"
                },            

                { 
                    "name" : "Trokut", "image" : "triangle.png"
                }                 
            ]
        },
        { 
            "name" : "Drvo",
            "image" : "candy.jpg",
            "products" : [ 
                { 
                    "name" : "Drvo za cijepanje", "image" : "firewood.png"
                },   
                { 
                    "name" : "Paleta", "image" : "palette.png"
                },   
                { 
                    "name" : "Reciklirano drvo", "image" : "recycled_wood.png"
                },             
                { 
                    "name" : "Drvena daska", "image" : "wood_beam.png"
                },                
                { 
                    "name" : "Drvena tipla", "image" : "wood_dowel.png"
                }           
            ]
        },
        { 
            "name" : "Zaštita na radu",
            "image" : "candy.jpg",
            "products" : [         
                { 
                    "name" : "Svjetlo", "image" : "floodlight.png"
                },    
                { 
                    "name" : "Megafon", "image" : "megaphone.png"
                },      
                { 
                    "name" : "Reflektivni prsluk", "image" : "reflective vest.png"
                },      
                { 
                    "name" : "Čizme s čeličnim ojačanjem", "image" : "steeltoe.png"
                },           
                { 
                    "name" : "Šljem", "image" : "helmet.png"
                }     
            ]
        },
        { 
            "name" : "Organizacija otpada",
            "image" : "candy.jpg",
            "products" : [       
                { 
                    "name" : "Papir kanta", "image" : "blue bin.png"
                },      
                { 
                    "name" : "Baterije kanta", "image" : "red bin.png"
                },      
                { 
                    "name" : "Plastika kanta", "image" : "yellow bin.png"
                },      
                { 
                    "name" : "Biootpad kanta", "image" : "brown bin.png"
                },      
                { 
                    "name" : "Ostali otpad", "image" : "green bin.png"
                }              
            ]
        },
        { 
            "name" : "Prozori",
            "image" : "candy.jpg",
            "products" : [     
                { 
                    "name" : "Dvostruki prozor", "image" : "dual window.png"
                },      
                { 
                    "name" : "Jednostruki prozor", "image" : "single window.png"
                },      
                { 
                    "name" : "Klizni prozor", "image" : "sliding window.png"
                },      
                { 
                    "name" : "Drveni okvir", "image" : "wooden window.png"
                },      
                { 
                    "name" : "Crkveni prozor", "image" : "stained window.png"
                }
                  
            ]
        }
    ]
}
