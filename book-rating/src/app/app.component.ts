import { Component, OnInit } from '@angular/core';
import { Observable, of, from, timer, interval } from 'rxjs';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'book-rating';

  ngOnInit() {
    function producer(observer) {
      observer.next('A');
      observer.next('B');

      setTimeout(() => observer.next('C'), 2000);
      setTimeout(() => observer.complete(), 4000);
    }

    const myObserver = {
      next: e => console.log(e),
      error: err => console.log('Fehler:', console.log(err)),
      complete: () => console.log('Fertig')
    };

    const myObservable = new Observable(producer);

    // producer(myObserver)
    // myObservable.subscribe(myObserver);
    /*const sub = myObservable.subscribe(
      e => console.log('Hallo', e),
      err => console.log('Fehler:', console.log(err)),
      () => console.log('Fertig!!')
    );*/

    // setTimeout(() => sub.unsubscribe(), 3000);


    // of(1, 2, 3).subscribe(e => console.log(e));

    // const myArr = [4, 5, 6];
    // from(myArr).subscribe(e => console.log(e));

    // timer(1000).subscribe(e => console.log('Timer', e));
    // interval(1000).subscribe(e => console.log('Interval', e));

  }
}
