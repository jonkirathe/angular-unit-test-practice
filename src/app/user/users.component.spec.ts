import {ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {UsersComponent} from './users.component';
import {UserService} from "../user.service";
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {of} from "rxjs";
import {By} from "@angular/platform-browser";

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let http: HttpClient;
  let httpController: HttpTestingController;
  let userService: UserService;
  let createSpy: any;
  let createSpyObj: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpController = TestBed.inject(HttpTestingController);
    http = TestBed.inject(HttpClient);
    userService = TestBed.inject(UserService);
    createSpy = jasmine.createSpy('getName');
    createSpy('JOHN DOE');
    createSpyObj = jasmine.createSpyObj('move', ['jump', 'bounce', 'stop']);

    component.users = [{
      "id": 1,
      "firstName": "Kim",
      "lastName": "Weimann",
      "email": "Kim.Weimann@dummyapis.com",
      "contactNumber": "4341291466",
      "age": 64,
      "dob": "30/08/1958",
      "address": "Address1"
    }];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call dummyData', () => {
    spyOn(component, 'dummyMethod').and.returnValue('JB');
    let result = component.dummyMethod('');
    expect(component.dummyMethod).toHaveBeenCalledTimes(1);
    expect(result).toEqual('JB');
  });

  it('should call private dummyData', () => {
    spyOn<any>(component, 'dummyPrivateMethod').and.returnValue('JB');
    let result = component["dummyPrivateMethod"]('');
    expect(component["dummyPrivateMethod"]).toHaveBeenCalledTimes(1);
    expect(result).toEqual('JB');
  });

  it('should test for ngIf condition', function () {
    component.getUsers();
    fixture.detectChanges();
    const data = fixture.debugElement.query(By.css('#data'));
    const noData = fixture.debugElement.query(By.css('#noData'));
    expect(data).not.toBeNull();
    expect(noData).toBeNull();
  });

  it('should test for ngFor condition', function () {
    component.getUsers();
    fixture.detectChanges();
    const data = fixture.debugElement.query(By.css('.rows'));
    console.info('rows >>>>>>>>>>>>>>>>>>>>>>>>>>', data.nativeElement.innerText)
    expect(data).not.toBeNull();
  });

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
    inject([UserService], (injectService: UserService) => {
      expect(injectService).toBe(userService);
    })
  );

  it('test createSpy', function () {
    expect(createSpy).toBeDefined();
    expect(createSpy).toHaveBeenCalled();
    expect(createSpy).toHaveBeenCalledTimes(1);
  });

  it('test createSpyObj', function () {
    createSpyObj.jump();
    createSpyObj.bounce();
    createSpyObj.stop();
    expect(createSpyObj.jump).toBeDefined();
    expect(createSpyObj.bounce).toHaveBeenCalled();
    expect(createSpyObj.stop).toHaveBeenCalledTimes(1);
  });

  it('should createSpyObj 2', function () {
    let getMe = jasmine.createSpy('Me');
    getMe("I", "am", "a", "spy");
    getMe("I", "am", "a", "spy");
    getMe("I", "am", "a", "spy");
    expect(getMe.and.identity).toEqual('Me');
    expect(getMe.calls.count()).toEqual(3);
  });

  describe('TEST API CALLS', () => {
    let expectedUsers = [{
      "id": 1,
      "firstName": "Kim",
      "lastName": "Weimann",
      "email": "Kim.Weimann@dummyapis.com",
      "contactNumber": "4341291466",
      "age": 61,
      "dob": "30/08/1958",
      "address": "Address1"
    }];
    it(' should call getUsers', () => {
      let getUsers = spyOn(userService, "getUsers").and.returnValue(of([{}]));
      component.ngOnInit();
      fixture.detectChanges();
      expect(getUsers).toHaveBeenCalledTimes(1);
    });
  });
});
