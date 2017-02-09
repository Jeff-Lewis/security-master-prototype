export class SetupTransition {
    // SERVER DATA **************************************
    id:         number;
    name:       string;
    text:       string;

    isStart:    boolean;
}

export class SetupTransitionWorkflow {
    // SERVER DATA **************************************
    id:         number;
    current:    SetupTransition;
    next:       SetupTransition;
    previous:   SetupTransition;
}