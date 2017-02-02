import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let setupRequestStatuses = [
      {id: 1, name: 'Ready For Setup' },
      {id: 2, name: 'Needs Rework' },
      {id: 3, name: 'Setup In Progress' },
      {id: 4, name: 'Ready For QC' },
      {id: 5, name: 'QC In Progress' },
      {id: 6, name: 'Ready For Audit' },
      {id: 7, name: 'Audit In Progress' },
      {id: 8, name: 'Done' }
    ];

    let workQueues = [];
    for (var i=0; i<setupRequestStatuses.length;i++){
      var status = setupRequestStatuses[i];
      var queue = {
        id: status.id, 
        currentStatus: status,
        previousStatus: i > 0 ? setupRequestStatuses[i-1] : null,
        nextStatus: i < (setupRequestStatuses.length-1) ? setupRequestStatuses[i+1] : null
      };
      workQueues.push(queue);
    }

    var reworkStatus = setupRequestStatuses[1];
    //Needs Rework
    workQueues[1].previousStatus = null;
    //Setup In Progress 
    workQueues[2].previousStatus = null; 
    // Ready For QC
    workQueues[3].previousStatus = null;
    // QC In Progress
    workQueues[4].previousStatus = reworkStatus;
    // Ready For Audit
    workQueues[5].previousStatus = null;
    // Audit In Progress
    workQueues[6].previousStatus = reworkStatus;
    // Done
    workQueues[7].previousStatus = null;

    var q = workQueues;
    let workQueueGroups = [
      {id: 1, name: 'Setup', queues: [q[0], q[1], q[2], q[3]]},
      {id: 2, name: 'QC', queues: [q[3], q[4], q[5]]},
      {id: 3, name: 'Audit', queues: [q[5], q[6], q[7]]}
    ];

    let setupRequests = [
      {id: 1, cusip: '123456TY9', statusId: 1, addedDate: new Date()},
      {id: 2, cusip: '98766BH12', statusId: 1, addedDate: new Date()},
      {id: 3, cusip: '72856YT78', statusId: 1, addedDate: new Date()}
    ];

    let workInProgress = {
        groups: workQueueGroups,
        setupRequests: setupRequests        
    };

    return {             
      workInProgress,
      setupRequests      
    };
  }
}