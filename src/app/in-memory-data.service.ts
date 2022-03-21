import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Messi' },
      { id: 2, name: 'Ronaldo' },
      { id: 3, name: 'Bemzema' },
      { id: 4, name: 'Mbappé' },
      { id: 5, name: 'Neymar' },
      { id: 6, name: 'Di brun' },
      { id: 7, name: 'Perdi' },
      { id: 8, name: 'Modriç' },
      { id: 9, name: 'Haland' },
      { id: 10, name: 'Levandowski' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}