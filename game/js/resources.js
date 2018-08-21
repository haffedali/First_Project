game.resources = [
	/**
	 * Graphics.
	 */
	// the main player spritesheet
	{name: "gripe_run_right",     type:"image",	src: "data/img/sprite/player2.png"},
	{name: "gripe_stand",     type:"image",	src: "data/img/sprite/player2S.png"},
	// the spinning coin spritesheet
	{name: "spinning_coin_gold",  type:"image",	src: "data/img/sprite/spinning_coin_gold.png"},
	// our enemty entity
	{name: "wheelie_right",       type:"image",	src: "data/img/sprite/dude.png"},
    // game font
    { name: "PressStart2P",       type:"image", src: "data/fnt/PressStart2P.png" },
    { name: "PressStart2P",       type:"binary", src: "data/fnt/PressStart2P.fnt"},
	// title screen
	{name: "title_screen",        type:"image",	src: "https://whatpixel.com/images/2016/03/00-featured-city-scape-bg.jpg"},
	// the parallax background
	{name: "area01_bkg0",         type:"image",	src: "data/img/area01_bkg0.png"},
	{name: "area01_bkg1",         type:"image",	src: "data/img/area01_bkg1.png"},
	{name: "cityBKG",         type:"image",	src: "data/img/cityBKG.png"},// our level tileset
	{name: "area01_level_tiles",  type:"image",	src: "data/img/map/area01_level_tiles.png"},
	{name: "tilestest",  type:"image",	src: "data/img/map/tilestest.png"},
	{name: "rainLight",  type:"image",	src: "data/img/weather/rainLight.gif"},
	/*
	 * Maps.
 	 */
	{name: "area01",              type: "tmx",	src: "data/map/area01.tmx"},
	{name: "area02",              type: "tmx",	src: "data/map/area02.tmx"},

	/*
	 * Background music.
	 */
	{name: "dst-inertexponent", type: "audio", src: "data/bgm/"},

	/*
	 * Sound effects.
	 */
	{name: "cling", type: "audio", src: "data/sfx/"},
	{name: "stomp", type: "audio", src: "data/sfx/"},
	{name: "jump",  type: "audio", src: "data/sfx/"}
];
