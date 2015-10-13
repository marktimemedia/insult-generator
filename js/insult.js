( function( $ ){

	var randFuckingArray = '',
		fuckingDescription = '';

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
		'Cum',
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
		'Taco',
		'Cocktail',
		'Dumpster',
		'Hatchet',

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
		'That <span class="ass"></span> developer\'s code refuses to compile!',
		'Her kids are total <span class="ass"></span>s!',
		'Whoever wrote this API documentation is a complete <span class="ass"></span>!',
		'That guy has the personality of a <span class="ass"></span>!',
		'I\'m pretty sure I was a total <span class="ass"></span> at the bar last night.',
		'What kind of <span class="ass"></span> buys pre-ground coffee?',
		'I\'d rather get a <span class="ass"></span> to the eye than sit through this lecture.',
		'Wow, that <span class="ass"></span> just went off the deep end.',
		'I may be a jerk, but at least I\'m not like that <span class="ass"></span> over there.',
		'I need that like I need a <span class="ass"></span> on my elbow.',
		'What kind of <span class="ass"></span> slows down to merge on the highway?',
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

		// e.preventDefault();

		var fuckingUrl = $( this ).attr( 'href' );

		var fuckingSpit = fuckingUrl.split( 'text=' );

		var fuckingDescriptionAgain = fuckingDescription.replace( '<span class="ass"></span>', randFuckingArray[0] + ' ' + randFuckingArray[1] );

		var newFuckingUrl = fuckingSpit[0] + 'text=' + randFuckingArray[0] + ' ' + randFuckingArray[1] + ' (noun) "' + fuckingDescriptionAgain + '" Get yours at' ;

		// alert( fuckingDescriptionAgain );

		$( this ).attr( 'href', encodeURI( newFuckingUrl ) );

	} );


} )( jQuery );
