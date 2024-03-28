define(['pipAPI', 'https://betodata.github.io/IAT/template_main.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Novorossiya', //Will appear in the data.
			title : {
				media: {word : 'Novorossiya'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
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
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Democracy', //Will appear in the data.
			title : {
				media : {word : 'Democracy'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
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
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://betodata.github.io/IAT/images/'
		} 
	});
});
