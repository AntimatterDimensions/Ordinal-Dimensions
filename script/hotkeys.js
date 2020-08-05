"use strict";

const keybinds = {
    a: () => {
      for (var i = 0; i < game.autobuyerOn.length; i++) {
        game.autobuyerOn[i] = game.autobuyersToggle;
      }
      game.autobuyersToggle = !game.autobuyersToggle;
      randerAutobuyer();
    },
    i: () => {
      if (game.markupChallengeEntered == 0) {
        infinity(1)
      }
    },
    m: () => {
      buyMaxIncr();
    },
    r: () => {
		if (game.boostUnlock === 1) refund();
	},
    c: () => {
		if (game.collapseUnlock === 1) collapse(1);
	},
};

// Declaring it once is probably faster
window.onkeypress = _ => {
  const k = _.key.toLowerCase();
  if (keybinds[k] && game.hotkeysOn === 1) keybinds[k]();
};
