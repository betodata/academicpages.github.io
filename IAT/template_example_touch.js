define(['pipAPI', 'https://betodata.github.io/IAT/template_main_touch.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Nationalist', //Will appear in the data.
			title : {
				media: {word : 'Nationalist'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    			{word : 'Novorossiya'}, 
    			{word : 'Vladimir Putin'}, 
    			{word : 'Maria Zakharova'}, 
    			{word : 'Sergei Lavrov'},
			{word : 'Dmitry Kiselyov'},
			{word : 'Vladimir Solovyov'},
			{word : 'Special operation'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.4em'}
		},	
		category2 :	{
			name : 'Liberal', //Will appear in the data.
			title : {
				media : {word : 'Liberal'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    	{word : 'Democracy'}, 
    			{word : 'Human rights'}, 
    			{word : 'Alexei Navalny'}, 
    			{word : 'Boris Nemtsov'},
			{word : 'Yabloko'},
			{word : 'Mikhail Gorbachev'},
    			{word : 'Mikhail Khodorkovsky'}				], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.4em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://robertoglz.github.io/IAT/images/'
		} 
	});
});
