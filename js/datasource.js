class DataSource {

	constructor(count) {
		this.count = count;
		this.list = [];
		for (var i = 0; i < count; i++) {
			let note = new NoteObj(i);
			this.list.push(note); 
		}
	}

	disp() {
		this.list.forEach($0 => $0.disp())
	}
	
	getClickedID(mouseX, mouseY) {

		for (let i = 0; i < this.list.length; i++) {
			const note = this.list[i];
			if (note.isClicked(mouseX, mouseY)){
				return note.id;
			}
		}
		return null;
	}	

	getNoteObj(noteID) {
		return this.list.filter($0 => $0.id == noteID)[0]
	}
}

class NoteObj {

	constructor(id) {
	
		this.id = id
		this.diameter = 60;
		this.x = random(width);
		this.y = random(height) * 0.5;
		this.moveSpeed = random(0.5, 1);
		this.alpha = random(255);
		this.color = color(random(255),random(255),random(255));
		this.note = random(['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']);
		this.deleted = false;
	}
	
	disp() {
		
		noStroke();
		fill(this.color);	
		ellipse(this.x, this.y, this.diameter, this.diameter); 
		
		fill(0);	
		textSize(12);
		textAlign(CENTER);
		text(this.note, this.x, this.y + 5);
		// this.moveDown(this.moveSpeed);
	}
	
	moveDown(val) {		


		if (!this.isGrounded()) {
			this.y += val;
		}
		else {
			this.deleted = true;
		} 
	}

	shouldDisapperSlowly() {

		this.alpha -= 0.5;		

		this.alpha = max(0, this.alpha)
		this.color.setAlpha(this.alpha);
	}

	isGrounded() {
		if (this.y >= height - this.diameter) {
			return true;
		}
		return false;
	}

	isClicked(mouseX, mouseY) {
		if (abs(mouseX - this.x) <= this.diameter / 2 &&
			abs(mouseY - this.y) <= this.diameter / 2) { 
				return true;
			}
		return false;
	}	
}