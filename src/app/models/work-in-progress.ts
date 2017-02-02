import {SetupRequest} from './setup-request'
import {WorkQueue} from './work-queue'

export class WorkInProgress {
    queues: WorkQueue[];
    setupRequests: SetupRequest[];    
}