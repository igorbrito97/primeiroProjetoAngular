import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck,
AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() {
    console.log('CONSTRUTOR');
  }

  ngOnInit(): void {
    console.log('ON INIT');
  }

  ngOnChanges() {
    console.log('ON CHANGE');
  }

  ngDoCheck() {
    console.log('DO CHECK');
  }

  ngAfterContentInit() {
    console.log('AFTER CONTENT INIT');
  }

  ngAfterContentChecked() {
    console.log('AFTER CONTENT CHECKED');
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  ngAfterViewChecked() {
    console.log('AFTER VIEW CHECKED');
  }

  ngOnDestroy() {
    console.log('ON DESTROY');
  }

}
