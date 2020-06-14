import { Subject } from "rxjs";

const searchSubject = new Subject();

export const searchService = {
  sendSearchText: (searchText: string) =>
    searchSubject.next({ searchText: searchText }),
  getSearchText: () => searchSubject.asObservable(),
};
