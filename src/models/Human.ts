export class Human{
	state: State;
	constructor(){
		this.state = new HappyState();
	}
	think(){
		return this.state.think();	
	}
	action(){
		return this.state.action();
	}
	changeState(state: State){
		this.state = state;
	}
}

interface State{
	action(): string,
  think(): string;
}

export class HappyState implements State{
	action(){
		return 'Jumping'
	}
	think(){
		return 'I am happy';
	}
}
export class SadState implements State{
	action(){
		return 'Listen to sad song'
	}
	think(){
		return 'I am sad';
	}
}