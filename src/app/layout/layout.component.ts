import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  /* -------------------------------------------------------------------------- */
  /*                                 constructor                                */
  /* -------------------------------------------------------------------------- */
  constructor(private route: ActivatedRoute, private router: Router) {}

  /* -------------------------------------------------------------------------- */
  /*                                 unsubscribe                                */
  /* -------------------------------------------------------------------------- */
  _destroy$ = new Subject<void>();
  _layout$ = new BehaviorSubject<string>('EMPTY');

  /* -------------------------------------------------------------------------- */
  /*                                  selector                                  */
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                                 life circle                                */
  /* -------------------------------------------------------------------------- */
  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log(data);
      this._layout$.next(data['layout']);
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  /* -------------------------------------------------------------------------- */
  /*                                  Get & Set                                 */
  /* -------------------------------------------------------------------------- */
}
