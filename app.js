const game = new Game();

/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */

document.getElementById("begin-game").addEventListener("click", function() {
  game.startGame();
  
  this.style.display = 'none';
  document.getElementById('play-area').style.opacity = '1';
});
                                                        
document.addEventListener('keydown', function(event) {
  game.handleKeydown(event);
})

document.getElementById('reset').addEventListener('click', function() {
  this.player.tokens = this.createTokens(21);
  this.space.token = null;
  
  game.startGame();
  
  this.style.display = 'none';
})
