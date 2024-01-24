//funkcija koja konvertuje Data URI u Blob objekat
export default function dataURItoBlob(dataURI) {
    
    var byteString;
 //provera da li je Data URI u base64 formatu
    if (dataURI.split(",")[0].indexOf("base64") >= 0)
      byteString = atob(dataURI.split(",")[1]);
    else byteString = unescape(dataURI.split(",")[1]);
  
 //dobijanje MIME tipa slike iz Data URI  
    var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
  
 //kreiranje Uint8Array iz byteString  
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
 //kreiranje Blob objekta sa prosledjenim podacima
    return new Blob([ia], { type: mimeString });
  }
  