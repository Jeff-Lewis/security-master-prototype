import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let workQueues = [
      {id: 1, index: 1, name: 'Ready For Setup' },
      {id: 2, index: 2, name: 'Setup In Progress' },
      {id: 3, index: 3, name: 'Ready For QC' },
      {id: 4, index: 4, name: 'QC In Progress' },
      {id: 5, index: 5, name: 'Ready For Audit' },
      {id: 6, index: 6, name: 'Audit In Progress' },
      {id: 7, index: 7, name: 'Done' }
    ];

    let workQueueGroups = [
      {id: 1, startIndex: 1, endIndex: 3, name: 'Setup'},
      {id: 2, startIndex: 3, endIndex: 5, name: 'QC'},
      {id: 3, startIndex: 5, endIndex: 7, name: 'Audit'}
    ];

    let setupRequests = [
      {id: 1, cusip: '123456TY9', workQueueId: 1, addedDate: new Date()},
      {id: 2, cusip: '98766BH12', workQueueId: 1, addedDate: new Date()},
      {id: 3, cusip: '72856YT78', workQueueId: 1, addedDate: new Date()}
    ];

    return { 
      workQueues,
      workQueueGroups,
      setupRequests
    };
  }
}