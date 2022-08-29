


// Fonction qui nous permet de changer les couleurs de nos bloc

var choix = true;
function changeColor(){
    var bloc1 = document.getElementById("btn");
    var bloc2 = document.getElementById("btn1");
    var bloc3 = document.getElementById("btn2");
    var bloc4 = document.getElementById("btn3");

    if (choix == true) 
    {   bloc1.style.backgroundColor = ("brown");
        bloc2.style.backgroundColor = ("brown");
        bloc3.style.backgroundColor = ("brown");
        bloc4.style.backgroundColor = ("brown");
        choix=false;

        
    } else 
    {   bloc1.style.backgroundColor = ("gray");
        bloc2.style.backgroundColor = ("gray");
        bloc3.style.backgroundColor = ("gray");
        bloc4.style.backgroundColor = ("gray");
        choix= true;

        
    }
}

//--------------------------------------------------------------------------------

//Fonction qui permet de controler la saiie des utilisateurs sur le formulaire

function controlSaisie()                                    
{ 
    var name = document.forms["formulaire"]["nom"];               
    var email = document.forms["formulaire"]["mail"];    
    var phone = document.forms["formulaire"]["telephone"];  
    var objet = document.forms["formulaire"]["objet"];  
    var comment = document.forms["formulaire"]["message"];  

    if (name.value == "")                                  
    { 
        alert("Le champ Nom et Prénom ne peut pas être vide."); 
        name.focus(); 
        return false; 
    }  
    if (phone.value == "")                            { 
        alert("Le champ téléphone ne peut pas être vide."); 
        phone.focus(); 
        return false; 
    }   
    if (email.value == "")                            { 
        alert("Le champ mail doit être renseigner."); 
        phone.focus(); 
        return false; 
    }    
    if (email.value == "")                                   
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    } 
    if (objet.value == "")                               
    { 
        alert("Le champ objet ne peut pas être vide."); 
        objet.focus(); 
        return false; 
    }      
    if (comment.value == "")                  
    { 
        alert("Écrivez un commentaire."); 
        comment.focus(); 
        return false; 
    } 
    return true; 
}

//----------------------------------------------------------//
/*----------Fonction Affiche contenu input------------------*/

function afficherInput() {
    var saisie = document.getElementById("nom").value;    
    var saisie1 = document.getElementById("telephone").value;
    var saisie2 = document.getElementById("mail").value;  
    var saisie3 = document.getElementById("objet").value;
    var saisie4 = document.getElementById("message").value;  

    /*----------------------------- -------------------------------------*/
    
            
            var tabInput= [
                        {Nom : saisie,
                        Téléphone: saisie1,
                        email : saisie2,
                        objet: saisie3,
                        message: saisie4
                        }
                    ]
                    tabInput = document.getElementById("afficheur");
                    tabInput.innerHTML= "Nom Prénom : " +saisie + "\n\nTéléphone : " + saisie1 + "\n\nEmail : " + saisie2 + "\n\nObjet : " + saisie3 + "\n\nMessage : " + saisie4;
                    console.table(tabInput); 
}

