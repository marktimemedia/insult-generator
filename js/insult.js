( function( $ ){

	var cussing = [
		'Snatch',
		'Cunt',
		'Dick',
		'Fuck',
		'Bitch',
		'Ass',
		'Wank',
		'Douche',
		'Tit',
		'Cock',
		'Shit',
		'Twat',
		'Butt',
		'Wang',
	];

	var fuckAssNoun = [
		'Muffin',
		'Waffle',
		'Biscuit',
		'Bucket',
		'Bubble',
		'Nozzle',
		'Nugget',
		'Pistol',
		'Bagel',
		'Sandwich',
		'Canoe',
		'Camel',
		'Monkey',
		'Panda',
		'Farmer',
		'Pilot',
		'Sucker',
		'Muncher',
		'Wanker',
		'Scrubber',
		'Pusher',
		'Scratcher',
	];

	var fuckingDescriptions = [
		'That <span class="ass"></span> just cut me off!',
		'My boss is a major <span class="ass"></span>!',
		'Don\'t tell her I said this, but that guy is a real <span class="ass"></span>!',
		'Quit being such a <span class="ass"></span>!',
		'The only people who would vote for that guy are total <span class="ass"></span>s!',
		'What are you, some kind of <span class="ass"></span>?',
		'Dude\'s a real <span class="ass"></span>, you know what I mean?',
		'He\'s got an ego like a <span class="ass"></span>!',
		'She was being a real <span class="ass"></span> at the store today!',
	];

	function randomUpSomeShit( cussing, fuckAssNoun, fuckingDescriptions ) {
		// Randomizing shit bitches and returning the shit
		var randCussing = cussing[ Math.floor( Math.random()*cussing.length ) ];
		var randFuckAssNoun = fuckAssNoun[ Math.floor(Math.random()*fuckAssNoun.length ) ];
		var randFuckingDescription = fuckingDescriptions[ Math.floor( Math.random()*fuckingDescriptions.length ) ];

		return [ randCussing, randFuckAssNoun, randFuckingDescription ];
	}

	function randThatShitUp() {
		var $fuckingTarget = $( '.fucking.description .muffin' );
		var randFuckingArray = randomUpSomeShit( cussing, fuckAssNoun, fuckingDescriptions );
		var fuckingDescription = randFuckingArray[2];

		// Swapping out the title bitches
		$( '.insult h1.ass' ).html( randFuckingArray[0] + ' ' + randFuckingArray[1] );

		// Swapping out the descriptions bitches
		$fuckingTarget.html( randFuckingArray[2] );
		$fuckingTarget.find( 'span' ).html( randFuckingArray[0] + ' ' + randFuckingArray[1] );
	}

	// On click bitches
	$( 'button.damn' ).on( 'click', randThatShitUp );

	// On load bitches
	randThatShitUp();


} )( jQuery );
