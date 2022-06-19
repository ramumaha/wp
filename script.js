const songInput=document.querySelector('.song');
const btn=document.querySelector('.check');
let datatxt;
let song_arr=[];

const checkSong=new Promise(function(resolve,reject){
    console.log("checking happening");
    setTimeout(function(){
        fetch('song1.txt')
        .then(response=>response.text())
        .then(data=>{
            datatxt=data;
            resolve(data);
        }).catch(err=>{
            reject(err);
        })
    },1000);
});

async function load(){
    datatxt=await checkSong();
}

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    song_arr=datatxt.split("\n");
    for(let i=0;i<song_arr.length;i++){
        if(song_arr[i][0]==songInput.value){
            console.log(song_arr[i]);
        }
    }
    

})



