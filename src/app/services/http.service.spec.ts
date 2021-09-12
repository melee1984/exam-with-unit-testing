import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpService } from './http.service';
// Unit Testing and MockData 
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('HttpService', () => {
  
  let httpTestingController: HttpTestingController;
  let httpService: HttpService
  let dummyTodos: any;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [HttpService],
  }));

  beforeEach(() => {
    // Intialize instance 
    httpService = TestBed.inject(HttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
    // Create dummy data for Todos 
    dummyTodos = [
      {id: 1, task: "Eating start", done_at: ""},
      {id: 2, task: "Eating full", done_at: ""},
      {id: 3, task: "Eating stop", done_at: ""},
    ];

  });
  
  // this will make sure that there are no pending requests
  afterEach(() => {
    httpTestingController.verify();
  });
  
  it('[HttpService] should be created', () => {
    const service: HttpService = TestBed.inject(HttpService);
    expect(service).toBeTruthy();
  });
  
  it('should GET todos from the API via GET Request', () => {
    // This will not be trigger on this point should start when calling the expectOne 
    httpService.get('todo').subscribe((todos: any) => {
      expect(todos.length).toBe(3);
      expect(todos).toEqual(dummyTodos);
    });

    // send out the request 
    const req = httpTestingController.expectOne(environment.apiUrl+'todo');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.method).toBe('GET');
    expect(req.request.responseType).toEqual('json');

    req.flush(dummyTodos);
    // verify that there are no outstading http calls
    httpTestingController.verify();
  });

  it('should POST todo from the API via POST Request', () => {
    
    let field = {
      task: "Eating again",
    }
    httpService.post('todo', field).subscribe((todos: any) => {
      // Nothing from here 
    });

    const req = httpTestingController.expectOne(environment.apiUrl+'todo');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.method).toBe('POST');
    expect(req.request.responseType).toEqual('json')
    // verify that there are no outstading http calls
    httpTestingController.verify();
  });

  it('should UPDATE/PUT todo from the API via PUT Request', () => {

    httpService.put('todo/1').subscribe((todos: any) => {
      // Nothing from here 
    });
    const req = httpTestingController.expectOne(environment.apiUrl+'todo/1');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.method).toBe('PUT');
    expect(req.request.responseType).toEqual('json')
    // verify that there are no outstading http calls
    httpTestingController.verify();
  });

  it('should DELETE todo from the API via DELETE Request', () => {

    httpService.delete('todo/3').subscribe((todos: any) => {
      // Nothing from here   
    });

    const req = httpTestingController.expectOne(environment.apiUrl+'todo/3');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.method).toBe('DELETE');
    expect(req.request.responseType).toEqual('json');

    // verify that there are no outstading http calls
    httpTestingController.verify();
  });

});
