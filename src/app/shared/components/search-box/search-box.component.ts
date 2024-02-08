import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';



@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @Output()
  inputValue: EventEmitter<string> = new EventEmitter();

  @ViewChild("input")
  input?: ElementRef<HTMLInputElement>;

  @Input()
  public title: string = "";


  emitirValor(){

    this.inputValue.emit(this.input?.nativeElement.value);
  }
}
