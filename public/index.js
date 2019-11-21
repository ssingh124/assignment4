// Get albums and place in select list in New Song form
const populateAlbumSelect=() =>{
    axios.get('/api/albums')
    .then(results=>{

        const selectList = document.getElementById('album-select');

        selectList.innerHTML = "";

        let optionNone = document.createElement('option');

           optionNone.innerHTML = 'none';
           optionNone.value=0;

           selectList.appendChild(optionNone);

        results.data.forEach(album=>{

           let option = document.createElement('option');

           option.innerHTML = album.name;
           option.value=album.album_id;

           selectList.appendChild(option);

        });

    })
    .catch(error=>{console.log(error)});
}

populateAlbumSelect();

// Handle form submit for New Album
const albumSubmit = (event)=>{
    event.preventDefault();

    const newAlbum = {
        name:document.getElementById('album-name').value,
        genre:document.getElementById('album-genre').value,
    }

    axios.post('/api/albums', newAlbum)
    .then(result=>{
        console.log(result.data);

        populateAlbumSelect();
    })
    .catch(error=>console.log(error));
}

let formAddAlbum = document.getElementById('add-album');
formAddAlbum.addEventListener('submit', albumSubmit);










// // Handle form submit for new Song

const songSubmit = (event)=>{
    event.preventDefault();

    const newSong = {
        name:document.getElementById('song-name').value,
        a_id:document.getElementById('album-select').value,
    }

    axios.post('/api/songs', newSong)
    .then(result=>{
        console.log(result.data);

        populateAlbumSelect();
    })
    .catch(error=>console.log(error));
}

let formAddSong = document.getElementById('add-song');
formAddSong.addEventListener('submit', songSubmit);












    let populateAllSongs = ()=>{
    axios.get('/api/songs')
    .then(results=>{
                results.data.forEach(x=>{
                let print = document.getElementById('all-songs');
                let list = document.createElement('li');
    
                list.innerHTML=x.song_name;
              print.appendChild(list);
    
            });
       
    })
    .catch(error=>{console.log(error)});
}
populateAllSongs();























// // Get albums and place in select list in New Song form
// const populateAlbumSelect=() =>{
//     axios.get('/api/albums')
//     .then(results=>{

//         const selectList = document.getElementById('album-select');

//         selectList.innerHTML = "";

//         let optionNone = document.createElement('option');

//           optionNone.innerHTML = 'none';
//           optionNone.value=0;

//           selectList.appendChild(optionNone);

//         results.data.forEach(album=>{

//           let option = document.createElement('option');

//           option.innerHTML = album.name;
//           option.value=album.album_id;

//           selectList.appendChild(option);

//         });

//     })
//     .catch(error=>{console.log(error)});
// }

// populateAlbumSelect();

// // Handle form submit for New Album
// const albumSubmit = (event)=>{
//     event.preventDefault();

//     const newAlbum = {
//         name:document.getElementById('album-name').value,
//         genre:document.getElementById('album-genre').value,
//     }

//     axios.post('/api/albums', newAlbum)
//     .then(result=>{
//         console.log(result.data);

//         populateAlbumSelect();
//     })
//     .catch(error=>console.log(error));
// }

// let formAddAlbum = document.getElementById('add-album');
// formAddAlbum.addEventListener('submit', albumSubmit);

// // Handle form submit for new Song
// const songSubmit = (event)=>{
//     event.preventDefault();

//     const newSong = {
//         name:document.getElementById('song-name').value,
//         album_id:document.getElementById('album-select').value
//     }

//     axios.post('/api/songs', newSong)
//     .then(result=>{
//         console.log(result.data);
//     })
//     .catch(error=>console.log(error));
// }

// let formAddSong = document.getElementById('add-song');
// formAddSong.addEventListener('submit', songSubmit);



