function footnoteshow(data){
    document.getElementById('footcontainer').innerHTML = '<span class="popup">' + data + '</span>';
}

function footnotereset(){
    document.getElementById('footcontainer').innerHTML = '';
}