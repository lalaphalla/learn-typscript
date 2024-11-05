export class Human{
	state: State;
	constructor(){
		this.state = new HappyState();
	}
	think(){
		return this.state.think();
	}
	changeState(state: State){
		this.state = state;
	}
}

interface State{
  think(): string;
}

export class HappyState implements State{
	think(){
		return 'I am happy';
	}
}
export class SadState implements State{
	think(){
		return 'I am sad';
	}
}