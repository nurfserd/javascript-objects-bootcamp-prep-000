var playlist = {
  Lit: "My Own Worst Enemy",
  KYLE: "iSpy"
}

function updatePlaylist(obj, artist, title){
  return Object.assign({}, obj, {artist:title})
}

updatePlaylist(playlist, "Van Halen", "Panama")

function removeFromPlaylist(playlist, artist){
  delete playlist.artist;
  return playlist
}

removeFromPlaylist(playlist, KYLE)
