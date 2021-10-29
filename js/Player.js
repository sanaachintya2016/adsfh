class Player
{
    constructor()
    {
        this.index = null;
        this.positionX = 50 0;
    }
    getCount()
    {
        var playerCountRef = db.ref("playerCount");
        playerCountRef.on("value" , function(data){playerCount = data.val()});
    }

    updateCount(count)
    {
        db.ref("/").update({playerCount : count});
    }

    updatePlayerInfo()
    {
        var playerIndex = "players/player" + this.index;
        db.ref(playerIndex).set({name: this.name, positionX: this.positionX});
    }
}