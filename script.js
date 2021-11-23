let pul=document.getElementById('pulKiritish');
let output=document.getElementById('output');
let dollar=document.getElementById('dollarOutput');
let euro=document.getElementById('euroOutput');
let rubl=document.getElementById('rublOutput');
let dirham=document.getElementById('dirhamOutput');
pul.addEventListener('keyup', runEvent);

function runEvent(e){
    let pul1=document.getElementById('pulKiritish').value;
    let dollar1=pul1/10765.12;
    let euro1=pul1/12133.88;
    let rubl1=pul1/145.18;
    let dirham1=pul1/2928.32;
    dirham.textContent=dirham1
    rubl.textContent=rubl1
    euro.textContent=euro1
    dollar.textContent=dollar1
    // console.log(dollar1);
    if(pul1==0){
        alert(' manfiy va 0 dan katta bolgan son kiriting')
    }
}
