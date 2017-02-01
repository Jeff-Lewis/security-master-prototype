import {SetupRequest} from './setup-request'
import {SetupRequestStatus} from './setup-request-status'

export class WorkInProgress {
    setupRequests: SetupRequest[];
    statuses: SetupRequestStatus[];
}