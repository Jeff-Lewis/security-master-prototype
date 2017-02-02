import {WorkQueue} from './work-queue';

export class WorkQueueGroup {
    id: number;
    name: string;
    queues: WorkQueue[];
}