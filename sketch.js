var img_home;
var vid_piano; let playing_music = false; let playing_content = false;
let audio_music, audio_confocal, audio_piano;
let sound_button;

let content_index = -1;

var content_centers = [], content_audio =[];

function preload(){
	img_home = loadImage('assets/Minsky_Home.png');
	//vid_piano = createVideo('assets/marvin_full_hands.mov')
	audio_music = createAudio('assets/marvin_full_hands_audio.m4a');
	audio_confocal = createAudio('assets/audio_confocal.mp3');
	audio_piano = createAudio('assets/audio_piano1.mp3');
	audio_studies = createAudio('assets/audio_studies1.mp3');
	audio_snarc = createAudio('assets/audio_snarc.mp3');
	audio_ML = createAudio('assets/audio_ML.mp3');
	audio_resources = createAudio('assets/audio_resources.mp3');
	audio_scifi = createAudio('assets/audio_scifi.mp3');
	audio_pianoStory = createAudio('assets/audio_pianoStory.mp3');

	content_audio = [audio_piano, audio_confocal, audio_studies, audio_snarc, audio_ML, audio_resources, audio_scifi, audio_pianoStory];

}

function setup() {
	createCanvas(windowWidth, windowHeight);

	// sound Button
	sound_button = createButton('sound on');
	sound_button.position(width*0.94, height*0.03)
	sound_button.mousePressed(toggleMusic);

	content_centers = [
		{x:width*0.75, y:height*0.75, id: 'piano'},
		{x:width*0.18, y:height*0.6, id:'confocal'},
		{x:width*0.38, y:height*0.75, id:'studies'},
		{x:width*0.55, y:height*0.57, id:'snarc'},
	  {x:width*0.65, y:height*0.5, id:'mediaLab'},
		{x:width*0.10, y:height*0.9, id:'resources'},
		{x:width*0.25, y:height*0.7, id:'scifi'},
		{x:width*0.9, y:height*0.7, id:'pianoStory'}
	]

}

function draw() {

	image(img_home, 0, 0, windowWidth, windowHeight)

	fill(255,255,255);

	for(let i = 0; i < content_centers.length; i++){
		if(i == content_index){
			fill(255, 100, 100);
	  }
		else{
			fill(255,255,255);
		}
		ellipse(content_centers[i].x, content_centers[i].y, 20, 20);
	}

}

function toggleMusic(){
	if(playing_music){
		audio_music.pause();
		sound_button.html('sound on');
	}
	else{
		audio_music.loop();
		audio_music.volume(0.1);
		sound_button.html('sound off');
	}
	playing_music = !playing_music;
}

function toggleContent(){

	if(content_index == -1){
		for(let i = 0; i < content_audio.length; i++){
			content_audio[i].pause();
		}


		playing_content = false;

		return;
	}

	if(playing_content){
		for(let i = 0; i < content_audio.length; i++){
			content_audio[i].pause();
		}
	}
	else{
		content_audio[content_index].play();
		content_audio[content_index].volume(0.5);
	}
	playing_content = !playing_content;
}



function mousePressed(){

	for(var i = 0; i < content_centers.length; i++){
		if(dist(mouseX, mouseY, content_centers[i].x, content_centers[i].y) < 20){
			console.log(content_centers[i].id + ' clicked');
			content_index = i;
			break;
		}
	}



	if(i == content_centers.length){
		content_index = -1;
	}

	toggleContent();
}
