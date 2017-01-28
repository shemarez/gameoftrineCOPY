var SideScroller = SideScroller || {};

//loading the game assets
SideScroller.Preload = function(){};

SideScroller.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBar.scale.setTo(3);

    this.load.setPreloadSprite(this.preloadBar);

    //load game assets

    // SAMPLE GAME CODE
    // this.load.tilemap('level1', 'assets/tilemaps/level1.json', null, Phaser.Tilemap.TILED_JSON);
    // this.load.image('gameTiles', 'assets/images/tiles_spritesheet.png');
    // this.load.image('player', 'assets/images/player.png');
    // this.load.image('playerDuck', 'assets/images/player_duck.png');
    // this.load.image('playerDead', 'assets/images/player_dead.png');
    // this.load.image('goldCoin', 'assets/images/goldCoin.png');
    // this.load.audio('coin', ['assets/audio/coin.ogg', 'assets/audio/coin.mp3']);

    this.load.tilemap('level1', 'img/tiles/level1.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('tileset', 'img/tiles/tileset.png');
    this.load.image('clouds', 'img/tiles/clouds.png');
    this.load.image('sky', 'img/tiles/sky.png');
    this.load.image('sea', 'img/tiles/sea.png');
    this.load.image('fargrounds', 'img/tiles/fargrounds.png');

    this.load.image('player', 'assets/images/player.png');
    this.load.image('playerDuck', 'assets/images/player_duck.png');
    this.load.image('playerDead', 'assets/images/player_dead.png');
    this.load.image('goldCoin', 'assets/images/goldCoin.png');
    this.load.audio('coin', ['assets/audio/coin.ogg', 'assets/audio/coin.mp3']);
  },
  create: function() {
    this.state.start('Game');
  }
};