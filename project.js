document.getElementById('generateBtn').addEventListener('click', function() {
    const numInput = document.getElementById('numInput').value;
    const charDisplay = document.getElementById('charDisplay');
    charDisplay.innerHTML = '';
    if(numInput <=26&&numInput>0){
        for (let i = 0; i < numInput; i++) {
        
            const randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A-Z
            const charBtn = document.createElement('button');
            charBtn.textContent = randomChar;
            charBtn.classList.add('char-btn');
            charBtn.addEventListener('click', function() {
                showImage(randomChar);
            });
            charDisplay.appendChild(charBtn);
            console.log( Math.floor(Math.random() * 26));
        }
    }
    
    else{
        alert("please Enter number less than 26 and more than 0");}

   
});

function showImage(char) {
    const imgDisplay = document.getElementById('imgDisplay');
    imgDisplay.innerHTML = '';

    // For simplicity, using a placeholder image. Replace with your own images if needed.
    var imagarray=["a.png","b.png","c.png","d.png","e.png","f.png","g.png","h.png","i.png","j.png","k.png","l.png","m.png","n.png","o.png","p.png","q.png","r.png","s.png","t.png","u.png","v.png","w.png","x.png","y.png","z.png"];
    const img = document.createElement('img');
    console.log(char);
    switch (char)
     {
        
        case 'A':
            img.src = imagarray[0];
            break;
        case 'B':
            img.src = imagarray[1];
            break;
        case 'C':
            img.src = imagarray[2];
            break;
        case 'D':
            img.src = imagarray[3];
            break;
            case 'E':
            img.src = imagarray[4];
            break;
            case 'F':
            img.src = imagarray[5];
            break;
            case 'G':
            img.src = imagarray[6];
            break;
            case 'H':
            img.src = imagarray[7];
            break;
            case 'I':
            img.src = imagarray[8];
            break;
            case 'J':
            img.src = imagarray[9];
            break;
           
            case 'K':
            img.src = imagarray[10];
            break;
            case 'L':
            img.src = imagarray[11];
            break;
            case 'M':
            img.src = imagarray[12];
            break;
            case 'N':
            img.src = imagarray[13];
            break;
            case 'O':
            img.src = imagarray[14];
            break;
            case 'B':
            img.src = imagarray[15];
            break;
            case 'Q':
            img.src = imagarray[16];
            break;
            case 'R':
            img.src = imagarray[17];
            break;
            case 'S':
            img.src = imagarray[18];
            break;
            case 'T':
            img.src = imagarray[19];
            break;
            case 'U':
            img.src = imagarray[20];
            break;
            case 'V':
            img.src = imagarray[21];
            break;
            case 'W':
            img.src = imagarray[22];
            break;
            case 'X':
            img.src = imagarray[23];
            break;
            case 'Y':
            img.src = imagarray[24];
            break;
            case 'Z':
            img.src = imagarray[25];
            break;
        default:
            img.src = `https://via.placeholder.com/150?text=${char}`;
    }
    
    
    imgDisplay.appendChild(img);
}
document.getElementById('ResetBtn').addEventListener('click', function() {
    const numInput = document.getElementById('numInput').value='';
    const charDisplay = document.getElementById('charDisplay');
    charDisplay.innerHTML = '';
    const imgDisplay = document.getElementById('imgDisplay');
    imgDisplay.innerHTML = '';
   
    
  
   
});
