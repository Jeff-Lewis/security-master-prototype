export class SetupTransition {
    // SERVER DATA **************************************
    id:         number;
    name:       string;
    text:       string;
}

export class SetupTransitionWorkflow {
    // SERVER DATA **************************************
    id:         number;
    current:    SetupTransition;
    next:       SetupTransition;
    previous:   SetupTransition;
}