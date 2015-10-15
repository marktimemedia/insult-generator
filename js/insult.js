( function( $ ){

	var randFuckingArray = '',
		fuckingDescription = '';

	var cussing = [
		'Ass',
		'Bitch',
		'Butt',
		'Cock',
		'Chode',
		'Cum',
		'Cunt',
		'Dick',
		'Douche',
		'Fart',
		'Fuck',
		'Jizz',
		'Sausage',
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
		'Bubble',
		'Bucket',
		'Burrito',
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
		'Magician',
		'Monkey',
		'Muffin',
		'Muncher',
		'Nozzle',
		'Nugget',
		'Panda',
		'Pilot',
		'Pirate',
		'Pistol',
		'Pusher',
		'Roper',
		'Sandwich',
		'Scratcher',
		'Scrubber',
		'Shitter',
		'Sucker',
		'Taco',
		'Twiddler',
		'Waffle',
		'Wallet',
		'Wanker',
		'Whistle',

	];

	var fuckingDescriptions = [
		"That <span class='ass'></span> just cut me off!",
		"My boss is a major <span class='ass'></span>!",
		"Don't tell her I said this, but that dude she's with is a real <span class='ass'></span>!",
		"Quit being such a <span class='ass'></span>!",
		"The only people who would vote for that guy are total <span class='ass'></span>s!",
		"What are you, some kind of <span class='ass'></span>?",
		"Dude's a real <span class='ass'></span>, you know what I mean?",
		"He's got an ego like a <span class='ass'></span>!",
		"She was being a real <span class='ass'></span> at the store today!",
		"That <span class='ass'></span> developer's code refuses to compile!",
		"Her kids are total <span class='ass'></span>s!",
		"Whoever wrote this API documentation is a complete <span class='ass'></span>!",
		"That guy has the personality of a <span class='ass'></span>!",
		"I'm pretty sure I was a total <span class='ass'></span> at the bar last night.",
		"What kind of <span class='ass'></span> buys pre-ground coffee?",
		"I'd rather get a <span class='ass'></span> to the eye than sit through this lecture.",
		"Wow, that <span class='ass'></span> just went off the deep end.",
		"I may be a jerk, but at least I'm not like that <span class='ass'></span> over there.",
		"I need that like I need a <span class='ass'></span> on my elbow.",
		"What kind of <span class='ass'></span> slows down to merge on the highway?",
		"You've got a face like a <span class='ass'></span>.",
		"Nothing personal, but you're a real <span class='ass'></span>.",
		"What a bunch of <span class='ass'></span>s.",
		"Everytime I see that <span class='ass'></span>, I want them to run into a knife.",
		"<span class='ass'></span> is the name of your porno.",
		"Johhny Depp, George Clooney, Leonardo Dicaprio and Al Pacino would call you a <span class='ass'></span> if they had the chance.",
		"Attention K-Mart shoppers. Would the <span class='ass'></span> in isle 5 please remove their head from their ass.",
		"If you were in a beauty pagent, your sash would read: Miss <span class='ass'></span>, from North Dakota",
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
		$fuckingTarget.find( 'span' ).html( randFuckingArray[0] + ' ' + randFuckingArray[1] );
	}

	// On click bitches
	$( 'button.damn' ).on( 'click', randThatShitUp );

	// On load bitches
	randThatShitUp();

	$( 'a.twitter-share-button' ).on( 'click', function( e ) {

		var fuckingUrl = $( this ).attr( 'href' );
		var fuckingSpit = fuckingUrl.split( 'text=' );
		var fuckingDescriptionAgain = fuckingDescription.replace( '<span class=\'ass\'></span>', randFuckingArray[0] + ' ' + randFuckingArray[1] );
		var newFuckingUrl = fuckingSpit[0] + 'text=' + randFuckingArray[0] + ' ' + randFuckingArray[1] + ' (noun) "' + fuckingDescriptionAgain + '" Get yours at' ;

		$( this ).attr( 'href', encodeURI( newFuckingUrl ) );

	} );


} )( jQuery );
