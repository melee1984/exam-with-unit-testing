import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoComponent } from './todo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ TodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should render the App Todo Component', () => {
    const fixture = TestBed.createComponent(TodoComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'App Todo Compontent'`, () => {
    expect(component.title).toBe('app-todo-component');
  });

  it(`Method ValidateInput field.task returning expected message empty when calling the 'Method addRecord'`, () => {
    component.field.task = "";
    component.addRecord();
    expect(component.message).toEqual("The task field is empty");
  });

});
