var gameRunning=false;

// var scrollText=`hey, it's ${weather}ing!   `
// if(weather=="none") scrollText=`hey, it's nice out!  ` 
game.TitleScreen = me.ScreenObject.extend({

    /**
     *  action to perform on state change
     */
    onResetEvent : function() {

        // title screen
        var backgroundImage = new me.Sprite(0, 0, {
               image: me.loader.getImage('title_screen'),
            }
        );
        var rainImage = new me.Sprite(0, 0, {
            image: me.loader.getImage('rainLight'),
         }
     );
        // position and scale to fit with the viewport size
        backgroundImage.anchorPoint.set(0, 0);
        backgroundImage.scale(me.game.viewport.width / backgroundImage.width, me.game.viewport.height / backgroundImage.height);
        // add to the world container
        me.game.world.addChild(backgroundImage, 1);
        // rainImage.anchorPoint.set(0, 0);
        // rainImage.scale(me.game.viewport.width / rainImage.width, me.game.viewport.height / rainImage.height);
        // // add to the world container
        // me.game.world.addChild(rainImage, 2);

        // add a new renderable component with the scrolling text
        me.game.world.addChild(new (me.Renderable.extend ({
            // constructor
            init : function() {
                this._super(me.Renderable, 'init', [0, 0, me.game.viewport.width, me.game.viewport.height]);

                // font for the scrolling text
                this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P'), me.loader.getImage('PressStart2P'));
                // this.font.scale(10000,10000)
                this.scroller = "Hey! We made this game in MelonJS";
                this.scrollerpos = 600;

                 // a tween to animate the arrow
                this.scrollertween = new me.Tween(this).to({scrollerpos: -2200 }, 5000).onComplete(this.scrollover.bind(this)).start();
            },

            // some callback for the tween objects
            scrollover : function() {
                // reset to default value
                this.scrollerpos = 640;
                this.scrollertween.to({scrollerpos: -2200 }, 5000).onComplete(this.scrollover.bind(this)).start();
            },

            update : function (dt) {
                return true;
            },

            draw : function (renderer) {
                this.font.textAlign = "center";
                this.font.draw(renderer, "click to play", me.game.viewport.width / 2, 240);
                this.font.textAlign = "left";
                this.font.draw(renderer, this.scroller, this.scrollerpos, 440);
            },
            onDestroyEvent : function() {
                //just in case
                this.scrollertween.stop();
            }
        })), 2);

        // // change to play state on press Enter or click/tap
        // me.input.bindKey(me.input.KEY.ENTER, "enter", true);
        // me.input.bindPointer(me.input.pointer.LEFT, me.input.KEY.ENTER);
        // this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
        //     if (action === "enter") {
        //         // play something on tap / enter
        //         // this will unlock audio on mobile devices
        //         me.audio.play("cling");
        //         me.state.change(me.state.PLAY);
        //     }
        // });
    },
    onClicked : function()
    {
        me.audio.play("cling");
        me.state.change(me.state.PLAY);
        
    },
    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent : function() {
        gameRunning=true;
        var screen = $( "#screen" ).detach();
        screen.appendTo( "#mainDisplay" );
        $('#weather').attr('id','weatherX')
        // $("#screen").attr('id', 'screenX');
        // $("#mainDisplay").attr('id', 'screen');
        // me.input.unbindKey(me.input.KEY.ENTER);
        // me.input.unbindPointer(me.input.pointer.LEFT);
        // me.event.unsubscribe(this.handler);
   }
   
});
$(document).on("click","#game",function() {
    // console.log(me.state.change(me.state.PLAY));
    if(!gameRunning)
    {
        $(".more-details").empty();

        $(".spots").empty();
        $("#temp").empty();
        $("#minutely").empty();
       me.audio.play("cling");
       me.state.change(me.state.PLAY);
}
})
