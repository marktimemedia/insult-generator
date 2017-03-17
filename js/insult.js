( function( $ ){

	var randFuckingArray = '',
		fuckingDescription = '';

	var cussing = [
		'Ass',
		'Bitch',
		'Butt',
		'Cock',
		'Cum',
		'Cunt',
		'Dick',
		'Douche',
		'Fart',
		'Fuck',
		'Jizz',
		'Schlong',
		'Shit',
		'Slut',
		'Snatch',
		'Tit',
		'Twat',
		'Wang',
		'Wank',
		'Whore',
	];

	var fuckAssNoun = [
		'Bagel',
		'Biscuit',
		'Blister',
		'Burger',
		'Bubble',
		'Bucket',
		'Camel',
		'Canoe',
		'Cocktail',
		'Cracker',
		'Cranker',
		'Dragon',
		'Dumpster',
		'Farmer',
		'Fister',
		'Guzzler',
		'Hatchet',
		'Monkey',
		'Muffin',
		'Muncher',
		'Nozzle',
		'Nugget',
		'Panda',
		'Pilot',
		'Pistol',
		'Pusher',
		'Sandwich',
		'Scratcher',
		'Scrubber',
		'Shitter',
		'Sucker',
		'Taco',
		'Twiddler',
		'Waffle',
		'Wanker',
		'Whistle',
	];

	var fuckingDescriptions = [
		"That <span class='ass'></span> just cut me off!",
		"My boss is a major <span class='ass'></span>!",
		"Don't tell her I said this, but that dude she's with is a real <span class='ass'></span>!",
		"Quit being such <span class='aan'></span> <span class='ass'></span>!",
		"The only people who would vote for that guy are total <span class='ass'></span>s!",
		"What are you, some kind of <span class='ass'></span>?",
		"Dude's a real <span class='ass'></span>, you know what I mean?",
		"He's got an ego like <span class='aan'></span> <span class='ass'></span>!",
		"She was being a real <span class='ass'></span> at the store today!",
		"That <span class='ass'></span> developer's code refuses to compile!",
		"Her kids are total <span class='ass'></span>s!",
		"Whoever wrote this API documentation is a complete <span class='ass'></span>!",
		"That guy has the personality of <span class='aan'></span> <span class='ass'></span>!",
		"I'm pretty sure I was a total <span class='ass'></span> at the bar last night.",
		"What kind of <span class='ass'></span> buys pre-ground coffee?",
		"I'd rather get <span class='aan'></span> <span class='ass'></span> to the eye than sit through this lecture.",
		"Wow, that <span class='ass'></span> just went off the deep end.",
		"I may be a jerk, but at least I'm not like that <span class='ass'></span> over there.",
		"I need that like I need <span class='aan'></span> <span class='ass'></span> on my elbow.",
		"What kind of <span class='ass'></span> slows down to merge on the highway?",
		"You've got a face like <span class='aan'></span> <span class='ass'></span>.",
		"Nothing personal, but you're a real <span class='ass'></span>.",
		"What a bunch of <span class='ass'></span>s.",
		"That <span class='ass'></span> is legally dead in 27 states - plus Guam.",
	];

	function randomUpSomeShit( cussing, fuckAssNoun, fuckingDescriptions ) {
		// Randomizing shit bitches and returning the shit
		var randCussing = cussing[ Math.floor( Math.random()*cussing.length ) ];
		var randFuckAssNoun = fuckAssNoun[ Math.floor(Math.random()*fuckAssNoun.length ) ];
		var randFuckingDescription = fuckingDescriptions[ Math.floor( Math.random()*fuckingDescriptions.length ) ];

		return [ randCussing, randFuckAssNoun, randFuckingDescription ];
	}

	function randThatShitUp() {
		var $fuckingTarget = $( '.fucking.description .sentence' );
		randFuckingArray = randomUpSomeShit( cussing, fuckAssNoun, fuckingDescriptions );
		fuckingDescription = randFuckingArray[2];

		// Swapping out the title bitches
		$( '.insult h1.ass' ).html( randFuckingArray[0] + ' ' + randFuckingArray[1] );

		// Swapping out the descriptions bitches
		$fuckingTarget.html( randFuckingArray[2] );
		$fuckingTarget.find( 'span.ass' ).html( randFuckingArray[0] + ' ' + randFuckingArray[1] );

		// Fucking a or an
		$fuckingTarget.find( 'span.aan' ).html( fuckingAorAn( randFuckingArray[0] ) );
	}

	function fuckingAorAn( shitWord ) {
		// Fucking simple right now since there's only one 'A' word.
		return 'a' === shitWord.toLowerCase().charAt(0) ? 'an' : 'a';
	}

	// On click bitches
	$( 'button.damn' ).on( 'click', randThatShitUp );

	// On load bitches
	randThatShitUp();

	$( 'a.twitter-share-button' ).on( 'click', function( e ) {

		var fuckingUrl = $( this ).attr( 'href' );
		var fuckingSpit = fuckingUrl.split( 'text=' );
		var fuckingDescriptionAgain = fuckingDescription.replace( '<span class=\'ass\'></span>', randFuckingArray[0] + ' ' + randFuckingArray[1] );
		fuckingDescriptionAgain = fuckingDescriptionAgain.replace( '<span class=\'aan\'></span>', fuckingAorAn( randFuckingArray[0] ) );
		var newFuckingUrl = fuckingSpit[0] + 'text=' + randFuckingArray[0] + ' ' + randFuckingArray[1] + ' (noun) "' + fuckingDescriptionAgain + '" Get yours at' ;

		$( this ).attr( 'href', encodeURI( newFuckingUrl ) );

	} );


} )( jQuery );
