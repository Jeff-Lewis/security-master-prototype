import {SetupRequestStatus} from './setup-request-status';
import {SetupRequest} from './setup-request';

export class WorkQueue {
    id: number;
    currentStatus: SetupRequestStatus;
    nextStatus: SetupRequestStatus;
    previousStatus: SetupRequestStatus;

    requests: SetupRequest[];
}