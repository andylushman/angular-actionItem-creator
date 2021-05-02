import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ActionItemsService {
  private users: User[] = [
    Object.freeze({ id: 'u1', name: 'Felix Mennen' }),
    Object.freeze({ id: 'u2', name: 'Robin Roschlau' }),
    Object.freeze({ id: 'u3', name: 'Johannes Niermann' }),
  ];

  private actionItems$ = new BehaviorSubject<ActionItem[]>([
    Object.freeze({
      id: 'ai1',
      title: 'Test Action Item',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugi',
      assignee: this.users[0],
      status: 'open',
      linkedElements: ['Dummy Element'],
    }),
    Object.freeze({
      id: 'ai2',
      title: 'Finished Action Item',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      assignee: this.users[2],
      status: 'done',
      linkedElements: [],
    }),
    Object.freeze({
      id: 'ai3',
      title: 'Discarded Action Item',
      details: "Didn't really think this one through",
      assignee: null,
      status: 'discarded',
      linkedElements: ['Dummy Element 1', 'Dummy Element 2'],
    }),
  ]);

  constructor() {}

  getActionItems(): Observable<ActionItem[]> {
    return randomDelay(this.actionItems$);
  }

  getActionItem(id: string): Observable<ActionItem> {
    return fakeNetworkRequest(
      this.actionItems$.value.find((it) => it.id === id)
    );
  }

  getPossibleAssignees(): Observable<User[]> {
    return fakeNetworkRequest([...this.users]);
  }

  /**
   * @param id The ID of the item to update
   * @param update The details of the action item to update. Any property that is not set will not be updated.
   */
  updateActionItem(
    id: string,
    update: {
      title?: string;
      details?: string;
      assigneeId?: string | null;
    }
  ): Observable<ActionItem> {
    this.updateActionItems(
      this.actionItems.map((item) => {
        if (item.id !== id) {
          return item;
        }
        const updatedActionItem = { ...item };
        if (update.title !== undefined) {
          updatedActionItem.title = update.title;
        }
        if (update.details !== undefined) {
          updatedActionItem.details = update.details;
        }
        if (update.assigneeId !== undefined) {
          updatedActionItem.assignee = this.users.find(
            (it) => it.id === update.assigneeId
          );
        }
        return Object.freeze(updatedActionItem);
      })
    );
    return fakeNetworkRequest(this.actionItems.find((it) => it.id === id));
  }

  deleteActionItem(id: string) {
    console.log(id);

    this.updateActionItems(
      this.actionItems.filter((actionItem) => actionItem.id !== id)
    );
  }

  private get actionItems(): ActionItem[] {
    return [...this.actionItems$.value];
  }

  private updateActionItems(items: ActionItem[]) {
    this.actionItems$.next(items);
  }
}

export interface ActionItem {
  id: string;
  title: string;
  details: string;
  assignee: User | null;
  status: 'open' | 'done' | 'discarded';
  linkedElements: string[];
}

export interface User {
  id: string;
  name: string;
}

function fakeNetworkRequest<T>(result: T): Observable<T> {
  return randomDelay(of(result));
}

function randomDelay<T>(observable: Observable<T>): Observable<T> {
  return observable.pipe(delay(random(500, 2000)));
}

function random(fromIncl: number, toIncl: number): number {
  return Math.round(Math.random() * (toIncl - fromIncl) + fromIncl);
}
