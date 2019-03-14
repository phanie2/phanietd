 
 	
var annee= prompt("entrez une annee");
function isAnneeBissextile(annee)
{
 if ((annee%4==0) && ((annee%100!=0) || (annee%400==0))) return true;

else return false;
}
  if(isAnneeBissextile(annee) == true)
  {
  	alert(annee + " est une annee bissextile" )
  }
  else {
  	alert(annee + " n'est pas une annee bissextile" )
  }


