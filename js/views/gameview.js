(function() {

	var GameView = app.GameView = Backbone.View.extend({

		events: {
			"click table" : "handleClick",
			"click #lastGame" : "showLastGame"
		},

		initialize: function() {
			this.game = new app.Game();
			this.game.on("X", this.drawX, this);
			this.game.on("O", this.drawO, this);
			this.game.on("win", this.win, this);
			this.game.on("tie", this.tie, this);
			this.render();
			// wire up event listeners here
		},

		render: function() {
			var html = '<div id="message"></div><table border="1" cellpadding="40"><tbody><tr><td id="0"></td><td id="1"></td><td id="2"></td></tr><tr><td id="3"></td><td id="4"></td><td id="5"></td></tr><tr><td id="6"></td><td id="7"></td><td id="8"></td></tr></tbody></table>';
      this.$el.append(html);
      $("#container").append(this.$el);
		},

		handleClick: function(event) {
			var id = parseInt(event.target.id);
			this.game.doTurn(id);
		},

		drawX: function(id) {
			$('td#' + id).html("X")
		},

		drawO: function(id) {
			$('td#' + id).html("O")
		},

		tie: function() {
			$('#message').text("Tie game");
			this.clearBoard();
		},

		win: function(player) {
			$('#message').text("Player " + player + " Wins!");
			this.clearBoard();
		},

		showLastGame: function(){
			debugger;
		},

		clearBoard: function() {
			$('td').text("");
			this.game.set("board", [null, null, null, null, null, null, null, null, null]);
			this.game.set("turns", 0);
		}
	})
=======
  app.GameView = Backbone.View.extend({
    events: {
      "click": "handleClick"
    },
    initialize: function() {
      this.game = new app.Game();
      // your code here
    },
    render: function() {
      // your code here
    },
    handleClick: function(e) {
      // your code here
    },
    drawX: function(id) {
      // your code here
    },
    drawO: function(id) {
      // your code here
    },
    message: function(message) {
      this.$("#message").html(message)
    },
    clearBoard: function() {
      // your code here
    }
  });

})();