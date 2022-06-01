var dataSource;
var synth;

function setup() {
	var w = window.innerWidth;
	var h = window.innerHeight;
	let cnv = createCanvas(w, h);
 
	dataSource = new DataSource(10);

	cnv.mousePressed(onMousePressed); 
	synth = new Tone.Synth().toMaster();
}

function draw() {
	background(255);
  
	dataSource.disp();
}

function onMousePressed() {
	 
	let noteID = dataSource.getClickedID(mouseX, mouseY);
	if (noteID != null) {
		playSynth(noteID);
	} 
}

function playSynth(noteID) {
	userStartAudio();
  
	let noteObj = dataSource.getNoteObj(noteID)
	let note = noteObj.note;
	console.log('playSynth', note)

	let velocity = 1; 
	// note duration (in seconds)
	let dur = 1/6;
  
	synth.triggerAttackRelease(note, dur);   
  }